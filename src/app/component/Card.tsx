import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface CardProps {
  title: string;
  subtitle: string;
  route?: string;
  icon: IconType;
}

const Card: React.FC<CardProps> = ({ title, subtitle, route, icon: Icon }) => {
  return (
    <div className="border-animate relative flex h-2/4 w-3/4 flex-col items-center justify-center rounded-xl border-0 bg-black p-4">
      {route ? (
        <Link className="cursor-pointer" href={route} target="_blank">
          <Icon size="3em" />
        </Link>
      ) : (
        <Icon size="3em" />
      )}
      <h1 className="mb-6 mt-16 text-xl font-bold">{title}</h1>
      <h4 className="font-semibold text-gray-500">{subtitle}</h4>
    </div>
  );
};

export default Card;
