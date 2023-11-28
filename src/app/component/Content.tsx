import Image from "next/image";
import me from "../../../public/me.jpeg";

const Content = () => {
  return (
    <div className="flex w-8/12 flex-row justify-around">
      <Image
        src={me}
        alt="logo"
        width={200}
        height={200}
        priority
        className=" rounded-full"
      />
      <div className="flex w-[67%] flex-col items-center justify-between">
        <h1 className="text-3xl font-bold">Tomas Paoletti Velado</h1>
        <p>
          ¡Hola! Mi nombre es Tomás y soy desarrollador Frontend. Después de
          trabajar 10 años en mi propio taller mecánico, decidí dar un giro a mi
          vida y sumergirme en el mundo IT. Así descubrí el desarrollo Front que
          me conquistó automáticamente. En este portfolio podrán ver algunos
          proyectos en donde trabajé y pusieron a prueba mis habilidades. Muchas
          gracias por estar aquí
        </p>
      </div>
    </div>
  );
};

export default Content;
