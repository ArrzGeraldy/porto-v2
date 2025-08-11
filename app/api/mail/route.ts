// app/api/send-email/route.ts
import { mailOptions, transport } from "@/lib/mail-utils";
import { emailValidation } from "@/validation/mail-validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = emailValidation.safeParse(body);
    if (!parsed.success) {
      return Response.json({ error: "Validation failed" }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    const result = await transport.sendMail({
      ...mailOptions,
      subject: "Porto App",
      text: "message",
      html: `<h1>New Message</h1>
              <div>Name: ${name}</div>
              <div>Email: ${email}</div>
              <div>${message}</div>`,
    });
    return Response.json(
      {
        message: "Success send email",
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { error: "Unable to send email this time" },
      { status: 500 }
    );
  }
}
