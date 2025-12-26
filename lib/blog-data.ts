export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content: string; // In a real app, this would be MDX or HTML
}

export const blogPosts: Record<string, BlogPost[]> = {
  no: [
    {
      slug: "hvorfor-nettsiden-din-er-treg",
      title: "Hvorfor nettsiden din er treg (og hvordan fikse det)",
      excerpt: "En treg nettside koster deg kunder. Her er 5 enkle grep du kan ta i dag for å øke hastigheten.",
      date: "26. Des 2025",
      readTime: "5 min",
      image: "/images/blog/speed.jpg",
      category: "Teknisk",
      content: `
        <p>Visste du at 53% av mobilbrukere forlater en nettside hvis den tar mer enn 3 sekunder å laste? Hastighet er ikke bare viktig for brukeropplevelsen, det er også en kritisk rangeringsfaktor for Google.</p>
        <h2>1. Optimaliser bildene dine</h2>
        <p>Store bilder er ofte den største synderen. Bruk formater som WebP og sørg for at bildene ikke er større enn de trenger å være.</p>
        <h2>2. Bruk caching</h2>
        <p>Caching gjør at nettleseren husker nettsiden din, slik at den laster raskere neste gang brukeren besøker den.</p>
      `
    },
    {
      slug: "hva-koster-en-nettside-2025",
      title: "Hva koster en nettside i 2025?",
      excerpt: "Prisene varierer fra gratis til millioner. Vi bryter ned hva du faktisk betaler for, og hva du bør forvente.",
      date: "20. Des 2025",
      readTime: "7 min",
      image: "/images/blog/pricing.jpg",
      category: "Strategi",
      content: `
        <p>Det er det vanligste spørsmålet vi får: "Hva koster en nettside?". Svaret er som regel "det kommer an på", men i denne artikkelen skal vi prøve å være mer konkrete.</p>
        <h2>Gjør-det-selv (0 - 5.000 kr)</h2>
        <p>Plattformer som Wix og Squarespace er flotte for hobbyprosjekter, men kan komme til kort for bedrifter som vil vokse.</p>
        <h2>Profesjonelt byrå (30.000 - 150.000 kr)</h2>
        <p>Her betaler du for skreddersøm, strategi, og en løsning som er bygget for å konvertere.</p>
      `
    }
  ],
  en: [
    {
      slug: "why-your-website-is-slow",
      title: "Why your website is slow (and how to fix it)",
      excerpt: "A slow website costs you customers. Here are 5 simple steps you can take today to increase speed.",
      date: "Dec 26, 2025",
      readTime: "5 min",
      image: "/images/blog/speed.jpg",
      category: "Technical",
      content: `
        <p>Did you know that 53% of mobile users leave a website if it takes more than 3 seconds to load? Speed is not only important for user experience, it is also a critical ranking factor for Google.</p>
        <h2>1. Optimize your images</h2>
        <p>Large images are often the biggest culprit. Use formats like WebP and make sure images are not larger than necessary.</p>
      `
    },
    {
      slug: "website-cost-2025",
      title: "How much does a website cost in 2025?",
      excerpt: "Prices range from free to millions. We break down what you actually pay for, and what you should expect.",
      date: "Dec 20, 2025",
      readTime: "7 min",
      image: "/images/blog/pricing.jpg",
      category: "Strategy",
      content: `
        <p>It's the most common question we get: "How much does a website cost?". The answer is usually "it depends", but in this article we'll try to be more specific.</p>
      `
    }
  ]
};

export function getBlogPosts(locale: string) {
  return blogPosts[locale as keyof typeof blogPosts] || blogPosts['no'];
}

export function getBlogPost(slug: string, locale: string) {
  const posts = getBlogPosts(locale);
  return posts.find((post) => post.slug === slug);
}
