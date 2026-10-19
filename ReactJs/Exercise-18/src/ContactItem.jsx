const ContactItem = ({ contact, dispatch, setEditingContact }) => {

    const { id, name, email, phone, favorite } = contact;
  
    return (
      <li style={{ marginBottom: '10px' }}>
        <strong>{name}</strong> {favorite && '★'}
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <button onClick={() => dispatch({ type: 'toggleFavorite', payload: id })}>
          {favorite ? 'Unfavrite' : 'Favorite'}
        </button>
        <button onClick={() => setEditingContact(contact)}>Edit</button>

        <button onClick={() => dispatch({ type: 'Dlate', payload: id })}>
          Delete
        </button>
      </li>
    );
  };
  
  export default ContactItem;