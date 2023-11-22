import Image from "next/image";
import next from "./favicon.ico";
import { nav } from "./lib/nav";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <nav className="rounded-xl bg-slate-600">
        <ul className="flex flex-row gap-10 p-4">
          {nav.map((item) => (
            <li className="cursor-pointer" key={item.id}>
              <Link href={item.route}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-8/12 rounded-xl border-2">
        <h1 className="pt-6 text-center text-3xl font-bold">
          Tomas Paoletti Velado
        </h1>
        <div className="flex flex-row items-center justify-center">
          <Image src={next} alt="logo" width={200} height={200} />
          <p className="p-6">
            ¡Hola! Mi nombre es Tomás y soy desarrollador Frontend. Después de
            trabajar 10 años en mi propio taller mecánico, decidí dar un giro a
            mi vida y sumergirme en el mundo IT. Así descubrí el desarrollo
            Front que me conquistó automáticamente. En este portfolio podrán ver
            algunos proyectos en donde trabajé y pusieron a prueba mis
            habilidades. Muchas gracias por estar aquí
          </p>
        </div>
      </div>
    </main>
  );
}
