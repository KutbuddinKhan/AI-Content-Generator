import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("User Not Authenticated", { status: 401 });
    }

    const { title, description, templateUsed } = await req.json();

    const createNewDoc = await db.aIOutput.create({
        data: {
          userId: userId,
          title: title,
          description: description,
          templatedUsed: templateUsed, // Ensure this field is properly populated
        },
      });

    revalidatePath("/");

    return NextResponse.json(createNewDoc, { status: 200 });
  } catch (error) {
    console.error("Error in POST request:", error);
    return new NextResponse("POST, NEW DOC ERROR", { status: 500 });
  }
}
