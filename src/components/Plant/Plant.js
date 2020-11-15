import React from 'react'
import {PlantStyle, PlantImage, Title} from './PlantSyle'
import { NavLink } from 'react-router-dom';

export default function Plant(props) {
    return (
        <NavLink to={`/plants/${props.plant.id}`}>
        <PlantStyle>
            <PlantImage onMouseOver={e => e.target.src = props.plant.image2} onMouseOut={e => e.target.src = props.plant.image} src={props.plant.image}></PlantImage>
            <Title>{props.plant.name}</Title>
        </PlantStyle>
        </NavLink>
    )
}