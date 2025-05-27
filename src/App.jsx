import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  );
}
