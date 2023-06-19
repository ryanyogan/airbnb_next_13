import getCurrentUser from "@/actions/get-current-user";
import getListingById from "@/actions/get-listing-by-id";
import getReservations from "@/actions/get-reservations";
import EmptyState from "@/components/empty-state";
import ListingClient from "@/components/listings/listing-client";

interface IParams {
  listingId?: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);

  if (!listing) {
    return <EmptyState />;
  }

  return (
    <ListingClient
      reserverations={reservations}
      listing={listing}
      currentUser={currentUser}
    />
  );
}
