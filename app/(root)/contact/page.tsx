import FormSendEmail from "@/components/FormSendEmail";
import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="px-6 flex flex-col flex-1">
      <section>
        <div className="flex gap-3 items-center">
          <div className="w-2 bg-primary self-stretch rounded-full block"></div>
          <h1 className="text-2xl lg:text-4xl font-semibold">Contact</h1>
        </div>

        <div className="flex flex-col gap-4 mt-8  ">
          <div className="flex gap-2 items-center">
            <div className="bg-muted rounded-lg px-2 py-2 text-primary">
              <Mail className="size-6" />
            </div>
            <span>gerrygeraldy303@gmail.com</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-muted rounded-lg px-2 py-2 text-primary">
              <Phone className="size-6" />
            </div>
            <span>+62-8888-4065-99</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-muted rounded-lg px-2 py-2 text-primary">
              <Instagram className="size-6" />
            </div>
            <Link
              target="_blank"
              href={"https://www.instagram.com/gerry.graldy/"}
              className="underline "
            >
              instagram.com/gerry.graldy
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 w-full">
        <div className="flex gap-3 items-center">
          <div className="w-2 bg-primary self-stretch rounded-full block"></div>
          <h1 className="text-2xl lg:text-4xl font-semibold">Send Me Email</h1>
        </div>

        <FormSendEmail />
      </section>
    </div>
  );
};

export default page;
