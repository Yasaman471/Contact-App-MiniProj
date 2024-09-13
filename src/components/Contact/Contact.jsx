import { useState } from "react"
import { v4 } from "uuid"

import styles from "./Contact.module.css"
import ContactsList from "./ContactsList"


const inputs = [
  {type:"text",placeholder:"Name",name:"name"},
  {type:"text",placeholder:"Last Name",name:"lastName"},
  {type:"email",placeholder:"Email",name:"email"},
  {type:"number",placeholder:"Phone",name:"phone"},
]

function Contact() {

    const [Contacts,setContacts] = useState([])
    const [Alert,setAlert] = useState("")
    const [Contact,setContact] = useState({
        id:"",
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
      if(
        !Contact.name ||
        !Contact.lastName ||
        !Contact.email ||
        !Contact.phone 
      ){
        setAlert("Please Enter Valid Data!")
        return;
      }
      setAlert("")
      const newContact = {...Contact,id: v4()}
      setContacts((Contacts)=> [...Contacts,newContact])
      setContact({
        name:"",
        lastName:"",
        email:"",
        phone:""
    })
    }

  return (
    <div>
      <div>
        {
          inputs.map((input,index) => (
         <input
         key={index}
         type={input.type}
         placeholder={input.placeholder}
         name={input.name}
         value={Contact[input.name]}
         onChange={changeHandler}
         />
        ))}
      <button onClick={loginHandler}>Add Contact</button>
      </div>
      <ContactsList Contacts={Contacts} />
      <div>{Alert && <p>{Alert}</p>}</div>
   </div>
  )
}

export default Contact
