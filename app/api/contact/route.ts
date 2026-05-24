




import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

/* ================= SANITIZE ================= */

const sanitize = (
  value: string
) => {
  return value
    .replace(/<[^>]*>?/gm, "")
    .replace(
      /(https?:\/\/|www\.|<script|<\/script>)/gi,
      ""
    )
    .replace(
      /[<>$`{}[\]\\]/g,
      ""
    )
    .trim();
};

/* ================= VALIDATORS ================= */

const isValidEmail = (
  email: string
) => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
    email
  );
};

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    /* ================= SANITIZE ================= */

    const name = sanitize(
      body.name || ""
    );

    const organization =
      sanitize(
        body.organization || ""
      );

    const email = sanitize(
      body.email || ""
    );

    const source = sanitize(
      body.source || ""
    );

    const budget = sanitize(
      body.budget || ""
    );

    const message = sanitize(
      body.message || ""
    );

    /* ================= VALIDATION ================= */

    if (
      !name ||
      !organization ||
      !email ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Missing required fields",
        },
        { status: 400 }
      );
    }

    if (name.length < 3) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid name",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid email",
        },
        { status: 400 }
      );
    }

    if (
      message.length < 20 ||
      message.length > 1000
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Message length invalid",
        },
        { status: 400 }
      );
    }

    /* ================= SEND EMAIL ================= */

    await resend.emails.send({
      from:
        "Portfolio Contact <onboarding@resend.dev>",

      to: [
        "chinmayakumardas2000@gmail.com",
      ],

      replyTo: email,

      subject: `New Inquiry — ${name}`,

      html: `
        <div
          style="
            font-family:Arial,sans-serif;
            color:#111;
            line-height:1.7;
            font-size:15px;
            max-width:600px;
            margin:auto;
          "
        >
          <h2
            style="
              margin-bottom:24px;
              color:#0059df;
            "
          >
            New Contact Form Submission
          </h2>

          <table
            style="
              width:100%;
              border-collapse:collapse;
            "
          >
            <tr>
              <td
                style="
                  padding:10px 0;
                  font-weight:600;
                  width:180px;
                "
              >
                Name
              </td>

              <td>
                ${name}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding:10px 0;
                  font-weight:600;
                "
              >
                Organization
              </td>

              <td>
                ${organization}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding:10px 0;
                  font-weight:600;
                "
              >
                Email
              </td>

              <td>
                ${email}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding:10px 0;
                  font-weight:600;
                "
              >
                Source
              </td>

              <td>
                ${
                  source ||
                  "Not provided"
                }
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding:10px 0;
                  font-weight:600;
                "
              >
                Budget
              </td>

              <td>
                ${
                  budget ||
                  "Not provided"
                }
              </td>
            </tr>
          </table>

          <div
            style="
              margin-top:32px;
            "
          >
            <p
              style="
                font-weight:600;
                margin-bottom:12px;
              "
            >
              Message
            </p>

            <div
              style="
                background:#f5f5f5;
                padding:18px;
                border-radius:8px;
                white-space:pre-wrap;
              "
            >
              ${message}
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Email sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "CONTACT_API_ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}