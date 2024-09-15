import { useState } from "react"
import { v4 } from "uuid"

import ContactsList from "./ContactsList"

import styles from "./Contact.module.css"

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

    const deleteHandler = id => {
      const newContacts = Contacts.filter((contact)=>(contact.id !== id))
      setContacts(newContacts)
    }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
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
      <div className={styles.alert}>{Alert && <p>{Alert}</p>}</div>
      <ContactsList Contacts={Contacts} deleteHandler={deleteHandler} />
   </div>
  )
}

export default Contact
