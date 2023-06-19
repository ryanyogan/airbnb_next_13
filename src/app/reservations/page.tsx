import getCurrentUser from "@/actions/get-current-user";
import getReservations from "@/actions/get-reservations";
import EmptyState from "@/components/empty-state";
import ReservationsClient from "@/components/reservations/reservations-client";

export default async function Reserverations() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Hmmmm" subTitle="Please log in" />;
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });
  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subTitle="It looks like your properties have no reservations"
      />
    );
  }

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
}
