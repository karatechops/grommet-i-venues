import React from 'react';
import ReactDOM from 'react-dom';

export default class ScrollMonitor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodesToWatch: []
    };
    this._handleScroll = this._handleScroll.bind(this);
  }

  componentDidMount() {
    this.setState({
      nodesToWatch: this._getChildrenNodes(this.props.children),
      activeIndex: 0
    });
    window.addEventListener('scroll', this._handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex !== this.state.activeIndex) this.props.setActiveIndex(this.state.activeIndex);
    if (prevState.scrollPercent !== this.state.scrollPercent) this.props.setScrollPercent(this.state.scrollPercent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll);
  }

  _getChildrenNodes(children) {
    let nodeList = children.map((child, idx) => {
      let node = ReactDOM.findDOMNode(this.refs[`${child.props.id}`]);
      return {
        name: child.props.id,
        domNode: node,
        measure: this._getNodeSize(node)
      };
    });

    this.state.docHeight = this._getDocHeight;
    return nodeList;
  }

  _getDocHeight() {
    let docHeight = 0;
    if (this.state.nodesToWatch) {
      let nodes = this.state.nodesToWatch;
      nodes.map((child) => {
        docHeight = docHeight + child.measure.height;
      });
      console.log(docHeight);
    }
    return docHeight;
  }

  _getNodeSize(node) {
    let nodeBounds = node.getBoundingClientRect();
    let measure = {
      top: nodeBounds.top + window.scrollY, 
      height: nodeBounds.height
    };
    return measure;
  }

  _isViewable(node) {
    //let triggerOffset = window.innerHeight / 3;
    let triggerOffset = 0;
    let nodeCenter = node.measure.top + (node.measure.height / 2) - triggerOffset;
    let nodeBottom = node.measure.top + node.measure.height - triggerOffset;
    let windowCenter = window.pageYOffset + (window.innerHeight/2);

    if (windowCenter >= nodeCenter && window.pageYOffset <= nodeBottom) {
      return true; 
    } else {
      return false;
    }
  }

  _handleScroll() {
    this.state.nodesToWatch.map((node, idx) => {
      if (idx !== this.state.activeIndex) {
        if (this._isViewable(node)) this.setState({activeIndex: idx});
      };
    });
  }

  render() {
    let children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        ref: `${child.props.id}`
      });
    });

    return (
      <div ref="scrollMonitor">
        {children}
      </div>
    );
  }
}
