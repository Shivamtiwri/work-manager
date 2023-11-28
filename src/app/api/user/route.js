import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb()

export function GET() {
  const user = [
    {
      name: "SHIVAM",
      phone: "9696599856",
      coures: "java",
    },
    {
      name: "SHIVAM",
      phone: "9696599856",
      coures: "java",
    },
    {
      name: "SHIVAM",
      phone: "9696599856",
      coures: "java",
    },
    {
      name: "SHIVAM",
      phone: "9696599856",
      coures: "java",
    },
    {
      name: "SHIVAM",
      phone: "9696599856",
      coures: "java",
    },
    {
      name: "SHIVAM",
      phone: "9696599856",
      coures: "java",
    },
  ];

  return NextResponse.json(user);
}
export async function POST(request) {

  // const body =request.body
  // console.log(body);

const jsonData =await request.json();
console.log(jsonData);
  return NextResponse.json({
    message:"postin post data"
  })
}
export function DELETE(request) {
  console.log();
  return NextResponse.json({
    message: "delete this ",
  });
}
export function PUT() {}
