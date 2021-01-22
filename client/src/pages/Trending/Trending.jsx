import React from 'react'
import TrendingCard from '../../components/TrendingCard/TrendingCard';
import lifestyle from '../../assets/images/brooke-lark-nBtmglfY0HU-unsplash.jpg';
import basketball from '../../assets/images/emma-frances-logan-nD3AcuizeF8-unsplash.jpg';
import women from '../../assets/images/linkedin-sales-navigator-Mis5fyJi7Q0-unsplash.jpg';
import home from '../../assets/images/nick-jio-57rD2oDZquc-unsplash.jpg';
import cannabis from '../../assets/images/shelby-ireland-GHVBpTkSqfs-unsplash.jpg';
import './Trending.scss';
import { Link } from 'react-router-dom';

export default class Trending extends React.Component {
    render() {
        return (
            <div className='container'>
                <header className='header'></header>
                <h1 className='title'>#Trending</h1>
                <input type="text"
                placeholder=''
                className='search'/>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li className='nav-list__item is-active'>Daily</li>
                        <li className='nav-list__item'>Monthly</li>
                        <li className='nav-list__item'>Yearly</li>
                    </ul>
                </nav>
                <div className="card-container">
                    <Link to=''><TrendingCard image={ lifestyle } title='#Lifestyle'/></Link>
                    <TrendingCard image={ basketball } title='#Basketball'/>
                    <TrendingCard image={ women } title='#WomenInBusiness'/>
                    <TrendingCard image={ home } title='#AtHome'/>
                    <TrendingCard image={ cannabis } title='#Cannabis'/>
                </div>
            </div>
        )
    }
}


