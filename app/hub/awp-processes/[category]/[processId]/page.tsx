import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { awpCategories, getCategoryBySlug } from "@/data/awp-categories";
import { processes } from "@/data/processes";
import { ProcessPageClient } from "@/components/hub/ProcessPageClient";

interface PageProps {
  params: Promise<{ category: string; processId: string }>;
}

export function generateStaticParams() {
  return awpCategories.flatMap((cat) =>
    cat.processIds.map((processId) => ({
      category: cat.slug,
      processId,
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { processId } = await params;
  const proc = processes.find((p) => p.id === processId);
  if (!proc) return { title: "Not Found" };
  return {
    title: `${proc.titleEN} — AWP SAP Central Learning Hub`,
    description: proc.descriptionEN,
  };
}

export default async function ProcessPage({ params }: PageProps) {
  const { category, processId } = await params;
  const cat = getCategoryBySlug(category);
  const proc = processes.find((p) => p.id === processId);

  if (!cat || !proc) notFound();

  return (
    <ProcessPageClient
      category={cat!}
      process={proc!}
    />
  );
}
