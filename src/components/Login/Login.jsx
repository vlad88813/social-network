import React from 'react';
import { Formik,Form, Field, ErrorMessage  } from 'formik';


const Login = (props) => {
    
    return (
        <Formik
        // onSubmit={onSubmit}
        // validate={formValidate}
        initialValues={{
            login:'',
            password:'',
            rememberMe: false,

        }}
        onSubmit={() => {

            setTimeout(() => {
   
              alert('hi-hi');
   
            }, 1000);
        }}
        >
            {({}) => (
        <Form onSubmit={props.handleSubmit}>
            {/* onSubmit={props.handleSubmit} ОТПРАВЛЯЕТ ДАННЫЕ С ФОРМЫ В URL */}
            <div>
                <Field placeholder='login' name='login' component='input'/>
            </div>
            <div>
                <Field  placeholder='Password' name='password' component='input'/>
            </div>
            <div>
                <Field  component='input' name='rememberMe' type='checkbox'/> remember me
            </div>
            <div>
                <button type='submit' > login </button> 
            </div>
        </Form>
            )}
        </Formik>
    )
}

// const reactFinalForm = ({ form, ...config }) => component => props => (
//     <Form {...config} {...props} component={component} />
//   )

// const LoginFinalForm = reactFinalForm({
//     form: 'Login'
//   })(Login)

//hoc выше



const LoginForm = (props) => {

    return <div>
        <h1>Login</h1>
        <Login/>
    </div>
}

export default LoginForm;