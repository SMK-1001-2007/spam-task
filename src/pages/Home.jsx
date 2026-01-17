export default function Home() {
  return (
    <div
      className="min-h-screen">
      <div className="max-w-4xl px-10 py-20">

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
        <div className="w-24 h-px bg-gray-400 mb-10" />

        {/* Long Description */}
        <div className="space-y-6 text-gray-700 leading-loose text-[17px]">
          <p>
            WikiNITT is an attempt to document the institutional memory
            of NIT Trichy — its departments, hostels, traditions,
            student life, and the countless experiences that define
            campus culture.
          </p>

          <p>
            Unlike official portals that focus on administration,
            WikiNITT focuses on context: how things are structured,
            how they are experienced, and how they evolve over time.
            From academic departments to iconic festivals like Pragyan,
            this platform aims to provide clarity and continuity.
          </p>

          <p>
            The platform is designed to be minimal, searchable, and
            extensible. Articles are interconnected, allowing readers
            to navigate naturally between related topics, much like
            a traditional encyclopedia — but tailored for campus life.
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
