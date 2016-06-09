import React, { Component, PropTypes } from 'react';
import '../../lib/gsap/TimelineMax';
import GSAP from 'react-gsap-enhancer';
import Headline from 'grommet/components/Headline';
import Carousel from 'grommet/components/Carousel';

const CLASS_ROOT = 'animation';

function anim({target}) {
  let header = target.find({name: 'header'});
  let text = target.find({name: 'text1'});
  let buildings = target.find({name: 'buildings'});
  let truck = target.find({name: 'truck'});
  let dottedLine = target.find({name: 'dottedLine'});
  let bell = target.find({name: 'bell'});
  let arrow = target.find({name: 'arrow'});

  return new TimelineMax({paused: true})
    .set([text, header, bell, arrow], {opacity:'0'})
    .set(truck, {opacity:'1'})
    .set(dottedLine, {opacity:'0', x:'2%', scaleY:'0', transformOrigin: 'center center'})
    .set([bell], {opacity:'0', x:'2%'})
    .set(buildings, {scale:'1.8', opacity:'1', x:'0%', transformOrigin: 'left bottom'})
    .set(truck, {x:'-200'})

    .to(header, .5, {opacity:'1', delay:'.2'})

    .add('intro', .5)
    .to(text, .25, {opacity:'1', delay:'-.15'}, 'intro')
    .to(buildings, .25, {opacity:'1', x:'0%', scale:'1', delay:'-.1'}, 'intro')
    .to(truck, .2, {opacity:'1', x:'0', delay:'-.05'}, 'intro')
    .to(dottedLine, .2, {opacity:'1', scaleY:'1', delay:'-.01'}, 'intro')
    .to(bell, .2, {opacity:'1', delay:'.1'}, 'intro')
    .to(arrow, .2, {opacity:'1', delay:'.1', x:'-2'}, 'intro')
    // Animation padding
    .add(function() {}, '+=.5');
}

class Animation2 extends Component {
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
    if (percentScrolled >= 0 && percentScrolled <= 100) {
      this.anim.progress(percentScrolled/100);
    }
  }

  render() {
    return (
      <div className={CLASS_ROOT}>
        <Headline name="header" size="large" strong={true}>Seamless navigation from front door to seat</Headline>
        
        <Carousel autoplay={false} infinite={false} name="container">
          <div className={`${CLASS_ROOT}__carousel-item`}>
            <Headline size="small" name="text1">Turn-by-turn navigation and notifications provide your patrons with directions and up-to-date traffic and event information.</Headline>
            <div className={`${CLASS_ROOT}__sub-container`} style={{width: '100%', maxWidth: '565px'}} name="container">
              <div style={{width:'100%'}} className={`${CLASS_ROOT}__scene-item`}>
                <img style={{width:'100%', zIndex:'2'}} className={`${CLASS_ROOT}__scene-item-stacked`} 
                  name="truck" src="/img/slide2/truck.svg" />

                <img style={{width:'100%'}} className={`${CLASS_ROOT}__scene-item-stacked`} 
                  name="dottedLine" src="/img/slide2/dotted-line.svg" />

                <img style={{width:'100%'}} className={`${CLASS_ROOT}__scene-item-stacked`} 
                  name="bell" src="/img/slide2/bell.svg" />

                <img style={{width:'100%'}} className={`${CLASS_ROOT}__scene-item-stacked`} 
                  name="arrow" src="/img/slide2/arrow.svg" />

                <img style={{width:'100%'}} 
                  name="buildings" src="/img/slide2/buildings.svg" />
              </div>
            </div>
          </div>
          <div className={`${CLASS_ROOT}__carousel-item`}>
            <Headline size="small">Outdoor navigation helps your patrons quickly find available spots within venue parking options.</Headline>
            <div className={`${CLASS_ROOT}__sub-container`} style={{width: '100%', maxWidth: '565px'}}>
              <div style={{width:'100%'}} className={`${CLASS_ROOT}__scene-item`}>
                <img style={{width:'100%'}} src="/img/slide2/full2.svg" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );  
  }
};

export default GSAP()(Animation2);

Animation2.PropTypes = {
  percentScrolled: PropTypes.number.isRequired
};
