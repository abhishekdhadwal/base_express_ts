
import express from 'express';
import { config } from 'dotenv';
config();
import swagger_ui from 'swagger-ui-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router } from 'no-hassle';
import { swagger_options, basic_auth, connect_to_db } from './src/config/index';
import * as routes from './src/routes/index';
import bootstrap_data from './src/config/bootstrap';
import { all_routes } from './src/routes/index';


const app = express();
const port = process.env.SERVER_PORT_DEV;

app.use(cors({ origin : "*" }))
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', (req, res) => { res.send('Hello World!') })

const { admin_routes } = routes
app.use("/Admin", admin_routes)


// make swagger documentation
router.use(all_routes)
const swagger_ui_options = { customSiteTitle : 'Base Express Ts' }
app.use('/docs', swagger_ui.serve, swagger_ui.setup(swagger_options, swagger_ui_options));

app.listen(port, () => { 
  console.log(`App listening at http://localhost:${port}`) 
})

connect_to_db();
bootstrap_data();

