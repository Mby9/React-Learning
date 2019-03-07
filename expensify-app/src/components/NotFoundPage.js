import React from 'react';
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        404.
        Nothing to see here. Move Ahead.
        <Link to="/">Go Home</Link> 
    </div>
);

export default NotFoundPage;