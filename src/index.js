import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
    baseUrl: 'https://app-91s3nglby108.frontegg.com',
    clientId: '7118886b-182c-48e9-9b29-9d9e99db80c8'
};

// Replace this with your app logo 👇
const headerImage = 'https://upload.wikimedia.org/wikipedia/commons/2/20/High-contrast-image-x-generic_transparent.svg';

ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} headerImage={headerImage} hostedLoginBox={false}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);
