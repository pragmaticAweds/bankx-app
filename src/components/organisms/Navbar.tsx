import Image from "next/image";
import Button from "../atoms/Button";
import Link from "next/link";

const Navbar = () => {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact us", path: "/contact-us" },
    { name: "About us", path: "about-us" },
  ];
  return (
    <nav className="flex justify-between py-2 px-5 items-center border-b">
      <Image src="/img/bankx_logo.webp" alt="logo" width={70} height={46} />
      <div className="space-x-8 font-medium">
        {navlinks.map(({ name, path }, i) => (
          <Link href={path} key={name + i} className="">
            {name}
          </Link>
        ))}
      </div>
      <Button label="Book Appointment" />
    </nav>
  );
};

export default Navbar;
