import { getListings } from "@/actions/get-listings";
import PropertiesClient from "@/components/properties/properties-client";
import getCurrentUser from "../../actions/get-current-user";
import ClientOnly from "../../components/client-only";
import EmptyState from "../../components/empty-state";

export default async function Properties() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subTitle="Please log in" />
      </ClientOnly>
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subTitle="Looks like you have no properties."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
}
