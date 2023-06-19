"use client";

import { SafeListing, SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import Container from "../container";
import Heading from "../heading";
import ListingCard from "../listings/listing-card";

interface PropertiesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

export default function PropertiesClient({
  listings,
  currentUser,
}: PropertiesClientProps) {
  const router = useRouter();

  return (
    <Container>
      <Heading
        title="Properties"
        subTitle="Where you've been and where you're going"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
