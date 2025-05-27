import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import { selectLoading, selectError } from "./redux/contactsSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";
import styles from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Contacts</h1>
        <ContactForm />
        <Filter />
        {loading && <p className={styles.loading}>Loading...</p>}
        {error && <p className={styles.error}>Error: {error}</p>}
        <ContactList />
      </div>
    </div>
  );
}
