import ContactItem from "./ContactItem";

const ContactsList = ({Contacts}) =>{
    
    return(
        <div>
          <h3>Contacts List</h3>
         {
          Contacts.length ? (
            <ul>
            {Contacts.map((contact)=>(
              <ContactItem key={contact.id} data={contact} />
            ))}
          </ul>
          ) : <p>No Contacts Yet!</p>
         }
        </div>
    );
}

export default ContactsList