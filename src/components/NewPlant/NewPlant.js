import React, { Component } from 'react'
import FormStyle from './FormStyle'

export class NewPlant extends Component {
    state = {
        name: "",
        image: "",
        image2: "",
        scientific: "",
        pet_friendly: true,
        light: "",
        water: "",
        fertilizer: "",
        temperature: "",
        humidity: "",
        price_id: 1,
        latitude: "",
        longitude: ""
    }



    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }



    render() {
        return (
            <FormStyle onSubmit={this.submitHandler}>
                <br/>Name<br/><input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/><br/>
                <br/>Image<br/><input type="text" name="image" value={this.state.image} onChange={this.changeHandler}/><br/>
                <br/>Image2<br/><input type="text" name="image2" value={this.state.image2} onChange={this.changeHandler}/><br/>
                <br/>Scientific<br/><input type="text" name="scientific" value={this.state.scientific} onChange={this.changeHandler}/><br/>
                <br/>Pet friendly<br/><input type="text" name="pet_friendly" value={this.state.pet_friendly} onChange={this.changeHandler}/><br/>
                <br/>Light<br/><input className="text" type="textarea" name="light" value={this.state.light} onChange={this.changeHandler}/><br/>
                <br/>Water<br/><input className="text" type="textarea" name="water" value={this.state.water} onChange={this.changeHandler}/><br/>
                <br/>Fertilizer<br/><input className="text" type="textarea" name="fertilizer" value={this.state.fertilizer} onChange={this.changeHandler}/><br/>
                <br/>Temperature<br/><input className="text" type="textarea" name="temperature" value={this.state.temperature} onChange={this.changeHandler}/><br/>
                <br/>Humidity<br/><input className="text" type="textarea" name="humidity" value={this.state.humidity} onChange={this.changeHandler}/><br/>
                <br/>Price ID<br/><input type="text" name="price_id" value={this.state.price_id} onChange={this.changeHandler}/><br/>
                <br/>Latitude<br/><input type="text" name="latitude" value={this.state.latitude} onChange={this.changeHandler}/><br/>
                <br/>Longitude<br/><input type="text" name="longitude" value={this.state.longitude} onChange={this.changeHandler}/><br/>
                <br></br><input type="submit" value="Submit" ></input>
            </FormStyle>
        )
    }
}

export default NewPlant
