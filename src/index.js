 import app from './app.js';
 import {conecctDB} from './db.js';

 conecctDB()

 app.listen(3000)
 console.log('Server corriendo',3000);