import React from 'react';
import PropTypes from 'prop-types';
import styles from './RollBack.module.css';
class RollBack extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <p className={ styles.helpText }>Rollback
              <b> <output >{ `x${ this.props.rollBackValueInSeconds }` }</output></b> Seconds
            </p>

            <input
                type="range"
                min="1"
                max="60"
                step="1"
                value={ this.props.rollBackValueInSeconds }
                onChange={ this.props.handleChangeReplayRollbackValue }
            />
            <br/>
            <button type="button" onClick={ this.props.rollBack  }>↺</button>

          </div>
        );
    }
}

export default RollBack;