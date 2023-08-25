export const getPosts =  async () => {
    try {
        let response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/'
        );
        
        response = await response.data;
        // console.log(response);
      setData(response);
      
      return data;
    } catch (err) {
        console.error('Errrroooo!!! ', err);
    }
}