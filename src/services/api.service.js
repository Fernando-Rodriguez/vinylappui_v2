const ApiService = {

  getAlAlbums: async (token) => {

    let myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      `Bearer ${token}`
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const data = await fetch(
      `${process.env.REACT_APP_API_BASE}/ownedalbums`,
      requestOptions
    );

    const dataInJson = await data.json();

    return dataInJson;
  },

  getToken: async (email, password) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(
    {
        "clientname": email,
        "clientsecret": password
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch(`${process.env.REACT_APP_API_BASE}/token`, requestOptions);

    if(response.ok){
      const token = await response.json();

      if(token.access_token){

        return token.access_token;
        
      }
  }

  }
};

export default ApiService;
