import React from 'react';
import './StateCount.css';

const StateCount = () => {
    return ( 
        <>
        <div className='container-fluid'>  
        <section className='state-count flex row'>
            <div className='count-text border_high col-md-3 col-sm-6 col-xs-6'>
                <div className='count-inner-text'>
                    <span>700K+</span>
                </div>
                <div  className='count-inner-text'>
                    <p>Subscribers <br></br> on Youtube</p>
                </div>
            </div>
            <div className='count-text border_high col-md-3 col-sm-6 col-xs-6'>
                <div  className='count-inner-text'>
                    <span>3K+</span>
                </div>
                <div  className='count-inner-text'>
                    <p>Followers <br></br>on Twitter</p>
                </div>
            </div>

            <div className='count-text border_high col-md-3 col-sm-6 col-xs-6'>
                <div  className='count-inner-text'>
                    <span>80K+</span>
                </div>
                <div  className='count-inner-text'>
                    <p>Followers<br></br> on Instagram</p>
                </div>
            </div>

            <div className='count-text col-md-3 col-sm-6 col-xs-6'>
                <div  className='count-inner-text'>
                    <span>260K+</span>
                </div>
                <div  className='count-inner-text'>
                    <p>Followers<br></br> on Linkedin</p>
                </div>
            </div>
        </section>  
        </div>
        </>
     );
}
 
export default StateCount;