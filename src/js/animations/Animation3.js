import React, { Component, PropTypes } from 'react';
import '../../lib/gsap/TimelineMax';
import GSAP from 'react-gsap-enhancer';
import Headline from 'grommet/components/Headline';
import Hotspot from '../components/Hotspot';

const CLASS_ROOT = 'animation';

function anim({target}) {
  let header = target.find({name: 'header'});
  let text1 = target.find({name: 'text1'});
  let container = target.find({name: 'container'});
  let hotspot = target.find({name: 'hotspot'});

  return new TimelineMax({paused: true})
    .set(container, {scale: '1.5', transformOrigin: 'bottom center'})
    .set([hotspot, container, header, text1], {opacity:'0'})

    .to(header, .5, {opacity:'1', delay:'.3'})

    .add('intro', .75)
    .to(container, .75, {opacity:'1', scale:'1', delay:'-.2'}, "intro")
    .to(hotspot, .75, {opacity:'1', delay:'-.2'}, "intro")
    .to(text1, 1, {opacity:'1', delay:'.12'}, "intro")
    // Animation padding
    .add(function() {}, '+=.6');
}

class Animation3 extends Component {
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
    let hotspotContent = (
      <div>
        <Headline size="large" strong={true}>Advanced Wi-Fi, paired with Aruba Beacons, provide indoor wayfinding throughout the venue with pinpoint accuracy.</Headline>
        <img src="/img/slide3/hotspot-content.svg" />
      </div>
    );
    return (
      <div className={CLASS_ROOT}>
        <Headline name="header" size="large" strong={true}>Bludot wayfinding provides unparalleled indoor way-finding accuracy</Headline>
        <Headline name="text1" size="small">Step-by-step directions make it easy for patrons to find their seats and amenities.</Headline>
          <div className={`${CLASS_ROOT}__sub-container`} style={{width: '100%'}} name={"container"}>
            <div style={{width: '100%'}} className={`${CLASS_ROOT}__scene-item`}>
              <Hotspot style={{width: '100%'}} content={hotspotContent} name="hotspot" top={'10%'} left={'50%'}>
                <img style={{height: 'auto', width: '100%'}} src="/img/slide3/crowd.svg" />
              </Hotspot>
            </div>
          </div>
      </div>
    );
  }
};

export default GSAP()(Animation3);

Animation3.PropTypes = {
  percentScrolled: PropTypes.number.isRequired
};
