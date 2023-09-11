// import { nanoid } from 'nanoid';
// class App extends React.Component {
//   state = {
//     contacts: [],
//     name: '',
//   };

//   handleNameChange = event => {
//     this.setState({ name: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();

//     const newContact = {
//       id: nanoid(),
//       name: this.state.name,
//     };

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//       name: '',
//     }));
//   };

//   render() {
//     // Відображення списку контактів
//     const contactList = this.state.contacts.map(contact => (
//       <li key={contact.id}>{contact.name}</li>
//     ));

//     return (
//       <div>
//         <form onSubmit={this.handleFormSubmit}>
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleNameChange}
//           />
//           <button type="submit">Add Contact</button>
//         </form>

//         <ul>{contactList}</ul>
//       </div>
//     );
//   }
// }
// export default App;
