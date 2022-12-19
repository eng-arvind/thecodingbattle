import React from 'react';
import './Community.css';

const Community = () => {
    return ( 
        <>
        <section className='home_joinCodingFamilySection'>
        <div className='join-heading'>
            <p className='text-heading'>Join our Coding family</p>
            <p className='text-desc'>If you would like to keep up on the latest posts and courses,<br></br> come by and connect with us on the following links.</p>
        </div>
        <div className='social-media'>
            <div className='media-logo'>
                <div className=""><a target="_blank" href="https://www.youtube.com/c/LoveBabbar1">
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FYoutube_Oct_Denoiser_Beauty_001_copy_6a63d8ef65.png&w=1920&q=75" alt="" />
                    </a></div>
                <div><a target="_blank" className='youtube' href="https://www.youtube.com/c/LoveBabbar1">YouTube</a></div>
            </div>
            <div className='media-logo'>
                <div className=""><a target="_blank" href="https://www.youtube.com/c/LoveBabbar1">
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FLinked_In_Oct_Denoiser_Beauty_001_copy_b6e0b974bb.png&w=1920&q=75" alt="" />
                    </a></div>
                <div><a target="_blank" className='linkedin' href="https://www.youtube.com/c/LoveBabbar1">LinkedIn</a></div>
            </div>
            <div className='media-logo'>
                <div className=""><a target="_blank" href="https://www.youtube.com/c/LoveBabbar1">
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FDiscord_Oct_Denoiser_Beauty_001_copy_a253ed4d28.png&w=1920&q=75" alt="" />
                    </a></div>
                <div><a target="_blank" className='discord' href="https://www.youtube.com/c/LoveBabbar1">Discord</a></div>
            </div>
            <div className='media-logo'>
                <div className=""><a target="_blank" href="https://www.youtube.com/c/LoveBabbar1">
                    <img src="https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FTelegram_Oct_Denoiser_Beauty_002_copy_fa9aeac119.png&w=1920&q=75" alt="" />
                    </a></div>
                <div><a target="_blank" className='telegram' href="https://www.youtube.com/c/LoveBabbar1">Telegram</a></div>
            </div>
        </div>
        </section>
        </>
     );
}
 
export default Community;