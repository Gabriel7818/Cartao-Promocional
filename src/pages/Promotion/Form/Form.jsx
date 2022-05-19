import React from 'react';
import PromotionForm from 'componets/Promotion/Form/Form';
import UIContainer from "../../../componets/UI/Container/container"
import {useParams} from 'react-router-dom'
const PagesPromotionForm = () => {
     const { id } =useParams();
    return(
        <UIContainer>
            <PromotionForm id={ id ? Number.parseInt(id, 10) : null} />
        </UIContainer>
    )
}

export default PagesPromotionForm;