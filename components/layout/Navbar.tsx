"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SearchInput from "../SearchInput/SearchInput";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import NavMenu from "./NavMenu";

function Navbar() {
  const router = useRouter();

  const vs = "outline";

  return (
    <div className="sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <nav className="flex justify-between items-center">
          <div
            className="flex cursor-pointer items-center gap-1"
            onClick={() => router.push("/")}
          >
            <Image
              src="/coconut-tree.svg"
              width={30}
              height={30}
              alt="brand logo"
            />
            <h2 className="text-xl">Ating Tahanan Private House</h2>
          </div>

          <SearchInput />

          <div className="flex gap-3 items-center">
            <ModeToggle />

            <NavMenu />

            <SignedOut>
              <SignInButton>
                <Button variant={"outline"} size="sm">
                  Sign-in
                </Button>
              </SignInButton>

              <Button size="sm" onClick={() => router.push("/sign-up")}>
                Sign-up
              </Button>
            </SignedOut>

            <SignedIn>
              <UserButton afterSwitchSessionUrl="/" />
            </SignedIn>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
