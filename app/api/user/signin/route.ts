import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
    const res = await request.json()
    console.log(res);
    const { data, error } = await supabase.auth.signInWithPassword({
        email: res.email,
        password: res.email,
    })
    if (error) {
        return Response.json({ err: error })
    } else {
        return Response.json({ data: data })
    }

}