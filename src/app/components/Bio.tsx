import Image from "next/image";
import me from "../../../public/me.jpeg";
import Particles from "./particles";

const Bio = () => {
  return (
    <div className="flex h-4/5 w-full flex-col items-center gap-8 md:w-3/4 md:flex-row md:justify-around">
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <Image
        src={me}
        alt="logo"
        width={200}
        height={200}
        priority
        className=" rounded-full"
      />
      <div className="flex w-2/3 flex-col items-center justify-between gap-8">
        <h1 className="text-center text-3xl font-bold">
          Tomas Paoletti Velado
        </h1>
        <p className="text-start">
          ¡Hola! Mi nombre es Tomás, soy desarrollador Frontend con experiencia
          en tecnologías React, Next, React Native y Expo. Me desenvuelvo muy
          bien trabajando en equipo. Mi personalidad proactiva e inquisitiva me
          impulsa a mantenerme al día de las últimas tendencias tecnológicas,
          asegurando así la creación y mantenimiento de proyectos sólidos y
          escalables. Actualmente estoy trabajando en Check-in Scan.
        </p>
      </div>
    </div>
  );
};

export default Bio;
