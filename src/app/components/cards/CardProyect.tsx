import { FC } from "react";

interface CardProyectsPrimaryProps {
  title: string;
  subtitle: string;
  rolesList: { id: number; text: string }[];
}

const CardProyect: FC<CardProyectsPrimaryProps> = ({
  title,
  subtitle,
  rolesList,
}) => {
  return (
    <div className="border-animate relative flex h-[100%] w-[80%] flex-col items-start justify-start gap-2 rounded-xl border-0 bg-black p-3">
      <h1 className="text text-2xl font-bold">{title}</h1>
      <h4 className="text-sm font-semibold text-gray-500">{subtitle}</h4>
      <ul className="ml-5 flex list-disc flex-col gap-y-1 ">
        {rolesList.map((role) => (
          <li key={role.id}>{role.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default CardProyect;
