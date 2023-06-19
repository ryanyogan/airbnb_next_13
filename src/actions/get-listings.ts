import { db } from "@/libs/prisma-db";

export interface IListingsParams {
  userId?: string;
}

export async function getListings(params: IListingsParams) {
  try {
    const { userId } = params;
    let query: any = {};
    if (userId) {
      query.userId = userId;
    }

    const listings = await db.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    return listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
      updatedAt: listing.updatedAt.toISOString(),
    }));
  } catch (error: any) {
    throw new Error(error);
  }
}
