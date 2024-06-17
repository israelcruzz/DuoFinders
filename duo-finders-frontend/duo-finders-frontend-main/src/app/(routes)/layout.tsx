import { Avatar } from "@/components/avatar";
import MenuNavbar from "@/components/menu-navbar";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`flex mr-6  justify-between`}>
      <MenuNavbar />

      {children}

      <section className="h-full min-w-24 flex justify-center py-4 xl:py-4">
        <Link href="/profile">
          <Avatar />
        </Link>
      </section>
    </main>
  );
}
