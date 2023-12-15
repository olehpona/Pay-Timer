import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.auth.getSession()
    if (data.session && !error){
        return Response.json({ data: true })
    } else {
        return Response.json({ data: false })
    }
    

}