import { nav } from "../../utils/nav";
import Link from "next/link";

const NavBarcolor = () => {
  return (
    <nav className="mb-12 h-[10%] text-center md:mb-0">
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

export default NavBarcolor;
