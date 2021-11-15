import urlWebServices from '../controller/webServices.js';

export const login= async function(login)
{
    //url webservices
    let url = urlWebServices.login;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', login.email);
    formData.append('password', login.password);
    //console.log("dato",formData);
    console.log("url",url);
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                //'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
               // 'Origin':'https://registro-pediatrico.herokuapp.com/',
                 'Access-control-Allow-Origin': true,
                 'Accept': 'application/form-data',
              //  'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            if(rdo === 200)
            {
                //guardo token
                localStorage.setItem("dni",data.dni);
                //guardo usuario logueado
                //let user = data.loginUser.user;
                
                localStorage.setItem("nombre",data.firstName);
                localStorage.setItem("email",data.email);
            
                return (data);//correcto
                
            }
            else
                {
                    return (data); 
                }
            
    }
    catch(error)
    {
        console.log("error",error);
    };
}