import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gym Streak Tracker",
  description: "Track your daily exercises, cardio, food intake, and weight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-bold">
                  Gym Streak Tracker
                </Link>
                <div className="flex space-x-4">
                  <Link
                    href="/"
                    className="px-3 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/exercise-library"
                    className="px-3 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Library
                  </Link>
                  <Link
                    href="/exercises"
                    className="px-3 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Exercises
                  </Link>
                  <Link
                    href="/cardio"
                    className="px-3 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Cardio
                  </Link>
                  <Link
                    href="/food"
                    className="px-3 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Food
                  </Link>
                  <Link
                    href="/weight"
                    className="px-3 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Weight
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
