import React from "react";
import card from "./card.module.css";
import {Link} from "react-router-dom";
import UIButton from '../../UI/Button/Button';
import {Trash} from 'phosphor-react';

function PromotionCard ({promotion, onClickDelete} ) {
  return (
    <div className={card.promotionCard}>
      <img className={card.promotionCardImage} src={promotion.imageUrl} alt={promotion.title} />
      <div />
      <div>
        <h1 className={card.promotionCardTitle}>{promotion.title}</h1>
        <span className={card.promotionCardPrice} >R${promotion.price}</span>
        <footer className={card.promotionCardFooter}>
          <div className={card.promotionCardComment}>
            {promotion.comments.length > 0 && (
              <div className={card.promotionCardComment}>
                "{promotion.comments[0].comment}"
              </div>
            )}
          </div>
          <div className={card.promotionCardCommentsCount} >
            {promotion.comments.length }{''}
            {promotion.comments.length >1 ? 'Comentario':'Comentarios' }
          </div>
          <UIButton component="a" href={promotion.url} rel="nooper" target="_blank">Ir para o site</UIButton>
          <UIButton component={Link} to={`/edit/${promotion.id}`} className={card.promotionCardButton}>Editar</UIButton>
          <button type="button" onClick={onClickDelete} className={card.promotionCardButtonDelete}>
          <Trash size={32} color="#BF1D1D" weight="duotone" />
          </button>
        </footer> 
      </div>
    </div>
  );
}

export default PromotionCard;