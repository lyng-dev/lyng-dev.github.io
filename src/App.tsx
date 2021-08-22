import React from "react";
import "./App.scss";
import { Header } from "./components/Header";
import { Books } from "./components/Books";
import { Footer } from "./components/Footer";
import { ProfilePage } from "./components/ProfilePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App container mx-auto lg">
      <Header />
      <Router>
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
