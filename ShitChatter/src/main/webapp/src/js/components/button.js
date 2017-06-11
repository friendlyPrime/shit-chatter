const Button = {
  button: '<button id="loginBuytton"> login </button>',
  attachEl: () =>{
      document.getElementById('loginBuytton').addEventListener('click', () =>
      {
          console.log("logging in");
      })
  }
};

export default Button;
