import                  "./index.scss"
import React, { Component } from 'react';

class ShowPartDetail extends Component {

    constructor( props, context ){
        super(props, context)
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck(e) {
        // alert(e.currentTarget.dataset.id);
        // if (e.currentTarget.dataset.id) {
        // 	alert(e.currentTarget.dataset.id);
        // } else {
        // 	alert("Element Id not present...");	
        // }
    }
	  render(){
	  	let items = this.props.partDetail;
	  	
	    return (
	    	<div className="h-100">
	        	<div className="message-holder">
	        		<span>Part Cart...</span>
	        	</div>
	    	</div>
	    	);
	  }
}

export default ShowPartDetail;