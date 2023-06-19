import getCurrentUser from "../actions/get-current-user";
import getReservations from "../actions/get-reservations";
import ClientOnly from "../components/client-only";
import EmptyState from "../components/empty-state";
import TripsClient from "../components/trips/trips-client";

export default async function Trips() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subTitle="Please log in" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subTitle="Looks like you have not reserved any trips yet."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <TripsClient reserverations={reservations} currentUser={currentUser} />
    </ClientOnly>
  );
}
