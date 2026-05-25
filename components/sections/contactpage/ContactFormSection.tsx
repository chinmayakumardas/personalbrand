



"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormDataType = {
  name: string;
  organization: string;
  email: string;
  source: string;
  budget: string;
  message: string;
};

export default function ContactFormSection() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] =
    useState<FormDataType>({
      name: "",
      organization: "",
      email: "",
      source: "",
      budget: "",
      message: "",
    });

  /* ================= SANITIZE ================= */

  const sanitizeInput = (
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
      .trimStart();
  };

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (
    field: keyof FormDataType,
    value: string
  ) => {
    const sanitized =
      sanitizeInput(value);

    setFormData((prev) => ({
      ...prev,
      [field]: sanitized,
    }));
  };

  /* ================= VALIDATION ================= */

  const nameValid =
    formData.name.trim().length >= 3 &&
    /^[a-zA-Z\s.'-]+$/.test(
      formData.name
    );

  const organizationValid =
    formData.organization.trim()
      .length >= 2;

  const emailValid =
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      formData.email
    ) &&
    !/(https?:\/\/|www\.)/i.test(
      formData.email
    );

  const messageValid =
    formData.message.trim()
      .length >= 20 &&
    formData.message.trim()
      .length <= 1000 &&
    !/(https?:\/\/|www\.|<script)/i.test(
      formData.message
    );

  const isFormValid =
    nameValid &&
    organizationValid &&
    emailValid &&
    messageValid;

  /* ================= SUBMIT ================= */

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error(
        "Please fill all required fields correctly."
      );

      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: sanitizeInput(
          formData.name
        ),

        organization:
          sanitizeInput(
            formData.organization
          ),

        email: sanitizeInput(
          formData.email
        ),

        source: sanitizeInput(
          formData.source
        ),

        budget: sanitizeInput(
          formData.budget
        ),

        message: sanitizeInput(
          formData.message
        ),
      };

      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            payload
          ),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Something went wrong"
        );
      }

      toast.success(
        "Message sent successfully!"
      );

      setFormData({
        name: "",
        organization: "",
        email: "",
        source: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to send message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-background ">
      <div
        className="
          relative isolate overflow-hidden
          min-h-[calc(100vh-2rem)]
          w-full rounded-[12px]
        "
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(80,160,255,0.16) 0%,
              transparent 40%
            ),

            radial-gradient(
              circle at top,
              rgba(0,119,255,0.12) 0%,
              transparent 45%
            ),

            linear-gradient(
              180deg,
              #0e71bd 0%,
              #0059df 18%,
              #0047b3 38%,
              #001a4d 58%,
              #000814 78%,
              #000000 100%
            )
          `,
        }}
      >
        {/* glow */}
        <div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2 z-0
            h-[360px] w-[360px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-blue-400/10
            blur-[120px]
          "
        />

        {/* vignette */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            grid min-h-[calc(100vh-2rem)]
            grid-cols-1
            gap-8
            
            
            pb-4

              px-5
            py-7
            sm:px-7
            sm:py-8
            md:px-9
            md:py-10
            lg:px-12
            lg:py-12

            lg:grid-cols-2
          "
        >
          {/* LEFT */}
          <div className="flex flex-col justify-start   mt-20">
            <h1
              className="
                text-[38px]
                font-black
                uppercase
                leading-[0.88]
                tracking-[0.03em]
                text-white

                sm:text-[48px]
                lg:text-[72px]
              "
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
            >
              LET&apos;S BUILD
            </h1>

            <p
              className="
                mt-5
                max-w-[540px]

                text-[13px]
                leading-[1.7]
                text-blue-100/85

                sm:text-[14px]
                lg:text-[16px]
              "
            >
              Whether it&apos;s to discuss
              a project, explore my
                services, or collaborate
                together, reach out and start
                the conversation.
              
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-start justify-start   mt-20">
            <div
              data-lenis-prevent
              className="
                relative z-50
                w-full

                rounded-[10px]
                border border-white/10
                bg-black/70

                p-4

                shadow-2xl
                backdrop-blur-md
              "
            >
              {/* TOP */}
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-[16px] font-medium text-white">
                  Contact Us
                </h2>

                <div className="scale-[0.82] text-white/70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58"
                    height="28"
                    viewBox="0 0 58 28"
                    fill="none"
                  >
                    <ellipse
                      cx="29"
                      cy="14"
                      rx="27"
                      ry="12"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <path
                      d="M2 14H56"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <path
                      d="M29 2C34 5 37 9 37 14C37 19 34 23 29 26"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <path
                      d="M29 2C24 5 21 9 21 14C21 19 24 23 29 26"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                </div>
              </div>

              {/* FORM */}
              <form
                data-lenis-prevent
                onSubmit={handleSubmit}
                className="space-y-2.5"
              >
                {/* row */}
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <Input
                    type="text"
                    value={formData.name}
                    maxLength={60}
                    onChange={(e) =>
                      handleChange(
                        "name",
                        e.target.value
                      )
                    }
                    placeholder="Name*"
                    className="
                      h-11
                      rounded-none
                      border-none
                      bg-black
                      px-3
                      text-[12px]
                      text-white
                      placeholder:text-[#6b7280]

                      focus-visible:ring-0
                      focus-visible:ring-offset-0
                      focus:outline-none

                      transition-all
                    "
                  />

                  <Input
                    type="text"
                    value={
                      formData.organization
                    }
                    maxLength={80}
                    onChange={(e) =>
                      handleChange(
                        "organization",
                        e.target.value
                      )
                    }
                    placeholder="Organization*"
                    className="
                      h-11
                      rounded-none
                      border-none
                      bg-black
                      px-3
                      text-[12px]
                      text-white
                      placeholder:text-[#6b7280]

                      focus-visible:ring-0
                      focus-visible:ring-offset-0
                      focus:outline-none

                      transition-all
                    "
                  />
                </div>

                <Input
                  type="email"
                  value={formData.email}
                  maxLength={120}
                  onChange={(e) =>
                    handleChange(
                      "email",
                      e.target.value
                    )
                  }
                  placeholder="Email*"
                  className="
                    h-11
                    rounded-none
                    border-none
                    bg-black
                    px-3
                    text-[12px]
                    text-white
                    placeholder:text-[#6b7280]

                    focus-visible:ring-0
                    focus-visible:ring-offset-0
                    focus:outline-none

                    transition-all
                  "
                />

                <Input
                  value={formData.source}
                  maxLength={120}
                  onChange={(e) =>
                    handleChange(
                      "source",
                      e.target.value
                    )
                  }
                  placeholder="How did you hear about us?"
                  className="
                    h-11
                    rounded-none
                    border-none
                    bg-black
                    px-3
                    text-[12px]
                    text-white
                    placeholder:text-[#6b7280]

                    focus-visible:ring-0
                    focus-visible:ring-offset-0
                    focus:outline-none

                    transition-all
                  "
                />

                <Input
                  value={formData.budget}
                  maxLength={80}
                  onChange={(e) =>
                    handleChange(
                      "budget",
                      e.target.value
                    )
                  }
                  placeholder="$ Estimated Budget?"
                  className="
                    h-11
                    rounded-none
                    border-none
                    bg-black
                    px-3
                    text-[12px]
                    text-white
                    placeholder:text-[#6b7280]

                    focus-visible:ring-0
                    focus-visible:ring-offset-0
                    focus:outline-none

                    transition-all
                  "
                />

                <Textarea
                  rows={5}
                  value={formData.message}
                  maxLength={1000}
                  onChange={(e) =>
                    handleChange(
                      "message",
                      e.target.value
                    )
                  }
                  placeholder="Message*"
                  className="
                    min-h-[140px]
                    resize-none
                    rounded-none
                    border-none
                    bg-black
                    px-3
                    py-3
                    text-[12px]
                    leading-[1.7]
                    text-white
                    placeholder:text-[#6b7280]

                    focus-visible:ring-0
                    focus-visible:ring-offset-0
                    focus:outline-none

                    transition-all
                  "
                />

                <Button
                  type="submit"
                  disabled={
                    !isFormValid ||
                    loading
                  }
                  className="
                    h-11
                    w-full
                    rounded-none

                    bg-[#dbe4ec]
                    text-[12px]
                    font-medium
                    text-black

                    transition-all

                    hover:bg-[#cfd8e3]

                    disabled:pointer-events-none
                    disabled:opacity-50
                  "
                >
                  {loading
                    ? "Sending..."
                    : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}