import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Footer from './components/Footer'
import {Container as Cont, PexelLogo, SearchForm, Button, Header} from './components/Header/styles';
import Gallery from './components/Pages/Gallery';
import Input from './components/Header/Input';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';

require('dotenv/config');

const Ap = () => {
    const [photos, setPhotos] = useState('');
    const [loading, setLoading] = useState(true);
    const [FormData, setFormData] = useState('');
    const [page, setPage] = useState();

    const fetchData = async (input, page) => {
        setLoading(true);
        const response = await axios.get(
            `https://api.pexels.com/v1/search?page=${page}&query=${!input ? '4k' : input}&per_page=40`, {
                headers: {
                    Authorization: process.env.REACT_APP_API_KEY
                }
            });
        const data = await response.data;
        setPhotos(data);
        setLoading(false);
    };
    const handleChange = (e) => {
        setFormData(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(FormData);
    };
    const pageChange = (e, value) => {
        setPage(value);
        fetchData(FormData, value);
    }
    useEffect(() => {
        fetchData();
    }, []);

    if (loading)
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <CircularProgress size={140}/>;
            </div>)

    return (
        <Container>
            <Cont>
                <PexelLogo/>
                <SearchForm>
                    <Input
                        change={handleChange}
                        submit={handleSubmit}
                        placeholder="Search for free photos..."
                    />
                </SearchForm>
            </Cont>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '3rem'
                }}
            >
                <Pagination
                    count={20}
                    size="large"
                    onChange={pageChange}
                    page={page}
                />
            </div>
            <Gallery photos={photos.photos}/>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '3rem'
                }}
            >
                <Pagination
                    count={20}
                    size="large"
                    onChange={pageChange}
                    page={page}
                />
            </div>
            <Footer/>
        </Container>
    )
}

export default Ap


