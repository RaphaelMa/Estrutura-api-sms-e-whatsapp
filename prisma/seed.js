import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
    await prisma.user.create({
        data:{
            name: 'Raphael Mariano',
            phone: '5511949054783',
            content: 'Raphael Aqui Testando API DE SMS PARA HEINZ! ;)'
        }
    })
}

main().catch((e) => console.log(e))