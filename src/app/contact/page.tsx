import { FaGithub } from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import Card from "../component/Card";
import NavBar from "../component/NavBar";

const Contact = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <NavBar />
      <div className="grid h-screen w-screen grid-cols-3 place-items-center gap-20">
        <Card
          title="TomasPaoletti"
          subtitle="Github"
          icon={FaGithub}
          route="https://github.com/TomasPaoletti"
        />
        <Card
          title="tomas-paoletti-velado"
          subtitle="Linkedin"
          icon={ImLinkedin}
          route="https://www.linkedin.com/in/tomas-paoletti-velado/"
        />
        <Card
          title="tomas.paolettiv@gmail.com"
          subtitle="Email"
          icon={MdEmail}
        />
      </div>
    </div>
  );
};

export default Contact;
