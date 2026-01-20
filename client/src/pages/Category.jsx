import { useParams, Link } from "react-router-dom"
import { articles } from "../data/articles"

const Category = () => {
  const { category } = useParams()

  // Gets the filtered article list which are of the specified category.
  const filtered = articles.filter(
    a => a.category === category
  )

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* Category Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {category}
        </h1>

        {/* Article List */}
        {filtered.length === 0 ? (
          <p className="text-gray-500">
            No articles available in this category.
          </p>
        ) : (
          <div className="grid gap-4">
            {filtered.map(article => (
              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="block p-5 bg-[#ea8532] border border-orange-300 rounded-lg shadow-md
           hover:bg-[#e6b242] transition-all duration-200"
              >
                <h2 className="text-lg font-semibold text-gray-600">
                  {article.title}
                </h2>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default Category;