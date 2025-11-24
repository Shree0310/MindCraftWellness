'use server'
 
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
 
export async function createPost(req: NextRequest, res: NextResponse) {
  // Invalidate the cache for the /posts route
  revalidatePath('/Blog')
  
}
