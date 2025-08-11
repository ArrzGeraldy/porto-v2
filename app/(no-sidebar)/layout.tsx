"use client";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

import { usePathname } from "next/navigation";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <div className="flex-1 w-full flex flex-col py-8 lg:flex-row gap-6 relative min-h-screen">
      <div
        className="px-2 py-2 bg-muted rounded-full self-start cursor-pointer"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="size-6 md:size-8 text-primary" />
      </div>
      <Card className="flex-1">{children}</Card>
    </div>
  );
};

export default layout;
