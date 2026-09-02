import { notFound } from "next/navigation";
import Link from "next/link";
import { externalBpDocs } from "@/data/bp-external-docs";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return externalBpDocs.map((d) => ({ id: d.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const doc = externalBpDocs.find((d) => d.id === id);
  if (!doc) return { title: "Not Found" };
  return {
    title: `${doc.title} — AWP Business Processes`,
    description: `${doc.module} business blueprint: ${doc.title}`,
  };
}

export default async function BpDocPage({ params }: PageProps) {
  const { id } = await params;
  const doc = externalBpDocs.find((d) => d.id === id);
  if (!doc) notFound();

  const previewUrl = `https://drive.google.com/file/d/${id}/preview`;

  return (
    <div className="min-h-screen bg-[#F7F5F0] flex flex-col">
      {/* Top nav */}
      <header className="bg-white border-b border-[#E4DFD8] px-4 py-3 flex items-center gap-3 shrink-0">
        <Link
          href="/hub?tab=business-processes"
          className="text-sm text-[#4E7862] hover:text-[#1C3A2B] transition-colors flex items-center gap-1"
        >
          ← Business Processes
        </Link>
        <span className="text-[#D9D4C8]">|</span>
        <span
          className="text-[9px] font-semibold px-2 py-0.5 rounded"
          style={{
            background:
              doc!.module === "MM" ? "#E0EAF5"
              : doc!.module === "TM" ? "#FFF0E0"
              : doc!.module === "EHS" ? "#F0E0E8"
              : doc!.module === "PP" ? "#E8F0E4"
              : doc!.module === "QM" ? "#F8EBC5"
              : "#EDE9E1",
            color:
              doc!.module === "MM" ? "#1E3A5F"
              : doc!.module === "TM" ? "#7A4A0A"
              : doc!.module === "EHS" ? "#6B1F40"
              : doc!.module === "PP" ? "#1C3A2B"
              : doc!.module === "QM" ? "#7A5E0A"
              : "#4A5568",
          }}
        >
          {doc!.module}
        </span>
        <h1 className="text-sm font-medium text-[#2A2E2B] truncate">{doc!.title}</h1>
      </header>

      {/* Embedded document viewer */}
      <div className="flex-1 relative">
        <iframe
          src={previewUrl}
          className="absolute inset-0 w-full h-full border-0"
          title={doc!.title}
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
