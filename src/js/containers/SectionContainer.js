import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Section from 'grommet/components/Section';

export default class SectionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: 0
    };
  }

  componentDidMount() {
    this._setScrollPercent(ReactDOM.findDOMNode(this));
    window.addEventListener('scroll', () => this._handleScroll());
    window.addEventListener('resize', () => this._handleScroll());
  }

  _handleScroll() {
    this._setScrollPercent(ReactDOM.findDOMNode(this));
  }

  _setScrollPercent(node) {
    /*let nodeBounds = node.getBoundingClientRect();
    let nodeCenter = nodeBounds.top + (nodeBounds.height / 2);
    let center = (1 + ((( -1 * nodeCenter) / nodeBounds.height)));*/
    let nodeBounds = node.getBoundingClientRect();
    let nodeCenter = nodeBounds.top + (nodeBounds.height / 2);
    let center = (1.5 + ((( -1 * nodeCenter) / nodeBounds.height))) / 2;
    let scrollPercentRounded = Math.round(center * 100);
    this.setState({percent: scrollPercentRounded});
  }

  render() {
    let children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        percentScrolled: `${this.state.percent}`
      });
    });

    return (
      <Section {...this.props}
        appCentered={true} justify="center" align="center" full={true}
        textCentered={true} pad={{vertical: "large"}}>
        {children}
      </Section>
    );
  }
};
