import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { LoginAPI } from '../../redux/Authentication-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


const Login = (props) => {

    let schema = yup.object().shape({
        Email:yup
        .string()
        .required('Обязательно')
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Ведите ваш e-mail')
        .min(5, 'Должно быть минимум 5 символов')
        .max(39, 'Максимум 39 символов'),
        password:yup
        .string()
        .required('Обязательно')
        .matches(/^[0-9]+$/, "Должно быть числом")
        .min(5, 'Должно быть минимум 5 символов')
        .max(15, 'Максимум 15 символов'),
        confirmPassword:yup
        .string()
        .oneOf([yup.ref('password')],'Пароли должны совпадать!')
        .required('Обязательно').matches(/^[0-9]+$/, "Должно быть числом")
        .min(5, 'Должно быть минимум 5 символов')
        .max(15, 'Максимум 15 символов'),
    })

    
    return (
        <Formik
        // onSubmit={onSubmit}
        // validate={formValidate} 
        initialValues={{
            Email:'',
            password:'',
            confirmPassword:'',
            rememberMe: false,
        }}
        validateOnBlur
        validationSchema={schema}
        // onSubmit={(values)=>{console.log(values)}}

        onSubmit={(formData,{setSubmitting, setFieldError, setStatus}) => {

            // setTimeout(() => {
            //   alert('hi-hi');
            // }, 1000);
            props.LoginAPI(formData.Email,formData.password, formData.rememberMe,
                setSubmitting, setFieldError, setStatus);
                
                setSubmitting(false);
                
        }}
        >
            

            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status }) => (
        <Form >
            {/* onSubmit={props.handleSubmit} ОТПРАВЛЯЕТ ДАННЫЕ С ФОРМЫ В URL */}
            <div>
                 {status}
            </div>
                

            <div>
                <label htmlFor={'login'}>User Email</label><br/>
                <Field placeholder='Email' name='Email' component='input' onChange={handleChange} onBlur={handleBlur} type='string'
                />
                {touched.Email && errors.Email && <p>{errors.Email}</p> }
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
                onClick= {handleSubmit}
                 > login </button> 
            </div>
        </Form>
            )}
        </Formik>
    )
}






const LoginForm = (props) => {


    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Login</h1>
        <Login LoginAPI={props.LoginAPI}/>
    </div>
}

const mapStateToProps= (state) => ({
isAuth:state.auth.isAuth
});


export default connect (mapStateToProps,{LoginAPI})(LoginForm);
