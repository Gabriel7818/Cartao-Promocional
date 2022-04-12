import React from 'react';
import {useParams} from 'react-router-dom';

const PagesPromotionForm = () =>{
    const {id} = useParams();

    return(
        <div>
            {!id
             ? 'FORM NOVO REGISTRO'
             : 'FORM EDITAR REGISTRO'
            }
              {id && <div> id: {id} </div>}
            Form!
        </div>
    )
}

export default PagesPromotionForm;