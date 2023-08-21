const axios = require('axios');

class RequestManager{

     async sendRequest(requestEntity){
        let response = undefined;
        try{
            response = await axios.request(requestEntity);
            return this. returnResponse(response);
        }
        catch(error) {
            response = error.response;
            return this. returnResponse(response);
        }
    }

     returnResponse(response){
        return {
            status: response.status,
            data: response.data
        };
    }
}
module.exports = new RequestManager();