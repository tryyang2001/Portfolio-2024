import { NextRequest, NextResponse } from "next/server";
import z, { ZodError } from "zod";
// @ts-ignore - nodemailer has no typescript support
import nodemailer from "nodemailer";

// check if the email is valid
const emailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(2),
});

export async function POST(request: NextRequest, response: NextResponse) {
  // get the request body
  const { name, email, subject, message } = await request.json();

  try {
    emailSchema.parse({
      name,
      email,
      subject,
      message,
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Email contains invalid fields, please try again.",
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email due to backend issue, please try again.",
      },
      {
        status: 500,
      }
    );
  }

  // create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NM_EMAIL,
      pass: process.env.NM_PASSWORD,
    },
    pool: true,
    port: 465,
    secure: true,
    connectionTimeout: 100,
  });

  // create a mailOptions
  const mailOptions = {
    from: process.env.NM_EMAIL,
    to: process.env.RECEIPIENT_EMAIL,
    subject: `(Portfolio) ${subject}`,
    html: `<h3>You have received a new message from your portfolio website</h3><p>From: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  // send email
  try {
    await transporter.sendMail(mailOptions);
  } catch (error: any) {
    console.log(
      process.env.NM_EMAIL,
      process.env.NM_PASSWORD,
      process.env.RECEIPIENT_EMAIL
    );
    console.log(error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email due to backend issue, please try again.",
      },
      {
        status: 500,
      }
    );
  }

  // return a successful response
  return NextResponse.json(
    {
      success: true,
      message: "Email sent successfully!",
    },
    {
      status: 201,
    }
  );
}
