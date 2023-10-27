// pages/api/getMessages.ts

import { PrismaClient } from '@prisma/client';
import { type NextApiRequest, type NextApiResponse} from "next"

const prisma = new PrismaClient();

// Notice the funciton definiton:
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get all admins using Prisma
    const message = await prisma.message.findMany();

    return res.status(200).json(message);
}
catch (error) {
    return res.status(500).json({ error: 'Failed to get admins' });
}
}