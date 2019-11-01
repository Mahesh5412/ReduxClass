 // LogIn(){

  //   return dispatch => {

  //     fetch('http://115.98.3.215:90/ptmsreact/reactlogin.php', {

  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username:this.state.username,
  //         password:this.state.password,
  //         crop:this.state.cropcode,
  //         utype:this.state.usertype,
  //       })
  //     }).then((response) => response.json())
  //           .then((responseJson) => {

  //             dispatch(LoginAction(responseJson))
  //             console.log("hiiii"+responseJson.status);
  //             console.log("hiiii"+JSON.stringify(responseJson));
      
  //           }).catch((error) => {
  //             console.error(error);
  //             Alert.alert("Something is Wrong with server"); 
  //           });

  //   }

  // }