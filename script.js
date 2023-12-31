/*const form = document.querySelector("submit")

    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        const input = document.querySelector("input")
        const timestamp = new Date().getTime()

        const produto = {
            name:input.value,
            valor:50,
            id:timestamp
        }
        console.log(produto)
    })

    function validateLogin() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
    
        if (email === 'user' && password === 'pass') {
            alert('Login bem-sucedido!');
        } else {
            alert('Nome de usuário ou senha inválidos. Por favor, tente novamente.');
        }
    }
*/

    import {toastify} from "./toastify.js"
    const myHeaders = {
        "Content-Type": "application/json", 
      };
    
    async function login(){
        const inputEmail = document.querySelector("#input-email")
        const inputPassword = document.querySelector("#input-password")
        const user = {
            email: inputEmail.value,
            password: inputPassword.value
        }
        console.log(user)
        const bodyJson = JSON.stringify(user)
        const btnLogin = document.querySelector("button")
        btnLogin.innerText= ""
        btnLogin.insertAdjacentHTML("afterbegin",`
        <img class="img-rotate" src="./loader-2-fill.png" alt="">
        `)
      
            
                const res = await fetch(
                    "http://localhost:3001/login",
                { 
                    
                    headers:myHeaders, 
                    method:"POST",
                    body:bodyJson
                }
                    )
                    if(res.status == 200){
                        const resJson = await res.json()
                        toastify("Ok, login efetuado com sucesso!","ok")
                        console.log(resJson)
                        localStorage.setItem("@token-exemplo",resJson.accessToken)
                        localStorage.setItem("@user-exemplo",JSON.stringify(resJson.user))
                        setTimeout(()=>{
                            window.location.href = "./home"
                        },3000)
                    }else{
                         toastify("Email ou senha incorretos","error")
                    }
                console.log(res)
                btnLogin.innerHTML = ""
            btnLogin.innerText= "Logar"
            
            // if(resJson.accessToken){
        
            // }
            // window.location.replace("./cadastro")
        
        
    }
    
    const form = document.querySelector("form")
    form.addEventListener("submit",(event)=>{
        event.preventDefault()
        login()
    })