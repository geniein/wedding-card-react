import React from "react";
import '../styles.css';
import Header from '@pages/Header';
import { Container } from "reactstrap";
import mock from '../../mock';
import Profile from "@pages/Profile";
import Gallery from "@pages/Gallery";
import Footer from "@pages/Footer";
import Place from "@pages/Place";
import Comments from "@pages/Comments";
import firebase from 'firebase'
import 'firebase/database';

const Main =() =>{
    return (
        <Container className="app">        
            <Header init={mock} />
            <Profile init={mock} />
            <Gallery init={mock} />
            <Place init={mock}/>
            <Comments/>
            <Footer/>  
        </Container>
        )
}

export default Main;