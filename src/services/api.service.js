const ApiService = {
    getAlAlbums: async () => {

        const myHeaders = new Headers();

        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRnJvZDA4MCIsInVzZXJfc2VjcmV0IjoidGVzdHBhc3MiLCJuYmYiOjE2MTIyMTk0MTAsImV4cCI6MTYxMjIyMzAxMCwiaWF0IjoxNjEyMjE5NDEwfQ.Q5b8sAKK8FihfCwJzQbOFX8aBM5UdCK13ODGKMSjfHk");
        
        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        const data = await fetch("https://familyvinylapp.azurewebsites.net/api/ownedalbums", requestOptions);
        const dataInJson = await data.json();

        return dataInJson;
    }
}

export default ApiService;