import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Layout from "@/components/layouts/Layout";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p className="text-center mt-10">Property not found</p>;

  return (
    <Layout>
      <PropertyDetail property={property} />
    </Layout>
  );
}
