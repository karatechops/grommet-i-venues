import React, { Component } from 'react';
import Logo from './Logo.js';
import classnames from 'classnames';
import Anchor from 'grommet/components/Anchor';
import Layer from 'grommet/components/Layer';
import Headline from 'grommet/components/Headline';
import Share from 'grommet/components/icons/base/Share';
import SocialShare from 'grommet/components/SocialShare';

import Progress from './Progress';

const CLASS_ROOT = 'section-nav';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      started: false,
      scrollPosition: 0,
      progress: 0,
      layerActive: false
    };

    this._handleProgress = this._handleProgress.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onLayerClose = this._onLayerClose.bind(this);
  }

  componentDidMount() {
    this.setState({
      scrollPosition: window.pageYOffset
    });
  }

  _handleProgress(progress) {
    if (progress >= 95 || progress <= 0) {
      this.setState({active: true});
    } else this.setState({active: false});

    let started = (progress > 2) ? true : false;
    
    this.setState({started: started});
    this.setState({progress: progress});
  }

  _onClick() {
    //tbd
    if (this.state.progress >= 95) {
      this.setState({layerActive: true});
    }
  }
  
  _onLayerClose() {
    this.setState({layerActive: false});
  }

  render() {
    let classes = classnames(
      CLASS_ROOT,
      {
        [`${CLASS_ROOT}--active`]: this.state.active
      }
    );

    let containerClasses = classnames(
      `${CLASS_ROOT}__container`,
      {
        [`${CLASS_ROOT}__container--started`]: this.state.started
      }
    );

    let icon = <Share className={`${CLASS_ROOT}__icon`} colorIndex={"dark-2"} />;

    let navCta = (this.state.progress >= 95)
      ? (<Anchor label={'Share'} icon={icon} reverse={true} onClick={this._onClick} />)
      : ('');

    let layer = (this.state.layerActive) ? (
      <div className="share-layer">
        <Layer onClose={this._onLayerClose} closer={true} flush={true} align={"center"}>
          <div className="share">
            <Headline size={"large"} strong={true}>
              Thanks for sharing, we're glad you enjoyed it.
            </Headline>
            <div className="share__icons">
              <SocialShare type={"email"} 
              link={"http://bit.ly/20XgcQ9"} 
              title={"Hewlett Packard Enterprise - Intelligent Venues"} 
              text="HPE is helping stadiums, theme parks and cultural institutions turn visitors into super fans." />
              <SocialShare type={"twitter"} 
              link={"http://bit.ly/20XgcQ9"} 
              text={"@HPE is helping stadiums, theme parks and cultural institutions turn visitors into super fans."} />
              <SocialShare type={"facebook"} 
              link={"http://bit.ly/20XgcQ9"} />
              <SocialShare type={"linkedin"} 
              link={"http://bit.ly/20XgcQ9"} 
              title={"Hewlett Packard Enterprise - Intelligent Venues"}
              text="HPE is helping stadiums, theme parks and cultural institutions turn visitors into super fans." />
            </div>
          </div>
        </Layer>
      </div>
    ) : (null);

    return (
      <nav className={classes}>
      	<div className={containerClasses}>
          <Logo />
          <div className={`${CLASS_ROOT}__control`}>
            {navCta}
          </div>
        </div>
        <Progress setProgress={this._handleProgress}/>
        {layer}
      </nav>
    );
  }
};
