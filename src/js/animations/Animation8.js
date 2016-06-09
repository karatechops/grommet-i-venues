import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import '../../lib/gsap/TimelineMax';
import GSAP from 'react-gsap-enhancer';
import Headline from 'grommet/components/Headline';
import Button from 'grommet/components/Button';
import EndButton from '../components/EndButton';
import ScrollToTop from '../utils/ScrollToTop';

const CLASS_ROOT = 'animation';

function anim({target}) {
  let header = target.find({name: 'header'});
  let text1 = target.find({name: 'text1'});
  let cta = target.find({name: 'cta'});

  return new TimelineMax({paused: true})
    .set([header, text1], {opacity: '0'})
    .set(cta, {opacity:'0', scale: '1.2', y:'-10%'})

    .add('enter')
    .to(header, .2, {opacity:'0'})
    .to(header, .3, {opacity:'1', delay:'-.0'})
    .to(text1, .2, {opacity:'1', delay:'-.2'})
    .to(cta, .12, {opacity:'1', scale:'1', y:'0%', delay:'-.15'})
    .to(text1, .5, {opacity:'1'})
    
    .add('leave');
}

class Animation1 extends Component {
  constructor(props) {
    super(props);

    this._clickHandler = this._clickHandler.bind(this);
    this._scrollBackHandler = this._scrollBackHandler.bind(this);
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

  _clickHandler() {

  }

  _scrollBackHandler() {
    ScrollToTop.scroll(100);
  }

  render() {
    let classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}--end-screen`
    );

    return (
      <div className={classes}>
        <div style={{maxWidth:'780px'}}>
          <Headline name="header" size="large" strong={true}>Transformation journey to Intelligent Venues</Headline>
        </div>
        <Headline name="text1" size="small">Learn more about how HPE is helping venues accelerate digital transformation.</Headline>
        <div name="cta" className={`${CLASS_ROOT}__button-cta`}>
          <Button href="http://www.hpe.com/solutions/enable" label="Learn more" primary={true} />
        </div>
        <EndButton onClick={this._scrollBackHandler}/>
      </div>
    );
  }
};

export default GSAP()(Animation1);

Animation1.PropTypes = {
  percentScrolled: PropTypes.number.isRequired
};
