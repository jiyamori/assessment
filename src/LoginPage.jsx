import React, { useState } from "react";
import * as Components from './Components';

function App() {
    const [signIn, toggle] = React.useState(true)
    const [RightOverlayPanel, setRightOverlayPanel] = useState (false)
    const [state, setState]= useState ({formData: ""})
    const SetRightOverlayPanel =()=>{
        SetRightOverlayPanel(true)
    }

    const SetLeftOverlayPanel =() =>{
        SetLeftOverlayPanel (false)
    }

    //first used //
    // let saveformdata =()=>{
    //     console.log("called",state); 
    // }
    let setloginformdata =(event)=>{
            console.log("called form data for login",state); 
            // (event)=>{setState((form)=>({formData:{  ...form.
                // formData,[event.target.name]:event.target.value }} )) } //after login set//
                setState((form)=>({formData:{  ...form.
                    formData,[event.target.name]:event.target.value }} )) 
        }

        let login=()=>{
            console.log("called login",state); 
            
        }


    let saveformdata = (event) => {
        event.preventDefault()
        console.log("called",state); //both way is correct// 
        // if we dont want event.prevent data then we can use input type button in onsubmit//
    }
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' onChange={(event)=>{setState((form)=>({formData:{  ...form.
                        formData,[event.target.name]:event.target.value }} )) }} name=' user name' placeholder="User Name"  /> 
                        {/* // 'this' type data we got in event// //callback enonimous nu data in form// 
                        //state data goes in form//  //if we dont use rest then we set new data that will be overwrite// */}
                        {/* {JSON.stringify(state)} */}
                     <Components.Input type='email'  onChange={(event)=>{setState((form)=>({formData:{...form.
                        formData,[event.target.name]:event.target.value }} )) }} name = 'email'  placeholder= "Email" />

                         {/* <Components.Input type='email'  onChange={setloginformdata} name = 'email'  placeholder= "Email" /> */}


                     <Components.Input type='password' onChange={(event)=>{setState((form)=>({formData:{...form.
                        formData,[event.target.name]:event.target.value }} )) }}  name = 'password' placeholder="Password"/>
                     <Components.Button onClick={saveformdata}>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  {/* <Components.Form onSubmit={saveformdata}> */} 
                  <Components.Form >
                    
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' onChange={setloginformdata}   name ='email' placeholder="Email" />
                      <Components.Input type='password' onChange={setloginformdata}  name = 'password' placeholder="Password" />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button type="button" onClick={login}>Sign In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default App;