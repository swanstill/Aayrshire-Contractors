import Reveal from "./Reveal";

const barkReviews = [
  {
    text: "Absolutely delighted with my new driveway. The team were very professional and friendly — the job was finished in less time than estimated and the quality is outstanding.",
    name: "Alison",
    location: "Verified Review",
    date: "May 2025",
    service: "Driveway Installation",
  },
  {
    text: "Simply exquisite work. Beautifully executed from start to finish. Every detail was handled with care and precision. I couldn't be happier with the result.",
    name: "Gregory",
    location: "",
    date: "April 2025",
    service: "Paving & Landscaping",
  },
];

const facebookReviews = [
  {
    text: "Fantastic service from start to finish. The team transformed our garden into something we never dreamed possible. Highly professional and friendly. Would recommend to anyone.",
    name: "Margaret L.",
    location: "Aberdeen",
    date: "June 2025",
  },
  {
    text: "First-class work on our patio. Great communication throughout, turned up when they said they would, and left everything spotless. The quality of the paving is exceptional.",
    name: "David R.",
    location: "Aberdeenshire",
    date: "May 2025",
  },
];

function ReviewCard({
  text,
  name,
  location,
  date,
  platform,
  offset = false,
}: {
  text: string;
  name: string;
  location?: string;
  date?: string;
  platform: "bark" | "facebook";
  offset?: boolean;
}) {
  return (
    <div
      className={`bg-[var(--bg-2)] border border-[var(--line)] rounded-2xl p-6 card-hover ${
        offset ? "sm:mt-8" : ""
      }`}
    >
      {/* Platform badge */}
      <div className="flex items-center justify-between mb-4">
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${
            platform === "bark"
              ? "bg-emerald-900/30 text-emerald-400 border border-emerald-800/40"
              : "bg-blue-900/30 text-blue-400 border border-blue-800/40"
          }`}
        >
          {platform === "bark" ? (
            <>
              <i className="fa-solid fa-tree text-[10px]"></i>
              <span>Bark</span>
            </>
          ) : (
            <>
              <i className="fa-brands fa-facebook-f text-[10px]"></i>
              <span>Facebook</span>
            </>
          )}
        </div>
        {date && (
          <span className="text-[11px] text-[var(--muted-2)]">{date}</span>
        )}
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fa-solid fa-star star text-sm"></i>
        ))}
      </div>

      {/* Review text */}
      <p className="text-sm text-[var(--fg-2)] leading-relaxed mb-5">
        &ldquo;{text}&rdquo;
      </p>

      {/* Reviewer info */}
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white ${
            platform === "bark"
              ? "bg-gradient-to-br from-emerald-600 to-emerald-800"
              : "bg-gradient-to-br from-blue-600 to-blue-800"
          }`}
        >
          {platform === "bark" ? (
            <i className="fa-solid fa-tree text-xs"></i>
          ) : (
            <i className="fa-brands fa-facebook-f text-xs"></i>
          )}
        </div>
        <div>
          <div className="text-sm font-semibold text-[var(--fg)]">{name}</div>
          <div className="text-xs text-[var(--muted)]">
            {location || date || `${platform === "bark" ? "Bark" : "Facebook"} Review`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-[50px] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-soft"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left column — Header & platform cards */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="marker-line mb-6">Customer Reviews</div>
              <h2 className="font-display font-extrabold text-4xl lg:text-6xl leading-tight tracking-tight mb-6 text-[var(--fg)]">
                What Our
                <br />
                Customers Say
              </h2>
              <p className="text-[var(--muted)] mb-8 leading-relaxed">
                Ayrshire Contractors is a family run business based in
                Kilmarnock, covering all of Ayrshire offering free quotations
                and advice.
              </p>

              {/* Bark rating card */}
              <a
                href="https://www.bark.com/en/gb/b/aberdeen-contractors/E6KY3n/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--bg-2)] border border-[var(--line)] rounded-2xl p-5 flex items-center gap-4 max-w-md shadow-md mb-4 block hover:border-[var(--accent)] transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-900/40 flex items-center justify-center border border-emerald-800/30 shrink-0">
                  <i className="fa-solid fa-tree text-xl text-emerald-400"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-bold text-sm text-[var(--fg)]">
                      Bark
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="fa-solid fa-star star text-[11px]"
                        ></i>
                      ))}
                    </div>
                    <span className="font-display font-extrabold text-base text-[var(--fg)]">
                      5.0
                    </span>
                  </div>
                  <div className="text-[11px] text-[var(--muted)]">
                    Based on 8 reviews
                  </div>
                </div>
              </a>

              {/* Facebook rating card */}
              <a
                href="https://www.facebook.com/profile.php?id=61587009997112"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--bg-2)] border border-[var(--line)] rounded-2xl p-5 flex items-center gap-4 max-w-md shadow-md block hover:border-[var(--accent)] transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-blue-900/40 flex items-center justify-center border border-blue-800/30 shrink-0">
                  <i className="fa-brands fa-facebook text-xl text-blue-400"></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-bold text-sm text-[var(--fg)]">
                      Facebook
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="fa-solid fa-star star text-[11px]"
                        ></i>
                      ))}
                    </div>
                    <span className="font-display font-extrabold text-base text-[var(--fg)]">
                      5.0
                    </span>
                  </div>
                  <div className="text-[11px] text-[var(--muted)]">
                    Based on 7 reviews
                  </div>
                </div>
              </a>
            </Reveal>
          </div>

          {/* Right column — Review cards */}
          <div className="lg:col-span-7">
            {/* Bark section */}
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-emerald-800/40 to-transparent"></div>
                <span className="text-xs tracking-[0.15em] uppercase font-semibold text-emerald-400/80 flex items-center gap-2">
                  <i className="fa-solid fa-tree text-[10px]"></i>
                  Bark Reviews
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-emerald-800/40 to-transparent"></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                <ReviewCard
                  {...barkReviews[0]}
                  platform="bark"
                />
                <ReviewCard
                  {...barkReviews[1]}
                  platform="bark"
                  offset
                />
              </div>
            </Reveal>

            {/* Facebook section */}
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-blue-800/40 to-transparent"></div>
                <span className="text-xs tracking-[0.15em] uppercase font-semibold text-blue-400/80 flex items-center gap-2">
                  <i className="fa-brands fa-facebook-f text-[10px]"></i>
                  Facebook Reviews
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-blue-800/40 to-transparent"></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <ReviewCard
                  {...facebookReviews[0]}
                  platform="facebook"
                />
                <ReviewCard
                  {...facebookReviews[1]}
                  platform="facebook"
                  offset
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
