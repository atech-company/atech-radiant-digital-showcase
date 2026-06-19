import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { BLOG_POSTS } from "@/data/blog-posts";
import { breadcrumbSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { PAGE_SEO } from "@/lib/seo";

const Blog = () => {
  const meta = PAGE_SEO.blog;

  return (
    <div className="min-h-screen">
      <SeoHead
        {...meta}
        jsonLd={[
          organizationSchema(),
          websiteSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <Navigation />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">A TECH Technology Blog</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Expert insights on software development, AI, web development, ERP, POS, and digital transformation.
            </p>

            <div className="grid gap-6">
              {BLOG_POSTS.map((post) => (
                <article key={post.slug} className="border border-border rounded-xl p-6 bg-card">
                  <h2 className="text-2xl font-semibold mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                    <span aria-hidden="true">•</span>
                    <span>{post.readMinutes} min read</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
