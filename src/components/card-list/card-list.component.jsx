import React from 'react';
import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    <div className='card-list'>
        {props.monsters.map(monstre => (
        <Card key={monstre.id} monster={monstre}/>
        ))}
    </div>
);