import { getFavoriteListings } from "@/actions/gat-favorite-listings";
import getCurrentUser from "@/actions/get-current-user";
import EmptyState from "@/components/empty-state";
import FavoritesClient from "@/components/favorites/favorites-client";

export default async function Favorites() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return <EmptyState title="Hmmmm" subTitle="Please log in" />;
  }

  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subTitle="It looks like you do not like clicking that fun heart :)"
      />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
}
