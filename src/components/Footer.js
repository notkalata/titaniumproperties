import './Footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <h1 id='subscribe'>Subscribe to our newsletter.</h1>
            <div className='newsletter'>
                <label>Email: </label>
                <input type="email" />
                <button>Subscribe</button>
            </div>
            <p id='note'>Note: You can unsubscribe at any time!</p>
            <div className="site-map">
                <div className="map-column">
                    <h1>About us</h1>
                    <p><a href='/'>Communicate</a></p>
                    <p><a href='/'>Describe</a></p>
                    <p><a href='/'>Business</a></p>
                    <p><a href='/'>Face</a></p>
                </div>
                <div className="map-column">
                    <h1>Contact us</h1>
                    <p><a href='/'>Email</a></p>
                    <p><a href='/'>Visitior</a></p>
                    <p><a href='/'>Investor</a></p>
                    <p><a href='/'>Rate</a></p>
                </div>
                <div className="map-column">
                    <h1>Privacy</h1>
                    <p><a href='/'>Policy</a></p>
                    <p><a href='/'>Data protection</a></p>
                    <p><a href='/'>Security</a></p>
                    <p><a href='/'>SSL</a></p>
                </div>
            </div>
            <div className="social-media">
                <h1>TTNM <i class="fa-brands fa-gitlab"></i></h1>
                <p>TTNM &copy; 2023</p>
                <p><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-twitter"></i></p>
            </div>
        </div>
    );
}