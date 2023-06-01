import './ContactPage.css';

export default function ContactPage(){
    return(
        <div className='contact-page'>
            <div className='contact-cards'>
                <div className='contact-card'>
                    <i class="fa-solid fa-phone"></i>
                    <h2>by phone</h2>
                    <p>North America Toll-Free:</p>
                    <p>1-877-930-7483</p>
                    <p>International:</p>
                    <p>1-604-637-0780</p>
                </div>
                <div className='contact-card'>
                    <i className='fa-regular fa-folder-open'></i>
                    <h2>start a new case</h2>
                    <p>Just send us your questions or concers by starting a new
                        case and we will give you the help you need.
                    </p>
                    <button>start here</button>
                </div>
                <div className='contact-card'>
                    <i class="fa-regular fa-comment-dots"></i>
                    <h2>live chat</h2>
                    <p>Chat with a member of our team.</p>
                    <button>start chat</button>
                </div>
            </div>
        </div>
    );
}