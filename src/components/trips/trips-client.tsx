"use client";

import { SafeReservation, SafeUser } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Container from "../container";
import Heading from "../heading";
import ListingCard from "../listings/listing-card";

interface TripsClientProps {
  reserverations: SafeReservation[];
  currentUser?: SafeUser | null;
}

export default function TripsClient({
  reserverations,
  currentUser,
}: TripsClientProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success("Reservation Cancelled");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading
        title="Trips"
        subTitle="Where you've been and where you're going"
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {reserverations.map((reservation) => (
          <ListingCard
            reservation={reservation}
            key={reservation.id}
            data={reservation.listing}
            actionId={reservation.id}
            onAction={onCancel}
            disabled={deletingId === reservation.id}
            actionLabel="Cancel reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
