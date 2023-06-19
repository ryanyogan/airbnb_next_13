import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/libs/prisma-db";
import { NextResponse } from "next/server";

interface IParams {
  listingId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (typeof listingId !== "string" || !listingId) {
    throw new Error("Invalid ID");
  }

  const listing = await db.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
