import React from 'react';
import Profile from '../ProfileComponent/Profile';
import FeatureCard from './FeatureCard';
import './Features.css';

const Features = () => {
    
    return ( 
        <>
        <section className='main-container'>
            <div className='pre-headline'>
                <p>WHY CODING-BATTLE?</p>
                <h1>Making learning easier and <br></br> more convenient for you.</h1>
            </div>
            <div className='feature-content'>
                <div className='feature-card row'>     
                <FeatureCard imgPath={require("../../images/data.png")} color="rgba(1, 162, 142, 0.39)" title="Data Structure" text="Data structures are the problem-solving pillars of coding. Learn all the foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews.">
                </FeatureCard>
                <FeatureCard imgPath={require("../../images/placment.png")} color="rgba(229, 48, 62, 0.39)" title="Placement Preparation" text="Ace the placement interviews by being knowledgeable in all well-known data structures, popular problem-solving methods, and core computer sciences.">
                </FeatureCard>
                <FeatureCard imgPath={require("../../images/hand.png")} color="rgba(55, 19, 253, 0.39)" title="Hand Picked Question" text="Get access to hand-picked coding interview questions across categories & difficulty levels that will prepare you for every interview you would encounter.">
                </FeatureCard>
                <FeatureCard imgPath={require("../../images/curated.png")} color="rgba(19, 120, 175, 0.39)" title="Curated Content" text="Learn in-depth conceptual overviews, how to approach an algorithm, how to implement it & how to optimize it.">
                </FeatureCard>
                <FeatureCard imgPath={require("../../images/learn_best.png")} color="rgba(26, 158, 253, 0.39)" title="Learn from the best" text="Get access to lectures and get mentored by one of the best in the market, Love Babbar.">
                </FeatureCard>
                <FeatureCard imgPath={require("../../images/learn.png")} color="rgba(249, 113, 21, 0.39)" title="Learn Something new" text="Learn new concepts daily, increase your productivity & reach your full potential.">
                </FeatureCard>
                </div>
            </div>
            <div className='profile'>
                <Profile></Profile>
            </div>
        </section>
        </>
     );
}
 
export default Features;