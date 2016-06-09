import React, { Component, PropTypes } from 'react';
import '../../lib/gsap/TimelineMax';
import GSAP from 'react-gsap-enhancer';
import Headline from 'grommet/components/Headline';
import Hotspot from '../components/Hotspot';

const CLASS_ROOT = 'animation';

function anim({target}) {
  let header = target.find({name: 'header'});
  let text1 = target.find({name: 'text1'});
  let hotspot1 = target.find({name: 'hotspot1'});
  let hotspot2 = target.find({name: 'hotspot2'});
  let bubble1 = target.find({name: 'bubble1'});
  let bubble2 = target.find({name: 'bubble2'});
  let personMain = target.find({name: 'personMain'});
  let person1 = target.find({name: 'person1'});
  let person2 = target.find({name: 'person2'});
  let person3 = target.find({name: 'person3'});
  let person4 = target.find({name: 'person4'});

  return new TimelineMax({paused: true})
    .set(personMain, {scale: '1.6', y:'-100%', opacity: '0', transformOrigin: 'bottom center'})
    .set(person1, {x:'-200%'})
    .set(person2, {x:'-100%'})
    .set(person3, {x:'100%'})
    .set(person4, {x:'200%'})
    .set(bubble1, {scale: '0', opacity:'0', transformOrigin: 'bottom center'})
    .set(bubble2, {scale: '0', opacity:'0', transformOrigin: 'bottom center'})
    .set([hotspot1, hotspot2, header, text1], {opacity: '0'})
    
    .to(header, .5, {opacity:'1', delay:'.3'})
    
    .add('intro', .65)
    .to(personMain, 1.3, {opacity:'1', y:'0%', scale:'1', delay:'-.2'}, "intro")
    .to([person1, person2, person3, person4], .4, {opacity:'0', y:'10%', delay:'.35'}, "intro")
    .to([bubble1, bubble2], .3, {opacity:'1', scale:'1', delay:'.4'}, "intro")
    .to([hotspot1, hotspot2], .3, {opacity:'1', delay:'.5'}, "intro")
    .to(text1, 1, {opacity:'1', delay:'.12'}, "intro")
    // Animation padding
    .add(function() {}, '+=1.1');
}

class Animation5 extends Component {
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
    if (percentScrolled >= 0 && percentScrolled <= 99 ) {
      this.anim.progress(percentScrolled/100);
    }
  }

  render() {
    let hotspotContent = (
      <div>
        <Headline size="large" strong={true}>Food and beverages can be delivered directly to patrons’ seats via mobile ordering and mobile payment.</Headline>
        <img src="/img/slide5/food.svg" />
      </div>
    );

    let hotspot2Content = (
      <div>
        <Headline size="large">With Aruba Beacons, you can deliver personalized, location-based customer loyalty and proximity marketing offers to patrons.</Headline>
        <img src="/img/slide5/ticket.svg" />
      </div>
    );

    return (
      <div className={CLASS_ROOT}>
        <Headline name="header" size="large" strong={true}>Fans order from their seats and never miss a beat</Headline>
        <Headline name="text1" size="small">Proximity marketing, mobile ordering and mobile payment let visitors to take advantage of amenities without missing the action.</Headline>
        <div className={`${CLASS_ROOT}__container`} style={{maxWidth: '470px'}} name="container">
          <Hotspot style={{zIndex:'2'}} content={hotspotContent} name="hotspot1" top={"60%"}>
            <div className={`${CLASS_ROOT}__sub-container`} name="bubble1">
              <div className={`${CLASS_ROOT}__scene-item`}>
                <img src="/img/slide5/bubble-1.svg" />
              </div>
            </div>
          </Hotspot>

          <div className={`${CLASS_ROOT}__sub-container`} name="personMain">
            <div className={`${CLASS_ROOT}__scene-item`}>
              <img className={`${CLASS_ROOT}__scene-item-stacked`} src="/img/slide5/pin.svg" />
              <img name="person1" className={`${CLASS_ROOT}__scene-item-stacked`} src="/img/slide5/person.svg" />
              <img name="person2" className={`${CLASS_ROOT}__scene-item-stacked`} src="/img/slide5/person.svg" />
              <img name="person3" className={`${CLASS_ROOT}__scene-item-stacked`} src="/img/slide5/person.svg" />
              <img name="person4" className={`${CLASS_ROOT}__scene-item-stacked`} src="/img/slide5/person.svg" />
              <img src="/img/slide5/person.svg" />
            </div>
          </div>

          <Hotspot style={{zIndex:'2'}} content={hotspot2Content} name="hotspot2" top={'33%'} left={'75%'}>
            <div className={`${CLASS_ROOT}__sub-container`} name={"bubble2"}>
              <div className={`${CLASS_ROOT}__scene-item`}>
                <img src="/img/slide5/bubble-2.svg" />
              </div>
            </div>
          </Hotspot>
        </div>
      </div>
    );
  }
};

export default GSAP()(Animation5);

Animation5.PropTypes = {
  percentScrolled: PropTypes.number.isRequired
};
