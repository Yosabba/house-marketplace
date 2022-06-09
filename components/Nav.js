import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="flex flex-row justify-evenly p-2 w-full left-0 bottom-0 fixed bg-white  ">
      <Link href={"/explore"}>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2">
          <Image
            src={"/exploreIcon.svg"}
            width={70}
            height={30}
            alt="home icon"
          />{" "}
          <span className="text-lg font-bold">Explore</span>
        </div>
      </Link>

      <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2">
        <Image
          src={"/localOfferIcon.svg"}
          width={70}
          height={30}
          alt="home icon"
        />{" "}
        <span className="text-lg font-bold">Offer</span>
      </div>

      <Link href={"/profile"}>
        <div className="flex flex-col justify-center items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2">
          <Image
            src={"/personOutlineIcon.svg"}
            width={70}
            height={30}
            alt="home icon"
          />{" "}
          <span className="text-lg font-bold">Profile</span>
        </div>
      </Link>
    </header>
  );
};

export default Nav;
