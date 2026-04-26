import React from 'react';
import ReactDom from 'react-dom'
import App from './app';

//mount function to startup app
const mount = (el) => {
    ReactDom.render(<App />, el)
}


// if you are in development and in isolation call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if (devRoot) {
        mount(devRoot)
    }
}


// we are running through container and we should export the mount
export { mount }