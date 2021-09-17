import React from 'react'
import logo from '../image/logo.jpeg'
import twitter from '../image/twitter.svg'
import onetree from '../image/one-tree-planted.jpg'
import discord from '../image/discord.svg'
import tree from '../image/tree.png'
import nftcrop from '../image/nft-crop.gif'
import roadmap from '../image/roadmap-image.jpeg'
import g40 from '../image/G40.png'
import unusedcow from '../image/unusedcow.png'
import { Link } from 'react-router-dom'

const Incrementum = () => {
    return (
        <>
            <header className="navbar">
                <nav className="navbar__nav">
                    <ul className="navbar__item navbar__item--logo">
                    <li className="navbar__list navbar__list--logo">
                        <img src={logo} alt="" className="navbar__logo" />
                        </li>
                    </ul>
                    <ul>
                        <li className="navbar__giveaway"><Link to="/">Giveaways</Link></li>
                    </ul>
                    <ul className="navbar__item">
                        <li className="navbar__list">
                        <Link to="/"><img src={twitter} alt="" className="navbar__img" /></Link>
                        </li>
                        <li className="navbar__list">
                        <Link to="/"><img src={onetree} alt="" className="navbar__img" /></Link>
                        </li>
                        <li className="navbar__list">
                        <Link to="/"><img src={discord} alt="" className="navbar__img" /></Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="hero">
                <div className="hero__text-box">
                    <h1 className="hero__text">Incrementum</h1>
                </div>
                <div className="hero__photo">
                    <img src={tree} alt="" className="hero__img"/>
                </div>
            </section>
            <section className="goals">
                <div className="goals__header">
                    <h2 className="goals__header-text">Our goals</h2>
                </div>
                <div className="goals__text-box">
                    <div className="goals__para-box">
                        <p className="goals__para">
                            Incrementum is out to deliver a unique NFT experience that is unlike anything currently on the market.  The NFT space is oversaturated with profile picture cash grabs and we are set on creating long term value to our seed holders.  We want all seed holders to feel they are growing not only their wallets but also together as a community.  Incrementum NFT focuses on physical utility, charity, community, and environmental sustainability.  By partnering with One Tree Planted, we will be donating 1 tree per paid mint once we launch.  On top of our product, we aim to assemble a fun and informative Discord in which you can learn more about our project, meet some cool new people, and gain a better understanding of the NFT space.  The Incrementum team welcomes you and is thrilled to have you on board with our team and we are looking forward to growing together.
                        </p>
                    </div>
                    <div className="goals__para-box goals__para-box--img">
                        <img src={nftcrop} alt="" className="goals__para-img" />
                    </div>
                </div>
                <div className="goals__mint-con">
                    <h2 className="goals__mint">
                        Minting Details
                    </h2>
                    <div className="goals__mint-item">
                        <p className="goals__list">Total Mints Available - 4,000 - Each Seed is Identical</p>
                        <p className="goals__list">First 500 Mints Free - Buyer Only Pays Gas - Max of 1 Per Transaction</p>
                        <p className="goals__list">Next 3,500 Mints - .03 ETH + Gas - Max of 5 Per Transaction</p>
                    </div>
                </div>
            </section>
            <section className="roadmap">
                <div className="roadmap__list">
                    <div className="roadmap__left">
                        <img src={roadmap} alt="" className="roadmap__img" />
                    </div>
                    <div className="roadmap__right">
                        <div className="roadmap__title-box">
                            <h3 className="roadmap__title">project roadmap</h3>
                        </div>
                        <div className="roadmap__right-col">
                            <div className="roadmap__right-col-2">
                                <div className="roadmap__right-col-item">
                                    <h4 className="roadmap__right-header">NFT utility</h4>
                                    <p className="roadmap__right-text">Our team will continue to develop new projects with higher mint counts than the number of apple seeds minted. We already have our next project in the pipeline to reward apple seed owners.</p>
                                        <p className="roadmap__right-text">Example: Our next project drops with 8,000 mint size. All owners of seeds (4,000) will receive a free copy of the new project and the remaining 4,000 go on sale to the public. Avoid the gas wars!!</p>
                                
                                    <h4 className="roadmap__right-header">Community</h4>
                                    <p className="roadmap__right-text">We want the community to be first and foremost.  Incrementum will be running multiple contests to give aspiring artists an opportunity to showcase their art, make a little money, and gain some exposure in the NFT space.  If we really like your work you may even be selected to work on one of our upcoming NFTs for a stake in the project.  Incrementum is a project by the people, for the people.</p>
                                </div>
                            
                                <div className="roadmap__right-col-item">
                                    <h4 className="roadmap__right-header">Physical Utility</h4>
                                    <p className="roadmap__right-text">We wanted to blend the virtual world with the physical. Our team has plans to drop physical items, experiences, and events to random wallets with seeds. Some of our ideas for physical utility include covering your bar tab for a night out, sending you and a friend on vacation, physical items being shipped to your home, and paying for your dinner at a top tier restaurant.</p>
                                
                                <h4 className="roadmap__right-header">Charitable Donations</h4>
                                    <p className="roadmap__right-text">Our community spoke and we listened.  The Incrementum team put up multiple options to a vote and we landed on a Tree Planting Initiative.  After reaching out to various organizations, we have partnered with One Tree Planted and are committed to planting one tree per apple seed sold.  Because of the negative effects that Cryptocurrency has on the environment we felt that this was a great way to give back to the community.  In the future, we plan to dedicate a portion of every newly released project to a charity that will be voted on by the community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="about__heading">About us</div>
                <div className="about__item">
                    <div className="about__list">
                        <div className="about__img-box">
                            <img src={g40} alt="" className="about__img" />
                        </div>
                        <h4 className="about__person">G40</h4>
                        <p className="about__para">
                        28 years old from Southern California and is a High School friend of UnusedCow.  I have a background in Marketing & Project Management and am genuinely excited to help educate our community about NFT’s and develop an amazing project for our holders.
                        </p>
                    </div>

                    <div className="about__list">
                        <div className="about__img-box">
                            <img src={unusedcow} alt="" className="about__img" />
                        </div>
                        <h4 className="about__person">Unused cow</h4>
                        <p className="about__para">
                        27 years old from Southern California.  Tech and gaming enthusiast who is fascinated with the entire crypto and NFT space.  I am an outside the box thinker looking to bring some things to the NFT landscape that haven’t been seen before.
                        </p>
                    </div>
                </div>
                <div className="about__footer">
                    <ul className="about__footer-item">
                        <li className="about__footer-list">
                            <Link to="/"><img src={twitter} alt="" className="about__footer-img" /></Link>
                        </li>
                        <li className="about__footer-list">
                            <Link to="/"><img src={discord} alt="" className="about__footer-img" /></Link>
                        </li>
                    </ul>
                    <h4 className="about__footer-copy">&copy;{new Date().getFullYear()}{" "}IncrementumNFT, LLC.</h4>
                </div>
            </section>
        </>
    )
}

export default Incrementum
