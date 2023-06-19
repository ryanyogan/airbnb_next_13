import getCurrentUser from "@/app/actions/get-current-user";
import getListingById from "@/app/actions/get-listing-by-id";
import getReservations from "@/app/actions/get-reservations";
import ClientOnly from "@/app/components/client-only";
import EmptyState from "@/app/components/empty-state";
import ListingClient from "@/app/components/listings/listing-client";

interface IParams {
  listingId?: string;
}

export default async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
  const reservations = await getReservations(params);

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        reserverations={reservations}
        listing={listing}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
