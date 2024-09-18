export const fetchData = async () => {
    let url = 'http://localhost:3001/api/data';
  
    const response = await fetch(url);
  
    // if (!response.ok) {
    //     console.log("error");
    //   const error = new Error('An error occurred while fetching the data');
    //   error.code = response.status;
    //   error.info = await response.json();
    //   throw error;
    // }
  
    return await response.json();
  }