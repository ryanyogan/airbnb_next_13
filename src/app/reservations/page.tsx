import getCurrentUser from "@/actions/get-current-user";
import getReservations from "@/actions/get-reservations";
import ClientOnly from "@/components/client-only";
import EmptyState from "@/components/empty-state";
import ReservationsClient from "@/components/reservations/reservations-client";

export default async function Reserverations() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Hmmmm" subTitle="Please log in" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });
  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No reservations found"
          subTitle="It looks like your properties have no reservations"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
