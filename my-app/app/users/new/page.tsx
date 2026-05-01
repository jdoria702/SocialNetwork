"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormState = {
  name: string;
  username: string;
  email: string;
  password: string;
  bio: string;
};

export default function NewUserPage() {
  const router = useRouter();

  const [form, setForm] = useState<FormState>({
    name: "",
    username: "",
    email: "",
    password: "",
    bio: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name || undefined,
          username: form.username,
          email: form.email,
          password: form.password,
          bio: form.bio || undefined,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data?.error ?? "Failed to create user.");
        return;
      }

      setSuccessMessage(`User @${data.username} created.`);
      setForm({
        name: "",
        username: "",
        email: "",
        password: "",
        bio: "",
      });

      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-10">
      <div className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">Create user</h1>
        <p className="mt-2 text-sm text-black/65">
          This posts to your existing <code>/api/users</code> route.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name (optional)
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              className="w-full rounded-xl border border-black/15 px-3 py-2 outline-none focus:border-black/40"
              placeholder="Jason"
            />
          </div>

          <div>
            <label htmlFor="username" className="mb-1 block text-sm font-medium">
              Username *
            </label>
            <input
              id="username"
              type="text"
              required
              value={form.username}
              onChange={(e) =>
                setForm((s) => ({ ...s, username: e.target.value }))
              }
              className="w-full rounded-xl border border-black/15 px-3 py-2 outline-none focus:border-black/40"
              placeholder="jason"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              className="w-full rounded-xl border border-black/15 px-3 py-2 outline-none focus:border-black/40"
              placeholder="jason@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium">
              Password *
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={8}
              value={form.password}
              onChange={(e) =>
                setForm((s) => ({ ...s, password: e.target.value }))
              }
              className="w-full rounded-xl border border-black/15 px-3 py-2 outline-none focus:border-black/40"
              placeholder="At least 8 characters"
            />
          </div>

          <div>
            <label htmlFor="bio" className="mb-1 block text-sm font-medium">
              Bio (optional)
            </label>
            <textarea
              id="bio"
              value={form.bio}
              onChange={(e) => setForm((s) => ({ ...s, bio: e.target.value }))}
              rows={4}
              className="w-full rounded-xl border border-black/15 px-3 py-2 outline-none focus:border-black/40"
              placeholder="Tell people about yourself..."
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          )}

          {successMessage && (
            <p className="rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-black px-4 py-2 text-white transition disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Creating..." : "Create user"}
          </button>
        </form>
      </div>
    </main>
  );
}