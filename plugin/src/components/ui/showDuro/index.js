import                  "./index.scss"
import React, { Component } from 'react';

class ShowDuro extends Component {

    constructor( props, context ){
        super(props, context)
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck(e) {
        // alert(e.currentTarget.dataset.id);
    }
	  render(){
	  	let items = null;
	  	if (this.props.assemblyDefinition.length > 0) {
	  		 items = this.props.assemblyDefinition.map((item, key) =>
	  		    <li key={item.id}>{item.name}</li>
	  		);
	  	}
	    return (
	    	<div className="h-100">
	        	{
	        		items ?
	        		<ul>
		        		{items}
		        	</ul> :
		        	<div className="message-holder">
		        		<span>No Definition Exist...</span>
		        	</div>
	        	}
	    	</div>
	    	);
	  }
}

export default ShowDuro;