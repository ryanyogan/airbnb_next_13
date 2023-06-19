"use client";

import useCountries from "@/hooks/use-countries";
import { SafeUser } from "@/types";
import Image from "next/image";
import Heading from "../heading";
import HeartButton from "../heart-button";

interface ListingHeadProps {
  title: string;
  imageSrc: string;
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

export default function ListingHead({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser,
}: ListingHeadProps) {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subTitle={`${location?.region}, ${location?.label}`}
      />

      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image
          alt="Image"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />

        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
}
