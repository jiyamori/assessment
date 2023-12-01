import React, { useState } from 'react';
import Curd from './Curd';

const TodoList = () => {

    // set hooks - useState
    const [newitems , setnewItems] = useState("")
    const [items , setItems] = useState([])

    // helper fuction 
    function additems(){
        if(!newitems){
            alert("enter a item")
        }
        const item = {
            value : newitems
        }
        setItems (oldlist => [...oldlist , item])
        setnewItems('');
        console.log(items);
    }

    return (<>
        {/* 1. header section */}
        <h1>Todo list</h1>

        {/* 2. input section  */}

        <input type="text"
            placeholder='Enter a list item'
            value={newitems}
            onChange={e => setnewItems(e.target.value)}
        />

        {/* 3. button section  */}
        <button onClick={() => additems()}>Add item</button>

        {/* 4. list that show */}

        <br />
        <ul>
            {items.map(item => {
                return(
                    <li>{item.value}</li>
                )
            })}
        </ul>

    </>
    );
}


export default TodoList;