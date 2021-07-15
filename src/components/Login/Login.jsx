import React from 'react';
import { Formik,Form, Field, ErrorMessage  } from 'formik';
import * as yup from 'yup';


const Login = (props) => {

    let schema = yup.object().shape({
        login:yup.string().required('Обязательно').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Ведите ваш e-mail').min(5, 'Должно быть минимум 5 символов').max(15, 'Максимум 15 символов'),
        password:yup.string().required('Обязательно').matches(/^[0-9]+$/, "Должно быть числом").min(5, 'Должно быть минимум 5 символов').max(15, 'Максимум 15 символов'),
        confirmPassword:yup.string().oneOf([yup.ref('password')],'Пароли должны совпадать!').required('Обязательно').matches(/^[0-9]+$/, "Должно быть числом").min(5, 'Должно быть минимум 5 символов').max(15, 'Максимум 15 символов'),
    })

    
    return (
        <Formik
        // onSubmit={onSubmit}
        // validate={formValidate}
        initialValues={{
            login:'',
            password:'',
            confirmPassword:'',
            rememberMe: false,
        }}
        validateOnBlur
        validationSchema={schema}
        // onSubmit={(values)=>{console.log(values)}}

        onSubmit={() => {

            setTimeout(() => {
              alert('hi-hi');
            }, 1000);
        }}
        >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
        <Form onSubmit={props.handleSubmit}>
            {/* onSubmit={props.handleSubmit} ОТПРАВЛЯЕТ ДАННЫЕ С ФОРМЫ В URL */}
            

            <div>
                <label htmlFor={'login'}>User login</label><br/>
                <Field placeholder='login' name='login' component='input' onChange={handleChange} onBlur={handleBlur} type='string'
                />
                {touched.login && errors.login && <p>{errors.login}</p> }
                {/* old синаксис */}
            </div>
    


            <div>
                <label htmlFor={'login'}>User Password</label><br/>
                <Field  placeholder='Password' name='password' component='input'  type='password'
                />
                <ErrorMessage name='password' />
            </div>
            {/* {touched.password && errors.password && <p>{errors.password}</p> } */}
                {/* onChange={handleChange} onBlur={handleBlur} и др ПРИ ИСПОЛЬЗОВАНИИ FIELD ПРОПИСЫВАТЬ НЕ НУЖНО...boilerplate ЭТО*/} 
        

            

            <div>
                <label htmlFor={'login'}>User Password</label><br/>
                <Field  placeholder='Confirm password' name='confirmPassword' component='input'  type='password'
                />
                <ErrorMessage name='confirmPassword' />
            </div>



            <div>
                <Field  component='input' name='rememberMe' type='checkbox'/> remember me
            </div>
            <div>
            

                <button 
                type={'submit'}
                disabled={!isValid && !dirty} 
                // onClick= {handleSubmit}
                 > login </button> 
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