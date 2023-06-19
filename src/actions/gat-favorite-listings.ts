import { db } from "@/libs/prisma-db";
import getCurrentUser from "./get-current-user";

export async function getFavoriteListings() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }

    const favorites = await db.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt.toISOString(),
      updatedAt: favorite.updatedAt.toISOString(),
    }));
  } catch (error: any) {
    throw new Error(error);
  }
}
