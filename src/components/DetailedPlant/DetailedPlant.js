import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Radio, RadioGroup } from "react-custom-radio-buttons";
import {
    Page, 
    TopDetails, 
    Details, 
    Photo, 
    BottomDetails, 
    BreadCrumbs, 
    AddtoCart, 
    CareType, 
    Description,
    Heading,
    SubHeading,
    PetFriendly,
    CareCard,
    Background,
    PlantHeading,
    CareWrapper
} from './DetailedPlantStyle'

export class DetailedPlant extends Component {

    state = {
        clicked: false,
        careInstructions: true,
        size: "small",
        price: this.props.plant.price.small,
        quantity: 1
    }


    localAddToCart = (e) => {
        e.preventDefault()
        this.props.addToCart(this.props.plant, this.state.size, this.state.quantity)
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

    quantityHandler = (e) => {
        this.setState({ quantity: e.target.value })
    }

    render() {
        return (
            <>
            {/* <BreadCrumbs><Link to="/">Home</Link> ⤜ <Link to="/plants">Store</Link> ⤜ <Link>{this.props.plant.name}</Link></BreadCrumbs> */}
            <Background>
            <Page>
                <TopDetails>
                    <Photo alt={this.props.plant.name} onClick={this.imageFlipHandler} src={this.state.clicked ? this.props.plant.image2 : this.props.plant.image}></Photo>
                    <Details>
                        <PlantHeading>{this.props.plant.name}</PlantHeading>
                        <SubHeading>{this.props.plant.scientific}</SubHeading>
                    
                            {this.props.plant.pet_friendly ? 
                            <PetFriendly>
                                <img alt="plant friendliness" src="https://svgsilh.com/svg/155322.svg"/>&nbsp;&nbsp;Pet-friendly!
                            </PetFriendly>
                            : null}<br/>
                        <CareType>Price: ${this.state.price}</CareType><br/>
                        
                        <form onSubmit={this.localAddToCart}>
                            
                        {/* <RadioGroup name="size" selectedValue={this.state.size} onChange={this.formEdit}>
                            <Radio value="small" />Small
                            <Radio value="medium" />Medium
                            <Radio value="large" />Large
                        </RadioGroup>
                            
                             */}
                            
                            
                            
                            
                                                        
                            <label><input onChange={this.formEdit} type="radio" id="small" name="size" value="small" checked={this.state.size === "small"}/>&nbsp;Small</label>
                            <label><input onChange={this.formEdit} type="radio" id="medium" name="size" value="medium" checked={this.state.size === "medium"}/>&nbsp;Medium</label>
                            <label><input onChange={this.formEdit} type="radio" id="large" name="size" value="large" checked = {this.state.size === "large"}/>&nbsp;Large</label><br/><br/>
                            
                            
                            
                            
                            
                            <label for="quantity">Quantity:</label>
                                <select onChange={this.quantityHandler} name="quantity" id="quantity"  value={this.state.quantity}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select><br/><br/>
                            
                            <AddtoCart>Add to cart</AddtoCart>
                        </form>
                    </Details>
                </TopDetails>
                {/* <Heading onClick={this.showCareInstructions}>Care Instructions</Heading> */}
                {this.state.careInstructions ? <Heading onClick={this.showCareInstructions}>Care Instructions ➖</Heading> : <Heading onClick={this.showCareInstructions}>Care Instructions ➕</Heading>}
                <BottomDetails>
                    {this.state.careInstructions ? 
                    <>
                    <CareCard>
                        <CareType>Light</CareType>
                        <hr></hr>
                        <Description>{this.props.plant.light}</Description>
                    </CareCard>
                    <CareCard>
                        <CareType>Water</CareType>
                        <hr></hr>
                        <Description>{this.props.plant.water}</Description>
                    </CareCard>
                    <CareCard>
                        <CareType>Fertilizer</CareType>
                        <hr></hr>
                        <Description>{this.props.plant.fertilizer}</Description>
                    </CareCard>
                    <CareCard>
                        <CareType>Humidity</CareType>
                        <hr></hr>
                        <Description>{this.props.plant.humidity}</Description>
                    </CareCard>
                    <CareCard>
                        <CareType>Temperature</CareType>
                        <hr></hr>
                        <Description>{this.props.plant.temperature}</Description>
                    </CareCard>
                    </>
                    : null}
                </BottomDetails>

            </Page>
            </Background>
            <Footer />
            </>
        )
    }
}

export default DetailedPlant
