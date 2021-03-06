
import * as express from 'express';
import * as DAO from '../DAO';
import * as Models from '../models';
import { error } from '../config/index';
import { common_controller } from './index';
import * as app_constansts from '../config/app_constant';
import { send } from 'process';
const admin_scope = app_constansts.scope.admin;


const login = async (req : express.Request, res : express.Response) => {
      try {

            let payloadData = req.body;
            
            let query = { email : payloadData.email }
            let projection = { __v : 0 }
            let options = { lean : true }
            let fetch_data : any = await DAO.get_data(Models.Admin, query, projection, options)
            
            if(fetch_data.length) {

                  let password_1 = fetch_data[0].password
                  let password_2 = payloadData.password

                  if(password_1 != password_2) { throw error.invalid_password }
                  else {
                        // generate token 
                        let token_data = { 
                              _id : fetch_data[0]._id,
                              scope : admin_scope,
                              collection : Models.Admin,
                              token_gen_at : +new Date()
                        }
                        let response = await common_controller.fetch_token(token_data)

                        if(response) { common_controller.handle_success(res, response) }
                        else { common_controller.handle_failure(res, error.something_went_wrong) }

                  }

            }else {
                  throw error.no_data_found
            }
            
      }
      catch(err) {
            common_controller.handle_catch(req, res, err);
      }
}


export {
      login
}