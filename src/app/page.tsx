import Auth from "@/components/Auth";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 mt-5 lg:px-6 h-14 flex items-center">
        <Logo />
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Auth />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl xl:text-6xl/none">
                    Harness the Power of AI to Generate Engaging, High-Quality Content Effortlessly.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl">
                    CreativeAi, your AI-powered content creation platform, enables you to generate compelling and unique content in minutes, empowering your creative workflow.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-lg font-bold">Rapid Content Generation</h3>
                <p className="text-muted-foreground">
                  Produce top-tier content with unparalleled speed using our advanced AI tools.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-lg font-bold">Optimized for Performance</h3>
                <p className="text-muted-foreground">
                  Experience seamless and efficient content creation, optimized for your workflow.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-lg font-bold">Built-in Security</h3>
                <p className="text-muted-foreground">
                  Keep your projects secure with our robust, AI-enhanced security protocols.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-lg font-bold">Creative Freedom</h3>
                <p className="text-muted-foreground">
                  Unlock your creativity with a suite of customizable tools that adapt to your unique style and needs.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-lg font-bold">Collaborative Workspace</h3>
                <p className="text-muted-foreground">
                  Collaborate with your team in real-time, sharing ideas and iterating on content with ease.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-lg font-bold">AI-Driven Insights</h3>
                <p className="text-muted-foreground">
                  Gain valuable insights into your content’s performance and audience engagement with our AI analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="flex flex-col sm:flex-row justify-center items-center py-6 w-full shrink-0 px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground text-center">&copy; 2024 CreativeAi. All rights reserved.</p>
      </footer>

    </div>
  );
}
