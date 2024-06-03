import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
    baseUrl: 'https://app-b9ezyrhy288z.frontegg.com',
    clientId: 'c2624f2e-9382-49c9-a607-e5702a220630'
};

// Replace this with your app logo 👇
const headerImage = 'https://upload.wikimedia.org/wikipedia/commons/2/20/High-contrast-image-x-generic_transparent.svg';

ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} headerImage={headerImage} hostedLoginBox={false}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);
