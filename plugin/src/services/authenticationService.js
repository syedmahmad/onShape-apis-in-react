const axios = require('axios');
import { saveTokens, fetchToken }  from "../helpers/serviceHelper"
import serviceCalls from "./serviceCalls"

export const authTokenOnshapeService = (payload, cb) => {
  let options =
    {
        method      : "POST",
        body        : JSON.stringify({code: payload}),
        headers     :
        {
            "Content-Type": "application/json"
        }
    }
    serviceCalls.post("/onshape/get/tokens", options, (err, res) => {
      if (err) {
        // toDO: redirect user to some error page.....
        cb(null, res);
      } else {
        // toDo: saving it into localStorage for the time being....
        saveTokens(res);
        cb(null, res.data);
      }
    });

};

export const authRefreshtokenOnshapeService = (cb) => {
  let tokens = fetchToken();
  let options =
    {
        method      : "POST",
        body        : JSON.stringify(tokens),
        headers     :
        {
            "Content-Type": "application/json"
        }
    }

    serviceCalls.post("/onshape/refresh/tokens", options, (err, res) => {
      if (err) {
        // toDO: redirect user to some error page.....
        cb(null, res);
      } else {
        // toDo: saving it into localStorage for the time being....
        saveTokens(res);
        cb(null, res.data);
      }
    });
};
