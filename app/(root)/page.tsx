"use client";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const certificationImgs = [
  "/certification/go-cert.jpg",
  "/certification/eduwork.png",
  "/certification/js-basic.png",
  "/certification/python-data-visual.png",
];

export default function page() {
  const [targetImage, setTargetImage] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = (img: string) => {
    setTargetImage(img);
    setOpen(true);
  };
  return (
    <div className="px-6 flex flex-col flex-1">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl bg-card">
          <DialogHeader hidden>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <Image
            src={targetImage}
            alt="..."
            width={500}
            className="w-full h-full block px-4 py-2 rounded-lg"
            height={500}
            priority
          />
        </DialogContent>
      </Dialog>
      <section>
        <div className="flex gap-3 items-center">
          <div className="w-2 bg-primary self-stretch rounded-full block"></div>
          <h1 className="text-2xl lg:text-4xl font-semibold">About Me</h1>
        </div>

        <div className="text-sm lg:text-base mt-4 text-accent-foreground/80">
          <span className="text-2xl text-[#F2613F]">Hi</span>, saya adalah
          seorang mahasiswa Teknik Informatika yang memiliki keahlian dalam
          pengembangan aplikasi web. Di sisi server, saya menggunakan{" "}
          <span className="text-[#F2613F]">Nodejs</span> atau{" "}
          <span className="text-[#F2613F]">Go</span>, sementara di sisi klien,
          saya mengandalkan <span className="text-[#F2613F]">React.js</span>{" "}
          untuk menciptakan antarmuka pengguna yang dinamis dan responsif.
          Selain itu, saya senang mempelajari topik lintas bidang, seperti
          graphic programming menggunakan{" "}
          <span className="text-[#F2613F]">C++</span> untuk memperluas wawasan
          dan keterampilan saya di dunia teknologi.
        </div>
      </section>

      <section className="mt-16">
        <div className="flex gap-3 items-center">
          <div className="w-2 bg-primary self-stretch rounded-full block"></div>
          <h1 className="text-2xl lg:text-4xl font-semibold">Education</h1>
        </div>

        <div className=" mt-4">
          {/* rows */}
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="w-full px-4 py-2.5 rounded-md bg-background flex gap-2 items-center ">
              <div className="bg-muted w-fit px-3 py-1.5 rounded-md text-primary">
                <GraduationCap className="size-10" />
              </div>

              <div className="flex flex-col ">
                <div className=" font-semibold">TUNAS DHARMA</div>
                <div className="text-sm mt-1">2017-2024</div>
                <div className="text-xs text-primary font-medium">SMA</div>
              </div>
            </div>

            <div className="w-full px-4 py-2.5 rounded-md bg-background flex gap-2 items-center">
              <div className="bg-muted w-fit px-3 py-1.5 rounded-md text-primary">
                <GraduationCap className="size-10" />
              </div>

              <div className="flex flex-col ">
                <h4 className=" font-semibold">EDUWORK MERN</h4>
                <div className="text-sm mt-1">2024</div>
                <div className="text-xs text-primary font-medium">Bootcamp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="flex gap-3 items-center">
          <div className="w-2 bg-primary self-stretch rounded-full block"></div>
          <h1 className="text-2xl lg:text-4xl font-semibold">Certifications</h1>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-x-6 gap-y-8 items-center ">
          {certificationImgs.map((cerImg, i) => (
            <div
              key={i}
              className="group lg:max-w-[27rem] w-full overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => handleOpen(cerImg)}
            >
              <Image
                src={cerImg}
                width={300}
                height={300}
                priority
                alt="..."
                unoptimized={true}
                className="lg:w-[27rem] w-full  h-auto  object-contain group-hover:scale-102 duration-200 ease-in"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
