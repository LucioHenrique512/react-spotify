const INIT_STATE = {
    accessToken:"",
    erroMessage:"",
    expirationTime:"",
    expiresIn:"",
    isLogged:false,
    tokenType:""
}

const auth = (state=INIT_STATE,action)=>{
    return state;
}

export default auth;