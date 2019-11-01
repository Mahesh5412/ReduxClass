

const initialState={
  

    login:[],
    
       
   }


const Rootreducer=(state=initialState,action)=>{
    console.log("10");

    switch (action.type){
        
   
        case "LOGIN":
     
           state.login = action.payload
    
            return state
          
            
        default:
            return state
    }
    }
    
    export default Rootreducer