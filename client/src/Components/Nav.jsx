import 'bootstrap/js/dist/collapse.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

    // state to track active tab
    const [active, setActive] = useState('home')

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-lg">
                <Link className="navbar-brand text-primary" to="/">Budget Buddy</Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <label className="burger navbar-toggler-icon" htmlFor="burger">
                        <input type="checkbox" id="burger"></input>
                            <span></span>
                            <span></span>
                            <span></span>
                    </label>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${active === 'home' ? 'active' : ''}`} aria-current="page" to="/" onClick={() => setActive('home')}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${active === 'budget' ? 'active' : ''}`} to="/budget" onClick={() => setActive('budget')}>Budget</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${active === 'insights' ? 'active' : ''}`} to="/insights" onClick={() => setActive('insights')}>Insights</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${active === 'singin' ? 'active' : ''}`} to="/sign-in" onClick={() => setActive('singin')}>Sign in</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;