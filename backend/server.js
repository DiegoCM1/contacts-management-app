const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Allows all origins
app.use(express.json()); // Parses JSON bodies

let contacts = [
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


// GET Retrieves all contacts. Filters by name
app.get('/api/contacts', (req, res) => {
  res.send('GET request to homepage')
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