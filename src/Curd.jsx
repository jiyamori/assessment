import React, { useState } from 'react';
import "./Curd.css"

const Curd = () => {
    const [name ,setName] = useState("")
    const [alldata ,setAlldata] = useState([])
    const [show, setShow] = useState(false)
    const [editindex, setEditindex] = useState(false)

    const handleadddata = () =>{
    if(name.length!== 0){
        setAlldata(newdata => [...newdata , name])
        setName('')
    }
    }
    const handledelete = (index) => {
        alldata.splice(index, 1)
        setAlldata([...alldata])
    }
    const handleEdit = (i) => {
        setName(alldata[i])
        setShow(true)
        setEditindex(i)
    }
    const handleupdate = () => {
        alldata.splice(editindex, 1, name)
        setAlldata([...alldata])
        setShow(false)
        setName("")
    }
    return ( 
        <>
          <h1>Curd</h1>
          <div className='inputfield'>
            <input type="text"  value={name} onChange={(e) => setName(e.target.value)}/>
          { !show ? <button onClick={handleadddata}>Add-data</button> :
            <button onClick={handleupdate}>update</button>}
          </div>
          {
            alldata.map((val, i)=>
             <div className='btn-field'>
                <h1>{val}</h1>
                <button className='btn' onClick={() => handleEdit(i)}>Edit</button>
                <button className='btn' onClick={() => handledelete(i)}>delete</button>
             </div>
            )
          }
        </>
     );
}
 
export default Curd;
