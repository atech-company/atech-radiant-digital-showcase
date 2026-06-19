import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { getBlogPost } from "@/data/blog-posts";
import { articleSchema, breadcrumbSchema, organizationSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";

type Props = { slug?: string };

const BlogPost = ({ slug: slugProp }: Props) => {
  const { slug: slugParam } = useParams<{ slug: string }>();
  const slug = slugProp ?? slugParam ?? "";
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <Button asChild>
            <Link to="/blog">Back to blog</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const path = `/blog/${post.slug}`;

  return (
    <div className="min-h-screen">
      <SeoHead
        title={post.title}
        description={post.metaDescription}
        path={path}
        type="article"
        keywords={post.tags}
        jsonLd={[
          organizationSchema(),
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            path,
            publishedAt: post.publishedAt,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />
      <Navigation />
      <main className="pt-16">
        <article className="py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Home</Link>
              {" / "}
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              {" / "}
              <span>{post.title}</span>
            </nav>

            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-muted-foreground">
                <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                {" · "}
                {post.readMinutes} min read
              </p>
            </header>

            {post.sections.map((section) => (
              <section key={section.heading} className="mb-8">
                <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
