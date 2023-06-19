import { getListings } from "@/actions/get-listings";
import PropertiesClient from "@/components/properties/properties-client";
import getCurrentUser from "../../actions/get-current-user";
import EmptyState from "../../components/empty-state";

export default async function Properties() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subTitle="Please log in" />;
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No properties found"
        subTitle="Looks like you have no properties."
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
}
