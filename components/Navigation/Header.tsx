"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

interface HeaderProps {
  onBookClick?: () => void;
}

export function Header({ onBookClick }: HeaderProps) {
  const t = useTranslations('Navigation');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: "portfolio", label: t('portfolio'), type: 'section' },
    { href: "services", label: t('services'), type: 'section' },
    { href: "pricing", label: t('pricing'), type: 'section' },
    { href: "/blog", label: t('blog'), type: 'page' },
  ];

  const handleNavClick = (link: { href: string; type: string }) => {
    if (link.type === 'page') {
      router.push(link.href);
      setIsMobileMenuOpen(false);
    } else {
      if (pathname === '/') {
        scrollToSection(link.href);
      } else {
        router.push(`/#${link.href}`);
      }
      setIsMobileMenuOpen(false);
    }
  };

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-semibold tracking-tight">
            <span className="text-(--color-accent)">Didriksson</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link)}
                className="text-text-secondary hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <Button size="sm" onClick={onBookClick}>
              {t('book_meeting')}
            </Button>
            
            <div className="flex items-center gap-2 ml-2 border-l border-white/10 pl-4">
              <button 
                onClick={() => switchLocale('no')} 
                className={`text-sm font-medium transition-colors ${locale === 'no' ? 'text-(--color-accent)' : 'text-(--color-text-secondary) hover:text-white'}`}
              >
                NO
              </button>
              <span className="text-(--color-text-secondary)">/</span>
              <button 
                onClick={() => switchLocale('en')} 
                className={`text-sm font-medium transition-colors ${locale === 'en' ? 'text-(--color-accent)' : 'text-(--color-text-secondary) hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </nav>

            <button
              className="md:hidden text-text-primary flex items-center gap-4"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            <div className="flex items-center gap-2 text-sm font-medium">
               <span className={locale === 'no' ? 'text-(--color-accent)' : 'text-(--color-text-secondary)'} onClick={(e) => { e.stopPropagation(); switchLocale('no'); }}>NO</span>
               <span className="text-(--color-text-secondary)">/</span>
               <span className={locale === 'en' ? 'text-(--color-accent)' : 'text-(--color-text-secondary)'} onClick={(e) => { e.stopPropagation(); switchLocale('en'); }}>EN</span>
            </div>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-white/10"
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-left py-3 text-text-secondary hover:text-(--color-accent)"
                >
                  {link.label}
                </button>
              ))}
              <Button
                className="w-full mt-4"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick?.();
                }}
              >
                Book konsultasjon
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
