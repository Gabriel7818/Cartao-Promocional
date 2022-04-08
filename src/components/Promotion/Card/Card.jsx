import React from 'react';
import card from './card.module.css';

function PromotionCard({promotion}) {

  return (
    <div className={card.promotion_card}>
      <img className={card.promotion_card_image} src={promotion.imageUrl} alt="Foto do produto" />
      <div>
          
          <h1>{promotion.title}</h1>
          <span>{promotion.price}</span>
          
          <footer>
              <div>
                  {promotion.comments.length > 0 && (
                      <div>
                          {promotion.comments[0].comment}
                      </div>
                  )}
              </div>
              <div>
                  {promotion.comments.length}{' '}
                  {promotion.comments.length >1 ? 'Comentários' : 'Comentário'}
              </div>
              <a href={promotion.url}>Ir para o site</a>
          </footer>
          
      </div>
    </div>
  );
}

export default PromotionCard;
