import React from "react";
import "./App.scss";
import { Age } from "./components/Age";

function App() {
  return (
    <div className="App container mx-auto lg">
      <header>
        <h1>
          &gt; Index of /lyng.dev<span className="blinking-cursor">_</span>
        </h1>
      </header>
      <h2>About</h2>
      <ul className="myList">
        <li>Name: Steffen Mads Sun Lyng</li>
        <li>
          Age: <Age />
        </li>
      </ul>
      <h2>Links</h2>
      <ul className="myList">
        <li>
          <a href="//www.linkedin.com/in/smsl/">LinkedIn</a>
        </li>
        <li>
          <a href="//www.facebook.com/steffen.lyng">Facebook</a>
        </li>
      </ul>
      <h2>Projects</h2>
      <ul className="myList">
        <li>
          <a href="//flasha.re">flasha.re</a>
        </li>
        <li>
          <a href="//github.com/lyng-dev/rssmail">RSSMAIL</a>
        </li>
        <li>
          <a href="//github.com/steffenlyng/serilog-sinks-rabbitmq">
            Serilog.Sinks.RabbitMQ
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
