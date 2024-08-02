"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Container from "../Container";

function Navbar() {
  return (
    <div className="sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton afterSwitchSessionUrl="/" />
        </SignedIn>
      </Container>
    </div>
  );
}

export default Navbar;
