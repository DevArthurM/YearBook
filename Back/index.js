import openDatabase from './DataBaseController/databaseconfig.js'
import express, { request } from 'express'
import { insertUser , updateUser, getUser} from './Controler/user.js'
const app = express();
app.use(express.json());
openDatabase()



//-----------------------------------------------



app.get('/', (request, response) => {
    console.log('Person did enter')
    response.send('<h1>HELLO</h1>');
})

app.get('/getUser', async function (request, response){
    let users = await getUser()
    console.log("Get users")
    response.json(users);
})

app.post('/updateUser', (request, response) => {
    console.log("Update user by : "+request.body);
    updateUser(request.body)
    response.json({
        "statusCode": 200
    })
})

app.post('/insertUser', (request, response) => {
    console.log("Insert user by : "+request.body);
    insertUser(request.body)
    response.json({
        "statusCode": 200
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
