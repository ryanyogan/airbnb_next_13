import getCurrentUser from "../../actions/get-current-user";
import getReservations from "../../actions/get-reservations";
import EmptyState from "../../components/empty-state";
import TripsClient from "../../components/trips/trips-client";

export default async function Trips() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subTitle="Please log in" />;
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subTitle="Looks like you have not reserved any trips yet."
      />
    );
  }

  return (
    <TripsClient reserverations={reservations} currentUser={currentUser} />
  );
}
