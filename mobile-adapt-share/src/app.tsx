import React from 'react';
import { createRoot } from 'react-dom/client';
import './global.less';
import { Foo } from './pages'


const root = createRoot(document.getElementById('root'));
root.render(
    <Foo />
);


// ReactDOM.render(<Foo></Foo>, document.getElementById('root'));


