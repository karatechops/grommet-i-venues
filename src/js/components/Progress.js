import React, { Component, PropTypes } from 'react';

const CLASS_ROOT = 'progress';

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this._handleScroll = this._handleScroll.bind(this);

    this.state = {
      percent: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this._handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.percent !== prevState.percent && this.props.setProgress) 
      this.props.setProgress(this.state.percent);
  }

  _handleScroll() {
    let yOffset = window.pageYOffset;
    let scrollPercent = yOffset / (document.body.clientHeight - window.innerHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);

    if (scrollPercentRounded !== this.state.percent) this.setState({percent:scrollPercentRounded});
  }
  
  render() {
    return (
      <div className={CLASS_ROOT} style={{width: `${this.state.percent}%`}}>
      </div>
    );
  }
};

Progress.PropTypes = {
  setProgress: PropTypes.func
};
