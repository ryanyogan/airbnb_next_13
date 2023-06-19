"use client";

interface ErrorStateProps {
  error: Error;
}

import EmptyState from "@/components/empty-state";
import { useEffect } from "react";

export default function ErrorState({ error }: ErrorStateProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyState
      title="Uh Oh"
      subTitle="Something went wrong, please refresh your browser"
    />
  );
}
