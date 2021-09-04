import { Age } from "../Age";

export const ProfilePage = () => {
  return (
    <>
      <h1>About</h1>
      <ul className="myList">
        <li>Name: Steffen Mads Sun Lyng (He/Him)</li>
        <li>
          Age: <Age />
        </li>
        <li>
          Roles:
          <span className="italic">
            Team Lead, Technical Lead, Software Engineer, DevOps Engineer,
            Software Architect
          </span>
        </li>
        <li>
          Programming Languages:
          <span>
            {" "}
            C#, Shell/Bash, TypeScript, JavaScript, Python, PowerShell, Go,
            Java, Kotlin, Scala
          </span>
        </li>
      </ul>
      <h1>Contact</h1>
      <ul className="myList">
        <li>Phone: +45 20194237</li>
        <li>
          <a href="mailto:sm@lyng.dev">sm@lyng.dev</a>
        </li>
      </ul>
      <h1>Links</h1>
      <ul className="myList">
        <li>
          <a
            href="//www.linkedin.com/in/smsl/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="//www.facebook.com/steffen.lyng"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
      </ul>
      <h1>Projects</h1>
      <ul className="myList">
        <li>
          <a href="//flasha.re" target="_blank" rel="noreferrer">
            flasha.re
          </a>
        </li>
        <li>
          <a
            href="//github.com/lyng-dev/rssmail"
            target="_blank"
            rel="noreferrer"
          >
            RSSMAIL
          </a>
        </li>
        <li>
          <a
            href="//github.com/steffenlyng/serilog-sinks-rabbitmq"
            target="_blank"
            rel="noreferrer"
          >
            Serilog.Sinks.RabbitMQ
          </a>
        </li>
      </ul>
      <h1>Spare-time</h1>
      <ul className="myList">
        <li>Running</li>
        <li>Hiking</li>
        <li>DIY projects</li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=d-d5kuSFBMk"
            target="_blank"
            rel="noreferrer"
          >
            Calistenics
          </a>
        </li>
        <li>Travelling</li>
      </ul>
    </>
  );
};
