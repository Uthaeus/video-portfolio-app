import { useRef } from "react";

const LoginPage = () => {
    const emailInput = useRef('');
    const passwordInput = useRef('');
    let loginEmail = 'abcd123';
    let loginPassword = 'abcd123';

    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredEmail = emailInput.current;
        const enteredPassword = passwordInput.current;
        
        if (enteredEmail === loginEmail && enteredPassword === loginPassword) {
            sessionStorage.setItem('login', '1');
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