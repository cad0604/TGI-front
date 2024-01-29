import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Personal Credit Repair Sign up",
  description: "Generated by create next app",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <> {children}</>;
}