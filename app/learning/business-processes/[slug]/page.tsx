import { notFound } from "next/navigation";
import {
  parseBusinessProcessDoc,
  loadProcessQuiz,
  getAllProcessSlugs,
} from "@/lib/parseBusinessProcessDoc";
import { ProcessDocViewer } from "@/components/business-processes/ProcessDocViewer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProcessSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const sections = parseBusinessProcessDoc();
  const section = sections.find((s) => s.slug === slug);
  if (!section) return { title: "Not Found" };
  return {
    title: `${section.label} — AWP Business Processes`,
    description: section.diagramType || `AWP process documentation for ${section.label}`,
  };
}

export default async function ProcessDocPage({ params }: PageProps) {
  const { slug } = await params;
  const sections = parseBusinessProcessDoc();
  const section = sections.find((s) => s.slug === slug);

  if (!section) notFound();

  // notFound() throws, so section is defined below
  const resolvedSection = section!;
  const quiz = loadProcessQuiz(slug);
  const allSections = sections.map((s) => ({
    slug: s.slug,
    label: s.label,
    id: s.id,
  }));

  return (
    <>
      {/* Inline doc styles — scoped to awp-doc-content */}
      <style>{`
        .awp-doc-content {
          color: #2A2E2B;
          font-size: 0.9rem;
          line-height: 1.8;
        }
        .awp-doc-content .awp-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.6rem;
          font-weight: 300;
          color: #1C3A2B;
          margin: 2.5rem 0 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #D9D4C8;
          scroll-margin-top: 80px;
        }
        .awp-doc-content .awp-h3 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 400;
          color: #1C3A2B;
          margin: 2rem 0 0.75rem;
          scroll-margin-top: 80px;
        }
        .awp-doc-content .awp-h4 {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #4E7862;
          margin: 1.5rem 0 0.5rem;
          scroll-margin-top: 80px;
        }
        .awp-doc-content .awp-p {
          margin: 0.75rem 0;
          color: #2A2E2B;
        }
        .awp-doc-content .awp-rule {
          border: none;
          border-top: 1px solid #D9D4C8;
          margin: 2rem 0;
        }
        .awp-doc-content .awp-blockquote {
          border-left: 3px solid #C49A1A;
          background: #FFF9EC;
          margin: 1rem 0;
          padding: 0.75rem 1rem;
          border-radius: 0 8px 8px 0;
          font-style: italic;
          color: #5A4200;
          font-size: 0.85rem;
        }
        .awp-doc-content .awp-ul {
          margin: 0.75rem 0 0.75rem 1.25rem;
          list-style-type: disc;
        }
        .awp-doc-content .awp-ol {
          margin: 0.75rem 0 0.75rem 1.25rem;
          list-style-type: decimal;
        }
        .awp-doc-content .awp-ul li,
        .awp-doc-content .awp-ol li {
          margin: 0.25rem 0;
          line-height: 1.7;
        }
        .awp-doc-content .awp-table-wrap {
          overflow-x: auto;
          margin: 1.25rem 0;
          border-radius: 8px;
          border: 1px solid #D9D4C8;
        }
        .awp-doc-content .awp-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.82rem;
        }
        .awp-doc-content .awp-table th {
          background: #1C3A2B;
          color: white;
          padding: 0.6rem 1rem;
          text-align: left;
          font-weight: 600;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          white-space: nowrap;
        }
        .awp-doc-content .awp-table td {
          padding: 0.55rem 1rem;
          border-bottom: 1px solid #EDE9E1;
          color: #2A2E2B;
          vertical-align: top;
        }
        .awp-doc-content .awp-table tr:last-child td {
          border-bottom: none;
        }
        .awp-doc-content .awp-table tr:nth-child(even) td {
          background: #F7F5F0;
        }
        .awp-doc-content .awp-table td strong {
          color: #1C3A2B;
        }
        .awp-doc-content .awp-code-block {
          background: #1C3A2B;
          color: #C8DFC5;
          padding: 1rem 1.25rem;
          border-radius: 8px;
          font-size: 0.8rem;
          overflow-x: auto;
          margin: 1rem 0;
          line-height: 1.6;
        }
        .awp-doc-content code {
          background: #F8EBC5;
          color: #7A5E0A;
          padding: 0.1em 0.4em;
          border-radius: 4px;
          font-size: 0.82em;
          font-family: 'JetBrains Mono', 'Fira Code', Menlo, monospace;
        }
        .awp-doc-content strong {
          font-weight: 600;
          color: #1C3A2B;
        }
        .awp-doc-content em {
          font-style: italic;
        }
      `}</style>

      <ProcessDocViewer
        section={resolvedSection}
        hasQuiz={quiz !== null}
        allSections={allSections}
      />
    </>
  );
}
