import Listing from "../listings-page/Listing";
import { ListingType } from "../../types/types";
import { Link } from "react-router-dom";

const listings: ListingType[] = [
  {
    _id: "65f361d32d27f827708e9c67",
    mainListingImageSrc:
      "https://a0.muscache.com/im/pictures/miso/Hosting-1068372483585017245/original/238335c7-70ff-404c-a95e-2146079f649b.jpeg?im_w=1440",
    otherImages: [
      "https://a0.muscache.com/im/pictures/dc9a017d-3057-4f84-abca-4778857be19b.jpg?im_w=720",
      "https://a0.muscache.com/im/pictures/6ff71444-6d20-4467-b8d6-c144320b9a31.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/6ff71444-6d20-4467-b8d6-c144320b9a31.jpg?im_w=480",
      "https://a0.muscache.com/im/pictures/5f970667-cde7-475c-a0b3-9d89ccc0ada6.jpg?im_w=480",
    ],
    listingLocation: "Toronto, Canada",
    listingPrice: "$850",
    NoOfBed: 3,
    NoOfBath: 2,
  },
];
function InterestPage() {
  return (
    <div className="min-h-lvh flex w-full justify-center">
      <div className="p-3 max-w-screen-xl w-full flex flex-col items-center justify-center gap-6">
        <div className=" flex flex-col gap-6 justify-center items-center">
          <p className="text-xl font-bold">
            <span className="font-bolder">"buyer@gmail.com"</span> has shown
            interest in your property at vaughan Canada.
          </p>
          {listings.map(
            ({
              _id,
              mainListingImageSrc,
              otherImages,
              listingLocation,
              listingPrice,
              NoOfBed,
              NoOfBath,
            }) => {
              console.log(_id);
              return (
                <Link
                  to={`/listingdetails/${_id}`}
                  key={_id}
                  className="rounded-xl flex flex-col gap-3 basis-96"
                >
                  <Listing
                    _id={_id}
                    mainListingImageSrc={mainListingImageSrc}
                    otherImages={otherImages}
                    listingLocation={listingLocation}
                    listingPrice={listingPrice}
                    NoOfBed={NoOfBed}
                    NoOfBath={NoOfBath}
                  />
                </Link>
              );
            }
          )}
          <div className="flex gap-4 items-stretch">
            <a
              className="bg-first-primary hover:bg-first-primary-light p-3 text-white font-bold rounded-md w-[300px] flex items-center justify-center"
              target="_blank"
              href="https://rentease-contract-generator.onrender.com/"
            >
              Generate contract
            </a>
            <input
              className="bg-[#E8F0FE] rounded-md outline-none p-3 w-[300px]"
              type="file"
            />
          </div>

          <button
            type="submit"
            className="bg-first-primary hover:bg-first-primary-light transition-all duration-150 p-3 text-white font-bold rounded-md w-[400px]"
            onClick={() => {
              alert('Contract sent to "buyer@gmail.com" successfully');
            }}
          >
            Send contract
          </button>
        </div>
      </div>
    </div>
  );
}

export default InterestPage;
