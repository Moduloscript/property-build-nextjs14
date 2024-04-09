import PropertyCard from "../../components/PropertyCard";
import { fetchProperties } from "@/utils/requests";

const PropertiesPage = async () => {
  const data = await fetchProperties();

  const recentProperties = data.properties;

  recentProperties.sort((a, b) => new Date(b.created) - new Date(a.created));
  return (
    <section className='px-4 py-6'>
      <div className='px-4 py-6 m-auto container-xl lg:container'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
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
