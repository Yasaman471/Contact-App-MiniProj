import { useState } from "react"
import styles from "./Contact.module.css"

function Contact() {

    const [Contact,setContact] = useState({
        name:"",
        lastName:"",
        email:"",
        phone:""
    })

    const changeHandler = (event) =>{
        const name = event.target.name
    const value = event.target.value 

        setContact((Contact) =>({...Contact,[name]:value}))
    }

    const loginHandler = () =>{
        console.log(Contact);
    }

  return (
    <div>
      <div>
        <input
         type="text"
         placeholder="Name"
         name="name" 
         value={Contact.name}
         onChange={changeHandler}/>
         
        <input type="text" value={Contact.lastName} name="lastName" placeholder="Last Name" onChange={changeHandler}/>
        <input type="email" value={Contact.email} name="email" placeholder="Email" onChange={changeHandler}/>
        <input type="number" value={Contact.phone} name="phone" placeholder="PHone" onChange={changeHandler}/>
        <button onClick={loginHandler}>Add Contact</button>
      </div>
    </div>
  )
}

export default Contact
