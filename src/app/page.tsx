import { Nav } from "./component/nav/Nav";
import { Content } from "./component/Content";

export default function Home() {
  return (
    <div className="flex min-h-screen h-screen flex-col items-center justify-center">
      <header>
        <Nav />
      </header>
      <main className="flex items-center justify-center h-4/6">
        <Content />
      </main>
    </div>
  );
}
