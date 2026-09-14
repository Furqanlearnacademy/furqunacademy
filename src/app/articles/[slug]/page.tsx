import React from "react";
import type { Metadata } from "next";
import { ARTICLES_DATA } from "@/data/articlesData";
import { ArticleClientView } from "./ArticleClientView";

export function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({
    slug: article.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article =
    ARTICLES_DATA.find((a) => a.slug === slug || a.id === slug) ||
    ARTICLES_DATA[0];

  return {
    title: `${article.title} | Furqan Learn Academy`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  return <ArticleClientView initialSlug={slug} />;
}
