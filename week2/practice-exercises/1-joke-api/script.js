import fetch from "node-fetch";

async function printChuckNorrisJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (response.ok) {
      const data = await response.json();
      const joke = data.value;
      console.log(joke);
    }else{
      throw new Error('error getting a joke')
    }
  } catch (error) {
    console.log(error.message);
  }
}

printChuckNorrisJoke();
