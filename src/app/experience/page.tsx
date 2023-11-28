import NavBar from "../component/NavBar";
import CardProyects from "../component/cards/CardProyects";

const Experience = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <NavBar />
      <div className="flex h-screen w-screen flex-row items-center gap-20">
        <div className="flex h-[50%] w-[50%] items-center justify-end">
          <CardProyects title="Check-in Scan" subtitle="Frontend developer leader" />
        </div>
        <div className="flex h-[50%] w-[50%] flex-col items-center gap-10">
          <CardProyects title="ChatBot" subtitle="Frontend developer" />
          <CardProyects title="No Country" subtitle="Frontend developer" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
