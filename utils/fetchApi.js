import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': '62ece95bc6msh7ba6bb35229ab19p1a1387jsnc7568ae9463a'
      }
    });
    
  return data;
}