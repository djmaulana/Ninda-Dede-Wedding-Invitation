// pages/api/add-pet.ts

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
//   const { name, message} = await request.json()
//   console.log(name, message)
  const formData = new URLSearchParams(await request.text());
  const name = formData.get('name');
  const message = formData.get('message');

  try {
    if (!name || !message) throw new Error('Pet and owner names required');
    await sql`INSERT INTO MessageTable (Name, Message) VALUES (${name}, ${message});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.redirect('http://localhost:3000/invitation', { status: 302 });
}