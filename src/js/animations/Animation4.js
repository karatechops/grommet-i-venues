import React, { Component, PropTypes } from 'react';
import '../../lib/gsap/TimelineMax';
import GSAP from 'react-gsap-enhancer';
import Headline from 'grommet/components/Headline';
import Hotspot from '../components/Hotspot';

const CLASS_ROOT = 'animation';

function anim({target}) {
  let header = target.find({name: 'header'});
  let text1 = target.find({name: 'text1'});
  let person1 = target.find({name: 'person-1'});
  let person2 = target.find({name: 'person-2'});
  let person3 = target.find({name: 'person-3'});
  let person4 = target.find({name: 'person-4'});
  let entrance = target.find({name: 'entrance'});
  let hotspot = target.find({name: 'hotspot'});
  
  return new TimelineMax({paused: true})
    .set(entrance, {opacity:'0', y:'-50%', scale:'1.1', transformOrigin:'bottom right'})
    .set([hotspot, header, text1], {opacity: '0'})
    .set([person1, person2, person3, person4 ], {opacity: '0', x:'-50%'})
    
    .to(header, .5, {opacity:'1', delay:'.2'})
    .to(text1, .4, {opacity:'1', delay:'-.4'})

    .add('intro', .2)
    .to(entrance, .2, {opacity:'1', delay:'.2'}, 'intro')

    .add('people', .35)
    .to(entrance, .35, {opacity:'1', y:'0%', scale:'1', delay:'0'}, 'people')
    .to(hotspot, .35, {opacity:'1', delay:'.1'}, 'people')
    .to(person1, .25, {x:'0%', opacity:'1', delay:'0'}, 'people')
    .to(person2, .25, {x:'0%', opacity:'1', delay:'0.1'}, 'people')
    .to(person3, .25, {x:'0%', opacity:'1', delay:'0.2'}, 'people')
    .to(person4, .15, {x:'0%', opacity:'1', delay:'0.3'}, 'people')
    // Animation padding
    .add(function() {}, '+=.8');
}

class Animation4 extends Component {
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
    let hotspotContent = (
      <div>
        <Headline size="large" strong={true}>Seat upgrade offers can be delivered to customers as they enter the venue.</Headline>
        <img src="/img/slide4/hotspot-image.svg" />
      </div>
    );

    return (
      <div className={CLASS_ROOT}>
        <Headline name="header" size="large" strong={true}>Ticketless entry via mobile device</Headline>
        <Headline name="text1"  size="small">Mobile ticketing can help reduce lines and provide hassle-free entry.</Headline>
        <div className={`${CLASS_ROOT}__sub-container`} style={{width: '100%', height:'auto'}} name={"container"}>
          <div className={`${CLASS_ROOT}__scene-item`} style={{width: '100%'}}>
            <img style={{width:'100%'}} className={`${CLASS_ROOT}__scene-item-stacked`} src="/img/slide4/entrance.svg" name="entrance" />
            <img style={{width:'100%'}} className={`${CLASS_ROOT}__scene-item-stacked`} src="/img/slide4/person-4.svg" name="person-4" />
            <img style={{width:'100%'}} className={`${CLASS_ROOT}__scene-item-stacked`} src="/img/slide4/person-3.svg" name="person-3" />
            <img style={{width:'100%'}} className={`${CLASS_ROOT}__scene-item-stacked`} src="/img/slide4/person-2.svg" name="person-2" />
            <Hotspot style={{width:'100%', height:'100%'}} content={hotspotContent} name="hotspot" top={"10%"} left={"40%"}>
              <img style={{width:'100%'}} src="/img/slide4/person-1.svg" name={"person-1"} />
            </Hotspot>
          </div>
        </div>
      </div>
    );
  }
};

export default GSAP()(Animation4);

Animation4.PropTypes = {
  percentScrolled: PropTypes.number.isRequired
};
