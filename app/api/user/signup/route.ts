import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request){
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
    const res = await request.json()
    console.log(res);
    const { data, error } = await supabase.auth.signUp({
        email: res.email,
        password: res.password,
        options:{
            data: {
                name: res.name
            }
        }
    })
    if (error){
        return Response.json({ data: data, err: error })
    } else {
        return Response.json({ data: data })
    }
    
}