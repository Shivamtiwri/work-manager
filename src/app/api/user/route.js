import { NextResponse } from "next/server";

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
export function POST() {}
export function DELETE(request) {
  console.log();
  return NextResponse.json({
    message: "delete this ",
  });
}
export function PUT() {}
