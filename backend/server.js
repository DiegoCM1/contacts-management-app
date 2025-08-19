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

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`)); //Port where everything is being listened