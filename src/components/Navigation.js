import './Navigation.css';

export default function Navigation(){
    function toggleMenu(){
        let element = document.querySelector('.mobile-menu i');
        element.classList.toggle('fa-times');

        let menu = document.querySelector('.nav');
        menu.classList.toggle('menu-open');

        let element2 = document.querySelector('.mobile-menu i');
        element2.classList.toggle('mobile-menu-fixed');
    }

    return(
        <>
        <nav className='navbar'>
            <h1><a href="/">TTNM <i class="fa-brands fa-gitlab"></i></a></h1>
            <div className='mobile-menu' onClick={toggleMenu}>
                <i className='fa fa-bars'></i>
            </div>
            <ul className='nav'>
                <li className='nav-item'>
                    <a href='/browse'><i class="fa-solid fa-magnifying-glass"></i> Browse</a>
                </li>
                <li className='nav-item'>
                    <a href='/services'><i class="fa-solid fa-dollar-sign"></i> Services</a>
                </li>
                <li className='nav-item'>
                    <a href='/contact'><i class="fa-solid fa-comment"></i> Contact</a>
                </li>
                <li className='nav-item'>
                    <a href='/about'><i class="fa-solid fa-circle-info"></i> About</a>
                </li>
            </ul>
        </nav>
        </>
    );
}