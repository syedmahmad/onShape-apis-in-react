import React, { Component } from 'react';
import AccessDenied from '../../accessDenied';
import Main from '../../main';
import * as oauthActions from '../../../actions/oauth';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';
import { spinnerStyles, sizeUnit, size, color } from '../../../helpers/spinnerStyles';

class OauthRedirect extends Component {

    constructor( props, context ){
        super(props, context)
        this.state = { ...props };
      }
      componentDidMount(){
        // send access token request only if data is not present by checking localStorage...
        if (this.props.oauthReducer.mainLoading)
          this.props.dispatch(oauthActions.getOnshapeToken(this.state.location.search.split("?")[1]));
      }
      render(){
        let oauth = this.props.oauthReducer;
        return (
          <div className="middle">
            {
              oauth.error !== "" ?
                <AccessDenied error={`${oauth.error} ${oauth.error_description}`} /> : 
                  oauth.mainLoading ? 
                     <div className="loader-holder">
                      <RingLoader
                        css={spinnerStyles}
                        sizeUnit={sizeUnit}
                        size={size}
                        color={color}
                        loading={oauth.mainLoading}
                      />
                    </div>
                : <Main />
            }
          </div>
          
          );
      }
}

const mapStateToProps = state => ({
  oauthReducer: state.oauthReducer
});

export default connect(mapStateToProps)(OauthRedirect);