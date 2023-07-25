import React from 'react'

import { Footer, blog, Possibility, Features, WhatGPT, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = ()=> {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
             </div>
             <Brand />
             <WhatGPT />
             <Features />
             <Possibility />
             <CTA />
             <blog />
             <Footer />
             
        </div>
        
    )
}
export default App
