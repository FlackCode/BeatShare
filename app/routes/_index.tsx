import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "BeatShare" },
    { name: "description", content: "Welcome to BeatShare!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col">
      <div className="h-screen">
        <nav className="flex items-center justify-between px-16 py-4 border-b border-gray-400">
          <h1 className="text-3xl font-bold">BeatShare</h1>
          <div className="flex gap-4">
            <a href="/login" className="font-bold">Login</a>
            <a href="/register" className="font-bold">Register</a>
          </div>
        </nav>

        <main className="flex flex-1 items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-6xl font-bold">Welcome to BeatShare</h1>
            <p className="text-2xl mt-4">
              Share your favorite beats with the world!
            </p>
          </div>
        </main>
      </div>

      <section className="flex flex-col items-center justify-center py-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose BeatShare?</h2>
          <div className="flex gap-8">
            <div className="max-w-xs text-center">
              <h3 className="text-2xl font-semibold">High Quality</h3>
              <p className="mt-2">Experience the best sound quality with our platform.</p>
            </div>
            <div className="max-w-xs text-center">
              <h3 className="text-2xl font-semibold">Community</h3>
              <p className="mt-2">Join a vibrant community of music enthusiasts.</p>
            </div>
            <div className="max-w-xs text-center">
              <h3 className="text-2xl font-semibold">Easy Sharing</h3>
              <p className="mt-2">Share your favorite beats with just a few clicks.</p>
            </div>
          </div>
        </section>

      <footer className="flex items-center justify-center px-16 py-4 border-t border-gray-400">
        <p>&copy; 2025 BeatShare</p>
      </footer>
    </div>
  );
}
