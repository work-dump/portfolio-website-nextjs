"use client";

import { certificationsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { useState } from "react";

export default function Certifications() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="certifications" className="scroll-mt-28 mb-28 max-w-4xl mx-auto w-full">
      <SectionHeading>Certifications</SectionHeading>
      <div className="grid gap-6 sm:grid-cols-2">
        {certificationsData.map((cert, idx) => (
          <Card
            key={cert.title + idx}
            className="flex flex-col h-full transition-all duration-200 hover:border-primary hover:shadow-md hover:scale-105 cursor-pointer"
            onClick={() => setOpenIdx(idx)}
          >
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

      {/* Modal */}
      {openIdx !== null && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70" onClick={() => setOpenIdx(null)}>
          <div
            className="bg-background rounded-lg p-4 max-w-full max-h-full flex flex-col items-center shadow-xl border border-border transition-all duration-300 transform scale-95 opacity-0 animate-modal-in"
            style={{ animation: 'modal-in 0.25s cubic-bezier(0.4,0,0.2,1) forwards' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="w-[80vw] max-w-[600px] aspect-[3/2] flex items-center justify-center">
              <Image
                src={certificationsData[openIdx].imageUrl}
                alt={certificationsData[openIdx].title}
                fill
                className="rounded-lg object-contain border border-border"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <button className="mt-4 px-6 py-2 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition" onClick={() => setOpenIdx(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 