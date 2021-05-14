import React from "react";
import { CalendarGrid } from "./components/Grid.js";
import moment from "moment";
import { Header } from "./components/Header.js";
import { NameOfTheWeeks } from "./components/NameOfTheWeeks.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TaskCreator } from "./components/TaskCreator.js";



function App() {
  console.log(moment().clone().format("MMMM"));
  return (
    <BrowserRouter>
      <div className="Wrapper">
        <div className="App">
          <Switch>
            <Route path="/" exact>
              <Header/>
              <NameOfTheWeeks/>
              <CalendarGrid/>
            </Route>
            <Route path="/taskcreator">
              <TaskCreator/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
