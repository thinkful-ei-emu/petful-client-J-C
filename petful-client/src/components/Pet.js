import React from 'react'
import config from '../config';


export default class Pet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: {},
            dog: {},
        }
    }

    fetchCat = () => {
        fetch(`${config.API_ENDPOINT}/cat`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => { this.setState({ cat: data }) })//this.setState({ cats: cats })
    }

    fetchDog = () => {
        fetch(`${config.API_ENDPOINT}/dog`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => { this.setState({ dog: data }) })
    }

    handleCatAdopt = () => {
        fetch(`${config.API_ENDPOINT}/cat`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(this.fetchCat());
    }

    handleDogAdopt = () => {
        fetch(`${config.API_ENDPOINT}/dog`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(this.fetchDog());
    }

    componentDidMount() {
        console.log('Fetching...')
        this.fetchCat();
        this.fetchDog();
    }

    render() {

        return (
            <>
                <div className='Cat'>
                    <img src={this.state.cat.imageURL} alt={this.state.cat.name} />
                    <p className='description'>"{this.state.cat.imageDescription}"</p>
                    <span>Name: {this.state.cat.name}<br /> Age: {this.state.cat.age}<br /> Sex: {this.state.cat.sex}<br /> Breed: {this.state.cat.breed}</span>
                    <p className='stroy'>Cat's story: {this.state.cat.story}</p>
                    <button onClick={this.handleCatAdopt} >Adopt</button>
                </div>
                <hr />
                <div className='Dog'>
                    <img src={this.state.dog.imageURL} alt={this.state.dog.name} />
                    <p className='description'>"{this.state.dog.imageDescription}"</p>
                    <span>Name: {this.state.dog.name}<br /> Age: {this.state.dog.age}<br /> Sex: {this.state.dog.sex}<br /> Breed: {this.state.dog.breed}</span>
                    <p className='stroy'>Cat's story: {this.state.dog.story}</p>
                    <button onClick={this.handleDogAdopt} >Adopt</button>
                </div>
            </>
        )
    }
}