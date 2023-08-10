import Nav from '../components/Nav'

function ErrorPage() {
    return ( 
        <div>
            <Nav />
            <div className="container my-5">
                <h1 className="display-5">This is the error page!</h1>
            </div>
        </div>
    );
}

export default ErrorPage;