import { portoRows } from "@/app/data/porto";
import ImageDetailPorto from "@/components/ImageDetailPorto";
import NotFoundPorto from "@/components/NotFoundPorto";
import { Globe, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const [porto] = portoRows.filter((p) => p.slug === slug);

  if (!porto) {
    return <NotFoundPorto slug={slug} />;
  }

  return (
    <div className="px-6 flex flex-col flex-1">
      <section className="flex flex-col lg:flex-row gap-4">
        {/* image */}
        <ImageDetailPorto galery={porto.galery} img_url={porto.img_url} />

        <div>
          <div className="text-2xl lg:text-3xl font-semibold">{porto.name}</div>
          <div className="w-16 h-2 bg-primary rounded-full mt-1"></div>

          <div className="mt-4 space-y-2">
            {porto.demo && (
              <div className="flex items-center gap-1 md:text-sm text-xs">
                <Globe className="size-4" />{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 underline "
                  href={porto.demo}
                >
                  {porto.demo}
                </Link>
              </div>
            )}

            {porto.repo.map((rp, i) => (
              <div
                key={i}
                className="flex items-center gap-1 md:text-sm text-xs"
              >
                <LinkIcon className="size-4" />{" "}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 underline"
                  href={rp}
                >
                  {rp}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            {porto.icons.map((Icon, i) => (
              <div key={i} className="px-2 py-2 bg-muted rounded-full">
                <Icon key={i} size={28} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex gap-3 items-center">
          <div className="w-2 bg-primary self-stretch rounded-full block"></div>
          <h1 className="text-2xl lg:text-3xl font-semibold">Description</h1>
        </div>
        <p className="mt-4 lg:text-base text-sm">{porto.description}</p>
      </section>
    </div>
  );
};

export default page;
