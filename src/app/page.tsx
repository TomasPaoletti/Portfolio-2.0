import NavBarColor from "./component/navBar/NavBarColor";
import Bio from "./component/Bio";

export default function Home() {
  return (
    <div className="flex h-screen min-h-screen flex-col items-center justify-center">
      <header>
        <NavBarColor />
      </header>
      <main className="flex h-4/6 items-center justify-center">
        <Bio />
      </main>
    </div>
  );
}
