import React from 'react'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import {BrowserRouter as Router
       } from 'react-router-dom'; 
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';
// import { Route } from 'react-router-dom';
// import Sidebar from './components/sidebar';
import Home from './components/home/home';




function App() {
  
  return (
    <div>
      <Router>
         {/* <Sidebar />   */}
         {/* <switch> */}
            {/* <Route path="/" exact component={home} />
            <Route path="/contact" exact component={contact} />
            {/* <Route path="/DEPT/Garbage" exact component={Garbage} /> */}
            {/* <Route path="/DEPT/construct"exact component={construct} /> */}
            {/* <Route path="/DEPT/KWA" exact component={KWA} /> */}
            {/* <Route path="/help" exact component={help} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Signup" exact component={Signup} />  */}
        
         <Header /> 
          <Routes />
         <Footer />
         {/* </switch> */}
       </Router>
    </div>
    
  )
}

export default App




