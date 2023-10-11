import React from 'react';
import "./style.css";


class Footer extends React.Component 
{
    render()
    {
        return (
            <footer>
    <div className="container">
        <div className="footer-cols">
            <a>Contact Us</a>
            <a>Report</a>
            <a>Hospital</a>
        </div>
    </div>
    <hr/>
</footer>
        )
    }
}

export default Footer