import React, {useEffect, useState} from 'react';
import searchCss from "./Search.module.css";
import axios from 'axios';
import PromotionCard from '../Card/Card'
import {Link} from 'react-router-dom'

const PromotionSearch = () =>{

    const [promotions, setPromotions] = useState([]);
    const [search, setSearch] = useState('');

    useEffect( () => {
      axios.get('http://localhost:5000/promotions?_embed=comments')
     .then(
        (response) => {
        setPromotions(response.data);
      }
    );

    }, []);

    return (
        <>
        <header>
          <h1>Promo Show</h1>
          <Link to="/create">Nova Promoção</Link>
        </header>

        <input 
          type="search"
          className={searchCss.promotionSearchInput}
          placeholder="Buscar"
          value={search}
          />

          {promotions.map( (promotions) => (
            <PromotionCard promotion={promotions} key={promotions.id}/>    
          ) )}
        </>
    );
};

export default PromotionSearch;