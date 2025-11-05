# Analytics for Bluecrew.no

Samme tracking setup for Bluecrew-prosjektet.

## 🔧 Quick Setup

### 1. Kopier Analytics komponenter
Fra Didriksson Digital prosjektet, kopier disse filene til Bluecrew:

```
components/Analytics.tsx
lib/tracking.ts
```

### 2. Legg til i layout (eller _app.tsx hvis det er Next.js Pages Router)

#### For App Router (Next.js 13+):
```tsx
// app/layout.tsx
import Analytics from './components/Analytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
```

#### For Pages Router (Next.js 12 eller eldre):
```tsx
// pages/_app.tsx
import Analytics from '../components/Analytics';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}
```

### 3. Opprett .env.local i Bluecrew-prosjektet

```bash
# Separate IDs for Bluecrew
NEXT_PUBLIC_GA_ID=G-BLUECREW123     # <-- Nytt GA for Bluecrew
NEXT_PUBLIC_META_PIXEL_ID=456789123456789  # <-- Nytt Pixel for Bluecrew
```

> ⚠️ **Viktig**: Bruk separate Analytics og Pixel for Bluecrew, ikke samme som Didriksson Digital!

---

## 📊 Events å tracke for Bluecrew

### Siden Bluecrew er en maritim staffing-plattform, track disse:

```tsx
// I relevante komponenter
import { trackEvent } from '../lib/tracking';

// Når noen søker etter jobb
trackEvent('JobSearch', { 
  category: 'Maritime',
  position: 'Deckhand' // eller hvilken som helst stilling
});

// Når noen sender jobbsøknad
trackEvent('Lead', {
  method: 'job_application',
  position: 'Captain'
});

// Når bedrift ber om bemanning
trackEvent('Lead', {
  method: 'crew_request',
  vessel_type: 'Cargo'
});

// Når noen registrerer seg
trackEvent('SignUp', {
  user_type: 'seafarer' // eller 'company'
});

// Konvertering: Booking / Hire
if (typeof window !== 'undefined' && (window as any).fbq) {
  (window as any).fbq('track', 'Purchase', {
    value: 15000, // f.eks. total verdi av bemanning
    currency: 'NOK'
  });
}
```

---

## 🎯 Spesifikke konverteringer for Bluecrew

### 1. Google Analytics Goals:
- **Job Application** → Lead
- **Crew Request** → High-Value Lead  
- **Booking Confirmed** → Purchase
- **Newsletter Signup** → Micro-conversion

### 2. Meta Pixel Events:
- `Lead` for søknader og henvendelser
- `CompleteRegistration` for nye brukere
- `Purchase` for betalte bookinger (hvis relevant)
- `ViewContent` for jobboppslag-views

---

## 📈 Dashboards å følge

### For Bluecrew:
1. **Traffic Sources**: Kommer sjøfolk fra Google, Facebook-grupper, annonser?
2. **Job Views**: Hvilke stillinger får mest oppmerksomhet?
3. **Application Rate**: % av besøkende som søker jobb
4. **Company Leads**: Hvor mange bedrifter ber om bemanning?

---

## 🚀 Deployment (Vercel)

Når du deployer til Vercel:

### 1. Legg til Environment Variables
1. Gå til Vercel Dashboard → Settings → Environment Variables
2. Legg til:
   - `NEXT_PUBLIC_GA_ID` = G-BLUECREW123
   - `NEXT_PUBLIC_META_PIXEL_ID` = 456789123456789
3. Redeploy prosjektet

### 2. Bekreft eierskap i Analytics
- Google Analytics → Admin → Property Settings → bekreft domene
- Meta Business Manager → legg til bluecrew.no som verifisert domene

---

Trenger du hjelp med Bluecrew setup? Ta kontakt! 🚢
