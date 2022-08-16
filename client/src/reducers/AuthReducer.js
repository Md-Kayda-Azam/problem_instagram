

// create a reDucers
const AuthReducer = ( state, { type, payload}) =>  {

    switch (type) {
        case 'LOGIN_USER_success':
        
            return {
                isUserloggedIn : true,
                user : payload,
            }

        case 'USER_LOGOUT':
            return {
                isUserloggedIn : false,
                user : { },
            }

    
        default:
            return state;
    }
    
}

// export Default
export default AuthReducer;