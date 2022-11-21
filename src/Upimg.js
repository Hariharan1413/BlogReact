
import React, {useState} from 'react';
import axios from 'axios';



function Upimg() {
      let [dropd,setDropd]=useState([])
      const [value, setValue] = useState("");
      let [url ,setUrl]=useState("") 
      const [file, setFile] = useState()
  const [get,setGet]=useState([{name:"",url:""}])


      if(dropd.length==0){
        
        drop()
 
      }

    function drop(){
   setDropd([1,2,3])
   const url = 'http://localhost:8085/files';
   const formData = new FormData();
   const config = {
     headers: {
       'content-type': 'multipart/form-data',
     },
   };
   axios.get(url, formData, config).then((response) => {
     console.log(response.data);
     setGet(response.data);
   });
    }


  


  

  let down =()=>{
    const url = 'http://localhost:8089/files';
    const formData = new FormData();
    formData.append('file', file);
    // formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.get(url, formData, config).then((response) => {
      console.log(response.data);
      setGet(response.data)
    });

  
  }

  const handleChangess = (e) => {
    setValue(e.target.value);
  };
// -----------------------------------------------

    let handleChange=(event)=> {
    setFile(event.target.files[0])
  }
  
  let upload=(event)=> {
    event.preventDefault()
    const url = 'http://localhost:8089/uploads';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }


  return (
    <div className="App">
<input type="file" name="file" onChange={handleChange}></input>
       <button onClick={upload}>upload</button>
<hr></hr>

    Select image : <select value={value} onChange={handleChangess}>
  
  <option>Please choose one option</option>
  {get.map((e) => {
      return <option value={e.url}>
          {e.name}
      </option>
  })}
</select> 
{get.map((e)=>{
  return <img src={e.url}/>
})}      
<a href={value} target="_blank" rel="noopener noreferrer" download>
   <button onClick={down}>
      <i className="fas fa-download"/>
      Download File
   </button>
   </a>
    </div>
  );
}

export default Upimg;