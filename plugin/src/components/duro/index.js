import                  "./index.scss"
import React, { Component } from 'react';
import * as duroActions from '../../actions/duro';
import ShowDuro from '../ui/showDuro'
import { connect } from 'react-redux';

import { RingLoader } from 'react-spinners';
import { spinnerStyles, sizeUnit, size, color } from '../../helpers/spinnerStyles';

class Duro extends Component {

    constructor( props, context ){
        super(props, context)
        this.state = { ...props };
      }
      componentDidMount(){
        // this.props.dispatch(duroActions.getData());
      }
      render(){
        let data = this.props.duroReducer;
        return (
          <div className="duro">
            {
              data.duroLoading ?
                 <div className="loader-holder">
                  <RingLoader
                    css={spinnerStyles}
                    sizeUnit={sizeUnit}
                    size={size}
                    color={color}
                    loading={data.duroLoading}
                  />
                </div>
                : <ShowDuro assemblyDefinition={data.assemblyDefinition} />
            }
          </div>
          );
      }
}

const mapStateToProps = state => ({
  duroReducer: state.duroReducer
});

export default connect(mapStateToProps)(Duro);