import                  "./index.scss"
import React, { Component } from 'react';

import Assemblies from '../assemblies';
import Document from '../document';
import Duro from '../duro';
import { connect } from 'react-redux';

class Main extends Component {

    constructor( props, context ){
        super(props, context)
        this.state = { ...props };
      }
      componentDidMount(){
      }
      render(){
        return (
        	<div className="middle">
        		<Assemblies />
            <Document />
            <Duro />
        	</div>
        	);
      }
}

export default Main;