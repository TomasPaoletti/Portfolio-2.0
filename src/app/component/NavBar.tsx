"use client";

import React from "react";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

const NavBar = () => {
  const navBar = [
    {
      id: 1,
      name: "Experiencia",
      route: "experience",
    },
    {
      id: 2,
      name: "Proyectos",
      route: "proyects",
    },
  ];

  return (
    <div className="flex w-screen flex-row justify-between p-4">
      <Link href="/" className="text-gray-500">
        <MdArrowBack size="2rem" />
      </Link>

      <ul className="flex flex-row gap-5 text-gray-500">
        {navBar.map((item) => (
          <li key={item.id}>
            <Link href={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
