
import simplify_route from './simplify_def';
import { admin_def } from './index';


const router : any =  [

      // admin
      simplify_route(admin_def.base_options, admin_def.login),
      
]
      

export default router