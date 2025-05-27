import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";
import { useState } from "react";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();
    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === normalizedName
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className={styles.input}
        type="tel"
        value={number}
        placeholder="Phone"
        pattern="[\d\-]+"
        onChange={(e) => {
          const onlyDigits = e.target.value.replace(/[^\d\-]/g, "");
          setNumber(onlyDigits);
        }}
        required
      />
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
}
