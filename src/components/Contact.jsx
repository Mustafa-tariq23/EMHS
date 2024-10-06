import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import MiddleTicker from './MiddleTicker';
import ContactMiddleSections from './ContactSections/ContactMiddleSections';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <MiddleTicker />
      <ContactMiddleSections />
      <Footer />
    </div>
  );
}

export default Contact