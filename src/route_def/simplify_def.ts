

const swagger_info = {
      info : {
            title : 'Base Api Documentation With Express Ts',
            version : '1.0.0',
            description : 'Api Docs',
      }
}


const simplify_route_defination = (base_options : any, route_options : any) => {

      let route = {
            basePath : base_options.basePath,
            info : swagger_info.info,
            description : base_options.description,
            components: {},
            routes : [{
                method : route_options.method,
                path : route_options.path,
                summary : route_options.summary,
                description : route_options.description,
                contentType : route_options.contentType,
                validators : route_options.validators
            }]
      }

      return route

}


export default simplify_route_defination