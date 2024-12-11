import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password, role } = body

  if (!email || !password || !role) {
    return { status: 400, message: 'Thiếu dữ liệu' }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, role }
    })
    return { status: 201, message: 'Đăng ký thành công', user }
  } catch (error) {
    return { status: 500, message: 'Lỗi server' }
  }
})
