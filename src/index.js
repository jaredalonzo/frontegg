import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
    baseUrl: 'https://app-676ud499mt4a.frontegg.com',
    clientId: '3d5ebe6d-497a-47b9-9467-0c9fbdda94b2'
};

// Replace this with your app logo 👇
const headerImage = 'https://upload.wikimedia.org/wikipedia/commons/2/20/High-contrast-image-x-generic_transparent.svg';

ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} headerImage={headerImage} hostedLoginBox={false}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);
