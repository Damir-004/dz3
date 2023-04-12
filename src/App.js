import React, {useState, useEffect} from 'react';
import './App.css';

let arr = [
    {
        id:1,
        status: "In process"
    },
    {
        id:2,
        status: "In process"
    },
    {
        id:3,
        status: "In process"
    }
]
const App = ()=>{
    const [items, setItems] = useState(arr)
    const [count, setCount] = useState(0)
    function checkItem(){
        const result = items.map((item)=>{
            if(item.id === count){
                return{
                    ...item,
                    status: "Delivered"
                }
            }
            return item
        })
        setItems(result)
    }
    useEffect(()=>{
        checkItem()
    }, [count])

    return(
        <div className='block'>
            <ul>
                {items.map((item)=><li key={item.id}>{item.status}</li>)}
            </ul>
            <button onClick={()=>setCount(count+1)}>Check</button>
        </div>
    )
}
export default App;