export const saveTokens = (response) => {
  if (response.success) {
    response.data["createdTime"] = new Date();
    localStorage.setItem('tokensData', JSON.stringify(response.data));
  }
}

export const fetchToken = () => {
  let data = {};
  if (localStorage.getItem('tokensData')) {
    let tokens = localStorage.getItem('tokensData');
    data = JSON.parse(tokens);
  } else {
    return "";
  }
  return data;
}

export const checkTokenStatus = (cb) => {
  let data = fetchToken();
  let state = "";
  if (data === "") {
    state = "notPresent";
  } else {
    let first = new Date(data.createdTime);
    let second = new Date();
    let diff = second.getTime() - first.getTime();
    let minutes = Math.floor(diff / 1000 / 60);
    if (minutes >= 55) { // As token expires after 60 min so we are refreshing it begore 5 min.
      state = "doRefresh";
    } else {
      state = "permit";
    }
  }
  return state;
}

export const getQueryVariable = (searchParams) => {
    let query = searchParams.substring(1);
    let vars = query.split('&');
    let data = {};
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        data[pair[0]] = decodeURIComponent(pair[1]);
    }
    return data;
}