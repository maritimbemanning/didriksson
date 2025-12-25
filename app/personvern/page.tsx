import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/Navigation/Header";
import { Footer } from "@/components/Navigation/Footer";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description: "Personvernerklæring for Didriksson Digital – hvordan vi håndterer dine personopplysninger.",
};

export default function PersonvernPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <Container size="md">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-semibold mb-8">Personvernerklæring</h1>
            
            <p className="text-text-secondary mb-6">
              Sist oppdatert: {new Date().toLocaleDateString("nb-NO", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Behandlingsansvarlig</h2>
              <p className="text-text-secondary">
                Didriksson Digital<br />
                Org.nr: 936 351 371<br />
                E-post: isak@didriksson.no<br />
                Telefon: +47 923 28 850
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Hvilke personopplysninger samler vi inn?</h2>
              <p className="text-text-secondary mb-4">
                Vi samler kun inn personopplysninger du frivillig gir oss når du:
              </p>
              <ul className="text-text-secondary list-disc pl-6 space-y-2">
                <li>Booker en konsultasjon via Calendly (navn, e-post, telefon)</li>
                <li>Sender oss en e-post eller ringer oss</li>
                <li>Inngår en kundeavtale med oss</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Formål og rettslig grunnlag</h2>
              <p className="text-text-secondary mb-4">
                Vi behandler dine personopplysninger for å:
              </p>
              <ul className="text-text-secondary list-disc pl-6 space-y-2">
                <li><strong>Besvare henvendelser:</strong> Rettslig grunnlag er din samtykke og vår berettigede interesse i å kommunisere med potensielle kunder.</li>
                <li><strong>Levere tjenester:</strong> Når du inngår avtale med oss, er rettslig grunnlag avtaleforholdet.</li>
                <li><strong>Fakturering og regnskap:</strong> Rettslig grunnlag er juridisk forpliktelse etter bokføringsloven.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Informasjonskapsler (cookies)</h2>
              <p className="text-text-secondary mb-4">
                Vi bruker kun essensielle tekniske cookies for at nettsiden skal fungere. Vi bruker <strong>ikke</strong> sporings- eller markedsføringscookies.
              </p>
              <p className="text-text-secondary">
                Hvis du booker via Calendly, gjelder Calendlys personvernerklæring for den delen av prosessen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Deling av opplysninger</h2>
              <p className="text-text-secondary">
                Vi deler <strong>ikke</strong> dine personopplysninger med tredjeparter, med unntak av:
              </p>
              <ul className="text-text-secondary list-disc pl-6 space-y-2">
                <li>Calendly (for booking av møter)</li>
                <li>Regnskapsfører (for fakturering og lovpålagt bokføring)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Lagringstid</h2>
              <p className="text-text-secondary">
                Vi oppbevarer dine personopplysninger kun så lenge det er nødvendig for formålet:
              </p>
              <ul className="text-text-secondary list-disc pl-6 space-y-2">
                <li>Henvendelser uten avtale: 1 år</li>
                <li>Kundeopplysninger: 5 år etter avsluttet prosjekt (bokføringslovens krav)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Dine rettigheter</h2>
              <p className="text-text-secondary mb-4">
                Du har rett til å:
              </p>
              <ul className="text-text-secondary list-disc pl-6 space-y-2">
                <li>Få innsyn i hvilke opplysninger vi har om deg</li>
                <li>Få rettet uriktige opplysninger</li>
                <li>Få slettet opplysninger (med mindre lovpålagt oppbevaring)</li>
                <li>Klage til Datatilsynet</li>
              </ul>
              <p className="text-text-secondary mt-4">
                For å utøve dine rettigheter, kontakt oss på <a href="mailto:isak@didriksson.no" className="text-accent hover:underline">isak@didriksson.no</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Sikkerhet</h2>
              <p className="text-text-secondary">
                Vi bruker SSL-kryptering på nettsiden og lagrer personopplysninger på sikre servere med tilgangskontroll.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Kontakt</h2>
              <p className="text-text-secondary">
                Har du spørsmål om personvern eller hvordan vi behandler dine opplysninger?<br />
                Kontakt oss på <a href="mailto:isak@didriksson.no" className="text-accent hover:underline">isak@didriksson.no</a> eller ring <a href="tel:+4792328850" className="text-accent hover:underline">+47 923 28 850</a>
              </p>
            </section>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
