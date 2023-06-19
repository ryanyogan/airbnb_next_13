import { SafeListing, SafeUser } from "@/types";
import Container from "../container";
import Heading from "../heading";
import ListingCard from "../listings/listing-card";

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

export default function FavoritesClient({
  listings,
  currentUser,
}: FavoritesClientProps) {
  return (
    <Container>
      <Heading title="listings" subTitle="Your listings on your properties" />
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
