import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { articles } from "../data/articles"

export default function Home() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const results =
    query.length > 0
      ? articles.filter(article =>
          article.title.toLowerCase().includes(query.toLowerCase())
        )
      : []

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl px-10 py-20">

      {/* Search Bar */}
      <div className="mb-16 relative max-w-xl">
        <input
          type="text"
          placeholder="Search WikiNITT"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="
            w-full px-5 py-3
            border border-[#080210]
            rounded-md
            focus:outline-none
            focus:ring-2 focus:ring-[#575558]
            bg-[#e4dfb6]
            text-[#1f2937]
            placeholder-[#6b7280]
          "
        />

        {/* Search Results */}
        {results.length > 0 && (
          <div
            className="
              absolute z-10 mt-2 w-full
              bg-[#e6eac3]
              border border-[#595b5e]
              rounded-md
              shadow-sm
            "
          >
            {results.map(article => (
              <div
                key={article.id}
                onClick={() => {
                  navigate(`/articles/${article.slug}`)
                  setQuery("")
                }}
                className="
                  px-5 py-3
                  cursor-pointer
                  text-[#111827]
                  hover:bg-[#dbe2bd]
                "
              >
                {article.title}
              </div>
            ))}
          </div>
        )}
      </div>


        {/* Title */}
        <h1 className="font-serif text-5xl font-bold text-gray-900 mb-8">
          WikiNITT
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          A living, community-driven knowledge archive for the
          National Institute of Technology, Tiruchirappalli.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-10" />

        {/* Long Description */}
        <div className="space-y-6 text-gray-700 leading-loose text-[17px]">
          <p>
            WikiNITT is an attempt to document the institutional memory
            of NIT Trichy - its departments, hostels, traditions,
            student life, and the countless experiences that define
            campus culture.
          </p>

          <p>
            Unlike official portals that focus on administration,
            WikiNITT focuses on context: how things are structured,
            how they are experienced, and how they evolve over time.
            From academic departments to iconic festivals like Pragyan,
            Festember and NITTFEST, this platform aims to provide clarity
            and continuity.
          </p>

          <p>
            The platform is designed to be minimal, searchable, and
            extensible. Articles are interconnected, allowing readers
            to navigate naturally between related topics, much like
            a traditional encyclopedia - but tailored for campus life.
          </p>

          <p className="italic text-gray-600">
            This project is a prototype and can grow into a fully
            community-maintained knowledge base in the future.
          </p>
        </div>

      </div>
    </div>
  )
}
