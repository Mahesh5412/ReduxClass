
import LoginAction from '../Actions/LoginAction';


 export default function login(username,password,cropcode,usertype){
 // console.log("6");

  return dispatch => {

  //  console.log("7");

    return fetch('http://115.98.3.215:90/sramreact/userlogin.php',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        username:username,
        password:password,
        crop:cropcode,
        utype:usertype,
      })
    })
    .then((response) => {
      if(response.status < 300){
        response.json().then((responseJSON) => {
        //  console.log("18");
          console.log("responseJSON",responseJSON);
          dispatch(LoginAction(responseJSON))
        })
      }
      else{
      //  console.log("118");
        response.json().then((responseJSON) => {
          console.log("responseJSON",responseJSON);
        })
      }
    })
    .catch((error) => {
    //  console.log("8");
      console.log("error",error);
    })
  }

}


