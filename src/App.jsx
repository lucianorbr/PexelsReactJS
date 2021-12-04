import React from 'react'
import axios from 'axios'
import Styles from './styles/Photos.module.css'
import Footer from './components/Footer'
import {Container, PexelLogo, SearchForm, Button, Header } from './components/Header/styles';
import ButtonsHeader from './components/Header'
import Buttons from './components/Button';


require('dotenv/config');

class Photos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: "", page_no: 17, data: "", isOpen: true, page: '1'
        }
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
    }
    handleClick = () => {
        axios.get(`https://api.pexels.com/v1/search`, {
            headers: {
                authorization: process.env.REACT_APP_API_KEY
            }, params: {
                query: this.state.value, per_page: this.state.page_no
            }
        })
            .then(res => res.data.photos)
            .then(res => this.setState({data: res})).catch(err => console.log(err))
    }

    componentDidMount() {
        axios.get(`https://api.pexels.com/v1/search`, {
            headers: {
                authorization: process.env.REACT_APP_API_KEY
            }, params: {
                query: "4k", per_page: this.state.page_no
            }
        })
            .then(res => res.data.photos)
            .then(res => this.setState({data: res})).catch(err => console.log(err))
    }


    render() {
        console.log(this.props)
        console.log(this.state.data)
        const {data} = this.state

        return (<div className={Styles.main}>
            <Container>
                <Header>
                <PexelLogo/>
                <SearchForm>
                    <input
                        onChange={this.handleChange}
                        value={this.state.value}
                        placeholder="Search for free photos..."
                    />
                    <Button type="Button" onClick={this.handleClick}>Search</Button>
                </SearchForm>
                </Header>
            </Container>
            <div className={Styles.photo_container}>

                <div className={Styles.flexContainer}>

                    {data !== "" && data.map((item, i) => {
                        if (i <= Math.floor(this.state.page_no / 3)) {
                            return (

                                <div key={i} className={Styles.img}>
                                    <a href={item.src.original} target="_blank" rel="noopener noreferrer">
                                        <img className={Styles.img} width="100%" src={item.src.large} alt="img">
                                        </img>
                                    </a>
                                    <div className={Styles.details}>
                                        <a href={item.photographer_url} target="_blank"
                                           rel="apple-touch-icon-precomposed">
                                            <h3>{item.photographer}</h3>
                                        </a>
                                    </div>
                                </div>)
                        }
                    })}
                </div>

                <div className={Styles.flexContainer}>
                    {data !== "" && data.map((item, i) => {
                        if (i > Math.floor(this.state.page_no / 3) && i <= 2 * Math.floor(this.state.page_no / 3)) {
                            return (<div key={i}>
                                <a href={item.src.original} target="_blank" rel="noopener noreferrer">
                                    <img className={Styles.img} width="100%" src={item.src.large} alt="img">
                                    </img>
                                </a>
                                <div className={Styles.details}>
                                    <a href={item.photographer_url} target="_blank" rel="noopener noreferrer">
                                        <h3>{item.photographer}</h3>
                                    </a>
                                </div>
                            </div>)
                        }
                    })}
                </div>

                <div className={Styles.flexContainer}>
                    {data !== "" && data.map((item, i) => {
                        if (i > 2 * Math.floor(this.state.page_no / 3)) {
                            return (<div key={i}>
                                <a href={item.src.original} target="_blank" rel="noopener noreferrer">
                                    <img className={Styles.img} width="100%" src={item.src.medium} alt="img">
                                    </img>
                                </a>
                                <div className={Styles.details}>
                                    <a href={item.photographer_url} target="_blank" rel="noopener noreferrer">
                                        <h3>{item.photographer}</h3>
                                    </a>
                                </div>
                            </div>)
                        }
                    })}
                </div>
            </div>
            <Buttons/>
            <Footer/>
        </div>)
    }
}

export default Photos

