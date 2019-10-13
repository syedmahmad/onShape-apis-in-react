import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RingLoader } from 'react-spinners';
import { spinnerStyles, sizeUnit, size, color } from '../../helpers/spinnerStyles';

class AccessDenied extends Component {

    constructor( props ){
        super();
        this.state = { ...props };
      }
      render(){
        return (
            <div className="middle">
              <div className="loader-holder">
              {
                this.props.error ?
                  this.props.error
                  : 
                  <RingLoader
                    css={spinnerStyles}
                    sizeUnit={sizeUnit}
                    size={size}
                    color={color}
                    loading={this.state.mainLoading}
                  />
                  
              }
              </div>
            </div>      	
        	);
      }
}

export default AccessDenied;