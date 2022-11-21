import React, { useState } from 'react'

export default function Login() {


  
    //  let [user,setUser]=useState({username:"",password:""})

    // let change =(event)=>{
    //     setUser({...user,[event.target.name]:event.target.value})
    //     console.log(user);
    // }

    // let click=()=>{
    //        fetch("http://localhost:8085/check/"+user.username+"/"+user.password)
    //        .then((response)=>

           

    //                      console.log(response.headers.get("Authorization"))
            
            
        
    //         )
    //}


    let [file,setFile]=useState([]);


    let change =(event)=>{
      if (event.target.files.length !== 0) {
        setFile(file => [...file, URL.createObjectURL(event.target.files[0])])
      }
    }

    let saveimg =()=>{
      
      const uploadimage =new FormData();
      var file = new Blob([
        JSON.stringify({})
     ], { type: 'application/json' });
     uploadimage.append('Cap', file);
      // uploadimage.append("file",file,file.name);
     
//       var data = new FormData()
// data.append('file', input.files[0])
// data.append('user', 'hubot')

fetch('http://localhost:8089/uploads', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',

  
},
  body: uploadimage
}).then((response) =>  {
  return response.formData();
})
    }
  return (
    <div>
        {/* LOGIN
        
        Username :<input type ="text" name ="username" onChange={change}></input>
        password :<input type="text" name="password" onChange={change}></input>
        <button  onClick={click}>Login</button> */}
       

       <input type="file" name="file" onChange={change}></input>
       <button onClick={saveimg}>upload</button>
    </div>
  )
}

