import React from "react";
import { BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Drawer from '../components/Drawer'
import { Home } from "../components/Home";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import Footer from "../components/Footer";
import {Proyectos} from "../components/Proyectos";
// import { AboutMe } from "../components/AboutMe";

export function AppRouter() {

  let lang= localStorage.getItem("lang");
  if(!lang){
    lang="";
  }else{
    lang= "/"+lang;
  }

  return (
    <BrowserRouter basename={lang}>
          <Drawer></Drawer>
          <Switch>
              <Route exact path='/inicio' component={Home}/>
              <Route path="/curriculum" component={Curriculum} />
              <Route path="/contacto" component={Contacto} /> 
              <Route path="/proyectos" component={Proyectos} />
              {/* <Route path="/sobremi" component={AboutMe} />
              */}
              {/* <Redirect to='/inicio' /> */}
          </Switch>
          <Footer></Footer>
    </BrowserRouter>
  );
}