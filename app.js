// Here I import Express
const express = require ('express');
const app = express();
const dotenv = require('dotenv')

dotenv.config();

//Here I Import cors
const cors = require('cors');


// Here I handle CORS by using it as a middleware
app.use(cors());

app.get('/', (req,res)=>{
    res.json({
        email: "chibuezemicahe@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/chibuezemicahe/Api-to-retrieve-Basic-information"
      });
})

if (process.env.NODE_ENV === 'development') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Local server running on http://localhost:${PORT}`));
  }