import                  "./index.scss"
import React, { Component } from 'react';

class ShowDocuments extends Component {

    constructor( props, context ){
        super(props, context)
    }
    // handleCheck(e) {
    //     alert(e.currentTarget.dataset.id);
    // }
	  render(){
	    return (
	    	<div>
	        	<img src={this.props.href} />
	    	</div>
	    	);
	  }
}

export default ShowDocuments;