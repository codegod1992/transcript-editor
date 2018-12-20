import React from 'react';

import returnHotKeys from '../MediaPlayer/defaultHotKeys';

import style from './Shortcuts.module.css';

class Shortcuts extends React.Component {
  render() {
    const hotKeys = returnHotKeys(this);
    const hotKeysCheatsheet = Object.keys(hotKeys).map((key, i) => {
    	const value = hotKeys[key];

      return <li key={ i } className={ style.settingElement }><mark><code>{key}</code></mark> {value.helperText}</li>;
    });

    return (
      <div>
        <span>ℹ Keyboard Shortcuts Help</span>
        <ul style={ { listStyle: 'none' } }>
          {hotKeysCheatsheet}
        </ul>
      </div>
    );
  }
}

export default Shortcuts;
