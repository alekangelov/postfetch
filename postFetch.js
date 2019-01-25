export default class postFetch {
    static getData(url = "", params = []) {
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
      }
      return fetch(`${finalUrl}${paramString}`).then(response => response.json());
    }
    static postData(url = ``, data = {}) {
      return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data)
      }).then(response => response.json());
    }
    static putData(url = ``, data = {}) {
      return fetch(url, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data)
      }).then(response => response.json());
    }
    static deleteData(url = ``, data = {}) {
      return fetch(url, {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data)
      }).then(response => response.json());
    }
  }