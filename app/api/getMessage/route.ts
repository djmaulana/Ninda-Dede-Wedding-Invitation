import { createClient } from '@vercel/postgres';
 
async function queryPosts() {
  const client = createClient();
  await client.connect();
 
  try {
    const likes = 100;
    const { rows, fields } =
      await client.sql`SELECT * FROM pets`;
  } finally {
    await client.end();
  }
}