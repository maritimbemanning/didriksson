import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold tracking-tight mb-4">
              <span className="text-accent">Didriksson Digital</span>
            </h3>
            <p className="text-text-secondary mb-6">
              Nettsider som føles raske, ryddige og enkle å bruke
              <br />
              Bygget for flere gode henvendelser – ikke tomme løfter.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Kontakt</h4>
            <div className="space-y-3 text-text-secondary">
              <a
                href="mailto:isak@didriksson.no"
                className="flex items-center gap-2 hover:text-accent transition-colors"
                aria-label="Send e-post til Didriksson Digital"
              >
                <Mail size={16} />
                <span>isak@didriksson.no</span>
              </a>
              <a
                href="tel:+4792328850"
                className="flex items-center gap-2 hover:text-accent transition-colors"
                aria-label="Ring Didriksson Digital"
              >
                <Phone size={16} />
                <span>+47 923 28 850</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Følg oss</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/isak-didriksson-855210362/"
                className="w-10 h-10 glass glass-hover rounded-lg flex items-center justify-center"
                aria-label="Åpne Didriksson Digital på LinkedIn"
              >
                <Linkedin size={20} className="text-(--color-accent)" />
              </a>
              <a
                href="https://www.instagram.com/isakdidriksson"
                className="w-10 h-10 glass glass-hover rounded-lg flex items-center justify-center"
                aria-label="Åpne Didriksson Digital på Instagram"
              >
                <Instagram size={20} className="text-(--color-accent)" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-text-secondary text-sm space-y-3">
          <p>
            © 2025 Didriksson Digital. Org.nr: 936 351 371 · +47 923 28 850 ·
            <span className="mx-1">isak@didriksson.no</span>
          </p>
          <p>
            <a href="/personvern" className="hover:text-accent transition-colors">
              Personvernerklæring
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
