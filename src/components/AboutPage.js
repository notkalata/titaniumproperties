import './AboutPage.css';

export default function AboutPage(){
    return(
        <div className='about-page'>
            <div className='about-wrapper'>
                <div className='about-text'>
                    <h1>Who are we?</h1>
                    <p>Based in Florida with clients & team members all over the globe.</p>
                </div>
                <div className='about-display'>
                    <div className='about-facts'>
                        <p>Based in Florida</p>
                        <p>Travel Worldwide</p>
                        <p>Loves tacos</p>
                        <p>Likes movies</p>
                        <p>Knows karate</p>
                        <p>We make videos</p>
                    </div>
                    <iframe width="60%" height="600px" src="https://www.youtube.com/embed/OEvuKTdxjWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}