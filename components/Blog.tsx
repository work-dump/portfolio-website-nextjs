"use client";

import { blogPostsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SectionHeading from "./SectionHeading";

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-28 mb-28 max-w-3xl mx-auto w-full">
      <SectionHeading>Blog</SectionHeading>
      <div className="grid gap-6">
        {blogPostsData.map((post, idx) => (
          <Card key={post.title + idx} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span>{post.title}</span>
                <span className="text-xs text-muted-foreground font-normal">{post.date}</span>
              </CardTitle>
              <CardDescription>{post.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-muted text-xs px-2 py-1 rounded-full text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={post.url}
                className="text-primary hover:underline text-sm font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 