'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { getDb } from '@/utils/db'

export async function updateProfile(formData: FormData) {
    const { userId } = await auth()

    if (!userId) {
        redirect('/sign-in')
    }

    const sql = getDb()

    const fullName = formData.get('full_name') as string | null
    const classYear = formData.get('class_year') as string | null
    const school = formData.get('school') as string | null
    const industry = formData.get('industry') as string | null
    const company = formData.get('company') as string | null
    const bio = formData.get('bio') as string | null
    const linkedinUrl = formData.get('linkedin_url') as string | null
    const updatedAt = new Date().toISOString()

    try {
        await sql`
            UPDATE profiles SET
                full_name = ${fullName}, class_year = ${classYear}, school = ${school},
                industry = ${industry}, company = ${company}, bio = ${bio},
                linkedin_url = ${linkedinUrl}, updated_at = ${updatedAt}
            WHERE clerk_user_id = ${userId}
        `
    } catch (error) {
        console.error('Profile update error:', error)
        throw new Error('Failed to update profile. Please try again.')
    }

    revalidatePath('/profile')
}
