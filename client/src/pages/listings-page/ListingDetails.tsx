import { useParams } from "react-router-dom";
import SellerListingInfo from "./SellerListingInfo";
import { getListings } from "../../data/listingsdata";
import { useState, useEffect } from "react";
import { ListingType } from "../../types/types";

function ListingDetails() {
  const { id } = useParams();
  const [listings, setListings] = useState<ListingType[]>();
  const [selectedListings, setSelectedListings] = useState<ListingType>();
  useEffect(() => {
    const getData = async () => {
      const listingsdata = await getListings();
      setListings(listingsdata);
    };
    getData();
  }, []);
  useEffect(() => {
    let selectedListingsData;
    if (listings) {
      selectedListingsData = listings.find((listing) => {
        return listing._id == id;
      });
      setSelectedListings(selectedListingsData);
    }
  }, [listings, id]);
  let mainListingImageSrc,
    otherImages,
    listingLocation,
    listingPrice,
    NoOfBed,
    NoOfBath,
    image1,
    image2,
    image3,
    image4;
  if (selectedListings) {
    mainListingImageSrc = selectedListings.mainListingImageSrc;
    otherImages = selectedListings.otherImages;
    image1 = otherImages[0];
    image2 = otherImages[1];
    image3 = otherImages[2];
    image4 = otherImages[3];
    listingLocation = selectedListings.listingLocation;
    listingPrice = selectedListings.listingPrice;
    NoOfBed = selectedListings.NoOfBed;
    NoOfBath = selectedListings.NoOfBath;
  }

  return (
    <div className="min-h-lvh flex w-full justify-center">
      {selectedListings ? (
        <div className=" p-3 max-w-screen-xl w-full flex  flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-8 max-w-5xl ">
            <h1 className="text-3xl font-bold">{listingLocation}</h1>
            <div className="flex gap-2 justify-center rounded-2xl overflow-hidden h-[400px]">
              <div className="w-1/2 h-full">
                <img
                  src={mainListingImageSrc}
                  alt="FrontView"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 w-1/2 justify-center h-full">
                <div className="flex gap-2 h-1/2 w-full">
                  <img
                    src={image1}
                    alt="Interior1"
                    className="w-1/2 h-full object-cover"
                  />
                  <img
                    src={image2}
                    alt="Interior2"
                    className="w-1/2 h-full object-cover"
                  />
                </div>
                <div className="flex gap-2 h-1/2 w-full">
                  <img
                    src={image3}
                    alt="Interior3"
                    className="w-1/2 h-full object-cover"
                  />
                  <img
                    src={image4}
                    alt="Interior4"
                    className="w-1/2 h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <p className="font-bold">
                  {NoOfBed} bed(s) · {NoOfBath} bath(s)
                </p>
              </div>
              <div>
                <h2 className="font-bold text-lg">{listingPrice} CAD</h2>
              </div>
            </div>
          </div>
          <div className="max-w-5xl gap-2 flex flex-col bg-[#F7F7F7] p-4 rounded-xl">
            <h2 className="font-bold">Description: </h2>
            <p>
              Modern 2-bed apartment with stunning city views. Open-concept
              living area, sleek kitchen, and balcony. Master bedroom with
              ensuite, second bedroom ideal for guests or office. In-unit
              laundry, secure parking, fitness center access. Close to shops and
              dining. Key Features: Modern design City views Open-concept layout
              Ensuite master bedroom Second bedroom or office In-unit laundry
              Secure parking Fitness center access Near shops and dining
              Location.
            </p>
          </div>
          <div className="w-full flex justify-between max-w-5xl">
            <SellerListingInfo />
            <button
              className="bg-first-primary hover:bg-first-primary-light transition-all duration-150 p-3 text-white rounded-md"
              onClick={() => {
                alert("seller has been notified of your interest");
              }}
            >
              Contact Seller
            </button>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default ListingDetails;
