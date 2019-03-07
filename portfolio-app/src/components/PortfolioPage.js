import React from 'react';

const PortfolioPage = (props) => {
    return (
        <div>
            This is the portfolio. ID; {props.match.params.id}
        </div>
    );
};

export default PortfolioPage;