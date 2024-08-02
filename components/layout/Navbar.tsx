"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function Navbar() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton afterSwitchSessionUrl="/" />
      </SignedIn>
    </div>
  );
}

export default Navbar;
