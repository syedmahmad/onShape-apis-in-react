import Defaults  from "../../../config/default.json"
import { fetchToken }  from "../helpers/serviceHelper"

class serviceCalls
{
    static get(path, cb)
    {
    	let tokens = fetchToken();
    	if (tokens === null) {
    	    cb({
    	          errors   : ["Tokens Not Found"]
    	      })
    	}
    	let options =
		{
		  method      : "GET",
		  headers     :
		  {
		      "Content-Type": "application/json",
		      "Authorization": tokens.access_token
		  }
		}
		let url = Defaults.API_ORIGIN + path;
		console.log("URL.......................", url);
		fetch(url, options)
		  .then((res) => {
		    res.json()
		    .then((response) =>
		    {
		      if (response.error)
		      {
		          cb(response);
		      }

		      if (response.success) 
		      {
		          cb(null, response);
		      }
		    })
		    .catch((err) =>
		    {
		       cb(err);
		    })
		  });

        
    }

    static post(path, data, cb)
    {
    	let url = Defaults.API_ORIGIN + path;
        fetch(url, data)
          .then((res) => {
            res.json()
            .then((response) =>
            {
              if (response.error)
              {
                  cb(response);
              }

              if (response.success) 
              {
                  cb(null, response);
              }
            })
            .catch((err) =>
            {
               cb(err)
            })
          });
    }
}

export default serviceCalls
