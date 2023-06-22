import Image from "next/image";

import Link from "next/link";
import CartIcon from "../atoms/vectors/CartIcon";

const Navbar = () => {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact us", path: "/contact-us" },
    { name: "About us", path: "about-us" },
  ];
  return (
    <nav className="flex justify-between py-3 px-5 items-center border-b">
      <Image src="/img/bankx_logo.webp" alt="logo" width={70} height={46} />
      <div className="space-x-16 font-medium">
        {navlinks.map(({ name, path }, i) => (
          <Link href={path} key={name + i} className="">
            {name}
          </Link>
        ))}
      </div>
      <div className="h-8 w-8 grid place-content-center rounded-full p-4 border border-[#141313]">
        <CartIcon />
      </div>
    </nav>
  );
};

export default Navbar;
