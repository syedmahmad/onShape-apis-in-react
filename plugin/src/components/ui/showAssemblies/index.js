import                  "./index.scss"
import React, { Component } from 'react';
import * as duroActions from '../../../actions/duro';

class ShowAssemblies extends Component {

    constructor( props, context ){
        super(props, context)
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck(e) {
        if (e.currentTarget.dataset.id) {
        	this.props.dispatch(duroActions.getData(e.currentTarget.dataset.id));
        } else {
        	alert("Element Id not present...");	
        }
    }
	  render(){
	    let assemblies = this.props.assemblies;
	    let items = null;
	    items = assemblies.map((item, key) =>
	        <li key={item.id} onClick={this.handleCheck} data-id={item.id}>{item.name}</li>
	    );
	    return (
	    	<div>
	        	<ul>
	        		{
	        			items ? items : "<li>No Assembly Found...</li>"
	        		}
	        	</ul>
	    	</div>
	    	);
	  }
}

export default ShowAssemblies;