import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return <h1>0oops, route not found.</h1>
};

export default {
    component: NotFoundPage
};