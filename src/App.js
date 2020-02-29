import React from "react";
import uniqueId from '../node_modules/lodash/uniqueId'
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


const App = (props) => {
 
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar sidebar={props.state.sidebar}/>
        <div  className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs 
              store={props.store}
               />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile 
              store={props.store}
               />}
          />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
  );
};

export default App;
