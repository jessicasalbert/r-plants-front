import React, { Component } from 'react'
import {Page, TopDetails, Details, Photo, BottomDetails, PetFriendly} from './DetailedPlantStyle'

export class DetailedPlant extends Component {

    state = {
        clicked: false
    }


    localClickHandler = () => {
        this.props.addToCart(this.props.plant)
    }

    imageFlipHandler = () => {
        this.setState((prev) => ({ clicked: !prev.clicked}))
    }

    render() {
        return (
            <Page>
                <TopDetails>
                <Photo>
                    <img onClick={this.imageFlipHandler} src={this.state.clicked ? this.props.plant.image2 : this.props.plant.image}/>
                </Photo>
                
                    <Details>
                        

                        <h1>{this.props.plant.name}</h1>
                        <h2>{this.props.plant.scientific}</h2>
                    
                            {this.props.plant.pet_friendly ? 
                            <PetFriendly src="https://www.svgrepo.com/show/133518/pet-friendly.svg"/> 
                            : null}
            
                        <button onClick={this.localClickHandler}> Add to cart </button>
                    </Details>
                </TopDetails>
                <BottomDetails>
                    <p>{this.props.plant.light}</p>
                    <p>{this.props.plant.water}</p>
                    <p>{this.props.plant.temperature}</p>
                </BottomDetails>

            </Page>
        )
    }
}

export default DetailedPlant
