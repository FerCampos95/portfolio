import React from "react";
import { BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Drawer from '../components/Drawer'
import { Home } from "../components/Home";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import Footer from "../components/Footer";
import {Proyectos} from "../components/Proyectos";
// import { AboutMe } from "../components/AboutMe";
// import { Navbar } from "../components/Navbar";
// import { PortFolio } from "../components/PortFolio";
// import TemporaryDrawer from '../components/ButtomOption';
import Tecnologia from '../components/Tecnologia'

export function AppRouter() {

  return (
    <BrowserRouter>
          <Drawer></Drawer>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/curriculum" component={Curriculum} />
              <Route path="/contacto" component={Contacto} /> 
              <Route path="/proyectos" component={Proyectos} />
              {/* <Route path="/sobremi" component={AboutMe} />
              */}
              <Redirect to="/" />
          </Switch>
          <Footer></Footer>
    </BrowserRouter>
  );
}