import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page - Andhra angel networks",
  description: "This is Sign Up page for Andhra angel networks",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
