import React, {useEffect, useState} from 'react';
import searchCss from "./Search.module.css";
import axios from 'axios';
import PromotionCard from '../Card/Card'
import {Link} from 'react-router-dom'
import UIButton from 'components/UI/Button/Button'

const PromotionSearch = () =>{

    const [promotions, setPromotions] = useState([]);
    const [search, setSearch] = useState('');

    useEffect( () => {
      const params = {};
      if (search) {
        params.title_like = search;
      }

      axios.get('http://localhost:5000/promotions?_embed=comments', {params})
     .then(
        (response) => {
        setPromotions(response.data);
      }
    );

    }, [search]);

    return (
        <>
        <header className={searchCss.promotionSearchHeader}>
          <h1>Promo Show</h1>
          <UIButton component={Link} to="/create" theme="contained-success">Nova Promoção</UIButton>
        </header>

        <input 
          type="search"
          className={searchCss.promotionSearchInput}
          placeholder="Buscar"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
          />

          {promotions.map( (promotions) => (
            <PromotionCard promotion={promotions} key={promotions.id}/>    
          ) )}
        </>
    );
};

export default PromotionSearch;