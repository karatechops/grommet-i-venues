import React, { Component, PropTypes } from 'react';
import '../../lib/gsap/TimelineMax';
import '../../lib/gsap/TweenMax';
import '../../lib/gsap/plugins/DrawSVGPlugin';
import GSAP from 'react-gsap-enhancer';
import Headline from 'grommet/components/Headline';
import StartButton from '../components/StartButton';
import classnames from 'classnames';

const CLASS_ROOT = 'animation';

function anim({target}) {
  let stadiumOutline = target.find({name: 'stadiumOutline'});
  let flag1 = target.find({name: 'flag1'}).findAllInChildren();
  let flag2 = target.find({name: 'flag2'}).findAllInChildren();
  let flag3 = target.find({name: 'flag3'}).findAllInChildren();
  let stadiumLines = target.find({name: 'stadiumLines'}).findAllInChildren();

  let tree2Top = target.find({name: 'tree2Top'});
  let tree2Trunk = target.find({name: 'tree2Trunk'});

  let tree1Top = target.find({name: 'tree1Top'});
  let tree1Trunk = target.find({name: 'tree1Trunk'});

  let guy = {
    phone: target.find({name: 'guyPhone'}),
    arm: target.find({name: 'guyArm'}),
    body: target.find({name: 'guyBody'}),
    body2: target.find({name: 'guyBody2'}),
    hood: target.find({name: 'guyHood'}),
    face: target.find({name: 'guyFace'}),
    hat: target.find({name: 'guyHat'})
  };
  let guyTicket = [
    target.find({name: 'guyArrow'}), 
    target.find({name: 'guyTicket'})
  ];

  let building1 = {
    roof1: target.find({name: 'building1Roof1'}).findAllInChildren(),
    roof2: target.find({name: 'building1Roof2'}),
    columnsLong: target.find({name: 'building1ColumnsLong'}).findAllInChildren(),
    columns1: target.find({name: 'building1Columns1'}).findAllInChildren(),
    columns2: target.find({name: 'building1Columns2'}).findAllInChildren()
  };
  let building1Signal = [
    target.find({name: 'building1Signal'}),
    target.find({name: 'building1DotLine'})
  ];

  let car = {
    wheel1: target.find({name: 'carWheel1'}),
    wheel2: target.find({name: 'carWheel2'}),
    top: target.find({name: 'carTop'}),
    hood: target.find({name: 'carHood'}),
    bottom: target.find({name: 'carBottom'})
  };
  let carPin = [
    target.find({name: 'carPin'}),
    target.find({name: 'carDotLine'})
  ];

  let woman = {
    hair: [
      target.find({name: 'womanHair1'}),
      target.find({name: 'womanHair2'}),
      target.find({name: 'womanHair3'})
    ],
    back: target.find({name: 'womanBack'}),
    front: target.find({name: 'womanFront'}),
    arm: [
      target.find({name: 'womanArmL'}),
      target.find({name: 'womanArmR'})
    ],
    face: target.find({name: 'womanFace'}),
    phone: target.find({name: 'womanPhone'})
  };

  let building2 = {
    structure1: target.find({name: 'building2structure1'}).findAllInChildren(),
    structure2: target.find({name: 'building2structure2'}).findAllInChildren(),
    structure3: target.find({name: 'building2structure3'})
  };

  let building3 = {
    lines: target.find({name: 'building3Lines'}).findAllInChildren(),
    structure1: target.find({name: 'building3structure1'}),
    structure2: target.find({name: 'building3structure2'})
  };

  return new TimelineMax({paused: false})

    // Stadium
    .fromTo(stadiumOutline, .5, {drawSVG:'50% 50%'}, {drawSVG:'102%', delay:'.1', ease:Power1.easeOut}, 'stadium')
    .fromTo(stadiumLines, .5, {drawSVG:'50% 50%'}, {drawSVG:'102%', delay:'.15', ease:Power1.easeOut}, 'stadium')
    .fromTo(flag1, .4, {drawSVG:0}, {drawSVG:'102%', delay:'.2', ease:Power1.easeOut}, 'stadium')
    .fromTo(flag2, .4, {drawSVG:0}, {drawSVG:'102%', delay:'0', ease:Power1.easeOut}, 'stadium')
    .fromTo(flag3, .4, {drawSVG:0}, {drawSVG:'102%', delay:'.2', ease:Power1.easeOut}, 'stadium')

    // Tree 2
    .add('tree2', .5)
    .fromTo(tree2Top, .4, {drawSVG:'50% 50%'}, {drawSVG:'100%', ease:Power1.easeOut}, 'tree2')
    .fromTo(tree2Trunk, .4, {drawSVG:'100% 100%'}, {drawSVG:'102%', ease:Power1.easeOut}, 'tree2')
    
    // Guy
    .add('guy', .35)
    .fromTo(guy.phone, .15, {drawSVG:'0'}, {drawSVG:'102%', ease:Power1.easeOut}, 'guy')
    .fromTo(guy.arm, .2, {drawSVG:'0'}, {drawSVG:'102%', delay:'.1', ease:Power1.easeOut}, 'guy')
    .fromTo(guy.body, .4, {drawSVG:'100% 100%'}, {drawSVG:'102%', delay:'.2', ease:Power1.easeOut}, 'guy')
    .fromTo(guy.body2, .3, {drawSVG:'0'}, {drawSVG:'102%', delay:'.35', ease:Power1.easeOut}, 'guy')
    .fromTo(guy.face, .4, {drawSVG:'0'}, {drawSVG:'102%', delay:'.35', ease:Power1.easeOut}, 'guy')
    .fromTo(guy.hat, .25, {drawSVG:'15%, 15%'}, {drawSVG:'102%', delay:'.39', ease:Power1.easeOut}, 'guy')
    .fromTo(guy.hood, .25, {drawSVG:'0'}, {drawSVG:'102%', delay:'.4', ease:Power1.easeOut}, 'guy')
    
    // Large building
    .add('building1', .6)
    .fromTo(building1.roof1[0], .2, {drawSVG:'100%, 100%'}, {drawSVG:'102%', delay:'.2', ease:Power1.easeOut}, 'building1')
    .fromTo(building1.columns1, .2, {drawSVG:'100%, 100%'}, {drawSVG:'102%', delay:'.2', ease:Power1.easeOut}, 'building1')
    .fromTo(building1.columnsLong, .35, {drawSVG:'0'}, {drawSVG:'102%', delay:'.3', ease:Power1.easeOut}, 'building1')
    .fromTo(building1.roof1[1], .2, {drawSVG:'0%, 0%'}, {drawSVG:'102%', delay:'.4', ease:Power1.easeOut}, 'building1')
    .fromTo(building1.columns2, .2, {drawSVG:'100%, 100%'}, {drawSVG:'102%', delay:'.43', ease:Power1.easeOut}, 'building1')
    .fromTo(building1.roof2, .27, {drawSVG:'50%, 50%'}, {drawSVG:'102%', delay:'.44', ease:Power1.easeOut}, 'building1')

    // Tree 1
    .add('tree1', 1.1)
    .fromTo(tree1Top, .4, {drawSVG:'50%, 50%', transformOrigin:'center center', rotation:'180'}, {drawSVG:'100%', ease:Power1.easeOut}, 'tree1')
    .fromTo(tree1Trunk, .4, {drawSVG:'100% 100%'}, {drawSVG:'102%', ease:Power1.easeOut}, 'tree1')

    // Car
    .add('car', 1.3)
    .fromTo(car.hood, .2, {drawSVG:'50%, 50%'}, {drawSVG:'102%', ease:Power1.easeOut}, 'car')
    .fromTo(car.top, .2, {drawSVG:'0'}, {drawSVG:'102%', delay:'.1', ease:Power1.easeOut}, 'car')
    .fromTo(car.bottom, .2, {drawSVG:'0'}, {drawSVG:'102%', delay:'.1', ease:Power1.easeOut}, 'car')
    .fromTo(car.wheel2, .2, {drawSVG:'0'}, {drawSVG:'102%', delay:'.1', ease:Power1.easeOut}, 'car')
    .fromTo(car.wheel1, .2, {drawSVG:'0'}, {drawSVG:'102%', delay:'.1', ease:Power1.easeOut}, 'car')
    
    // Woman
    .add('woman', 1.1)
    .fromTo(woman.back, .2, {drawSVG:'0'}, {drawSVG:'102%', delay:'.1', ease:Power1.easeOut}, 'woman')
    .fromTo(woman.arm[0], .3, {drawSVG:'0'}, {drawSVG:'102%', delay:'.1', ease:Power1.easeOut}, 'woman')
    .fromTo(woman.hair, .3, {drawSVG:'100%, 100%'}, {drawSVG:'102%', delay:'.1', ease:Power1.easeOut}, 'woman')
    .fromTo(woman.face, .3, {drawSVG:'0'}, {drawSVG:'102%', delay:'.1', ease:Power1.easeOut}, 'woman')
    .fromTo(woman.phone, .2, {drawSVG:'0'}, {drawSVG:'102%', delay:'.3', ease:Power1.easeOut}, 'woman')
    .fromTo(woman.front, .3, {drawSVG:'0'}, {drawSVG:'102%', delay:'.3', ease:Power1.easeOut}, 'woman')
    .fromTo(woman.arm[1], .3, {drawSVG:'0'}, {drawSVG:'102%', delay:'.3', ease:Power1.easeOut}, 'woman')

    // Buildings left side
    .add('building2', 1.4)
    .fromTo(building2.structure1, .35, {drawSVG:'100%, 100%'}, {drawSVG:'102%', ease:Power1.easeOut}, 'building2')
    .fromTo(building2.structure2, .35, {drawSVG:'0'}, {drawSVG:'102%', delay:'.2', ease:Power1.easeOut}, 'building2')
    .fromTo(building2.structure3, .35, {drawSVG:'0'}, {drawSVG:'102%', delay:'.45', ease:Power1.easeOut}, 'building2')

    // Buildings right side
    .add('building3', 1.4)
    .fromTo(building3.lines, .35, {drawSVG:'100%, 100%'}, {drawSVG:'102%', ease:Power1.easeOut}, 'building2')
    .fromTo(building3.structure1, .35, {drawSVG:'100%, 100%'}, {drawSVG:'102%', ease:Power1.easeOut}, 'building2')
    .fromTo(building3.structure2, .35, {drawSVG:'100%, 100%'}, {drawSVG:'102%', delay:'.25', ease:Power1.easeOut}, 'building2')

    .add(TweenMax.fromTo(guyTicket, .5, {opacity:'0', y:'-10%'}, {
      repeat: -1,
      repeatDelay: 3,
      opacity: 1,
      delay: 3,
      y: '0%',
      yoyo: true,
      ease: Power1.easeOut
    }), 1)

    .add(TweenMax.fromTo(building1Signal, .5, {opacity:'0', scale:'.5', transformOrigin:'bottom center'}, {
      repeat: -1,
      repeatDelay: 3,
      opacity: 1,
      scale: 1,
      delay: 3,
      yoyo: true,
      ease: Power1.easeOut
    }), 4)

    .add(TweenMax.fromTo(carPin, .5, {opacity:'0', scale:'.5', transformOrigin:'bottom center'}, {
      repeat: -1,
      repeatDelay: 3,
      opacity: 1,
      delay: 3,
      scale: 1,
      yoyo: true,
      ease: Power1.easeOut
    }), 6);
}

function animExit({target}) {
  return new TimelineMax({paused: true})
    .add('enter')
    .to(target.find({name: 'start'}), .65, {opacity:'0'})
    .add('leave');
}

class Animation1 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.anim = this.addAnimation(anim);
    this.animExit = this.addAnimation(animExit);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.percentScrolled >= 0 && nextProps.percentScrolled <= .6 )
    ? true
    : false;
  }

  componentDidUpdate(prevProps, prevState) {
    let percentScrolled = this.props.percentScrolled;
    if (percentScrolled >= 0 && percentScrolled <= 1.5 ) {
      if (percentScrolled <= .55) this.animExit.tweenTo('enter');
      if (percentScrolled > .55) this.animExit.tweenTo('leave');
    }
  }

  render() {
    let classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}--start-screen`
    );

    return (
      <div className={classes}>
        <Headline name="header" size="large" strong={true}>Intelligent Venues redefine the customer experience</Headline>
        <Headline name="text1" size="small">HPE offers contextually-aware technologies that help stadiums and cultural institutions create world-class experiences that turn visitors into super fans.</Headline>
        
        <div className={`${CLASS_ROOT}__sub-container`} style={{width: '115%', maxWidth:'1127px', height:'auto'}} name="container">
          <div className={`${CLASS_ROOT}__scene-item`} style={{width: '100%', transform:'translateZ(0)'}}>
            
            <svg style={{width:'100%'}}id="stadium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 911.3 167.5">
              <path name="stadiumOutline" className="svg-stroke--dark" d="M348.8 162l-6.5-48.4s22.6-25.5 91.4-25.5c72.2 0 91.4 25.5 91.4 25.5l-6.2 48.4"/>
              <path className="svg-fill--white" d="M356.02 74.39l2.66-.47 3.764 21.37-2.66.47z"/>
              <g name="flag1">
                <path className="svg-stroke--green" d="M358.9 79.9l19.6 1.9-17.7 9.1"/>
                <path className="svg-stroke--dark" d="M359.8 102l-4.6-22.6"/>
              </g>
              <path className="svg-fill--white" d="M514.743 75.442l2.657.482-3.876 21.35-2.656-.482z"/>
              <g name="flag3">
                <path className="svg-stroke--green" d="M515.3 81.8l17.3 4.8-19 5.9"/>
                <path className="svg-stroke--dark" d="M507.8 102.1l4.6-22.6"/>
              </g>
              <path className="svg-fill--white" d="M435.3 61.3h2.7V83h-2.7z"/>
              <g name="flag2">
                <path className="svg-stroke--green" d="M437.2 67.1l19 5.3-19 5.9"/>
                <path className="svg-stroke--dark" d="M433.7 88.1V65.5"/>
              </g>
              <path className="svg-fill--none" d="M540.2 61.8H336.6v97.4h203.6z"/>
              <path className="svg-fill--white" d="M367.1 159.8l-16.1 1.9-5.6-45.1 16.2-1.9zM500.5 159.9l16.1 1.9 5.6-45-16.2-1.9z"/>
              <g name="stadiumLines">
                <path className="svg-stroke--orange" d="M360 147.3s32.9-7.7 73.7-7.7c40.8 0 73.7 7.7 73.7 7.7"/>
                <path className="svg-stroke--orange" d="M360 123s24.7-10.2 73.7-10.2 73.7 10.2 73.7 10.2"/>
              </g>
            </svg>

            <svg style={{width:'100%'}} className={`${CLASS_ROOT}__scene-item-stacked`} id="tree2" name="tree2" xmlns="http://www.w3.org/2000/svg" viewBox="312 61.5 911.3 167.5">
              <path name="tree2Trunk" id="XMLID_7_" className="svg-stroke--dark" d="M866.3 221v-13.9"/>
              <circle name="tree2Top" id="XMLID_6_" className="svg-stroke--brand" cx="866.3" cy="194.7" r="12.4"/>
            </svg>

            <svg style={{width:'100%'}}className={`${CLASS_ROOT}__scene-item-stacked`} id="guy" xmlns="http://www.w3.org/2000/svg" viewBox="312 61.5 911.3 167.5">
              <path name="guyArm" id="XMLID_85_" className="svg-stroke--accent" d="M625.8 184.2l-5.2-8.6-20 9.4-15-8.8"/>
              <path id="XMLID_41_" className="svg-fill--white" d="M592.7 170l-1.1 20.6-5.4-1.1v-20.3z"/>
              <path name="guyBody" id="XMLID_40_" className="svg-stroke--accent" d="M553.5 160.5c0-12.1 10.9-14.5 10.9-14.5s19.8 14 21.2 30.2l-1.4 41.9"/>
              <g id="XMLID_38_">
                <path name="guyHat" id="XMLID_39_" className="svg-stroke--brand" d="M604.9 120.1l-12.2-4.2.7-2c1-2.7-.4-5.8-3.1-6.9-2.6-1.1-5.4-2.2-6.1-2.4-6.6-1.5-13.2 2.6-14.7 9.2"/>
              </g>
              <path name="guyBody2" id="XMLID_37_" className="svg-stroke--accent" d="M564.7 161.5l-.1 56.5"/>
              <g id="XMLID_35_">
                <path name="guyFace" id="XMLID_36_" className="svg-stroke--dark" d="M573.4 146.9l4.1-7.8c6.3 3 11.2-1.2 12.6-7.1.5-2 1.2-5.3 1.8-7.8"/>
              </g>
              <path name="guyPhone" id="XMLID_34_" className="svg-stroke--dark" d="M634.4 155.4l-6.8 16.6"/>
              <path name="guyHood" className="svg-stroke--accent" d="M559.5 140h-14.8c-3.4 0-6.2 2.8-6.2 6.2v7.3c0 3.4 2.8 6.2 6.2 6.2"/>
              <g name="guyTicket">
                <path className="svg-stroke--dark" d="M625.4 94.7l23.2 2.6"/>
                <g>
                  <path className="svg-fill--white" d="M621.9 70.6h30.3v39.1h-30.3z"/>
                  <path className="st6" d="M622.9 71.6h28.3v37.1h-28.3V71.6m-2-2v41.1h32.3V69.6h-32.3z"/>
                  <path className="svg-stroke--green svg-stroke---dotted" style={{strokeWidth:'1px'}} d="M625.1 95.3h24.1"/>
                  <path className="svg-stroke--dark" style={{strokeWidth:'2px'}} d="M642.6 101.6v3.5"/>
                  <path className="svg-stroke--dark" style={{strokeWidth:'2px'}} d="M639.7 101.6v3.5M637.3 101.6v3.5"/>
                  <path className="svg-stroke--dark" style={{strokeWidth:'2px'}} d="M634.4 101.6v3.5M631.7 101.6v3.5"/>
                  <path className="svg-stroke--dark" style={{strokeWidth:'2px'}} d="M628.2 101.6v3.5"/>
                  <path className="svg-stroke--dark" style={{strokeWidth:'2px'}} d="M625.1 101.6v3.5M625.1 75.1h24.1M625.1 80h15"/>
                </g>
                <g name="guyArrow" id="XMLID_3_">
                  <path className="svg-stroke--brand" d="M634.4 121.2v15.1"/>
                  <path className="svg-fill--brand" d="M630.9 135.2l3.5 6.3 3.6-6.3z"/>
                </g>
              </g>
            </svg>

            <svg style={{width:'100%'}}className={`${CLASS_ROOT}__scene-item-stacked`} id="building1" xmlns="http://www.w3.org/2000/svg" viewBox="312 61.5 911.3 167.5">
              
              <g name="building1ColumnsLong">
                <path className="svg-stroke--dark" d="M1015.4 186v33.1"/>
                <path className="svg-stroke--dark" d="M1003.1 186v33.1"/>
                <path className="svg-stroke--dark" d="M990.9 186v33.1"/>
                <path className="svg-stroke--dark" d="M978.6 186v33.1"/>
                <path className="svg-stroke--dark" d="M966.3 186v33.1"/>
                <path className="svg-stroke--dark" d="M954 186v33.1"/>
              </g>
              <path name="building1Roof2" className="svg-stroke--green" d="M985.2 160.1l31.7 13.1v2.5h-63.3v-2.5z"/>
              <g name="building1Roof1">
                <path className="svg-stroke--dark" d="M944.7 192.8h-52.4"/>
                <path className="svg-stroke--dark" d="M1027.5 193.3h26.1"/>
              </g>
              <g name="building1Columns1">
                <path className="svg-stroke--dark" d="M936.4 210.3v-7.7M904.9 210.3v-7.7M920.7 210.3v-7.7"/>
              </g>
              <g name="building1Columns2">
                <path className="svg-stroke--dark" d="M1028.6 210.3v-7.7M1044.3 210.3v-7.7"/>
              </g>
              <g name="building1Signal">
                <circle id="XMLID_5_" className="svg-stroke--orange" cx="984.9" cy="114.4" r="2.2"/>
                <path className="svg-stroke--dark" style={{strokeWidth:'2px'}} d="M978.2 123.3c-2.6-2-4.3-5.2-4.3-8.8 0-6.1 4.9-11 11-11s11 4.9 11 11c0 3.6-1.7 6.8-4.3 8.8"/>
                <path className="svg-stroke--dark" style={{strokeWidth:'2px'}} d="M994.2 126.7c3.7-2.8 6.1-7.3 6.1-12.3 0-8.5-6.9-15.4-15.4-15.4s-15.4 6.9-15.4 15.4c0 5 2.4 9.4 6.1 12.3"/>
                <path className="svg-stroke--dark" style={{strokeWidth:'2px'}} d="M981 119.6c-1.6-1.2-2.6-3.1-2.6-5.2 0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5c0 2.1-1 4-2.6 5.2"/>
                <path className="svg-stroke--dark" style={{strokeWidth:'2px'}} d="M991.6 123.3c2.6-2 4.3-5.2 4.3-8.8 0-6.1-4.9-11-11-11s-11 4.9-11 11c0 3.6 1.7 6.8 4.3 8.8"/>
                <path className="svg-stroke--dark" style={{strokeWidth:'2px'}} d="M988.8 119.6c1.6-1.2 2.6-3.1 2.6-5.2 0-3.6-2.9-6.5-6.5-6.5s-6.5 2.9-6.5 6.5c0 2.1 1 4 2.6 5.2"/>
              </g>
              <path name="building1DotLine" className="svg-stroke--green svg-stroke--dotted" style={{strokeWidth:'1px'}} d="M985.2 150.4V123"/>
            </svg>

            <svg style={{width:'100%'}}className={`${CLASS_ROOT}__scene-item-stacked`} id="tree1" xmlns="http://www.w3.org/2000/svg" viewBox="312 61.5 911.3 167.5">
              <path name="tree1Trunk" className="svg-stroke--dark" id="XMLID_7_" d="M525.2 221v-13.9"/>
              <circle name="tree1Top" className="svg-stroke--brand" id="XMLID_6_" cx="525.2" cy="194.7" r="12.4"/>
            </svg>

            <svg style={{width:'100%'}}className={`${CLASS_ROOT}__scene-item-stacked`} id="car" xmlns="http://www.w3.org/2000/svg" viewBox="312 61.5 911.3 167.5">
              <circle name="carWheel1"className="svg-stroke--dark" id="XMLID_13_" cx="455.8" cy="217" r="3.1"/>
              <circle name="carWheel2"className="svg-stroke--dark" id="XMLID_12_" cx="480.3" cy="217" r="3.1"/>
              <path name="carTop" className="svg-stroke--dark" id="XMLID_11_" d="M480.3 205.6v-9.9h-31.1v18.2"/>
              <path name="carHood" className="svg-stroke--dark" id="XMLID_10_" d="M486.4 213.9h4.7v-9.1h-18.5"/>
              <path name="carBottom" className="svg-stroke--orange" id="XMLID_9_" d="M472.6 213.9H463"/>
              
              <g name="carPin">
                <path className="svg-stroke--dark" d="M478.3 117.6c0 8.1-10.6 21.8-10.6 21.8s-10.6-13.7-10.6-21.8c0-5.8 4.7-10.6 10.6-10.6 5.9 0 10.6 4.7 10.6 10.6z"/>
                <circle className="svg-stroke--orange" cx="467.8" cy="117.6" r="4.8"/>
              </g>
              <path name="carDotLine" className="svg-stroke--brand svg-stroke--dotted" style={{strokeDasharray:'0,7'}} d="M467.8 181.4v-33.7"/>
            </svg>

            <svg style={{width:'100%'}}className={`${CLASS_ROOT}__scene-item-stacked`} id="woman" xmlns="http://www.w3.org/2000/svg" viewBox="312 61.5 911.3 167.5">
              <path name="womanFront" className="svg-stroke--dark" id="XMLID_31_" d="M1095 157.2l6.4 63.5"/>
              <path name="womanBack" className="svg-stroke--dark" id="XMLID_29_" d="M1066.9 159.9c0 5.9 1.3 13.4 2.6 18.7 2.3 9.5 5.5 23.3 5.5 23.3l-4.7 18"/>
              <path name="womanArmL" className="svg-stroke--dark" id="XMLID_28_" d="M1065.7 156.5c0-7.9 4-10.9 13.5-10.7.7 0 18.6.9 30 1.5 6.1.3 12.2-1 17.6-3.8l23.6-13.2c1.9-1.1 3.1-3.1 3.1-5.3v-4.7"/>
              <circle name="womanHair2" className="svg-stroke--orange" id="XMLID_27_" cx="1078" cy="114.5" r="11.2"/>
              <path name="womanHair3" className="svg-stroke--orange" id="XMLID_24_" d="M1079.9 113.1h8.7"/>
              <path name="womanHair1" className="svg-stroke--orange" id="XMLID_23_" d="M1070.2 106.5l-1.7-1.3c-5.3-4.2-13.2-.4-13.2 6.4v8.8c0 4-1.5 9.2-7.3 10.7 0 0 1.4 7.9 10.5 7.9 6 0 9-4.5 9-7"/>
              <path name="womanPhone" className="svg-stroke--brand" d="M1145.7 126.1v-16.6"/>
              <path name="womanArmR" className="svg-stroke--dark" d="M1103.5 156.5l14.8 14.5c4.2 4.1 4.4 10.8.5 15.2l-13.1 14.8"/>
              <path name="woman" className="svg-fill--white" d="M1095 115h-17l-7.1 11.1 1.7 1.9 20.7-.2 1.7-5.7z"/>
              <path name="womanFace" className="svg-stroke--dark" id="XMLID_22_" d="M1075.7 139.7l2.6-6.5c6.8 1.5 10.7-3.7 10.7-9.8v-6.1"/>
            </svg>

            <svg style={{width:'100%'}}className={`${CLASS_ROOT}__scene-item-stacked`} id="building2" xmlns="http://www.w3.org/2000/svg" viewBox="312 61.5 911.3 167.5">
              <path name="building2structure3" className="svg-stroke--orange" d="M338.7 196.3h-15.4v24"/>
              <g name="building2structure2">
                <path className="svg-stroke--green" d="M376.2 220.3v-37.2l-15.5-15.4-15.4 15.4v37.2"/>
                <path className="svg-stroke--dark" d="M368.7 190.7v-2.6"/>
                <path className="svg-stroke--dark" d="M352.7 190.7v-2.6"/>
                <path className="svg-stroke--dark" d="M360.7 190.7v-2.6"/>
                <path className="svg-stroke--dark" d="M368.7 202.5V200"/>
                <path className="svg-stroke--dark" d="M352.7 202.5V200"/>
                <path className="svg-stroke--dark" d="M360.7 202.5V200"/>
                <path className="svg-stroke--orange" d="M368.7 220.3v-7.1"/>
              </g>
              <g name="building2structure1">
                <path className="svg-stroke--green" d="M399.2 220.3v-63l15.4-15.5 15.5 15.5v63"/>
                <path className="svg-stroke--brand" d="M406.6 193.5v-2.6"/>
                <path className="svg-stroke--brand" d="M422.6 193.5v-2.6"/>
                <path className="svg-stroke--brand" d="M414.6 193.5v-2.6"/>
                <path className="svg-stroke--brand" d="M406.6 171v-2.5"/>
                <path className="svg-stroke--brand" d="M422.6 171v-2.5"/>
                <path className="svg-stroke--brand" d="M414.6 171v-2.5"/>
                <path className="svg-stroke--brand" d="M406.6 182.8v-2.5"/>
                <path className="svg-stroke--brand" d="M422.6 182.8v-2.5"/>
                <path className="svg-stroke--brand" d="M414.6 182.8v-2.5"/>
                <path className="svg-stroke--orange" d="M406.6 220.3v-7.1"/>
              </g>
            </svg>
           
           <svg style={{width:'100%'}}className={`${CLASS_ROOT}__scene-item-stacked`} id="building3" xmlns="http://www.w3.org/2000/svg" viewBox="312 61.5 911.3 167.5">
              <path name="building3structure2" className="svg-stroke--brand" d="M1212.4 222.4v-29.6h-31.7v29.6"/>
              <path name="building3structure1" className="svg-stroke--dark" d="M1166 222.4v-60.1h-27.6"/>
              <g name="building3Lines">  
                <path className="svg-stroke--accent" d="M1138.6 182.3h5.1"/>
                <path className="svg-stroke--accent" d="M1138.4 173h5"/>
              </g>
            </svg>
          </div>
        </div>

        <div name="start">
          <StartButton text="swipe down to continue"/>
        </div>
      </div>
    );
  }
};

export default GSAP()(Animation1);

Animation1.PropTypes = {
  percentScrolled: PropTypes.number.isRequired
};
