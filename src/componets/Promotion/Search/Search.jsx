import React, {useEffect, useState} from "react";
import searchCss from './Search.module.css';
// import axios from 'axios';
import PromotionCard from '../card/Card';
import { Link } from "react-router-dom";
import UIButton from '../../UI/Button/Button';
import api from '../../../service/Api' 


const PromotionSearch = () => { 
        const [promotions, setPromotions] =  useState([]);
        const[ search, setSearch] = useState('');
    

         useEffect(() => {
           const params = {};
           if (search) {
             params.title_like = search;}
             
             const getSeach = async () => {
               try {
                 const promotions = await api.get('/promotions?_embed=comments&_order=desc&_sort=id', {params} ) 
                 setPromotions(promotions.data);
                } catch (error){
                  console.log(error);
                }}
                getSeach();

         }, [search])

          return (
         <>
         <header className={searchCss.PromotionSearchHeader}>
           <h1> promo show</h1>
           <UIButton to= "/create" theme="contained-success" component={Link}>Nova promoção</UIButton>
         </header>
         <input type="search"
         className={searchCss.PromotionSearchInput} 
         placeholder="Busca"
         value={search}
         onChange={(ev) => setSearch(ev.target.value)}
         />
          {promotions.map((promotion) =>(
            <PromotionCard promotion={promotion} key={promotion.id}/>
           ) )}  
         </>
    );

};

export default PromotionSearch;
