import React, { Component } from 'react'
import {Header, Page, TopDetails, Details, Photo, BottomDetails} from './DetailedPlantStyle'

export class DetailedPlant extends Component {
    localClickHandler = () => {
        this.props.addToCart(this.props.plant)
    }
    render() {
        return (
            <Page>
                <TopDetails>
                <Photo>
                    <img src={this.props.plant.image}/>
                </Photo>
                
                <Details>
                    <Header>{this.props.plant.name}</Header>
                    <h2>{this.props.plant.scientific}</h2>
                    <>
                    {this.props.plant.pet_friendly ? <h3>Pet friendly!</h3> : null}
                    </>
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
