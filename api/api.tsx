import axios from 'axios';

export const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/status',
  headers: {
    'x-rapidapi-key': '538ced0dacmshc30c59be05a8be6p1f3914jsn666d638dc24d',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const getExcercises=async ()=>{
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    
}