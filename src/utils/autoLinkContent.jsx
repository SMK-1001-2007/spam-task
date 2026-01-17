import { Link } from "react-router-dom"

export function autoLinkContent(text, articles, currentSlug) {
  if (!text) return text

  let nodes = [text]
  const linkedTitles = new Set()

  const titles = articles
    .filter(a => a.slug !== currentSlug)
    .map(a => ({ title: a.title, slug: a.slug }))
    .sort((a, b) => b.title.length - a.title.length)

  titles.forEach(({ title, slug }) => {
    if (linkedTitles.has(title)) return

    const regex = new RegExp(`\\b${title}\\b`)

    nodes = nodes.flatMap(node => {
      if (typeof node !== "string") return [node]

      const match = node.match(regex)
      if (!match) return [node]

      const index = match.index
      const before = node.slice(0, index)
      const after = node.slice(index + title.length)

      linkedTitles.add(title)

      return [
        before,
        <Link
          key={`${title}-${slug}`}
          to={`/articles/${slug}`}
          className="text-blue-800 font-medium hover:underline"
        >
          {title}
        </Link>,
        after
      ]
    })
  })

  return nodes
}
