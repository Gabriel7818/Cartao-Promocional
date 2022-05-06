import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import PagesPromotionForm from '../pages/Promotion/Form/Form';
import PagesPromotionSearch from '../pages/Promotion/Search/Search'     
    
  const Root = () =>{
      return(
          <Router>
              <Routes>
                  <Route path="/" element={<PagesPromotionSearch />} />
                  <Route path="/create" element={<PagesPromotionForm />} />
                  <Route path="/edit/:id" element={<PagesPromotionForm />} />
              </Routes>
          </Router>
      )

  }

export default Root;