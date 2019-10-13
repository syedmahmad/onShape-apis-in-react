import                  "./index.scss"
import React, { Component } from 'react';
import * as documentActions from '../../actions/document';
import ShowDocument from '../ui/showDocument'
import { connect } from 'react-redux';

import { RingLoader } from 'react-spinners';
import { spinnerStyles, sizeUnit, size, docColor } from '../../helpers/spinnerStyles';

class Document extends Component {

    constructor( props, context ){
        super(props, context)
        this.state = { ...props };
      }
      componentDidMount(){
        this.props.dispatch(documentActions.getDocument());
      }
      render(){
        let data = this.props.documentReducer;
        return (
          <div className="document">
            {
              data.documentLoading ?
                 <div className="loader-holder">
                  <RingLoader
                    css={spinnerStyles}
                    sizeUnit={sizeUnit}
                    size={size}
                    color={docColor}
                    loading={data.documentLoading}
                  />
                </div>
                : <ShowDocument href={data.document.thumbnail.sizes[1].href} />
            }
          </div>
          );
      }
}

const mapStateToProps = state => ({
  documentReducer: state.documentReducer
});

export default connect(mapStateToProps)(Document);