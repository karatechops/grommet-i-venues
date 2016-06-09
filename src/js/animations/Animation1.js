import React, { Component, PropTypes } from 'react';
import '../../lib/gsap/TimelineMax';
import '../../lib/gsap/TweenMax';
import '../../lib/gsap/plugins/DrawSVGPlugin';
import GSAP from 'react-gsap-enhancer';
import Headline from 'grommet/components/Headline';
import StartButton from '../components/StartButton';
import classnames from 'classnames';
import Intro from './Intro';

const CLASS_ROOT = 'animation';

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
    this.animExit = this.addAnimation(animExit);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.percentScrolled >= 0 && nextProps.percentScrolled <= 54 )
    ? true
    : false;
  }

  componentDidUpdate(prevProps, prevState) {
    let percentScrolled = this.props.percentScrolled;
    if (percentScrolled > 0 && percentScrolled <= 60 ) {
      if (percentScrolled <= 50) this.animExit.tweenTo('enter');
      if (percentScrolled > 51) this.animExit.tweenTo('leave');
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
            <Intro />
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
