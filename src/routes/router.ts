
import express from 'express';
const app = express();

import { router } from 'exp_swagger';
import * as route_def from '../route_def/index';
const { admin_def } = route_def;


const all_routes = [

      // admin
      router.use(app, '/Admin').post(admin_def.login.path, admin_def.login.options)

]


export default all_routes