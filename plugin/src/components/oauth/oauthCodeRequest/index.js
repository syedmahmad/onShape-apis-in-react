import React, { Component } from 'react';
import { connect } from 'react-redux';

import { RingLoader } from 'react-spinners';
import { spinnerStyles, sizeUnit, size, color } from '../../../helpers/spinnerStyles';

class AuthCodeRequest extends Component {

    constructor( props ){
        super();
        this.state = { ...props };
      }
      componentDidMount(){
        // onShape will pass current opened document data inside iframe as query params
        // we need to save query params to get current document data.
        if (window.location.search !== "") {
          localStorage.setItem("queryParams", window.location.search);
        }        
        window.location = this.state.authURL;
      }
      render(){
        return (
          <div className="middle">
           <div className="loader-holder">
            <RingLoader
              css={spinnerStyles}
              sizeUnit={sizeUnit}
              size={size}
              color={color}
              loading={this.state.mainLoading}
            />
            </div>
          </div>
          );
      }
}

export default AuthCodeRequest;