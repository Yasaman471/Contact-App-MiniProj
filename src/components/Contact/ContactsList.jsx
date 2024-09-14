import ContactItem from "./ContactItem";

const ContactsList = ({Contacts,deleteHandler}) =>{
    
    return(
        <div>
          <h3>Contacts List</h3>
         {
          Contacts.length ? (
            <ul>
            {Contacts.map((contact)=>(
              <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
              />
            ))}
          </ul>
          ) : <p>No Contacts Yet!</p>
         }
        </div>
    );
}

export default ContactsList