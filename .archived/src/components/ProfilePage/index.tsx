export const ProfilePage = () => {
  return (
    <>
      <h1>About</h1>
      <ul className="myList">
        <li>Name: Steffen Mads Sun Lyng (He/Him)</li>
        {/* <li>
          Age: <Age />
        </li> */}
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
        <li>
          <a
            href="//fosstodon.org/web/@smsly"
            target="_blank"
            rel="noreferrer"
          >
            Mastodon
          </a>
        </li>
        <li>
          <a
            href="//twitter.com/smslyng"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
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
            href="//github.com/lyng-dev/rssmail2"
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
