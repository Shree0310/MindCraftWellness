'use server'

import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log('@@ body:', body)
  const { _type, slug } = body
  console.log('@@ _type:', _type)
  console.log('@@ slug:', slug)

  if (_type === 'post') {
    revalidatePath(`/posts`)

    if (slug) {
      revalidatePath(`/posts/${slug.current}`)
    }

    return NextResponse.json({ message: 'Cache invalidated' }, { status: 200 })
  }

  return NextResponse.json({ message: 'Invalid type' }, { status: 200 })
}
