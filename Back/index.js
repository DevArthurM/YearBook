import openDatabase from './DataBaseController/databaseconfig.js'
import express, { application, request } from 'express'
import CORS from 'cors'
import { insertUser, updateUser, getUser, deleteUser } from './Controler/user.js'

openDatabase()
const app = express();
app.use(CORS());
app.use(express.json());
const PORT = 3000;

//-----------------------------------------------

app.get('/', (request, response) => {
    console.log('Person did enter')
    response.send('<h1>HELLO</h1>');
})

app.get('/getUser', async function (_, response) {
    console.log("Get user")
    let users = await getUser();
    response.json(users);
})

app.post('/updateUser', (request, response) => {
    updateUser(request.body)
})

app.post('/insertUser', async (request, response) => {
    console.log('Insert user : ' + request.body.name)
    let users = await insertUser(request.body)
    console.log(users)
    response.json(users);
})

app.delete('/deleteUser', async function (request, response) {
    console.log("Request send to delete : " + request.body.id)
    deleteUser(request.body.id)
    response.send({ "status": "success" });
})

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
})
