import React from 'react';
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import Card from './Card.js';
import data from './data.js';
import 'rellax';

export default function App() {
  const eventCards = data.map((event) => {
    return(
      <Card
        key={event.id}
        item={event}
      />
    )
    
  })
    return (
      <div>
        <Navbar />
        <Hero />
        <section className='event-container'>
          {eventCards}
        </section>
      </div>
    )
}