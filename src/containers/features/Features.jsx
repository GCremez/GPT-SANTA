import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distursts instantly',
    text: 'From they fine john he give of rich he. They age and draw mrs like.improving end disturts may instantly was household applaude'
  },
  {
    title: 'Become the tended active',
    text: 'From they fine john he give of rich he. They age and draw mrs like.improving end disturts may instantly was household applauded.'
  },
  {
    title: 'Message or an nothing',
    text: 'From they fine john he give of rich he. They age and draw mrs like.improving end disturts may instantly was household applauded.'
  },
  {
    title: 'Really boy law',
    text: 'From they fine john he give of rich he. They age and draw mrs like.improving end disturts may instantly was household applauded.'
  },
]

const Features = () => {
  return (
    <div className="gpt__features section__padding"  id="features">
      <div className="gpt__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realise It. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div> 
      <div className="gpt__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
)
}

export default Features