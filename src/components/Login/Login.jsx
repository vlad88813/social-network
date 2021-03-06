import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { LoginAPI } from '../../redux/Authentication-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import MediaCard from './advertising';


// Material-UI
import Button from '@material-ui/core/Button';
import "@fontsource/roboto";// не использую!
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from "@material-ui/core/TextField";
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';


// css
import login_style from "./LoginForm.module.css";




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

            <p/>
            <div>
                <label htmlFor={'login'}>User Email</label><br/> 
                <Field placeholder='Email' name='Email' component='input' onChange={handleChange} onBlur={handleBlur} type='string'
                />
                {touched.Email && errors.Email && <p>{errors.Email}</p>}
                {/* old синаксис  */}
            </div>
    

            <p/>
            <div>
                <label htmlFor={'login'}>User Password</label><br/>
                <Field  placeholder='Password' name='password' component='input'  type='password'
                />
                <ErrorMessage name='password' />
            </div>
            {/* {touched.password && errors.password && <p>{errors.password}</p> } */}
                {/* onChange={handleChange} onBlur={handleBlur} и др ПРИ ИСПОЛЬЗОВАНИИ FIELD ПРОПИСЫВАТЬ НЕ НУЖНО...boilerplate ЭТО*/} 
        

            
            <p/>
            <div>
                <label htmlFor={'login'}>Confirm Password</label><br/>
                <Field  placeholder='Confirm password' name='confirmPassword' component='input'  type='password'
                />
                <ErrorMessage name='confirmPassword' />
            </div>


            <p/>
            <div>
                <FormControlLabel control= {
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            // name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />


            </div>
            <p/>
            <div >
                <Button variant="contained" color="primary" 
                type={'submit'}
                disabled={!isValid && !dirty} 
                onClick= {handleSubmit}
                 > login </Button> 
            </div>
        </Form>
            )}
        </Formik>
        
    )
}




const LoginForm = (props) => {

    const [state, setState] = useState(true);

    
    if (props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    

    const func_Buy_Later = () => {
        setState(false)
        setTimeout(() => {
        setState(true) || alert('it\'s time to buy a parrot!')
            }, 5000);
    }

    return <div className={login_style.login}> 
        <div>Login</div>
        <p/>
        <div class={login_style.grid}>
        <div class={login_style.position1}><Login LoginAPI={props.LoginAPI}/></div>
        {state && <div class={login_style.position2}><MediaCard func_Buy_Later={func_Buy_Later}/></div>}
        </div>
   


    </div>
}

const mapStateToProps= (state) => ({
isAuth:state.auth.isAuth
});


export default connect (mapStateToProps,{LoginAPI})(LoginForm);



// напиши отдельную комоненту на материал юай и на хуках, + валидация и так, чтобы можно было подключить эту комоненту и старую 