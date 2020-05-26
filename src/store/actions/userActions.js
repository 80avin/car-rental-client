export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS"
export const SIGNOUT = 'SIGNOUT';
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export const signinRequest = (phone, password) => dispatch => {
  fetch('/api/v1/user/signin', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone, password
    })
  }).then(res => res.json())
    .then(res => {
      if (res.done) dispatch(signin(res.user, res.token));
      else throw new Error("")
    }).catch(error => {
      console.error(error)
    })
}

export const signin = (user, token) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
  return {
    type: SIGNIN_SUCCESS,
    payload: { user, token }
  }
}

export const signout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  return {
    type: signout
  }
}
