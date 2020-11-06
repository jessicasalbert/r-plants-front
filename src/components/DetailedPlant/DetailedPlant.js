import React, { Component } from 'react'
import {Page, TopDetails, Details, Photo, BottomDetails} from './DetailedPlantStyle'

export class DetailedPlant extends Component {

    state = {
        clicked: false,
        quantity: 2,
        size: "M",
        careInstructions: false
    }


    localAddToCart = () => {
        this.props.addToCart(this.props.plant, this.state.size, this.state.quantity)
    }

    imageFlipHandler = () => {
        this.setState((prev) => ({ clicked: !prev.clicked}))
    }

    showCareInstructions = () => {
        this.setState((prev) => ({ careInstructions: !prev.careInstructions}))
        
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
                            <div>
                                <img src="https://www.svgrepo.com/show/133518/pet-friendly.svg"/>
                                <p>Pet-friendly!</p>
                            </div>
                            : null}
            
                        <button onClick={this.localAddToCart}> Add to cart </button>
                    </Details>
                </TopDetails>
                <BottomDetails>
                    <h2 onClick={this.showCareInstructions}>Care Instructions</h2>
                    {this.state.careInstructions ? 
                    <>
                        <h5>Light</h5>
                        <p>{this.props.plant.light}</p>
                        <h5>Water</h5>
                        <p>{this.props.plant.water}</p>
                        <h5>Temperature</h5>
                        <p>{this.props.plant.temperature}</p>
                    </> : null}
                </BottomDetails>

            </Page>
        )
    }
}

export default DetailedPlant
