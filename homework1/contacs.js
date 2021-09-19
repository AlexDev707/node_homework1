const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve(__dirname, 'db/contacts.json');


function listContacts() {
    fs.readFile(contactsPath).then((res) => {
        console.log(JSON.parse(res))
       })  
    }

function getContactById(contactId) {
    fs.readFile(contactsPath).then((res) => {
        const contacts = JSON.parse(res);
        const contactById = contacts.find((contact) => contact.id === contactId);
        console.log(contactById);
    })
}

function removeContact(contactId) {
    fs.readFile(contactsPath).then((res) => {
        const contacts = JSON.parse(res);
        const removeContacts = contacts.filter((contact) => contact.id !== contactId);
        fs.writeFile(contactsPath, JSON.stringify(removeContacts));
    })
}

function addContact(name, email, phone) {
    fs.readFile(contactsPath).then((res) => {
        const contacts = JSON.parse(res);
        contacts.push({id: contacts.length + 1, name, email, phone,});
        fs.writeFile(contactsPath, JSON.stringify(contacts))
    })
}

module.exports = { 
    listContacts,
    getContactById,
    removeContact,
    addContact 
};