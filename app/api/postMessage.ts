import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';


export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
      // creating a new message.
      const { name, message } = req.body
      const result = await prisma.message.create({
          data: {
              name,
              message
          },
      })
      return res.json(result)
  }
}