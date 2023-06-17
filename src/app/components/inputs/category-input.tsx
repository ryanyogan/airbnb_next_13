"use client";

import clsx from "clsx";
import { IconType } from "react-icons";

interface CategoryInputProps {
  onClick: (value: string) => void;
  icon: IconType;
  label: string;
  selected?: boolean;
}
export default function CategoryInput({
  onClick,
  icon: Icon,
  label,
  selected,
}: CategoryInputProps) {
  return (
    <div
      onClick={() => onClick(label)}
      className={clsx(
        "rounded-xl border-2 p-4 flex flex-col hover:border-black cursor-pointer transition",
        selected ? "border-black" : "border-neutral-200"
      )}
    >
      <Icon size={30} />
      <div className="font-semibold">{label}</div>
    </div>
  );
}
