import React, {useState, useEffect} from 'react';
import PromotionCard from '../../../components/Promotion/Card/Card';
import axios from 'axios'

const PagesPromotionList = () =>{
    const [promotions, setPromotions] = useState([]);

    useEffect( () => {
      axios.get('http://localhost:5000/promotions?_embed=comments')
     .then(
        (response) => {
        setPromotions(response.data);
      }
    );

    }, []);

    return(
        <>
          {promotions.map( (promotions) => (
            <PromotionCard promotion={promotions} key={promotions.id}/>    
          ) )}
        </>
    )
}

export default PagesPromotionList;

