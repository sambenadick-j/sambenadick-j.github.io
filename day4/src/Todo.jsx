import React from "react";
import { useRef, useState } from "react";

function Todo(){
    const[data, setData] = useState([]);
    const refer = useRef();
    function handleClick(){
        console.log(refer.current.value);
        setData([...data, {task:refer.current.value}])
        refer.current.value=""
    }
    return(
        <div>
            <h1>Todo Application</h1>

            <input ref={refer} type="text" name="hello" id=""/> <br />

            <button onClick={handleClick}>save</button>
            {data.map(i=> <li>{i.task} </li> )}
            

        </div>
    )
}
export default Todo