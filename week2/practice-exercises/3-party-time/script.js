import fetch from 'node-fetch';
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */

const trial = {
  "name": "John Doe",
  "numberOfPeople": 3
}

async function makeReservation(reservation) {
  try {
    const response = await fetch('https://reservation100-sandbox.mxapps.io/api/reservations',{
      method:'POST',
      body: JSON.stringify(reservation),
      headers: {'Content-Type': 'application/json'},
    });
  
    if(response.ok){
      const data = await response.json();
      console.log(data);
    }else{
      throw new Error('Error occurred')
    }
  } catch (error) {
    console.log(error.message);
  }
}

makeReservation(trial);