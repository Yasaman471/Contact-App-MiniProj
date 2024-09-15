import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css"

const ContactsList = ({Contacts,deleteHandler}) =>{
    
    return(
        <div className={styles.container}>
          <h3>Contacts List</h3>
         {
          Contacts.length ? (
            <ul className={styles.contacts}>
            {Contacts.map((contact)=>(
              <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
              />
            ))}
          </ul>
          ) : <p  className={styles.message}>No Contacts Yet!</p>
         }
        </div>
    );
}

export default ContactsList