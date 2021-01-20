
import { admin_validator, headers } from '../validator/index';
import { admin_controller } from '../controller/index';


const login = {
      method : 'post',
      path : '/login',
      options : {
            summary : 'Admin Login API',
            description : 'Admin Login API',
            tags: ['Admin'],
            output : {},
            input : { formData : admin_validator.login },
            handler : admin_controller.login
      }
}


export {
      login
}

