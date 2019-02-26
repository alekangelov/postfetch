export default class postFetch {
  static getData(url = "", params = []) {
    const headers = {
      "Content-Type": "text/plain",
      Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`
    };
    let paramString = "?";
    const paramLength = params.length;
    let finalUrl = url;
    if (paramLength > 0) {
      params.forEach((param, i) => {
        for (let key in param) {
          paramString += key + "=" + param[key];
        }
        if (i + 1 != paramLength) {
          paramString += "&";
        }
      });
    } else if (typeof paramLength == "undefined") {
      for (let key in params) {
        paramString += key + "=" + params[key] + "&";
      }
    }
    return fetch(`${finalUrl}${paramString}`, {
      method: "GET",
      headers: headers,
      mode: "cors"
    }).then(response => response.json());
  }
  static postData(url = ``, data = {}) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`
    };
    return fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: headers,
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
  static putData(url = ``, data = {}) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`
    };
    return fetch(url, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: headers,
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
  static deleteData(url = ``, data = {}) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`
    };
    return fetch(url, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: headers,
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data)
    }).then(response => response.json());
  }
}
