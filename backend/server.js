const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Allows all origins
app.use(express.json()); // Parses JSON bodies

const contacts = [
    {
        id: 1,
        name: "Diego Colin",
        email: "luiscolin764@domu.ai",
        phone: "7151459328",
        createdAt: "Today" 
    },
    {
        id: 2,
        name: "Camila Zancanella",
        email: "",
        phone: "7151459328",
        createdAt: "Date" 
    },
    {
        id: 3,
        name: "Sam Altman",
        email: "",
        phone: "7151459328",
        createdAt: "Date" 
    },
    {
        id: 4,
        name: "Elon Musk",
        email: "",
        phone: "7151459328",
        createdAt: "Date" 
    },
]


app.get('/api/health', (req, res) => res.json({ ok: true })); // Health


// GET Retrieves all contacts.
app.get('/api/contacts', (req, res) => {
    res.json(contacts);
})

// GET Retrieves contacts based on name.
app.get('/api/contacts/:name', (req, res) => {
    const name = req.params.name // Define const of the filter we wanna apply.
    const contact = contacts.find(c => c.name === name); // Seaches trought contacts to find the param name

    if(!contact) return res.status(404).json({ error: "Not Found" });
    res.json(contact);
})

// POST Creates new contact, validates required fields
app.post('/api/contacts/:id', (req, res) => {
  res.send('POST request to homepage')
})

// PUT Updates a contact
app.put('/', (req, res) => {
  res.send('PUT request to homepage')
})

// DELTE delete by ID
app.delete('/api/contacts/:id', (req, res) => {
  res.send('DELETE request to homepage')
})


app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`)); //Port where everything is being listened