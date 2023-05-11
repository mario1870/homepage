
import { NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'


export async function GET(){

  const prisma = new PrismaClient()

  const newBlogpost = await prisma.blogpost.create({
    data: {
      title: 'New Blog Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      published: true,
      authorId: 1,
    },
  });

  console.log('Created new blog post:', newBlogpost);
}

createBlogpost()
  .catch((error) => console.error(error))
  .finally(async () => await prisma.$disconnect());


  return NextResponse.json(data)
}



