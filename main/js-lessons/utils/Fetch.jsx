export function postFetch(endpint, bodyObj) {
    return fetch("https://norma.nomoreparties.space/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      redirect: "follow",
      body: JSON.stringify(bodyObj),
    })
      .then(res=>{
        return res.json();
      })
      .then(res => {
        if (res.success){
          return res;
        }
        throw Error(JSON.stringify(res));
      })
      .catch(console.log);
}