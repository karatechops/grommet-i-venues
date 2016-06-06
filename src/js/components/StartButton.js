import React from 'react';
import Down from 'grommet/components/icons/base/Down';

const CLASS_ROOT = 'anim-button';

export default function StartButton (props) {
  return (
    <div className={`${CLASS_ROOT} ${CLASS_ROOT}--start`}>
      <span className={`${CLASS_ROOT}__icon`}>
        <Down a11yTitle={'Start Button'} />
      </span>
    </div>
  );
}
