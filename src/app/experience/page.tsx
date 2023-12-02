import NavBar from "../components/navBar/NavBar";
import CardProyect from "../components/cards/CardProyect";
import Particles from "../components/particles";
import {
  rolesListCheckin,
  rolesListChatBot,
  rolesListNoCountry,
} from "../utils/roles-list";

const Experience = () => {
  return (
    <div className="max-w-screen flex h-full w-screen flex-col md:h-screen">
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <NavBar />
      <div className="flex h-screen w-screen flex-col items-center gap-10 lg:flex-row lg:gap-0">
        <div className="flex flex-col items-center md:h-[65%] md:max-h-[65%] md:w-[70%] md:justify-end">
          <CardProyect
            title="Check-in Scan"
            subtitle="Frontend developer leader"
            rolesList={rolesListCheckin}
            primary={true}
          />
        </div>
        <div className="flex flex-col items-center md:h-[65%] md:max-h-[65%] md:w-[70%] md:gap-10">
          <CardProyect
            title="ChatBot"
            subtitle="Frontend developer"
            rolesList={rolesListChatBot}
            primary={false}
          />
          <CardProyect
            title="No Country"
            subtitle="Frontend developer"
            rolesList={rolesListNoCountry}
            primary={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
