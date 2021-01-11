
import { admin_validator } from '../validator/index';

const base_options = {
      basePath : '/Admin',
      description : 'Admin APIs',
}

const login = {
      method : 'post',
      path : '/login',
      summary : 'Admin Login API',
      description : '',
      contentType : 'application/x-www-form-urlencoded',
      validators : {
            body : admin_validator.login
      }
}

export {
      base_options,
      login
}