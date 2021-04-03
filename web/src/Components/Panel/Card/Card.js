import React from 'react';
import './Card.css';

//criei um objeto e extrai as props
const PanelCard = ({panel}) => (
    <div className="panel-card">
        <img src={panel.imageUrl} alt= {panel.title} className="panel-card__image"/>
        <div className="panel-card__info">
            <h1 className="panel-card__title">{panel.title}</h1>
            <span className="panel-card__episodes">Episódios: {panel.episodes}</span>
            <footer className="panel-card__footer">
                {/*Adicionando uma condicional rendering*/}
                {panel.comments.length > 0 && (
                    <div className="panel-card__comments">
                        Comentário: "{panel.comments[0].comment}"
                    </div>
                )}
                <div className="panel-card__comment-count">
                    {panel.comments.length} comentário{panel.comments.length > 1 ? 's' : ''}
                </div>
                <a href={panel.url} target="_blank" rel="noreferrer" className="panel-card__url">
                    Assitir agora
                </a>
            </footer>
        </div>
    </div>
);

export default PanelCard;