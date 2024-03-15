import React from 'react';
import { createRoot } from 'react-dom/client';
import '@src/reset.css';

import { Foo } from './index.jsx'


const root = createRoot(document.getElementById('root'));
root.render(
    <Foo />
);


// ReactDOM.render(<Foo></Foo>, document.getElementById('root'));


