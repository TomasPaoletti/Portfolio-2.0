import { nav } from "../../lib/nav";
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="text-center">
      <ul className="flex flex-row gap-10">
        {nav.map((item) => (
          <li
            className="border-animate relative cursor-pointer rounded-xl border-0 bg-black p-2"
            key={item.id}
          >
            <Link href={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};