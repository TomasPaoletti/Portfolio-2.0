import { FC } from "react";
import CardProyectPrimary from "./CardProyectPrimary";
import CardProyectSecondary from "./CardProyectSecondary";

interface CardProyectsProps {
  primary: boolean;
  title: string;
  subtitle: string;
  rolesList: { id: number; text: string }[];
}

const CardProyect: FC<CardProyectsProps> = ({
  primary,
  title,
  subtitle,
  rolesList,
}) => {
  return primary ? (
    <CardProyectPrimary
      title={title}
      subtitle={subtitle}
      rolesList={rolesList}
    />
  ) : (
    <CardProyectSecondary
      title={title}
      subtitle={subtitle}
      rolesList={rolesList}
    />
  );
};
export default CardProyect;
