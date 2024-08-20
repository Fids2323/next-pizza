import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: NextRequest) {
    const query =req.nextUrl.searchParams.get('query') || '';
    const products = await prisma.product.findMany({
        where: {
            name:{
                contains: query,
                mode:'insensitive', //register
            }
        },
        take: 5,  //count
    })



    return NextResponse.json(products)
}