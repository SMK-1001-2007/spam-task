import { useParams, Link } from "react-router-dom"
import { articles } from "../data/articles"
import { autoLinkContent } from "../utils/autoLinkContent";

const Article = () => {
  const { slug } = useParams()

  const article = articles.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Article not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-12">

        {/* Breadcrumb */}
        <div className="mb-4 text-sm text-gray-500">
          <Link
            to={`/category/${article.category}`}
            className="text-gray-600 hover:underline"
          >
            {article.category}
          </Link>
          <span className="mx-2">/</span>
          <span>{article.title}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>

        {/* Article Content */}
        <div className="bg-[#FFA84D] border border-orange-300 rounded-xl shadow-lg p-6 leading-relaxed text-gray-900">
          {article.content
            .trim()
            .split(/\n\s*\n/)
            .map((para, idx) => (
              <p key={idx} className="mb-4">
                {autoLinkContent(para, articles, article.slug)}
              </p>
            ))}
        </div>


      </div>
    </div>
  )
}

export default Article;