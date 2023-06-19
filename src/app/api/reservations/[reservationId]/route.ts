import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/libs/prisma-db";
import { NextResponse } from "next/server";

interface IParams {
  reservationId?: string;
}

export async function DELETE(
  _request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();
  const { reservationId } = params;

  if (!currentUser) {
    return NextResponse.error();
  }

  if (typeof reservationId !== "string" || !reservationId) {
    throw new Error("Invalid ID");
  }

  const reservation = await db.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [{ userId: currentUser.id }, { listing: { userId: currentUser.id } }],
    },
  });

  return NextResponse.json(reservation);
}
