import './ImageSlider.css'

export default function ImageSlider(){
    return(
        <div className="slider-wrapper">
            <div className="slider">
                <img id="slide-1" src='/images/apartmentcomplex.jpg' alt="Slide 1" />
                <img id="slide-2" src='/images/build.jpg' alt="Slide 2" />
                <img id="slide-3" src='/images/nightcity.jpg' alt="Slide 3" />
            </div>
            <div className="slider-nav">
                <a href="#slide-1"></a>
                <a href="#slide-2"></a>
                <a href="#slide-3"></a>
            </div>
        </div>
    );
}