"use client";

import { certificationsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-28 mb-28 max-w-4xl mx-auto w-full">
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2">
        {certificationsData.map((cert, idx) => (
          <Card key={cert.title + idx} className="flex flex-col h-full transition-all duration-200 hover:border-primary hover:shadow-md hover:scale-105 cursor-pointer">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                width={56}
                height={56}
                className="rounded-lg object-cover border border-border"
              />
              <div>
                <CardTitle className="text-base leading-tight">{cert.title}</CardTitle>
                <CardDescription className="text-xs mt-1">{cert.issuer}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col justify-between flex-1 pt-0">
              <div className="text-xs text-muted-foreground mb-2">Issued: {cert.date}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 