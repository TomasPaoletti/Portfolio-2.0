import { FaGithub } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import CardContacts from "../components/cards/CardContacts";
import NavBar from "../components/navBar/NavBar";
import Particles from "../components/particles";

const Contact = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center md:h-screen">
      <Particles
        className="animate-fade-in absolute inset-0 -z-10"
        quantity={100}
      />
      <NavBar />
      <div className="mb-12 mt-24 grid grid-cols-1 place-items-center justify-center gap-16 md:h-screen md:w-full md:grid-cols-2 md:gap-0 lg:h-screen lg:w-full lg:grid-cols-3">
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
