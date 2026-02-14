'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { getDb } from '@/utils/db'

async function requireAuth() {
    const { userId } = await auth()
    if (!userId) {
        redirect('/sign-in')
    }
    return userId
}

export async function deleteProfile(formData: FormData) {
    await requireAuth()

    const id = formData.get('id') as string
    if (!id) throw new Error('Profile ID is required')

    const sql = getDb()
    await sql`DELETE FROM profiles WHERE id = ${id}`

    revalidatePath('/members/admin')
    revalidatePath('/members/directory')
}

export async function approveJoinRequest(formData: FormData) {
    await requireAuth()

    const requestId = formData.get('request_id') as string
    if (!requestId) throw new Error('Request ID is required')

    const sql = getDb()

    // Get the join request
    const rows = await sql`SELECT * FROM join_requests WHERE id = ${requestId} AND status = 'pending' LIMIT 1`
    const request = rows[0]
    if (!request) throw new Error('Request not found or already processed')

    // Create profile from request data
    await sql`
        INSERT INTO profiles (clerk_user_id, full_name, class_year, school, industry, company, bio, linkedin_url)
        VALUES (${request.clerk_user_id}, ${request.full_name}, ${request.class_year}, ${request.school}, ${request.industry}, ${request.company}, ${request.bio}, ${request.linkedin_url})
        ON CONFLICT (clerk_user_id) DO NOTHING
    `

    // Mark request as approved
    await sql`UPDATE join_requests SET status = 'approved', reviewed_at = NOW() WHERE id = ${requestId}`

    revalidatePath('/members/admin')
    revalidatePath('/members/directory')
}

export async function rejectJoinRequest(formData: FormData) {
    await requireAuth()

    const requestId = formData.get('request_id') as string
    if (!requestId) throw new Error('Request ID is required')

    const sql = getDb()
    await sql`UPDATE join_requests SET status = 'rejected', reviewed_at = NOW() WHERE id = ${requestId}`

    revalidatePath('/members/admin')
}

export async function editProfile(id: string, formData: FormData) {
    await requireAuth()

    if (!id) throw new Error('Profile ID is required')

    const sql = getDb()

    const fullName = formData.get('full_name') as string | null
    const classYear = formData.get('class_year') as string | null
    const school = formData.get('school') as string | null
    const industry = formData.get('industry') as string | null
    const company = formData.get('company') as string | null
    const bio = formData.get('bio') as string | null
    const linkedinUrl = formData.get('linkedin_url') as string | null
    const updatedAt = new Date().toISOString()

    await sql`
        UPDATE profiles SET
            full_name = ${fullName}, class_year = ${classYear}, school = ${school},
            industry = ${industry}, company = ${company}, bio = ${bio},
            linkedin_url = ${linkedinUrl}, updated_at = ${updatedAt}
        WHERE id = ${id}
    `

    revalidatePath('/members/admin')
    revalidatePath('/members/directory')
    redirect('/members/admin')
}
