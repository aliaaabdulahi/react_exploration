import React from 'react';
import './card-list.styles.css';

export const CardList = props => (
     <div className='card-list'>
         {props.characters.map(character => (
             <h1 key={character.id}> {character.name}</h1>
         ))}
    </div>
);
