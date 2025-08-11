import { portoRows } from "@/app/data/porto";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="px-6 flex flex-col flex-1">
      <section>
        <div className="flex gap-3 items-center">
          <div className="w-2 bg-primary self-stretch rounded-full block"></div>
          <h1 className="text-2xl lg:text-4xl font-semibold">Portofolio</h1>
        </div>

        <div className="mt-4 grid md:grid-cols-2 gap-x-6 gap-y-10">
          {portoRows.map((row) => (
            <div key={row.slug}>
              <Link
                href={`/porto/${row.slug}`}
                className="group rounded-lg block max-w-[400px] aspect-[1280/800] overflow-hidden border border-border shadow-sm"
              >
                <Image
                  src={row.img_url}
                  alt="event"
                  width={400}
                  height={400}
                  className="rounded-lg group-hover:scale-105 ease-in duration-300"
                />
              </Link>
              <h2 className="mt-3 text-xl font-medium">{row.name}</h2>
              <div className="flex gap-4 mt-1">
                {row.icons.map((Icon, i) => (
                  <div key={i} className="px-2 py-2 bg-muted rounded-full">
                    <Icon key={i} size={24} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
