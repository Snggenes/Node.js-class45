import fetch from 'node-fetch'

async function printBooks() {
  const idPassword = 'YWRtaW46aHZnWDhLbFZFYQ==';
  const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books'

  try {
    const response = await fetch(url,{
      headers:{
        'Authorization': `Basic ${idPassword}`
      }
    })
    if(response.ok){
      const data = await response.json();
      console.log(data);
    }else{
      throw new Error('there is an error')
    }
  } catch (error) {
    console.log(error.message);
  }
}

printBooks();
