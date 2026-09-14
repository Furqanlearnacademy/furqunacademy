import React from "react";
import type { Metadata } from "next";
import { ALL_COURSES } from "@/data/coursesData";
import { CourseClientView } from "./CourseClientView";

export function generateStaticParams() {
  return ALL_COURSES.map((course) => ({
    id: course.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = ALL_COURSES.find((c) => c.id === id) || ALL_COURSES[0];

  return {
    title: `${course.title} | Furqan Learn Academy`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <CourseClientView initialId={id} />;
}
