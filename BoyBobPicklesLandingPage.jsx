import React, { useState } from "react";

const navItems = [
  { label: "Story", href: "#story" },
  { label: "First Drop", href: "#first-drop" },
  { label: "Join", href: "#join" },
];

const identityCards = [
  "Drink the juice first",
  "Finish the jar proudly",
  "Brine lovers welcome",
];

const productNotes = ["Small batch", "Coming soon", "Crisp, briny, bright"];

export default function BoyBobPicklesLandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#2E2E2E] antialiased selection:bg-[#D6A84F]/30">
      <style>{`
        html { scroll-behavior: smooth; }
        .grain-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: radial-gradient(rgba(79,111,82,0.08) 0.6px, transparent 0.6px);
          background-size: 6px 6px;
          opacity: 0.2;
          mask-image: linear-gradient(to bottom, black 20%, transparent 100%);
        }
        .section-fade {
          animation: riseIn 650ms ease-out both;
        }
        @keyframes riseIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header className="sticky top-0 z-40 border-b border-[#4F6F52]/10 bg-[#F7F3EC]/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="font-serif text-lg tracking-wide text-[#2E2E2E]">
            Boy Bob Pickles
          </a>

          <ul className="hidden items-center gap-8 text-sm text-[#2E2E2E]/80 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-[#4F6F52]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#join"
            className="rounded-full border border-[#4F6F52] bg-[#4F6F52] px-4 py-2 text-sm font-medium text-[#F7F3EC] transition hover:bg-[#3f5842] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84F] focus-visible:ring-offset-2"
          >
            Join the Juice Club
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-[#4F6F52]/10">
          <div className="grain-overlay" aria-hidden="true" />
          <div className="section-fade mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#4F6F52]">Small batch brand story</p>
              <h1 className="font-serif text-5xl leading-tight text-[#2E2E2E] sm:text-6xl">Boy Bob Pickles</h1>
              <p className="mt-3 font-serif text-2xl text-[#A94438] sm:text-3xl">For the juice drinkers.</p>
              <p className="mt-7 max-w-xl text-base leading-7 text-[#2E2E2E]/85 sm:text-lg">
                A playful pickle brand inspired by one very energetic boy, a longtime family nickname, and a very
                serious love of pickle juice.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#join"
                  className="rounded-full border border-[#4F6F52] bg-[#4F6F52] px-6 py-3 text-sm font-medium text-[#F7F3EC] transition hover:bg-[#3f5842] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84F] focus-visible:ring-offset-2"
                >
                  Join the Juice Club
                </a>
                <a
                  href="#story"
                  className="text-sm font-medium text-[#4F6F52] underline-offset-4 transition hover:text-[#2E2E2E] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84F] focus-visible:ring-offset-2"
                >
                  Read the story
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-[#4F6F52]/15 bg-[#EFE7D8] p-8 shadow-[0_16px_40px_rgba(46,46,46,0.08)]">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#D6A84F]/50 bg-[#D6A84F]/20" />
                <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full border border-[#A94438]/40 bg-[#A94438]/10" />

                <div className="relative space-y-6">
                  <div className="inline-flex rounded-full border border-[#4F6F52]/30 bg-[#F7F3EC] px-4 py-1 text-xs uppercase tracking-[0.18em] text-[#4F6F52]">
                    First Drop Coming Soon
                  </div>
                  <div className="rounded-2xl border border-[#4F6F52]/20 bg-[#F7F3EC] p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#4F6F52]">Vintage label series</p>
                    <h2 className="mt-3 font-serif text-3xl text-[#2E2E2E]">Duke’s Dill</h2>
                    <p className="mt-2 text-sm text-[#2E2E2E]/75">Designed for crisp bites, briny pours, and unapologetic juice sipping.</p>
                  </div>
                  <p className="font-serif text-lg italic text-[#2E2E2E]/80">
                    “Made for people who know the best part of the jar is still liquid.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#4F6F52]/10 bg-[#F7F3EC]">
          <div className="mx-auto w-full max-w-5xl px-6 py-20 text-center lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl">You don’t just eat the pickle.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#2E2E2E]/80 sm:text-lg">
              You drink the juice first. You save the jar. You sneak a sip of brine while nobody’s looking. You’ve
              always believed the best part is what everyone else throws away.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {identityCards.map((card) => (
                <article
                  key={card}
                  className="rounded-2xl border border-[#4F6F52]/15 bg-white/70 px-6 py-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="font-serif text-xl">{card}</h3>
                </article>
              ))}
            </div>

            <a
              href="#join"
              className="mt-8 inline-block text-sm font-medium text-[#4F6F52] underline-offset-4 transition hover:text-[#2E2E2E] hover:underline"
            >
              Yep, that’s me
            </a>
          </div>
        </section>

        <section id="story" className="border-b border-[#4F6F52]/10 bg-[#FBF8F2]">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_320px] lg:px-8">
            <article className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-[#4F6F52]">Our Story</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">It started with Baby Bob.</h2>

              <div className="mt-8 space-y-6 text-base leading-8 text-[#2E2E2E]/85 sm:text-lg">
                <p>
                  His full name is Robert Duke. When he was a newborn, calling him “Bob” felt absurdly grown-up for
                  such a tiny person, so “Baby Bob” just stuck. It fit him then: small, sweet, and always wriggling his
                  way into the center of our day.
                </p>
                <p>
                  Around age eight, he made it very clear that “Baby Bob” was retired — especially in front of his
                  friends. Duke fits him perfectly now: confident, funny, and in motion from sunrise to bedtime. “Boy
                  Bob” became our affectionate bridge between who he was and who he is.
                </p>
                <p>
                  He runs laps around the house for hours and loves pickles with unusual commitment. Not just the pickle
                  itself — the juice, the brine, the whole jar. This brand came from noticing something specific and
                  lovable, laughing about it, and deciding it might deserve a label of its own.
                </p>
              </div>
            </article>

            <aside className="h-fit rounded-2xl border border-[#4F6F52]/15 bg-[#EFE7D8] p-6 lg:mt-24">
              <p className="text-xs uppercase tracking-[0.2em] text-[#4F6F52]">Editorial Note</p>
              <blockquote className="mt-4 font-serif text-xl leading-8 text-[#2E2E2E]">
                “Some kids collect trophies. Ours collects empty pickle jars.”
              </blockquote>
            </aside>
          </div>
        </section>

        <section id="first-drop" className="border-b border-[#4F6F52]/10 bg-[#F7F3EC]">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#4F6F52]">First release</p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">First Drop: Duke’s Dill</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#2E2E2E]/80 sm:text-lg">
                Small batch and coming soon. Made for people who actually finish the jar — because the juice matters
                just as much as the pickle.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-[#2E2E2E]/85">
                {productNotes.map((note) => (
                  <li key={note} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#D6A84F]" aria-hidden="true" />
                    {note}
                  </li>
                ))}
              </ul>
              <a
                href="#join"
                className="mt-8 inline-flex rounded-full border border-[#4F6F52] px-6 py-3 text-sm font-medium text-[#4F6F52] transition hover:bg-[#4F6F52] hover:text-[#F7F3EC]"
              >
                Get first access
              </a>
            </div>

            <div className="rounded-3xl border border-[#4F6F52]/15 bg-white/75 p-7 shadow-[0_14px_30px_rgba(46,46,46,0.08)]">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-2xl">Duke’s Dill</h3>
                <span className="rounded-full border border-[#A94438]/30 bg-[#A94438]/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#A94438]">
                  Coming Soon
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-[#4F6F52]/15 bg-[#EFE7D8] p-6 text-center">
                <div className="mx-auto h-40 w-28 rounded-t-[42%] rounded-b-[28%] border-2 border-[#4F6F52]/35 bg-gradient-to-b from-[#f9f5ed] to-[#e9dfcd]" />
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#4F6F52]">Jar mockup</p>
                <p className="mt-2 text-sm text-[#2E2E2E]/75">Built to look good on a shelf and better half-empty.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#4F6F52]/10 bg-[#FBF8F2]">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl">The running explains a lot.</h2>
              <p className="mt-6 text-base leading-7 text-[#2E2E2E]/82 sm:text-lg">
                Boy Bob runs constantly — hallway sprints, kitchen laps, victory loops for no clear reason. At some
                point, his love for pickle juice started to feel less random and more exactly on-brand.
              </p>
              <p className="mt-4 text-base leading-7 text-[#2E2E2E]/82 sm:text-lg">
                And honestly, he’s not alone. Plenty of runners and athletes have their own pickle juice rituals. We
                just happen to be building ours into a jar worth talking about.
              </p>
            </div>

            <div className="rounded-2xl border border-[#4F6F52]/15 bg-[#EFE7D8] p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#4F6F52]">Field Notes</p>
              <blockquote className="mt-4 font-serif text-2xl leading-9 text-[#2E2E2E]">
                “Fast feet. Empty jar. Repeat.”
              </blockquote>
              <div className="mt-6 flex gap-2" aria-hidden="true">
                <span className="h-1 w-12 rounded-full bg-[#4F6F52]/50" />
                <span className="h-1 w-20 rounded-full bg-[#4F6F52]/30" />
                <span className="h-1 w-8 rounded-full bg-[#4F6F52]/20" />
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="bg-[#4F6F52]">
          <div className="mx-auto w-full max-w-5xl px-6 py-20 lg:px-8">
            <div className="rounded-3xl border border-white/20 bg-[#4F6F52] p-8 text-[#F7F3EC] sm:p-12">
              <h2 className="font-serif text-4xl sm:text-5xl">Join the Juice Club</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#F7F3EC]/85 sm:text-lg">
                Be the first to hear when the first jars drop. And maybe more importantly, when the juice does.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 max-w-xl" noValidate>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#F7F3EC]">
                  Email address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@brinelover.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    className="w-full rounded-full border border-white/30 bg-white/95 px-5 py-3 text-[#2E2E2E] placeholder:text-[#2E2E2E]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A84F]"
                  />
                  <button
                    type="submit"
                    className="rounded-full border border-[#D6A84F] bg-[#D6A84F] px-6 py-3 text-sm font-semibold text-[#2E2E2E] transition hover:bg-[#c79a43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Join
                  </button>
                </div>
              </form>

              {submitted && (
                <p className="mt-5 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-[#F7F3EC]" role="status" aria-live="polite">
                  You’re on the list. Juice drinkers first.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2E2E2E] text-[#F7F3EC]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div>
            <p className="font-serif text-lg">Boy Bob Pickles</p>
            <p className="mt-1 text-[#F7F3EC]/80">For the juice drinkers.</p>
          </div>
          <p className="max-w-lg text-[#F7F3EC]/70">
            Inspired by Duke. Formerly Baby Bob, but don’t say that too loud.
          </p>
          <div className="flex gap-4 text-[#F7F3EC]/80">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
