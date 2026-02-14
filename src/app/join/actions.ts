'use server'

import { revalidatePath } from 'next/cache'
import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getDb } from '@/utils/db'

export async function submitJoinRequest(formData: FormData) {
    const { userId } = await auth()
    if (!userId) {
        redirect('/sign-in')
    }

    const user = await currentUser()
    const sql = getDb()

    const fullName = formData.get('full_name') as string
    const school = formData.get('school') as string
    const classYear = formData.get('class_year') as string
    const industry = formData.get('industry') as string
    const company = formData.get('company') as string
    const bio = formData.get('bio') as string
    const linkedinUrl = formData.get('linkedin_url') as string
    const email = user?.emailAddresses?.[0]?.emailAddress || ''

    await sql`
        INSERT INTO join_requests (clerk_user_id, email, full_name, class_year, school, industry, company, bio, linkedin_url)
        VALUES (${userId}, ${email}, ${fullName}, ${classYear}, ${school}, ${industry}, ${company}, ${bio}, ${linkedinUrl})
        ON CONFLICT (clerk_user_id) DO NOTHING
    `

    revalidatePath('/join')
    redirect('/join')
}
