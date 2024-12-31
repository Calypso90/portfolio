"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Link, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Art Gallery App",
    description:
      "A React-based virtual art gallery showcasing my transition from traditional art to digital creations.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Gallery+View",
      "/placeholder.svg?height=200&width=300&text=Artwork+Detail",
      "/placeholder.svg?height=200&width=300&text=Artist+Profile",
    ],
    tech: ["React", "Next.js", "Three.js"],
    github: "https://github.com/janedoe/art-gallery-app",
    deployed: "https://art-gallery-app.vercel.app",
  },
  {
    title: "Creative Coding Playground",
    description:
      "An interactive platform for artists to learn coding basics through visual programming.",
    images: [
      "/placeholder.svg?height=200&width=300&text=Coding+Interface",
      "/placeholder.svg?height=200&width=300&text=Example+Project",
    ],
    tech: ["JavaScript", "p5.js", "Node.js"],
    github: "https://github.com/janedoe/creative-coding-playground",
    deployed: "https://creative-coding-playground.vercel.app",
  },
  {
    title: "Portfolio Generator",
    description:
      "A tool for artists to easily create and manage their online portfolios without coding knowledge.",
    images: ["/placeholder.svg?height=200&width=300&text=Portfolio+Generator"],
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    github: "https://github.com/janedoe/portfolio-generator",
    deployed: null,
  },
];

function ProjectImages({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <Image
        src={images[currentImage]}
        alt={`Project image ${currentImage + 1}`}
        width={300}
        height={200}
        className="w-full"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImage ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <ProjectImages images={project.images} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.deployed && (
                      <a
                        href={project.deployed}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600"
                      >
                        <Link size={24} />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
