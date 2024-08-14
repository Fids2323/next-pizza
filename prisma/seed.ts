import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";

async function up() {
     await prisma.user.createMany({
        data: [
            {
               fullName: 'User Test',
               email:'user@test.ru',
               password: hashSync('1111',10),
               verified: new Date(),
               role: 'USER' 
            },
            {
                fullName: 'Admin Admin',
                email:'adm@test.ru',
                password: hashSync('1111',10),
                verified: new Date(),
                role: "ADMIN"
            }
        ]
     })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
}


async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.log(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async(e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })