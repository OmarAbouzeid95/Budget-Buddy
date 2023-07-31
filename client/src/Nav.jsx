import 'bootstrap/js/dist/collapse.js'
import { useState } from 'react'

function Header() {

    // state to track active tab
    const [active, setActive] = useState('home')

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-lg">
                <a className="navbar-brand" href="/">Budget Buddy</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <label className="burger navbar-toggler-icon" for="burger">
                        <input type="checkbox" id="burger"></input>
                            <span></span>
                            <span></span>
                            <span></span>
                    </label>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={`nav-link ${active === 'home' ? 'active' : ''}`} aria-current="page" href="#" onClick={() => setActive('home')}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${active === 'features' ? 'active' : ''}`} href="#" onClick={() => setActive('features')}>Features</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${active === 'pricing' ? 'active' : ''}`} href="#" onClick={() => setActive('pricing')}>Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;