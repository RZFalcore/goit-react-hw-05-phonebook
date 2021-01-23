export default function ifNameExists(contacts, newContact) {
  const names = contacts.map((contact) => contact.name);
  if (names.includes(newContact.name)) {
    return true;
  } else {
    return false;
  }
}
