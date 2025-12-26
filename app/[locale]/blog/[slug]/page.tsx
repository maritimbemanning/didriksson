import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Container } from "@/components/ui/Container";
import { getBlogPost, getBlogPosts } from "@/lib/blog-data";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { Header, Footer } from "@/components/Navigation";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const locales = ['no', 'en'];
  const params = [];

  for (const locale of locales) {
    const posts = getBlogPosts(locale);
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug, locale);

  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });
  const post = getBlogPost(slug, locale);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <Container size="sm">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            {t('back')}
          </Link>

          <article>
            <header className="mb-12 text-center">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6 border border-accent/20">
                {post.category}
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center justify-center gap-6 text-text-secondary text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime} {t('read_time')}</span>
                </div>
              </div>
            </header>

            <div className="aspect-video bg-white/5 rounded-2xl mb-12 relative overflow-hidden border border-white/10">
               <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-900/20" />
            </div>

            <div 
              className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-text-secondary prose-a:text-accent prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>

          <div className="mt-20 pt-10 border-t border-white/10">
             <div className="bg-surface border border-white/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Klar for å oppgradere?</h3>
                <p className="text-text-secondary mb-6">
                  Vi hjelper deg med å bygge en nettside som faktisk leverer resultater.
                </p>
                <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors">
                  Book en prat
                </Link>
             </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
