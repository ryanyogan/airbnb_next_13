import { getFavoriteListings } from "@/actions/gat-favorite-listings";
import getCurrentUser from "@/actions/get-current-user";
import ClientOnly from "@/components/client-only";
import EmptyState from "@/components/empty-state";
import FavoritesClient from "@/components/favorites/favorites-client";

export default async function Favorites() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Hmmmm" subTitle="Please log in" />
      </ClientOnly>
    );
  }

  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subTitle="It looks like you do not like clicking that fun heart :)"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
}
