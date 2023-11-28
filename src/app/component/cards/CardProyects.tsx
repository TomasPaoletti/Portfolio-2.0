import React from "react";
import Image from "next/image";

interface CardProyectsProps {
    title: string,
    subtitle: string
}

const CardProyects:React.FC<CardProyectsProps> = ({title, subtitle}) => {
  return (
    <div className="border-animate relative flex h-[100%] w-[80%] flex-col items-start justify-start rounded-xl border-0 bg-black p-4 gap-2">
      <h1 className="text-3xl font-bold text">{title}</h1>
      <h4 className="font-semibold text-gray-500 text-sm">{subtitle}</h4>
    </div>
  );
};
export default CardProyects;
