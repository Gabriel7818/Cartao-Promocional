import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import PagesPromotionForm from './pages/Promotion/Form/Form'
import PagesPromotionList from './pages/Promotion/List/List'    
    
  const Root = () =>{
      return(
          <Router>
              <Routes>
                  <Route path="/" component={PagesPromotionList} />
                  <Route path="/create" component={PagesPromotionForm} />
                  <Route path="/edit/:id" component={PagesPromotionForm} />
              </Routes>
          </Router>
      )

  }

export default Root;