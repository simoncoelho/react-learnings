function customNav(){
    return (
        <nav>
            <h1>scoelho.io</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

ReactDOM.render(
    customNav(), 
    document.getElementById('root'));