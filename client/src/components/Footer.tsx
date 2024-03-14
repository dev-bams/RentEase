import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" flex items-center justify-center h-28 ">
      <div className="w-full max-w-7xl h-full border-t-2 flex items-center p-4">
        <p className="text-sm text-center">
          &#169; 2024 RentEase, by{" "}
          <Link
            to="/team"
            className="font-bold text-first-primary hover:text-first-primary-light transition-all duration-150 ease-in-out"
          >
            Bit Builders
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Footer;
