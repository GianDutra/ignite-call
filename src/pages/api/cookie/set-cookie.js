import { setCookie } from 'nookies'
import { prisma } from '../../lib/prisma'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end() // Método não permitido
  }

  const { username, name } = req.body

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
  setCookie({ res }, '@ignite-call/user-id', user.id, {
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    path: '/',
  })

  return res.status(201).json(user)
}
