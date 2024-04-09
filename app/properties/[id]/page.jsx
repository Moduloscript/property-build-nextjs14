"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import Link from "next/link";
import PropertyDetails from "@/components/PropertyDetails";
import Spinner from "@/components/Spinner";
import { FaArrowLeft } from "react-icons/fa";
import  PropertyImages from "@/components/PropertyImages"

const PropertyId = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error fetching property", error);
      } finally {
        setLoading(false);
      }
    };
    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className='mt-10 text-2xl font-bold text-center text-red-500 '>
        Property not found
      </h1>
    );
  }
  return (
    <>
       {loading && <Spinner />}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />

          {/* <!-- Go Back --> */}
          <section>
            <div className='container px-6 py-6 m-auto'>
              <Link
                href='/properties'
                className='flex items-center text-blue-500 hover:text-blue-600'>
                <FaArrowLeft className='mr-2' /> Back to Properties
              </Link>
            </div>
          </section>
          <section className='bg-blue-50'>
            <div className='container px-6 py-10 m-auto'>
              <div className='grid w-full grid-cols-1 gap-6 md:grid-cols-70/30'>
                <PropertyDetails property={property} />
              </div>
            </div>
          </section>
          <PropertyImages images={property.images}/>
        </>
      )}
    </>
  );
};

export default PropertyId;
