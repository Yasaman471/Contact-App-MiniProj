const ContactsList = ({Contacts}) =>{
    console.log(Contacts);
    
    return(
        <div>
          <h3>Contacts List</h3>
          <ul>
            {Contacts.map((contact)=>(
                <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
    );
}

export default ContactsList