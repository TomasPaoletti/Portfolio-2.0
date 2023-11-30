import { FaGithub } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import CardContacts from "../component/cards/CardContacts";
import NavBar from "../component/navBar/NavBar";

const Contact = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <NavBar />
      <div className="grid h-screen w-screen grid-cols-3 place-items-center gap-20">
        <CardContacts
          title="TomasPaoletti"
          subtitle="Github"
          icon={FaGithub}
          route="https://github.com/TomasPaoletti"
        />
        <CardContacts
          title="tomas-paoletti-velado"
          subtitle="Linkedin"
          icon={ImLinkedin}
          route="https://www.linkedin.com/in/tomas-paoletti-velado/"
        />
        <CardContacts
          title="tomas.paolettiv@gmail.com"
          subtitle="Email"
          icon={MdEmail}
        />
      </div>
    </div>
  );
};

export default Contact;
