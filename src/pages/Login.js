import { useRef } from "react";
import { redirect } from "react-router-dom";

const LoginPage = () => {
    const emailInput = useRef('');
    const passwordInput = useRef('');
    let loginEmail = 'abcd@123';
    let loginPassword = 'abcd123';

    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredEmail = emailInput.current.value;
        const enteredPassword = passwordInput.current.value;

        console.log(enteredEmail, enteredPassword);
        
        if (enteredEmail === loginEmail && enteredPassword === loginPassword) {
            sessionStorage.setItem('login', '1');
            return redirect('/');
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email</label>
                <input type='email' id='email' name='email' ref={emailInput} required />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type='password' id='password' name='password' ref={passwordInput} required />
            </div>
            <button>Enter</button>
        </form>
    );
};


export default LoginPage;