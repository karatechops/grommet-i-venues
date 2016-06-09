import React, { Component, PropTypes } from 'react';
import '../../lib/gsap/TimelineMax';
import GSAP from 'react-gsap-enhancer';
import Headline from 'grommet/components/Headline';
import Carousel from 'grommet/components/Carousel';

const CLASS_ROOT = 'animation';

function anim({target}) {
  let header = target.find({name: 'header'});
  let animContainer = target.find({name: 'container'});

  return new TimelineMax({paused: true})
    .set(header, {opacity:'0'})
    .set(animContainer, {opacity:'0'})

    .to(header, .5, {opacity:'1', delay:'.2'})

    .add('intro', .63)
    .to(animContainer, .3, {opacity:'1', delay:'-.125'}, 'intro')
    // Animation padding
    .add(function() {}, '+=.6');
}

class Animation6 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.anim = this.addAnimation(anim);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.percentScrolled >= 1 && nextProps.percentScrolled <= 99 )
    ? true
    : false;
  }

  componentDidUpdate(prevProps, prevState) {
    let percentScrolled = this.props.percentScrolled;
    if (percentScrolled >= 0 && percentScrolled <= 100 ) {
      this.anim.progress(percentScrolled/100);
    }
  }

  render() {
    return (
      <div className={CLASS_ROOT}>
        <Headline name="header" size="large" strong={true}>Rich content enhances the visitor experience</Headline>
        
        <Carousel autoplay={false} infinite={false} name="container">
          <div className={`${CLASS_ROOT}__carousel-item`}>
            <Headline size="small">Instant replays are available to fans just seconds after the live action occurs.</Headline>
            <img style={{width:'100%', maxWidth: '450px'}} src="/img/slide6/full1.svg" />
          </div>
          <div className={`${CLASS_ROOT}__carousel-item`}>
            <Headline size="small">Self-guided tours, augmented reality and digital content make exhibits more immersive and bringing them to life for patrons.</Headline>
            <img style={{width:'100%', maxWidth: '450px'}} src="/img/slide6/full3.svg" />
          </div>
        </Carousel>
      </div>
    );
  }
};

export default GSAP()(Animation6);

Animation6.PropTypes = {
  percentScrolled: PropTypes.number.isRequired
};
