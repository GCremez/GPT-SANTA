import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className="gpt__header-content">
        <hi className="gradient__text">let's Build something amazing with GPT-3 OpenAI</hi>
        <p>Yet bed any for travelling assitance inbulgence unpleasing. 
          Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterious the attachment. 
          Party we years to order allow asked of.</p>

        <div className="gpt__header-content__input"></div>
        <input type="email" placeholder='Your Email Address' />
        <button type='button'>Get Started</button>
      </div>
    </div>
  )
}

export default Header