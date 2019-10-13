import                  "./index.scss"
import React, { Component } from 'react';
import * as assemblyActions from '../../actions/assemblies';
import ShowAssemblies from '../ui/showAssemblies'
import { connect } from 'react-redux';

import { RingLoader } from 'react-spinners';
import { spinnerStyles, sizeUnit, size, color } from '../../helpers/spinnerStyles';

class Assemblies extends Component {

    constructor( props, context ){
        super(props, context)
        this.state = { ...props };
      }
      componentDidMount(){
        this.props.dispatch(assemblyActions.getDocumentAssemblies());
      }
      render(){
        let data = this.props.assemblyReducer;
        return (
        	<div className="assemblies">
            {
              data.assemblyLoading ?
                <div className="loader-holder">
                  <RingLoader
                    css={spinnerStyles}
                    sizeUnit={sizeUnit}
                    size={size}
                    color={color}
                    loading={data.assemblyLoading}
                  />
                </div>
                : <ShowAssemblies assemblies={data.assemblies} dispatch={this.props.dispatch} />
            }
        	</div>
        	);
      }
}

const mapStateToProps = state => ({
  assemblyReducer: state.assemblyReducer
});

export default connect(mapStateToProps)(Assemblies);