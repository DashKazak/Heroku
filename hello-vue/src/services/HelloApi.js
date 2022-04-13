import axios from 'axios'

let base = 'api'


// provide a function with the name getHelloMessage
export default {
    getHelloMessage(){ //TODO: make the getHelloMessage available to the rest of the app
        // axios call
        return axios.get(base).then(response=>{
            return response.data
        })
    }
}

// this will talk to the express server