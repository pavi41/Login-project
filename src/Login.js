import React from 'react'

const Login = (props) => {

    const {email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props
    return (
        <section className= 'container'>
         <div className= 'form'>
               <form>
             <div className= 'inputBox'>
            <label>Username</label>
            <input type= 'text' autoFocus required value= {email} onChange= {e => setEmail(e.target.value)} />
            <p className= 'errorMsg'> {emailError} </p>
            </div>
             
            <div className= 'inputBox'>
            <label>Password</label>
            <input type= 'password' required value= {password} onChange= {e => setPassword(e.target.value)} />
            <p className= 'errorMsg'> {passwordError} </p>
            </div>

            <div className= 'inputBox'>
                {hasAccount ? (
                     <>
                        <button onClick= {handleLogin}>Sign in</button>
                        <p>Don't have an account ? <span onClick= {() => setHasAccount(!hasAccount)}>Sign up</span></p>
                     </>
                   ) : (
                    <>
                        <button onClick= {handleSignup}>Sign up</button>
                        <p>Have an account ? <span onClick= {() => setHasAccount(!hasAccount)}>Sign in</span></p>
                     </>
                ) }
            </div>
            </form>


         </div>
            
        </section>
    )
}

export default Login
