// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React from 'react';
import Article from 'grommet/components/Article';
import AnimatedSection from '../containers/SectionContainer';
import Animation1 from '../animations/Animation1';
import Animation2 from '../animations/Animation2';
import Animation3 from '../animations/Animation3';
import Animation4 from '../animations/Animation4';
import Animation5 from '../animations/Animation5';
import Animation6 from '../animations/Animation6';
import Animation7 from '../animations/Animation7';
import Animation8 from '../animations/Animation8';
import Nav from './Nav';

class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <Article className="home" scrollStep={false} controls={false}>
        <Nav />
        <AnimatedSection primary={true} colorIndex={"light-1"} >
          <Animation1 />
        </AnimatedSection>

        <AnimatedSection colorIndex={"light-2"} >
          <Animation2 />
        </AnimatedSection>

        <AnimatedSection colorIndex={"light-1"} >
          <Animation4 />
        </AnimatedSection>

        <AnimatedSection colorIndex={"light-2"} >
          <Animation3 />
        </AnimatedSection>

        <AnimatedSection colorIndex={"light-1"} >
          <Animation5 />
        </AnimatedSection>

        <AnimatedSection colorIndex={"light-2"} >
          <Animation6 />
        </AnimatedSection>

        <AnimatedSection colorIndex={"light-1"} >
          <Animation7 />
        </AnimatedSection>
        
        <AnimatedSection colorIndex={"light-2"} >
          <Animation8 />
        </AnimatedSection>
      </Article>
    );
  }

};

export default Home;
