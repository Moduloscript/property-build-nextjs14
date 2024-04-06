import PropertyCard from "../../components/PropertyCard";
import { fetchProperties } from "@/utils/requests";

const PropertiesPage = async () => {
  const data = await fetchProperties();

  const recentProperties = data.properties;

  recentProperties.sort((a, b) => new Date(b.created) - new Date(a.created));
  return (
    <section class='px-4 py-6'>
      <div class='container-xl lg:container m-auto px-4 py-6'>
        <div class='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {recentProperties.length === 0 ? (
            <p>No Properties Found</p>
          ) : (
            recentProperties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
