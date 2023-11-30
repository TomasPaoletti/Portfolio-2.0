import NavBar from "../component/navBar/NavBar";
import CardProyect from "../component/cards/CardProyect";
import {rolesListCheckin, rolesListChatBot} from "../utils/roles-list"

const Experience = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <NavBar />
      <div className="flex h-screen w-screen flex-row items-center">
        <div className="flex h-[65%] max-h-[65%] w-[50%] items-center justify-end">
          <CardProyect title="Check-in Scan" subtitle="Frontend developer leader" rolesList={rolesListCheckin} primary={true} />
        </div>
        <div className="flex h-[65%] max-h-[65%] w-[50%] flex-col items-center gap-10">
          <CardProyect title="ChatBot" subtitle="Frontend developer" rolesList={rolesListChatBot} primary={false} />
          <CardProyect title="No Country" subtitle="Frontend developer" rolesList={rolesListChatBot} primary={false} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
