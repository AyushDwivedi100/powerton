import { Helmet } from "react-helmet-async";
import { useRoute } from "wouter";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function NewsArticle() {
  const [match, params] = useRoute("/news/:slug");
  const { t } = useTranslation("pages");

  // Mock news article data - in a real app, this would come from a database or API
  const article = {
    id: 1,
    slug: params?.slug || "",
    title: t("news.article.sampleArticle.title"),
    excerpt: t("news.article.sampleArticle.excerpt"),
    content: `
      <h2>${t("news.article.sampleArticle.content.projectOverview")}</h2>
      <p>${t("news.article.sampleArticle.content.projectOverviewText")}</p>
      
      <h3>${t("news.article.sampleArticle.content.keyAchievements")}</h3>
      <ul>
        <li>${t(
          "news.article.sampleArticle.content.achievements.costReduction"
        )}</li>
        <li>${t(
          "news.article.sampleArticle.content.achievements.efficiency"
        )}</li>
        <li>${t("news.article.sampleArticle.content.achievements.safety")}</li>
        <li>${t("news.article.sampleArticle.content.achievements.uptime")}</li>
      </ul>
      
      <h3>${t(
        "news.article.sampleArticle.content.technicalImplementation"
      )}</h3>
      <p>${t("news.article.sampleArticle.content.technicalText")}</p>
      
      <h3>${t("news.article.sampleArticle.content.technologiesUsed")}</h3>
      <ul>
        <li>${t("news.article.sampleArticle.content.technologies.plc")}</li>
        <li>${t("news.article.sampleArticle.content.technologies.scada")}</li>
        <li>${t("news.article.sampleArticle.content.technologies.iot")}</li>
        <li>${t(
          "news.article.sampleArticle.content.technologies.maintenance"
        )}</li>
        <li>${t("news.article.sampleArticle.content.technologies.energy")}</li>
      </ul>
      
      <h3>${t("news.article.sampleArticle.content.clientTestimonial")}</h3>
      <blockquote>
        "${t("news.article.sampleArticle.content.testimonialText")}"
      </blockquote>
      
      <h3>${t("news.article.sampleArticle.content.futureCollaboration")}</h3>
      <p>${t("news.article.sampleArticle.content.futureText")}</p>
      
      <p>${t("news.article.sampleArticle.content.conclusionText")}</p>
    `,
    author: t("news.article.author"),
    date: "2024-12-15",
    category: t("news.article.categories.projectSuccess"),
    tags: [
      t("products:tags.industrialAutomation"),
      t("products:tags.plcSystems"),
      t("products:tags.scada"),
      t("products:tags.manufacturing"),
      t("products:tags.processOptimization"),
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      [t("news.article.categories.projectSuccess")]:
        "bg-primary/10 text-primary border-primary/20",
      [t("news.article.categories.technology")]:
        "bg-accent/10 text-accent-foreground border-accent/20",
      [t("news.article.categories.industryNews")]:
        "bg-secondary/10 text-secondary border-secondary/20",
      [t("news.article.categories.companyUpdate")]:
        "bg-primary/20 text-primary border-primary/30",
    };
    return colors[category] || "bg-muted text-foreground border-border";
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} - Powerton Engineering News</title>
        <meta name="description" content={article.excerpt} />
        <meta
          property="og:title"
          content={`${article.title} - Powerton Engineering News`}
        />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/news">
              <Button
                variant="ghost"
                className="text-primary hover:text-primary/80"
              >
                <ArrowLeft className="w-4 h-4 me-2 rtl-flip" />
                {t("news.article.backToNews")}
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <div className="mb-6">
              <Badge className={getCategoryColor(article.category)}>
                {article.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.date)}</span>
              </div>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                <Share2 className="w-4 h-4 me-1 rtl-flip" />
                <span className="text-wrap-safe">
                  {t("news.article.share")}
                </span>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-muted-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              {t("news.article.cta.title")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("news.article.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t("news.article.cta.contactTeam")}
                </Button>
              </Link>
              <Link href="/quote">
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {t("news.article.cta.requestQuote")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {t("news.article.relatedArticles.title")}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <Badge className="bg-primary/10 text-primary border-primary/30 mb-3">
                  {t("news.article.categories.technology")}
                </Badge>
                <h4 className="font-semibold text-foreground mb-2">
                  {t("news.article.relatedArticles.iotTrends.title")}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t("news.article.relatedArticles.iotTrends.excerpt")}
                </p>
                <Link href="/news/industrial-iot-trends">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 text-primary hover:text-primary/80"
                  >
                    {t("news.article.relatedArticles.readMore")}
                  </Button>
                </Link>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <Badge className="bg-green-100 text-green-800 border-green-300 mb-3">
                  {t("news.article.categories.projectSuccess")}
                </Badge>
                <h4 className="font-semibold text-foreground mb-2">
                  {t("news.article.relatedArticles.energyManagement.title")}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {t("news.article.relatedArticles.energyManagement.excerpt")}
                </p>
                <Link href="/news/energy-management-success">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 text-primary hover:text-primary/80"
                  >
                    {t("news.article.relatedArticles.readMore")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
