import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface CardProps {
  title: string;
  subtitle: string;
  route?: string;
  icon: IconType;
}

const CardContacts: React.FC<CardProps> = ({
  title,
  subtitle,
  route,
  icon: Icon,
}) => {
  return (
    <div className="border-animate relative flex h-60 w-80 flex-col items-center justify-center rounded-xl border-0 bg-black p-4 md:h-3/4 md:w-3/4 lg:h-2/4 lg:w-80">
      {route ? (
        <Link className="cursor-pointer" href={route} target="_blank">
          <Icon size="3em" />
        </Link>
      ) : (
        <Icon size="3em" />
      )}
      <h1 className="mb-6 mt-16 text-center text-xl font-bold ">{title}</h1>
      <h4 className="text-center font-semibold text-gray-500">{subtitle}</h4>
    </div>
  );
};

export default CardContacts;
