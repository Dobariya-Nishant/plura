import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function SignInPage() {
  return <SignIn path="/agency/sign-in" />;
}
