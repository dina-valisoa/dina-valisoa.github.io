"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  // Home has its own contact block
  if (["/", "/fr"].includes(usePathname())) return null;

  const navigation = [
    { name: "Services", href: "/#services" },
    { name: "Experience", href: "/#experience" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "GitHub", href: "https://github.com/Antema-MG", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Let&apos;s build something together
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Fullstack Developer &amp; AI Engineer. Building FinTech platforms,
          AI tools, and ERP systems.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="mailto:randriamifydina@gmail.com">
              <Mail className="size-4" />
              Get in touch
            </a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className="flex items-center gap-1.5 font-medium transition-opacity hover:opacity-75"
                >
                  <Icon className="size-4" /> {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-muted-foreground w-full pt-10 pb-10 text-center text-sm md:pt-14 lg:pt-20">
        © {new Date().getFullYear()} Dina Valisoa RANDRIAMIFIDY. All rights reserved.
      </div>
    </footer>
  );
}
