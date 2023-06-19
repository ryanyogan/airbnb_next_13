"use client";

import { useRouter } from "next/navigation";
import Button from "./button";
import Heading from "./heading";

interface EmptyStateProps {
  title?: string;
  subTitle?: string;
  showReset?: boolean;
}

export default function EmptyState({
  title = "No exact matches",
  subTitle = "Try changing or removing some of your filters",
  showReset,
}: EmptyStateProps) {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subTitle={subTitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            onClick={() => router.push("/")}
            label="Remove all filters"
            outline
          />
        )}
      </div>
    </div>
  );
}
