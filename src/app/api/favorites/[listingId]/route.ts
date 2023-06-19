import getCurrentUser from "@/actions/get-current-user";
import { db } from "@/libs/prisma-db";
import { NextResponse } from "next/server";

interface IParams {
  params: {
    listingId?: string;
  };
}

export async function POST(_request: Request, { params }: IParams) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];
  favoriteIds.push(listingId);

  const user = await db.user.update({
    where: { id: currentUser.id },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(_request: Request, { params }: IParams) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];
  favoriteIds = favoriteIds.filter((id) => id !== listingId);

  const user = await db.user.update({
    where: { id: currentUser.id },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
}
