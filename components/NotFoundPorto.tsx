"use client";
import { Ban } from "lucide-react";
import { Button } from "./ui/button";

const NotFoundPorto = ({ slug }: { slug: string }) => {
  return (
    <div className="w-full h-full flex items-center justify-center  flex-col">
      <Ban className="size-11 text-primary" />
      <h2 className="text-2xl font-semibold mt-2">Porto Not Found</h2>
      <p className="mt-2">
        We couldn’t find a portfolio with slug:{" "}
        <span className="font-medium ">{slug}</span>
      </p>

      <Button className="mt-4" onClick={() => window.history.back()}>
        {" "}
        Go Back
      </Button>
    </div>
  );
};

export default NotFoundPorto;
