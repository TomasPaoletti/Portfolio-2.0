import React from "react";
import Link from "next/link";
import { nav } from "../../utils/nav";
import { MdArrowBack } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="absolute top-0 flex w-full flex-row justify-between p-4">
      <Link href="/" className="text-gray-500">
        <MdArrowBack size="2rem" />
      </Link>

      <ul className="flex flex-row gap-5 text-gray-500">
        {nav.map((item) => (
          <li key={item.id}>
            <Link href={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
