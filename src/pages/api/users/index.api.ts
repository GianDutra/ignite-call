import { NextApiRequest, NextApiResponse } from 'next'
import { setCookie } from 'nookies'
import { prisma } from '../../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end() // Método não permitido
  }

  const { name, username } = req.body

  try {
    const userExists = await prisma.user.findUnique({
      where: {
        username,
      },
    })

    if (userExists) {
      return res.status(400).json({
        message: 'Username already taken.',
      })
    }

    const user = await prisma.user.create({
      data: {
        name,
        username,
      },
    })

    // Definir o cookie usando nookies
    setCookie({ res }, '@ignite-call/user-id', user.id.toString(), {
      maxAge: 60 * 60 * 24 * 7, // 7 dias
      path: '/',
    })

    return res.status(201).json(user)
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}
