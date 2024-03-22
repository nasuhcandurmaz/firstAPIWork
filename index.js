import express, { response } from "express";
import axios from "axios";



const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    axios.get('https://v2.jokeapi.dev/joke/Any')
        .then(response => {
            const joke = response.data;
            res.render('index', { joke });
            
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            res.status(500).send('Error fetching joke');
        });
});




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});