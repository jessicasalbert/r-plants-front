import React, { Component } from 'react'
import {Page, TopDetails, Details, Photo, BottomDetails} from './DetailedPlantStyle'

export class DetailedPlant extends Component {

    state = {
        clicked: false,
        careInstructions: false,
        size: "small",
        price: this.props.plant.price.small
    }


    localAddToCart = (e) => {
        e.preventDefault()
        this.props.addToCart(this.props.plant, this.state.size)
    }

    imageFlipHandler = () => {
        this.setState((prev) => ({ clicked: !prev.clicked}))
    }

    showCareInstructions = () => {
        this.setState((prev) => ({ careInstructions: !prev.careInstructions}))
        
    }

    formEdit = (e) => {
        const price = this.props.plant.price[e.target.value]
        this.setState( () => ({
            [e.target.name] : e.target.value,
            price : price
        }))
    }

    render() {
        console.log(this.state.size)
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
                        <h3>Price: {this.state.price}</h3>
                        {/* <form>
                            <input type="radio" >
                            <input type="radio" >
                            <input type="radio">
                            {/*  */}
                        {/* </form> */} 
                        <form onSubmit={this.localAddToCart}>
                            <label><input onChange={this.formEdit} type="radio" id="small" name="size" value="small" checked={this.state.size === "small"}/>Small</label>
                            <label><input onChange={this.formEdit} type="radio" id="medium" name="size" value="medium" checked={this.state.size === "medium"}/>Medium</label>
                            <label><input onChange={this.formEdit} type="radio" id="large" name="size" value="large" checked = {this.state.size === "large"}/>Large</label>
                            <button> Add to cart </button>
                        </form>


                        
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
