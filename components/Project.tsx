"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithubSquare } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  websiteUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-background max-w-[42rem] border border-border rounded-lg overflow-hidden sm:pr-8 relative sm:h-[24rem] hover:bg-accent transition sm:group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-8 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground line-clamp-5">
                {description}
              </p>
            </div>
            
            <div className="mt-6">
              <ul className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span key={tag} className="border border-primary/40 text-xs px-2 py-1 rounded-full text-primary/80 bg-transparent">
                    {tag}
                  </span>
                ))}
              </ul>
              
              {/* Project Links - Always at bottom */}
              <div className="flex gap-4">
                <Link 
                  href={githubUrl} 
                  rel="noopener noreferrer" 
                  target="_blank"
                  className="flex items-center gap-2 px-6 h-14 py-0 bg-foreground text-background rounded-lg hover:bg-foreground/90 hover:scale-105 hover:shadow-lg transition-all duration-200 text-sm font-semibold border border-transparent hover:border-foreground/20 min-w-[140px] justify-center"
                >
                  <FaGithubSquare className="w-6 h-6" />
                  GitHub
                </Link>
                <Link 
                  href={websiteUrl} 
                  rel="noopener noreferrer" 
                  target="_blank"
                  className="flex items-center gap-2 px-6 h-14 py-0 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-200 text-sm font-semibold border border-transparent hover:border-primary/20 min-w-[140px] justify-center"
                >
                  <CgWebsite className="w-6 h-6" />
                  Live
                </Link>
              </div>
            </div>
          </div>
        </div>

        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        </a>
      </section>
    </motion.div>
  );
};

export default Project;
