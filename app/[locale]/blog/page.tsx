import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Container } from "@/components/ui/Container";
import { getBlogPosts } from "@/lib/blog-data";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Header, Footer } from "@/components/Navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });
  const posts = getBlogPosts(locale);

  return (
    <>
      <Header />
      <main className="pt-32 pb-20 min-h-screen">
        <Container>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('title')}</h1>
            <p className="text-xl text-text-secondary">{t('subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group block bg-surface border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors"
              >
                <div className="aspect-video bg-white/5 relative overflow-hidden">
                  {/* Placeholder for image if we don't have real images yet */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-900/20" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium border border-white/10">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-text-secondary mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-accent font-medium text-sm">
                    {t('read_more')}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
