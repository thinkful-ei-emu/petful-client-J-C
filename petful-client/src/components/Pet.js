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
        fetch(`${config.API_ENDPOINT}/cat`)
            .then(res => res.json())
            .then(data => { this.setState({ cat: data }); console.log(data) })//this.setState({ cats: cats })
    }

    fetchDog = () => {
        fetch(`${config.API_ENDPOINT}/dog`)
            .then(res => res.json())
            .then(data => { this.setState({ dog: data }) })
    }

    componentDidMount() {
        console.log('Fetching...')
        this.fetchCat();
        this.fetchDog();
    }

    render() {
        // console.log(this.state.cat)
        // console.log(this.state.dog)

        return (
            <>
                <div className='Cat'>
                    <img src={this.state.cat.imageURL} alt={this.state.cat.name} />
                    <p className='description'>"{this.state.cat.imageDescription}"</p>
                    <span>Name: {this.state.cat.name}<br /> Age: {this.state.cat.age}<br /> Sex: {this.state.cat.sex}<br /> Breed: {this.state.cat.breed}</span>
                    <p className='stroy'>Cat's story: {this.state.cat.story}</p>
                </div>
                <hr />
                <div className='Dog'>
                    <img src={this.state.dog.imageURL} alt={this.state.dog.name} />
                    <p className='description'>"{this.state.dog.imageDescription}"</p>
                    <span>Name: {this.state.dog.name}<br /> Age: {this.state.dog.age}<br /> Sex: {this.state.dog.sex}<br /> Breed: {this.state.dog.breed}</span>
                    <p className='stroy'>Cat's story: {this.state.dog.story}</p>
                </div>
            </>
        )
    }
}