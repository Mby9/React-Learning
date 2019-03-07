import React from 'react';
import { Link } from 'react-router-dom'

const PortfolioLinkPage = (props) => {
    return (
        <div>
            <p>This is the portfolio. ID; {props.match.params.id}</p>
            <Link to="/portfolio/1">Item one</Link>
            <Link to="/portfolio/2">Item two</Link>
        </div>
    );
};

export default PortfolioLinkPage;