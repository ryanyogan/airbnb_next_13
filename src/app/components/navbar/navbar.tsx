"use client";

import { SafeUser } from "@/app/types";
import Container from "../container";
import Logo from "./logo";
import Search from "./search";
import UserMenu from "./user-menu";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

export default function Navbar({ currentUser }: NavbarProps) {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flow-row items-center justify-between gap-3 md:gap-0">
            <Logo />

            <Search />

            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
}
