const sortContacts = (contacts, asc = true) => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    return contacts.sort((a, b) => {
        if (asc) {
            return a.name.localeCompare(b.name);
        } else {
            return b.name.localeCompare(a.name);
        }
    });
};
