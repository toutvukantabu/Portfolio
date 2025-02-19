import { useEffect, useRef } from "react";
import { Navigation } from "./components/Navigation";
import { BackgroundLines } from "./components/BackgroundLines";
import { SkillCard } from "./components/SkillCard";
import {
  Database,
  Server,
  Code2,
  GitBranch,
  Terminal,
  Cloud,
  // Mail,
  ArrowRight,
  Cpu,
  Shield
} from "lucide-react";
export function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observerRef.current?.observe(element);
    });
    return () => observerRef.current?.disconnect();
  }, []);
  return (
    <div className="min-h-screen w-full bg-black text-white relative">
      <BackgroundLines />
      <Navigation />
      <section className="h-screen flex items-center px-6 relative">
        <div className="max-w-7xl mx-auto w-full pt-20">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-white block text-2xl mb-2">Hi, I'm</span>
            <span className="inline-block animate-float">Gwendal</span>
            <span className="text-green-400 inline-block animate-float-delayed">
              {" "}
              Bescont
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            Specializing in building robust, scalable backend systems and APIs.
            Passionate about clean code, performance optimization, and system
            architecture.
          </p>
          <button className="bg-green-400 text-black px-8 py-3 rounded-md hover:bg-green-500 transition-colors">
            View My Work
          </button>
        </div>
      </section>
      <section className="py-20 px-6 bg-zinc-900/80 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Gestion de Bases de Données",
                desc: "MySQL, PostgreSQL, MariaDB, SQLite",
              },
              {
                icon: Server,
                title: "Développement Backend",
                desc: "PHP, Symfony, API Platform, Node.js",
              },
              {
                icon: Code2,
                title: "Développement d'APIs",
                desc: "REST, GraphQL, WebSockets",
              },
              {
                icon: GitBranch,
                title: "Versioning & CI/CD",
                desc: "Git, GitHub, GitLab, GitFlow",
              },
              {
                icon: Terminal,
                title: "DevOps & Systèmes",
                desc: "Docker,Linux, Proxmox, Traefik",
              },
              {
                icon: Cloud,
                title: "Infrastructure & Hébergement",
                desc: "Proxmox, Home Lab, Cloudflare",
              },
              {
                icon: Code2,
                title: "Développement Frontend",
                desc: "React,Tailwind CSS",
              },
              {
                icon: Cpu,
                title: "Automatisation & IA",
                desc: "N8N, ChatGpt",
              },
              {
                icon: Shield,
                title: "Sécurité & Réseau",
                desc: "SSO, Authentik, VPN, Firewall, CrowdSec",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="animate-on-scroll opacity-0"
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <SkillCard {...skill} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>
          <div className="space-y-12">
            {[
              {
                role: "Independent Developer",
                company: "Self-Employed",
                period: "July 2024 – Present",
                desc: "Developing a comprehensive vehicle fleet management system for professionals, including automated fine management and mobile application integration. Working with Clean Architecture principles, test-driven development, and DevOps best practices.",
                tech: "Symfony, API Platform, Next.js, React, Tailwind CSS, Docker, Kubernetes, CI/CD",
              },
              {
                role: "Backend Developer",
                company: "Wimova, Villeurbanne",
                period: "March 2024 – June 2024",
                desc: "Developed a B2B interface coupled with mobile applications for taxi dispatch management. Implemented a Stripe payment system mock, reducing test processing time by 40% in CI. Applied Test-First development under the supervision of a software architect, following Domain-Driven Design, Hexagonal Architecture, and CQRS principles.",
                tech: "Symfony 6.4, API Platform 3, Docker, PHPUnit, PostgreSQL, Agile methodology",
              },
              {
                role: "Backend Developer",
                company: "Ma-Sauvegarde, Sérézin-du-Rhône",
                period: "February 2022 – February 2023",
                desc: "Redesigned a new extranet for partners to manage IT backup services remotely. Developed two API services: one for user profile and access management, and another for product integration with external Java services. Worked in an ISO 27001-certified data security environment.",
                tech: "Symfony 6.2, API Platform 3, Docker, PHPUnit, MariaDB, Agile methodology",
              },
              {
                role: "Independent Developer",
                company: "Self-Employed",
                period: "2021",
                desc: "Managed a Discord community for developer support and networking. Hosted the Nuxt Paris Meetup, presenting insights on Nuxt 3 framework.",
              },
              {
                role: "Intern Developer",
                company: "C-Mantika, Guérande",
                period: "October 2020",
                desc: "Performed website testing, bug fixing, and pre-production validation. Gained experience with WordPress and SPIP CMS.",
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-green-400 pl-8 animate-on-scroll opacity-0"
                style={{
                  animation: "none",
                  animationDelay: `${index * 200}ms`,
                }}
              >
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-green-400 mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-400">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-zinc-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-8">
            Open for new opportunities and collaborations
          </p>
          <button className="group relative bg-green-400 text-black px-8 py-3 rounded-md hover:bg-green-500 transition-all duration-300 pr-12">
            Contact Me
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300" />
            <span className="absolute inset-0 w-full h-full rounded-md bg-green-300/20 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
}
