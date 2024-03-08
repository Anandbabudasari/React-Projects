import React,{useState} from "react";

function Todolist(){

    const [tasks,settasks] = useState(["Eat","sleep","Repeat"])
    const [newtask , setNewtasks]= useState("")
    
    function inputhandler(event){
        setNewtasks(event.target.value)

    }

    function addtask(){
        if(newtask.trim() !== ""){
            settasks(t => [...t,newtask])
            setNewtasks("");

        }

    }

    function deletetask(index){

        const updatedTasks = tasks.filter((_,i) => i !== index);

        settasks(updatedTasks)

    }

    function movetaskup(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            settasks(updatedTasks);
        }
    }
    

    function movetaskdown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            settasks(updatedTasks);
        }
    }
    return( 
        <div className="to-do-list">
            <h1>To-do-list</h1>
            <div >
                <input type="text" placeholder="Enter task here..." value= {newtask} onChange={inputhandler}/>
                <button className="add-button" onClick={addtask}>Add</button>
            </div>

            <ol>
                {tasks.map((task,index) =>
                
                <li key={index}>
                    <span className="text">{task} </span> 
                    <button className="delete-button" onClick={ () => deletetask(index)}>Delete</button> 
                    <button className="move-button" onClick={ () => movetaskup(index)}>move up</button> 
                    <button className="move-button" onClick={ () => movetaskdown(index)}>move down</button>                  
                </li>
                
                )}
            </ol>   

        </div>
    );









                

}



export default Todolist ;
