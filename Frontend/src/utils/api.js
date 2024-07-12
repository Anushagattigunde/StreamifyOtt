import axios from "axios"; 
 
const BASE_URL = "https://api.themoviedb.org/3"; 
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN; 
 console.log(TMDB_TOKEN)
const headers = { 

  Authorization: "Bearer " + TMDB_TOKEN, 
}; 
 
export const fetchDataFromApi = async (url, params) => { 
  try {
    const options = { 
      method: "GET", 
      url: "https://api.themoviedb.org/3" + url, 
      headers: { 
        accept: "application/json", 
        Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjY4N2RjNDI4YzUwODQzZjk4ZGQyYmY2NDU4MThhNSIsInN1YiI6IjY0ZGUxNTAzNWFiODFhMDEzOTE5NGFjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VMdgIo622VEhb15Lc5vYAVEAdu8WkFUFQsml73cuH4s", 
      }, 
    }; 
 
    axios 
      .request(options) 
      .then(function (response) { 
        console.log(response.data); 
      }) 
      .catch(function (error) { 
        console.error(error); 
      });
 
    console.log(params)
    const { data } = await axios.get(BASE_URL + url, { 
      headers, 
      params, 
    }); 
    console.log(data)
    return data; 
  } catch (error) { 
    console.log(error); 
    return error; 
  } 
};