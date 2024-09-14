

function ContactItem({data:{id,name,lastName,email,phone}}) {
  return (
    <div>
                <li key={id}>
                  <p>
                    {name} {lastName}
                  </p>
                  <p>
                    <span>📪</span> {email}
                  </p>
                  <p>
                    <span>📞</span> {phone}
                  </p>
                  <button>🗑</button>
                </li>
    </div>
  )
}

export default ContactItem
