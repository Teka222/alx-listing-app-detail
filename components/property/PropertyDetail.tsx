import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { PropertyProps } from "@/interfaces";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  // Dummy reviews array
  const reviews = [
    { name: "Alice", rating: 5, comment: "Amazing stay!", avatar: "/avatar1.jpg" },
    { name: "Bob", rating: 4, comment: "Very comfortable.", avatar: "/avatar2.jpg" },
  ];

  return (
    <div className="container mx-auto p-6 md:flex md:space-x-6">
      {/* Main Content */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <p className="mt-2 text-gray-600">{property.address.city}, {property.address.country}</p>
        <p className="mt-1 text-yellow-500 font-semibold">{property.rating} ⭐</p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <img src={property.image} alt={property.name} className="col-span-2 w-full h-96 object-cover rounded-lg" />
          {/* Additional images can be mapped here */}
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p>{property.description || "A beautiful property with amazing amenities."}</p>
        </div>

        {/* Amenities */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
          <ul className="flex flex-wrap gap-2">
            {property.category.map((amenity, idx) => (
              <li key={idx} className="bg-gray-200 px-3 py-1 rounded-md">{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Reviews */}
        <ReviewSection reviews={reviews} />
      </div>

      {/* Booking Section */}
      <div className="mt-6 md:mt-0 md:w-96">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
