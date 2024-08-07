import {NextResponse} from 'next/server'

// get single note
export async function GET(request,{params}) {
    console.log(params.note_id)
    return NextResponse.json({message: 'Get Single Note'},{status: 200});
}

// put single note
export async function PUT(request,{params}) {
    console.log(params.note_id)
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.log(data)
    return NextResponse.json({message: 'Put Single Note'})
}