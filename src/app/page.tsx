import NavBarColor from "./component/navBar/NavBarColor";
import Bio from "./component/Bio";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <header>
        <NavBarColor />
      </header>
      <main className="flex h-auto items-center justify-center md:h-4/6">
        <Bio />
      </main>
    </div>
  );
}
