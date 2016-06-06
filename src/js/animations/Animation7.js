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
    .add(() => {}, '+=.6');
}

class Animation7 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.anim = this.addAnimation(anim);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.percentScrolled >= -.5 && nextProps.percentScrolled <= .8 )
    ? true
    : false;
  }

  componentDidUpdate(prevProps, prevState) {
    let percentScrolled = this.props.percentScrolled;
    if (percentScrolled >= -.5 && percentScrolled <= .8 ) {
      let percent = (parseFloat(percentScrolled) + 0.5) / 2 ;
      this.anim.progress(percent);
    }
  }

  render() {
    return (
      <div className={CLASS_ROOT}>
        <Headline name="header" size="large" strong={true}>Advanced analytics optimize the customer experience. </Headline>
        
        <Carousel autoplay={false} infinite={false} name="container">
          <div className={`${CLASS_ROOT}__carousel-item`}>
            <Headline size="small">Our advanced analytics engine allows you to focus resources where patrons gather, and improve underutilized spaces.</Headline>
            <img style={{width:'100%', maxWidth: '450px'}} src="/img/slide7/full1.svg" />
          </div>
          <div className={`${CLASS_ROOT}__carousel-item`}>
            <Headline size="small">Customer analytics and location-based services help you personalize the visitor experience and increase engagement.</Headline>
            <img style={{width:'100%', maxWidth: '450px'}} src="/img/slide7/full2.svg" />
          </div>
        </Carousel>
      </div>
    );
  }
};

export default GSAP()(Animation7);

Animation7.PropTypes = {
  percentScrolled: PropTypes.number.isRequired
};
