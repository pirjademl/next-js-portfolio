import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, query } = await req.json();
  console.log(firstName, lastName, email, query);
  await resend.emails
    .send({
      from: "Acme <onboarding@resend.dev>",
      to: "pirjademag@gmail.com",
      subject: "contact form query",
      text: JSON.stringify({ firstName, lastName, email, query }),
    })
    .catch((error) => console.log(error));

  return NextResponse.json({
    status: "ok",
  });
}
