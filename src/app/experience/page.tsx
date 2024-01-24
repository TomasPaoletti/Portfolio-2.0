import NavBar from "../components/navBar/NavBar";
import CardProyect from "../components/cards/CardProyect";
import Particles from "../components/particles";
import { rolesListCheckin, rolesListLearnLens } from "../utils/roles-list";

const Experience = () => {
  return (
    <div className="flex h-screen w-full flex-col md:h-full">
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <NavBar />
      <div className="mt-24 flex h-screen w-full flex-col items-center gap-10 lg:mt-0 lg:flex-row lg:gap-0">
        <div className="flex flex-col items-center md:h-[60%] md:max-h-[60%] md:w-[70%] md:justify-end">
          <CardProyect
            title="Check-in Scan"
            subtitle="Frontend developer leader"
            rolesList={rolesListCheckin}
          />
        </div>
        <div className="flex flex-col items-center md:h-[60%] md:max-h-[60%] md:w-[70%] md:justify-end">
          <CardProyect
            title="LearnLens"
            subtitle="FullStack developer"
            rolesList={rolesListLearnLens}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
