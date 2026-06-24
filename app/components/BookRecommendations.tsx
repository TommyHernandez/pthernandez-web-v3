import {
  LuBookOpen as BookOpen,
  LuStar as Star,
  LuExternalLink as ExternalLink,
} from "react-icons/lu";

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  "Software Craftsmanship": { bg: "#D1E8E0", text: "#2D5C4F" },
  "System Design": { bg: "#D4E3EF", text: "#2B4F6A" },
  "Professional Development": { bg: "#F5EBC2", text: "#6B5810" },
  "Code Quality": { bg: "#F2DEDA", text: "#7A3D35" },
  "UX Design": { bg: "#EDE9E0", text: "#44403C" },
  JavaScript: { bg: "#F5EBC2", text: "#6B5810" },
};

export function BookRecommendations() {
  const books = [
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Software Craftsmanship",
      rating: 5,
      review:
        "The definitive guide to writing maintainable code. Every developer should read this at least twice — once as a junior and once as a senior to truly appreciate its wisdom.",
      why: "Transformed how I approach code structure and naming conventions",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80",
    },
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      category: "System Design",
      rating: 5,
      review:
        "An incredible deep dive into distributed systems fundamentals. Essential for understanding how modern web applications scale.",
      why: "Crucial for building scalable enterprise applications",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      category: "Professional Development",
      rating: 5,
      review:
        "Timeless advice that remains relevant no matter how technology evolves. It's about mindset and approach, not just code.",
      why: "Shaped my professional philosophy as a developer",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80",
    },
    {
      title: "Refactoring",
      author: "Martin Fowler",
      category: "Code Quality",
      rating: 5,
      review:
        "The ultimate guide to improving existing code without breaking functionality. A must-have reference for any serious developer.",
      why: "My go-to resource when working with legacy code",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80",
    },
    {
      title: "Don't Make Me Think",
      author: "Steve Krug",
      category: "UX Design",
      rating: 4,
      review:
        "Short, practical, and eye-opening. Taught me that the best code is useless if users can't understand the interface.",
      why: "Bridges the gap between development and user experience",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80",
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      category: "JavaScript",
      rating: 4,
      review:
        "Essential reading for understanding JavaScript deeply. Despite the language's evolution, these fundamentals remain crucial.",
      why: "Foundation for mastering modern JavaScript frameworks",
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&q=80",
    },
  ];

  const cat = (c: string) =>
    CATEGORY_COLORS[c] ?? { bg: "#EDE9E0", text: "#44403C" };

  return (
    <section
      id="books"
      className="py-28 px-6 bg-white relative overflow-hidden"
    >
      <div
        className="absolute bottom-[-60px] left-[-60px] w-72 h-72 opacity-[0.04]"
        style={{
          background: "#C9A736",
          borderRadius: "50% 40% 60% 50% / 60% 50% 40% 50%",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-5">
          Reading List
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <h2 className="text-5xl font-bold tracking-tight text-[#1C1917] leading-tight">
            Books that changed my code.
          </h2>
        </div>

        {/* Pull quote */}
        <div className="border-l-2 border-[#5B8A7A] pl-6 py-1 mb-16">
          <p className="text-lg text-[#44403C] italic font-light leading-snug">
            "A developer who doesn't read books is like a carpenter who doesn't
            sharpen their tools."
          </p>
          <p className="text-sm text-[#78716C] mt-2 font-light">
            Reading isn't just learning — it's investing in your craft.
          </p>
        </div>

        {/* Books grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-[#FDFBF7] rounded-2xl overflow-hidden border border-[rgba(28,25,23,0.07)] hover:shadow-md transition-shadow duration-300 group flex flex-col"
            >
              {/* Book image */}
              <div className="relative h-44 overflow-hidden bg-[#EDE9E0]">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Stars overlay */}
                <div className="absolute bottom-3 right-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < book.rating
                          ? "fill-[#C9A736] text-[#C9A736]"
                          : "text-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span
                  className="self-start px-2.5 py-1 text-xs font-semibold rounded-full mb-3"
                  style={{
                    background: cat(book.category).bg,
                    color: cat(book.category).text,
                  }}
                >
                  {book.category}
                </span>
                <h3 className="text-base font-bold text-[#1C1917] mb-0.5 group-hover:text-[#5B8A7A] transition-colors">
                  {book.title}
                </h3>
                <p className="text-xs text-[#78716C] font-light mb-3">
                  by {book.author}
                </p>

                <p className="text-xs text-[#44403C] font-light leading-relaxed mb-4">
                  {book.review}
                </p>

                <div className="mt-auto">
                  <div
                    className="rounded-lg px-3 py-2.5 mb-4"
                    style={{ background: cat(book.category).bg }}
                  >
                    <p
                      className="text-xs font-light"
                      style={{ color: cat(book.category).text }}
                    >
                      <span className="font-semibold">Why it matters: </span>
                      {book.why}
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B8A7A] hover:gap-2.5 transition-all group/btn">
                    Find This Book
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Currently reading CTA */}
        <div className="bg-[#F7F4EE] rounded-2xl p-10 border border-[rgba(28,25,23,0.07)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-[#D1E8E0] rounded-xl flex-shrink-0">
              <BookOpen className="w-6 h-6 text-[#2D5C4F]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1C1917] mb-2">
                Currently Reading
              </h3>
              <p className="text-[#44403C] font-light text-sm leading-relaxed max-w-md">
                Always learning, always growing. I typically read 2–3 technical
                books per quarter. Have a recommendation? I'd love to hear it.
              </p>
            </div>
          </div>
          <a href="#contact">
            <button className="shrink-0 px-7 py-3.5 bg-[#1C1917] text-[#F7F4EE] rounded-xl text-sm font-semibold hover:bg-[#2D2923] transition-colors">
              Share a Recommendation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
