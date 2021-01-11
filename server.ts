
import express from 'express';
import { config } from 'dotenv';
config();
import { convert } from 'joi-route-to-swagger';
convert();
import swagger_ui from 'swagger-ui-express';
import { swagger_options } from './src/config/index';
import { basic_auth } from './src/config/index';
import * as routes from './src/routes/index';
import route_defination from './src/route_def/main_def';
import connect_to_db from './src/config/db';
import bootstrap_data from './src/config/bootstrap';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const port = process.env.SERVER_PORT_DEV;

app.use(cors({ origin : "*" }))
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', (req, res) => { res.send('Hello World!') })
app.use("/Admin", routes.admin_routes)
app.use("/User", routes.user_routes)

// make swagger documentation
const swagger_docs = convert(route_defination)
app.use('/docs', swagger_ui.serve, swagger_ui.setup(swagger_docs, swagger_options));

app.listen(port, () => { 
  console.log(`App listening at http://localhost:${port}`) 
})

connect_to_db();
bootstrap_data();

