import NavBar from "../component/navBar/NavBar";
import CardProyect from "../component/cards/CardProyect";
import {
  rolesListCheckin,
  rolesListChatBot,
  rolesListNoCountry,
} from "../utils/roles-list";

const Experience = () => {
  return (
    <div className="flex h-full md:h-screen w-screen max-w-screen flex-col">
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
        <div className="flex flex-col items-center md:gap-10 md:h-[65%] md:max-h-[65%] md:w-[70%]">
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
