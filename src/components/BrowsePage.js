import './BrowsePage.css';

export default function BrowsePage(){
    return(
        <div className='browse-page'>
            <div className='searchbar'>
                <h1>Browse anything.</h1>
                <input type='text' id='searchbar' placeholder='Start typing...' />
                <button><i className='fa-solid fa-magnifying-glass' /></button>
            </div>
            <hr />
            <div className='result'>
                <h1>Results:</h1>
                <p>Once functionality is achieved your result will appear here.</p>
            </div>
        </div>
    );
}