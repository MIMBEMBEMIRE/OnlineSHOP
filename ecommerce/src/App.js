import AddUser from "./Components/UI/Users/AddUer";

import UseList from  "./Components/UI/Users/UseList"

import {useState} from "react";
function App (){
const [userList,setUserList]=useState([]);

function onAddUserHander(useName,uAge){
  setUserList((prevUserList) =>{
    return [...prevUserList,{name:useName,age:uAge,id:Math.random().toString()}];
  })

}


  return <div>
    <AddUser onAddUser={onAddUserHander} />
    <UseList users={userList} />
    </div>

}
export default App;