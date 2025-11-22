# 🎯 Analytics Implementering - Sjekkliste

## ✅ Didriksson Digital (FERDIG)

- [x] Analytics komponent opprettet (`components/Analytics.tsx`)
- [x] Tracking funksjoner opprettet (`lib/tracking.ts`)
- [x] Analytics lagt til i layout
- [x] Tracking på Hero CTAs (ring, Calendly)
- [x] Tracking på bunn-CTA
- [x] Tracking på pakke-klikk (prissiden)
- [x] .env.local.example opprettet

### 🔧 Neste steg for DEG:

1. **Opprett Google Analytics konto**
   - Følg `ANALYTICS_SETUP.md` steg 1
   - Få Measurement ID

2. **Opprett Meta Pixel**
   - Følg `ANALYTICS_SETUP.md` steg 2
   - Få Pixel ID

3. **Lag .env.local fil**
   ```bash
   # I rooten av prosjektet
   NEXT_PUBLIC_GA_ID=G-DIN_ID_HER
   NEXT_PUBLIC_META_PIXEL_ID=DIN_PIXEL_HER
   ```

4. **Restart dev server**
   ```bash
   npm run dev
   ```

5. **Test at det fungerer**
   - Åpne nettsiden
   - Klikk på "Ring", "Book møte", og pakke-knappene
   - Sjekk i Google Analytics Realtime
   - Sjekk med Meta Pixel Helper extension

6. **Deploy til Vercel**
   - Legg til environment variables i Vercel dashboard
   - Redeploy
   - Verifiser i production

---

## 🚢 Bluecrew.no (TODO)

- [ ] Kopier `components/Analytics.tsx` til Bluecrew-prosjekt
- [ ] Kopier `lib/tracking.ts` til Bluecrew-prosjekt
- [ ] Legg til Analytics i Bluecrew layout/_app
- [ ] Opprett separate GA og Meta Pixel for Bluecrew
- [ ] Lag .env.local for Bluecrew med egne IDs
- [ ] Legg til tracking på jobbsøknader
- [ ] Legg til tracking på bemanning-requests
- [ ] Legg til tracking på registrering
- [ ] Test i dev
- [ ] Deploy med environment variables

---

## 📊 Konverteringsmål å sette opp

### Didriksson Digital:
- [ ] Google Analytics → Marker "Contact" som conversion
- [ ] Google Analytics → Marker "Lead" som conversion
- [ ] Google Analytics → Marker "AddToCart" som conversion
- [ ] Meta → Opprett custom conversion for "Schedule"
- [ ] Meta → Opprett custom conversion for "AddToCart"

### Bluecrew:
- [ ] Google Analytics → Marker "JobSearch" som conversion
- [ ] Google Analytics → Marker "Lead" (application) som conversion
- [ ] Google Analytics → Marker "SignUp" som conversion
- [ ] Meta → Opprett custom conversion for "CompleteRegistration"
- [ ] Meta → Opprett custom conversion for "Lead"

---

## 🎯 Når du skal kjøre annonser

### Google Ads:
1. Koble Google Analytics til Google Ads
2. Importer konverteringer
3. Opprett kampanje med målretting mot:
   - **Keywords**: "nettside Harstad", "programvareutvikling Troms"
   - **Budget**: Start med 100 kr/dag
   - **Mål**: Lead (ring eller Calendly-booking)

### Facebook/Instagram Ads:
1. Opprett kampanje i Ads Manager
2. Velg mål: **Lead Generation** eller **Conversions**
3. Målgruppe:
   - Bedriftsledere, gründere
   - Nord-Norge / Harstad
   - Alder 30-60
   - Interesser: Business, Technology, Entrepreneurship
4. Budget: Start med 50-100 kr/dag
5. Optimalisering: **Lead** eller **AddToCart** event

---

## 💡 Tips for bedre konvertering

### A/B testing ideer:
- Test ulike overskrifter på Hero
- Test ulike CTA-tekster ("Ring nå" vs "Book gratis møte")
- Test ulike prispunkter eller inkluderinger
- Test med/uten testimonials
- Test kort vs. lang case-beskrivelse

### Retargeting:
- Sett opp Facebook Custom Audience basert på Pixel
- Vis annonser til folk som:
  - Besøkte prissiden men ikke tok kontakt
  - Så case-siden (interessert i kvalitet)
  - Brukte >2 min på siden (høy interesse)

---

## 📈 Ukentlig oppfølging

**Hver mandag, sjekk:**
1. Antall besøkende forrige uke
2. Conversion rate (% som tar kontakt)
3. Hvilken pakke får mest interesse?
4. Hvor kommer trafikken fra?
5. Hvilken side har høyest bounce rate?

**Juster basert på data:**
- Lav conversion → forbedre CTA eller tillit
- Høy bounce → forbedre laste-hastighet eller første inntrykk
- Premium får mest klikk → kanskje markedsfør mer mot større bedrifter?

---

## ⚡ Quick Wins

1. **Legg til telefonnummer i Google My Business**  
   → Vises i Google Maps søk

2. **Send LinkedIn-melding til 10 lokale bedrifter i uka**  
   → Personlig touch, høyere conversion

3. **Post case på LinkedIn hver 14. dag**  
   → Bygger autoritet og synlighet

4. **Be Bluecrew om testimonial**  
   → Ekte sosial proof

---

**Neste steg:** Få Google Analytics og Meta Pixel IDer, legg i .env.local, test! 🚀
