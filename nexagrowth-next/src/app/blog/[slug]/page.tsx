import React from "react";
import Background from "../../../components/Background";
import Navigation from "../../../components/Navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { Clock, Calendar, Tag, ArrowLeft, ArrowRight, MessageSquare, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Footer from "../../../components/Footer";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

// Helper function to read and parse static blog post files on the server
function getBlogContent(slug: string) {
  try {
    // Try to find the file in public/blog/ or root blog/
    const publicPath = path.join(process.cwd(), "public", "blog", `${slug}.html`);
    const rootPath = path.join(process.cwd(), "blog", `${slug}.html`);
    
    let filePath = "";
    if (fs.existsSync(publicPath)) {
      filePath = publicPath;
    } else if (fs.existsSync(rootPath)) {
      filePath = rootPath;
    } else {
      return null;
    }

    const htmlContent = fs.readFileSync(filePath, "utf-8");

    // Extract Title
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : "Blog Article";

    // Extract Meta Description
    const descMatch = htmlContent.match(/<meta\s+name="description"\s+content="(.*?)"/i) || 
                      htmlContent.match(/<meta\s+property="og:description"\s+content="(.*?)"/i);
    const description = descMatch ? descMatch[1] : "Actionable digital marketing, SEO, and paid ad strategies.";

    // Extract Blog Meta (Category, Date, Read Time)
    const catMatch = htmlContent.match(/<span\s+class="blog-cat">(.*?)<\/span>/i);
    const dateMatch = htmlContent.match(/<span\s+class="blog-date">(.*?)<\/span>/i);
    const readMatch = htmlContent.match(/<span\s+class="blog-read">(.*?)<\/span>/i);

    const category = catMatch ? catMatch[1] : "Marketing";
    const date = dateMatch ? dateMatch[1] : "Recent";
    const readTime = readMatch ? readMatch[1] : "5 min read";

    // Extract main Heading <h1>
    const h1Match = htmlContent.match(/<h1>(.*?)<\/h1>/i);
    const headline = h1Match ? h1Match[1] : title;

    // Extract main Content Body within <main class="blog-content">
    const bodyMatch = htmlContent.match(/<main\s+class="blog-content"[^>]*>([\s\S]*?)<\/main>/i);
    let bodyHtml = bodyMatch ? bodyMatch[1] : "";

    // Clean up content: remove navigation lists, breadcrumbs, toc or headers from within the bodyHtml if they repeat, or simply render
    bodyHtml = bodyHtml.replace(/<nav\s+class="nav"[\s\S]*?<\/nav>/gi, "");
    bodyHtml = bodyHtml.replace(/<footer[\s\S]*?<\/footer>/gi, "");
    bodyHtml = bodyHtml.replace(/src="\.\.\/logo\.png"/gi, 'src="/logo.png"');
    bodyHtml = bodyHtml.replace(/src="logo\.png"/gi, 'src="/logo.png"');

    return {
      title,
      description,
      category,
      date,
      readTime,
      headline,
      bodyHtml,
    };
  } catch (e) {
    return null;
  }
}

// 2. Generate dynamic metadata for SEO optimization
export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogContent(slug);
  if (!post) return {};

  return {
    title: `${post.title} — NexaGrowth Journal`,
    description: post.description,
  };
}

// 3. Dynamic Blog Article Render component
export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getBlogContent(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative z-10 min-h-screen flex flex-col">
      <Background />
      <Navigation activeRoute="other" />

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-12 pb-24 relative z-20">
        {/* Back Link */}
        <div className="mb-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[12.5px] font-medium text-foreground/50 hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Journal</span>
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-start">
          {/* Main Article Content */}
          <article className="glass p-8 md:p-12 rounded-[24px] border border-glass-border bg-glass-bg shadow-sm">
            {/* Header Meta */}
            <div className="flex items-center gap-4 text-[11px] font-bold text-accent tracking-wider uppercase mb-5">
              <span className="bg-accent/15 px-2.5 py-0.5 rounded-md border border-accent/25">{post.category}</span>
              <div className="flex items-center gap-1 text-foreground/40 font-normal">
                <Calendar size={11} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1 text-foreground/40 font-normal">
                <Clock size={11} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="font-serif text-[36px] sm:text-[48px] md:text-[56px] font-normal leading-[1.1] tracking-[-1.5px] text-foreground mb-8 border-b border-glass-border pb-6">
              {post.headline}
            </h1>

            {/* Static HTML content injected safely */}
            <div 
              className="blog-html-content text-[15px] leading-relaxed text-foreground/80 space-y-6"
              dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
            />
          </article>

          {/* Sticky Sidebar with high-converting CTA */}
          <aside className="lg:sticky lg:top-24 flex flex-col gap-6">
            {/* conversion widget */}
            <div 
              className="glass p-6 rounded-[20px] border border-accent/30 text-center relative overflow-hidden shadow-sm"
              style={{ background: "linear-gradient(135deg, rgba(32, 210, 190, 0.05) 0%, rgba(139, 92, 246, 0.03) 100%)" }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent to-accent-glow" />
              <span className="text-[9px] font-bold text-accent tracking-widest uppercase block mb-1">Free Consultation</span>
              <h3 className="font-serif text-xl text-foreground font-normal mb-3">Ready to Scale Your Brand?</h3>
              <p className="text-[12.5px] text-foreground/60 leading-relaxed mb-6">
                Get a free, custom website and SEO audit from Talha Majid. No commitments, just growth.
              </p>
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center gap-1.5 w-full font-sans text-[13px] font-semibold text-background bg-foreground px-5 py-3 rounded-full hover:scale-[1.02] transition-transform"
              >
                <span>Book Free Audit</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Directory guide */}
            <div className="glass p-6 rounded-[20px] border border-glass-border bg-glass-bg shadow-sm">
              <h4 className="font-serif text-[16px] text-foreground font-normal mb-3 border-b border-glass-border pb-2">Categories</h4>
              <div className="flex flex-col gap-2.5">
                <Link href="/blog" className="inline-flex items-center justify-between text-[13px] text-foreground/60 hover:text-foreground transition-colors">
                  <span>SEO & Traffic</span>
                  <ChevronRight size={12} className="text-foreground/20" />
                </Link>
                <Link href="/blog" className="inline-flex items-center justify-between text-[13px] text-foreground/60 hover:text-foreground transition-colors">
                  <span>Paid Advertising</span>
                  <ChevronRight size={12} className="text-foreground/20" />
                </Link>
                <Link href="/blog" className="inline-flex items-center justify-between text-[13px] text-foreground/60 hover:text-foreground transition-colors">
                  <span>Web Engineering</span>
                  <ChevronRight size={12} className="text-foreground/20" />
                </Link>
              </div>
              <hr className="border-glass-border my-4" />
              <Link href="/blog" className="inline-flex items-center gap-1 text-[12.5px] font-medium text-foreground/50 hover:text-accent transition-colors">
                <span>Browse Articles</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </aside>
        </div>
      </main>

      {/* ── Footer Component ── */}
      <Footer />
    </div>
  );
}
