const axios = require('axios');
import { getQueryVariable }  from "../helpers/serviceHelper"
import serviceCalls from "./serviceCalls"

export const getDocumentAssemblies = (cb) => {
  
    // let dummyParams = "?documentId=c63b547a4df045269b0bacdc&workspaceId=c3f060c14dccf3fa386bf83e&elementId=e6a20b5dbbd6d7e9d531ccf5&elementType=application&server=https%3A%2F%2Fcad.onshape.com&userId=5b198f070472490fa5b1becd&companyId=5d4321c7ff085b1065de7172&documentState=workspace&defaultWorkspaceName=Main&debug=false&clientId=JMRLHGAIKRKN2YYW5RVGAUIE7JYIXZ6I6EUYN3A%3D&access=edit&locale=en-US";
    let searchParams = getQueryVariable(localStorage.getItem("queryParams"));
    let path = "/onshape/getDocumentAssemblies" + '?documentID=' + searchParams.documentId + '&workspaceID=' + searchParams.workspaceId;

    serviceCalls.get(path, (err, res) => {
      if (err) {
        // toDO: redirect user to some error page.....
        cb(null, res);
      } else {
        cb(null, res.data);
      }
    });
};