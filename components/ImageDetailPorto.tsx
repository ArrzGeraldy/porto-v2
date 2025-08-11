"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ImageDetailPorto = ({
  img_url,
  galery,
}: {
  img_url: string;
  galery: string[];
}) => {
  const [mainImage, setMainImage] = useState(img_url);
  return (
    <div className="max-w-[450px]">
      <div className="max-w-[450px] rounded-lg overflow-hidden border">
        <Image src={mainImage} alt="main-image" width={450} height={450} />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {galery.map((pic, i) => (
          <div
            onClick={() => setMainImage(pic)}
            key={i}
            className={cn(
              "cursor-pointer rounded-md w-full border-2 ring ring-border overflow-hidden",
              mainImage === pic && "ring-2 ring-primary"
            )}
          >
            <Image
              src={pic}
              alt="..."
              width={100}
              height={100}
              className="object-cover h-full w-full"
            />
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default ImageDetailPorto;
