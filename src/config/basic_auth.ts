
import basicAuth from 'express-basic-auth';

const auth_options = {
      users : { 'abhishek' : 'qwerty' },
      challenge: true
}
const basic_auth = basicAuth(auth_options)

export default basic_auth