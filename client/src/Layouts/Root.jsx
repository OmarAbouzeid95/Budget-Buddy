import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <div>
            <Nav />
            <Outlet />
        </div> 
    );
}

export default Root;