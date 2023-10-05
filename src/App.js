import { useState, useEffect } from "react";
import Form from './Form';
import Table from "./Table";


const URL = "https://jsonplaceholder.typicode.com/";

function App() {

  const [reqType, setReqType] = useState('comments');
  const [items, setItems] = useState([]);

  useEffect(()=>{
    const fetchItems = async () =>{
      try{
        const response = await fetch(`${URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err){
          console.log(err);
      }
    }

    fetchItems();
  }, [reqType])

  return (
    <div className="App">
      <Form 
        reqType={reqType}
        setReqType={setReqType}
      />
      <Table items={items} />
    </div>
  );
}

export default App;
