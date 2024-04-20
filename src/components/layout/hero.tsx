import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Images } from "@/components/images";
import { ChevronRight } from "lucide-react";
import { LoginButton } from "@/components/auth/login-button";

const Hero = () => {
  return (
    <section>
      <div className="lg:itmes-center container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="text-left text-3xl font-bold sm:text-5xl md:text-6xl">
            Your Ideas, Documents. Welcome to{" "}
            <span className="underline">Muswaddaty</span>
          </h1>
          <p className="mb-8 mt-6 text-lg text-muted-foreground sm:mb-12">
            Our online editor allows you to create, edit, and share documents{" "}
            <br className="hidden md:inline lg:hidden" />
            wherever you are. No installation required.
          </p>
          <div className="flex space-x-4">
            <LoginButton  asChild>
              <Button size="lg">
                Sign in
              </Button>
            </LoginButton>
            <Button className="group" asChild variant="outline" size="lg">
                <Link rel="noopener noreferrer" href="/documents">
                  <span className="flex items-center">
                    Get started
                    <ChevronRight className="ml-2 transition-transform transform group-hover:translate-x-1" />
                  </span>
                </Link>
            </Button>
          </div>
        </div>
        <div className="flex h-[600px] items-center justify-center p-6 sm:h-80">
          <Images.hero className="lg:h-[600px] lg:w-[600px] w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
