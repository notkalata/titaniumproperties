import './HeroSection.css';
import ImageSlider from './ImageSlider';

export default function HeroSection(){
    return (
        <div className="hero-section">
            <div className="title">
                <div className="title-text">
                    <h1>Titanium Properties</h1>
                    <p>Your way to a better home.</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="about-brief">
                <h2>Get to know us better.</h2>
                <div className='cards'>
                    <div className='card'>
                        <img src='/images/team.jpg' />
                        <h3>We believe in people</h3>
                        <p>People are number one priority. We provide over 200 job positions.</p>
                    </div>
                    <div className='card'>
                        <img src='/images/proffesionals.jpg' />
                        <h3>Proffesional issue</h3>
                        <p>We approach our proffesional work the best way possible.</p>
                    </div>
                    <div className='card'>
                        <img src='/images/build.jpg' />
                        <h3>Years of work</h3>
                        <p>The first proffesional job we took was in 2006.</p>
                    </div>
                    <div className='card'>
                        <img src='/images/apartmentcomplex.jpg' />
                        <h3>Our way</h3>
                        <p>Building we build are sustainable and energy efficient.</p>
                    </div>   
                </div>
            </div>
            <div className="gallery-brief">
                <h2>Our work & Gallery</h2>
                <div className='completed-container'>
                    <div className='completed'>
                        <i class="fa-solid fa-building-circle-check"></i>
                        <h3>97 Buildings finished</h3>
                    </div>
                    <div className='completed'>
                        <i class="fa-solid fa-couch"></i>
                        <h3>524 Apartments completed</h3>
                    </div>
                    <div className='completed'>
                        <i class="fa-solid fa-user-plus"></i>
                        <h3>1000+ Satisfied customers</h3>
                    </div>
                </div>
                <ImageSlider /> 
            </div>
        </div>
    );
}