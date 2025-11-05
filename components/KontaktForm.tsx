"use client";

import { useEffect, useMemo, useState } from "react";

export default function KontaktForm() {
  const [pakke, setPakke] = useState<string>("");
  const [navn, setNavn] = useState("");
  const [epost, setEpost] = useState("");
  const [selskap, setSelskap] = useState("");
  const [frist, setFrist] = useState("");
  const [melding, setMelding] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("pakke");
    if (p) setPakke(p.replace(/%20/g, " "));
  }, []);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Forespørsel${pakke ? ` – ${pakke}` : ""}`);
    const lines = [
      `Navn: ${navn}`,
      `E-post: ${epost}`,
      `Selskap: ${selskap}`,
      `Frist: ${frist}`,
      pakke ? `Pakke: ${pakke}` : undefined,
      "",
      melding || "Hei!",
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join("\n"));
    return `mailto:isak@didriksson.no?subject=${subject}&body=${body}`;
  }, [navn, epost, selskap, frist, melding, pakke]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Kontakt</h1>
        <p className="text-neutral-600">Kort om mål og frist er nok til å starte. Jeg svarer normalt innen 1 arbeidsdag.</p>
        <div className="border border-neutral-200 rounded-2xl p-5">
          <p><strong>E-post:</strong> <a className="underline" href="mailto:isak@didriksson.no">isak@didriksson.no</a></p>
          <p><strong>Telefon:</strong> <a className="underline" href="tel:+4792328850">+47 923 28 850</a></p>
          <p className="text-sm text-neutral-600 mt-2">Adresse: Ervikveien 110</p>
        </div>
      </section>

      <form onSubmit={(e)=>{e.preventDefault(); window.location.href = mailtoHref;}} className="border border-neutral-200 rounded-2xl p-5 space-y-4">
        {pakke && (
          <p className="text-sm">Pakke: <span className="font-medium">{pakke}</span> <button type="button" className="ml-2 text-neutral-500 underline" onClick={()=>setPakke("")}>endre</button></p>
        )}
        <div>
          <label className="block text-sm">Navn</label>
          <input className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2" value={navn} onChange={e=>setNavn(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm">E-post</label>
          <input type="email" className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2" value={epost} onChange={e=>setEpost(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm">Selskap (valgfritt)</label>
          <input className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2" value={selskap} onChange={e=>setSelskap(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm">Ønsket frist (valgfritt)</label>
          <input className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2" value={frist} onChange={e=>setFrist(e.target.value)} placeholder="f.eks. 14.11 eller ASAP" />
        </div>
        <div>
          <label className="block text-sm">Kort beskrivelse</label>
          <textarea className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2 min-h-32" value={melding} onChange={e=>setMelding(e.target.value)} placeholder="Hva ønsker du bygget eller forbedret?" />
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" className="inline-flex items-center bg-ocean text-white hover:bg-ocean-dark transition-colors rounded-xl px-4 py-2 font-medium">Send forespørsel</button>
          <a className="text-sm text-neutral-600 hover:text-ocean underline" href={mailtoHref}>eller åpne i e-postklient</a>
        </div>
      </form>
    </div>
  );
}
