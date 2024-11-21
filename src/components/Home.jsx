import { useEffect, useState } from 'react';
import axios from 'axios';
function Home() {
  const [dataPost, setDataPost] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(0);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setLoading(false)
      setDataPost(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } 
  };

  const addData = async (e) => {
    e.preventDefault();
    const payload = {
        title: title,
        body: body,
        userId: userId,
    }
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', payload);
      setLoading(false)
      setDataPost([...dataPost, response.data]);
    } catch (error) {
    }
  };
 
  return (
    <div className="App">
      <form onSubmit={addData}>
        <label for="userId">User Id</label>
        <input type="number" id="userId" onChange={(e) => setUserId(e.target.value)}/>
        <label for="title">Title</label>
        <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} />
        <label for="body">Body</label>
        <input type="text" id="body" onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <h2>List Posts</h2>
      {dataPost.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {dataPost.map((item, index) => (
              <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>There is no data</h3>
      )} 
    </div>
  );
}

export default Home;