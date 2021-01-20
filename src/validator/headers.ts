
import Joi from '@hapi/joi';

const headers = Joi.object({ authorization : Joi.string().required() }).options({ allowUnknown: true })


export {
      headers
}