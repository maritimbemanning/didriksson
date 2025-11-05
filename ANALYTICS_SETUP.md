# Analytics Setup Guide

Denne guiden forklarer hvordan du setter opp Google Analytics og Meta Pixel for å spore trafikk og konverteringer på nettsiden din.

## 📊 Hva sporer vi?

### Automatisk tracking:
- **PageView**: Hver side som besøkes
- **Alle standard side-hendelser**

### Konverteringsevents:
1. **Ring-knapp klikk** → "Contact" event
2. **Book møte (Calendly)** → "Lead" / "Schedule" event  
3. **E-post knapp** → "Contact" event
4. **Pakke-interesse** → "AddToCart" event (med pris og pakkenavn)

---

## 1️⃣ Sett opp Google Analytics

### Steg 1: Opprett Google Analytics konto
1. Gå til [analytics.google.com](https://analytics.google.com/)
2. Klikk **"Start measuring"**
3. Opprett en **Account** (f.eks. "Didriksson Digital")
4. Opprett en **Property** (f.eks. "Didriksson Digital Website")
5. Velg **"Web"** som platform

### Steg 2: Finn Measurement ID
1. Gå til **Admin** (tannhjul nederst til venstre)
2. Klikk **Data Streams** under Property
3. Velg din web stream
4. Kopier **Measurement ID** (format: `G-XXXXXXXXXX`)

### Steg 3: Legg til i .env.local
Opprett eller rediger filen `.env.local` i roten av prosjektet:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # <-- Lim inn din Measurement ID her
```

---

## 2️⃣ Sett opp Meta Pixel (Facebook/Instagram Ads)

### Steg 1: Opprett Meta Business konto
1. Gå til [business.facebook.com](https://business.facebook.com/)
2. Klikk **"Create Account"** og følg veiviseren
3. Legg til nettsiden din som en asset

### Steg 2: Opprett Pixel
1. Gå til **Events Manager** (venstremenyen)
2. Klikk **"Connect Data Sources"** → **"Web"** → **"Meta Pixel"**
3. Gi pixelen et navn (f.eks. "Didriksson Digital Pixel")
4. **Ikke** installer kode manuelt – vi har allerede koden klar
5. Kopier **Pixel ID** (format: `XXXXXXXXXXXXXXXXX`, 15-17 siffer)

### Steg 3: Legg til i .env.local
Rediger `.env.local` filen:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXXXX  # <-- Lim inn Pixel ID her
```

---

## 3️⃣ Verifiser at tracking fungerer

### Google Analytics:
1. Åpne nettsiden i nettleser
2. Gå til [analytics.google.com](https://analytics.google.com/)
3. Naviger til **Reports → Realtime**
4. Du skal se deg selv som aktiv bruker!

### Meta Pixel:
1. Installer **Meta Pixel Helper** Chrome extension
2. Åpne nettsiden din
3. Klikk på extension-ikonet → skal vise grønn checkmark
4. Eller gå til **Events Manager** → **Test Events** og test live

---

## 4️⃣ Sette opp konverteringsmål

### Google Analytics:
1. Gå til **Admin** → **Events**
2. Marker følgende som **Conversions**:
   - `Contact` (ring + e-post)
   - `Lead` (Calendly booking)
   - `AddToCart` (pakke-interesse)

### Meta Pixel:
1. Gå til **Events Manager** → **Custom Conversions**
2. Opprett nye konverteringer basert på:
   - Event: `Contact`
   - Event: `Schedule`
   - Event: `AddToCart`

---

## 5️⃣ Koble til Google Ads / Facebook Ads

### Google Ads:
1. Gå til [ads.google.com](https://ads.google.com/)
2. **Tools & Settings** → **Linked Accounts** → **Google Analytics**
3. Koble til Analytics-kontoen din
4. Importer konverteringer fra Analytics

### Facebook Ads:
1. Pixel er allerede koblet til Business Manager
2. Når du oppretter kampanjer, velg Pixel som konverteringskilde
3. Optimaliser for `Lead` eller `AddToCart` events

---

## 📈 Hva å følge med på

### Viktige metrikker:
- **Conversion Rate**: Hvor mange som klikker "Ring" / "Book møte"
- **Package Interest**: Hvilken pakke får mest klikk? (Basis/Standard/Premium)
- **Traffic Sources**: Kommer folk fra Google, sosiale medier, direkte?
- **Bounce Rate**: Forlater folk siden uten å interagere?

### Typiske forbedringer:
- Hvis lav conversion rate → test ny overskrift eller mer prominent CTA
- Hvis høy bounce rate → forbedre laste-hastighet eller første inntrykk
- Hvis mye trafikk til priser → vurder å senke pris eller legge til mer verdi

---

## 🚀 Bonustips

### Sett opp Google Search Console:
1. Gå til [search.google.com/search-console](https://search.google.com/search-console)
2. Legg til property for `didrikssondigital.vercel.app`
3. Bekreft eierskap via Google Analytics
4. Se hvilke søkeord folk bruker for å finne deg!

### Sett opp Vercel Analytics:
1. Gå til Vercel dashboard
2. Velg prosjektet ditt
3. Klikk **Analytics** → **Enable**
4. Få innsikt i ytelse og Web Vitals

---

## ❓ Feilsøking

**Problem**: Ingen data i Google Analytics  
**Løsning**: Sjekk at Measurement ID er riktig og at `.env.local` er lastet (restart dev server)

**Problem**: Meta Pixel Helper viser rødt  
**Løsning**: Sjekk at Pixel ID er 15-17 siffer uten mellomrom

**Problem**: Events vises ikke  
**Løsning**: Klikk rundt på nettsiden (ring, book møte, pakker) og vent 1-2 minutter

---

**Trenger du hjelp?** Ta kontakt på isak@didriksson.no 🚀
