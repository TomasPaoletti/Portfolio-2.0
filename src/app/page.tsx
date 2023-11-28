import NavBarColor from "./component/NavBarColor";
import Content from "./component/Content";

export default function Home() {
  return (
    <div className="flex h-screen min-h-screen flex-col items-center justify-center">
      <header>
        <NavBarColor />
      </header>
      <main className="flex h-4/6 items-center justify-center">
        <Content />
      </main>
    </div>
  );
}
