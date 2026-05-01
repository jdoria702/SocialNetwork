import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen overflow-hidden bg-[#f5f1e8] text-[#101010]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(196,214,255,0.55),_transparent_30%),linear-gradient(135deg,_rgba(255,255,255,0.8),_rgba(245,241,232,0.96))]" />
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#ff8a65]/20 blur-3xl" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#7dd3fc]/20 blur-3xl" />

      <section className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-12 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Social network starter build
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
                Build the feed, profile, and conversation layer one slice at a time.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-black/70 sm:text-xl">
                The app now has a working Prisma-backed users API and a cleaner
                starting point. Next up: auth, posts, and a feed that feels alive.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <Link
                href="/users/new"
                className="rounded-full bg-[#101010] px-5 py-3 text-white transition-transform hover:-translate-y-0.5"
              >
                Create user
              </Link>
              <Link
                href="/api/users"
                className="rounded-full bg-[#101010] px-5 py-3 text-white transition-transform hover:-translate-y-0.5"
              >
                View users API
              </Link>
              <Link
                href="mailto:you@example.com"
                className="rounded-full border border-black/15 bg-white/75 px-5 py-3 text-[#101010] backdrop-blur transition-transform hover:-translate-y-0.5"
              >
                Add the next feature
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-[0_20px_80px_rgba(16,16,16,0.12)] backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/45">
                  Starter checklist
                </p>
                <h2 className="mt-2 text-2xl font-semibold">MVP roadmap</h2>
              </div>
              <div className="rounded-2xl bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-700">
                phase 1
              </div>
            </div>

            <div className="space-y-4 text-sm leading-6 text-black/72">
              <div className="rounded-2xl border border-black/8 bg-white px-4 py-4">
                <p className="font-semibold text-black">1. Auth</p>
                <p>Sign up, log in, and protect routes.</p>
              </div>
              <div className="rounded-2xl border border-black/8 bg-white px-4 py-4">
                <p className="font-semibold text-black">2. Profiles</p>
                <p>Personal bio, avatar, and user pages.</p>
              </div>
              <div className="rounded-2xl border border-black/8 bg-white px-4 py-4">
                <p className="font-semibold text-black">3. Posts and feed</p>
                <p>Create posts, list them, and wire the home feed.</p>
              </div>
              <div className="rounded-2xl border border-black/8 bg-white px-4 py-4">
                <p className="font-semibold text-black">4. Social actions</p>
                <p>Likes, comments, follows, and notifications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
