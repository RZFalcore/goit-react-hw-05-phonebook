export default function contactsFilter(contacts, filterQuery) {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterQuery.toLowerCase())
  );
}
