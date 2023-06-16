"use client";

import useRentModal from "@/app/hooks/use-rent-modal";
import Modal from "./modal";

export default function RentModal() {
  const rentModal = useRentModal();

  return (
    <Modal
      title="Airbnb your home!"
      onClose={rentModal.onClose}
      isOpen={rentModal.isOpen}
      onSubmit={rentModal.onClose}
      actionLabel="Submit"
    />
  );
}
