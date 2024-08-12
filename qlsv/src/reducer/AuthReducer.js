const initialState = { 
    // khởi tạo mặc định
    isLogin: false,
    access_token: null,
    loggedUser: null
 }
// state lưu 3 thông tin {isLogin, access_token, loggedUser}
// isLogin để biết rằng login vào hệ thống hay chưa
// access_token để lấy data (student, sbject, register)
// loggedUser để hiển thị thông tin người dùng đăng nhập trên web
// current state + action => new state

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN_SUCCESS':
            {
                const new_state = {
                    isLogin: true,
                    access_token: action.payload.access_token,
                    loggedUser: action.payload.loggedUser
                };
                return new_state;
            }

        case 'LOGOUT':
            {
                const new_state = {
                    isLogin: false,
                    access_token: null,
                    loggedUser: null
                };
                return new_state;
            }


        default:
            return state; // mặc định là state
    }
}

export default AuthReducer;