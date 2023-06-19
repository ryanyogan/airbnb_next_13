"use client";

import { PuffLoader } from "react-spinners";
import ClientOnly from "./client-only";

export default function Loader() {
  return (
    <ClientOnly>
      <div className="h-[70vh] flex flex-col justify-center items-center">
        <PuffLoader size={100} color="red" />
      </div>
    </ClientOnly>
  );
}
