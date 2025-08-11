"use client";
import SideBar from "@/components/SideBar";
import { Card } from "@/components/ui/card";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex-1 w-full flex flex-col py-8 lg:flex-row gap-6 relative min-h-screen">
      <SideBar />
      <Card className="flex-1">{children}</Card>
    </div>
  );
};

export default layout;
