"use client";

import { signOut } from "next-auth/react";
import { HiOutlineLogout } from "react-icons/hi";

export function LogoutButton() {
  return (
    <button className="text-white flex gap-3" onClick={() => signOut()}>
      <HiOutlineLogout size={24} />
      <h1 className="text-base">Logout</h1>
    </button>
  );
}
