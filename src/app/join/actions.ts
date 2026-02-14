'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getDb } from '@/utils/db'

export async function submitJoinRequest(formData: FormData) {
    const sql = getDb()

    const fullName = formData.get('full_name') as string
    const email = formData.get('email') as string
    const school = formData.get('school') as string
    const classYear = formData.get('class_year') as string
    const industry = formData.get('industry') as string
    const company = formData.get('company') as string
    const bio = formData.get('bio') as string
    const linkedinUrl = formData.get('linkedin_url') as string

    if (!email) throw new Error('Email is required')
    if (!fullName) throw new Error('Full name is required')

    await sql`
        INSERT INTO join_requests (email, full_name, class_year, school, industry, company, bio, linkedin_url)
        VALUES (${email}, ${fullName}, ${classYear}, ${school}, ${industry}, ${company}, ${bio}, ${linkedinUrl})
        ON CONFLICT (email) DO NOTHING
    `

    revalidatePath('/join')
    redirect('/join/submitted')
}
