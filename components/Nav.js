import Image from "next/image";

const Nav = () => {
  return (
    <header className="flex flex-row justify-evenly px-4 py-6 w-full left-0 bottom-0 fixed bg-white ">
      <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2">
        <Image
          src={"/exploreIcon.svg"}
          width={70}
          height={30}
          alt="home icon"
        />{" "}
        <span className="text-lg font-bold">Explore</span>
      </div>

      <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2">
        <Image
          src={"/localOfferIcon.svg"}
          width={70}
          height={30}
          alt="home icon"
        />{" "}
        <span className="text-lg font-bold">Offer</span>
      </div>

      <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2">
        <Image
          src={"/personOutlineIcon.svg"}
          width={70}
          height={30}
          alt="home icon"
        />{" "}
        <span className="text-lg font-bold">Profile</span>
      </div>
    </header>
  );
};

export default Nav;
