import React from 'react';
import Up from 'grommet/components/icons/base/Up';

const CLASS_ROOT = 'anim-button';

export default function EndButton (props) {
  return (
    <div className={`${CLASS_ROOT} ${CLASS_ROOT}--end`} onClick={props.onClick}>
      <span className={`${CLASS_ROOT}__icon`}>
        <Up a11yTitle={'Scroll to top'} onClick={props.onClick} />
      </span>
    </div>
  );
}
