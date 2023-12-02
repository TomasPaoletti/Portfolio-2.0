import { FC } from "react";

interface CardProyectsSecondaryProps {
  title: string;
  subtitle: string;
  rolesList: { id: number; text: string }[];
}

const CardProyectSecondary: FC<CardProyectsSecondaryProps> = ({
  title,
  subtitle,
  rolesList,
}) => {
  return (
    <div className="border-animate relative mb-10 flex h-[100%] w-[80%] flex-col items-start justify-start rounded-xl border-0 bg-black p-3 md:mb-0 md:flex-row">
      <div className="flex flex-col gap-3">
        <h1 className="text text-2xl font-bold">{title}</h1>
        <h4 className="text-sm font-semibold text-gray-500">{subtitle}</h4>
      </div>
      <div>
        <ul className="ml-7 list-disc">
          {rolesList.map((role) => (
            <li key={role.id}>{role.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CardProyectSecondary;
