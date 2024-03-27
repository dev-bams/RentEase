import axios from "axios";
async function getListings() {
  try {
    const listings = await axios.get(
      "https://rentease-b5mm.onrender.com/getListings"
    );
    // const listings = await axios.get("http://localhost:3001/getListings");
    console.log(listings);
    return listings.data;
  } catch (err) {
    console.log(err);
  }
}
export { getListings };
