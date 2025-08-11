"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { label: "About", href: "/" },
  { label: "Portofolio", href: "/porto" },
  { label: "Skill", href: "/skill" },
  { label: "Contact", href: "/contact" },
];

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <div className="flex-1 w-full flex flex-col py-8 lg:flex-row gap-6 relative min-h-screen">
      <aside className="w-full lg:w-72 lg:sticky lg:top-4 self-start">
        <Card className="px-4 overflow-visible gap-0">
          <div className="w-full flex justify-center">
            {/* image */}
            <div className="w-24 h-24 bg-primary rounded-full overflow-hidden">
              <Image
                width={100}
                height={100}
                src={"/img/profile-web.jpg"}
                alt="profile-image"
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>
          </div>
          <h1 className="text-2xl text-center font-bold mt-2">Gerry Geraldy</h1>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            download
            className="px-4 py-2 mt-4 bg-primary rounded-md w-fit self-center text-sm hover:bg-primary/80 transition-all flex items-center gap-2 font-medium"
            href={"/gerry-resume.pdf"}
          >
            <Download className="size-5" />
            Download CV
          </Link>

          <ul className="flex lg:flex-col gap-2 justify-center mt-6">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  className={cn(
                    "block   font-medium text-sm lg:text-base  py-2 px-4 rounded-md transition-all",
                    l.href === pathname
                      ? "bg-muted text-primary"
                      : "hover:bg-muted"
                  )}
                  href={l.href}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </aside>
      <Card className="flex-1">{children}</Card>
    </div>
  );
};

export default layout;
