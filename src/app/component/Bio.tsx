import Image from "next/image";
import me from "../../../public/me.jpeg";

const Bio = () => {
  return (
    <div className="flex w-full flex-col items-center gap-8 md:flex-row md:justify-around md:w-3/4">
      <Image
        src={me}
        alt="logo"
        width={200}
        height={200}
        priority
        className=" rounded-full"
      />
      <div className="flex w-2/3 flex-col items-center justify-between gap-8">
        <h1 className="text-3xl font-bold text-center">Tomas Paoletti Velado</h1>
        <p className="text-start">
          ¡Hola! Mi nombre es Tomás y soy desarrollador Frontend con amplia
          experiencia en las tecnologías React, Next, React Native y Expo. Poseo
          una destacada habilidad para la comunicación y colaboración efectiva
          con el equipo. Mi personalidad proactiva e inquisitiva me impulsa a
          mantenerme al tanto de las últimas tendencias tecnológicas, asegurando
          así la creación y mantenimiento de proyectos sólidos y altamente
          escalables. Actualmente trabajando en Check-in Scan.
        </p>
      </div>
    </div>
  );
};

export default Bio;
