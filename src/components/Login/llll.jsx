import React from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../redux/thunk";
import SamuraiAPI from "../../services/apiService";
import { checkIsUserLoggedThunk } from "../../redux/thunk";
import { setServerAuthDidAnswer } from "../../redux/action-creators";
import { FORM_ERROR } from "final-form";

// MUI stuff
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Checkbox from "@material-ui/core/Checkbox";
import Alert from "@material-ui/lab/Alert";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// css
import "./LoginForm.css";

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const formValidate = (values) => {
  const errors = {};
  if (!values.email) errors.email = "Required";
  else if (!validateEmail(values.email))
    errors.email = "E-mail must be a correct E-mail format";

  if (!values.password) errors.password = "Required";

  return errors;
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    UI: { errors, loading },
    auth,
  } = useSelector((state) => state);

  const onSubmit = async (values) => {
    const data = {
      ...values,
    };
    let serverError = null;
    await SamuraiAPI.loginUser(data)
      .then((res) => {
        if (res.resultCode === 0) {
          dispatch(checkIsUserLoggedThunk());
        } else if (res.data.resultCode === 1 || 10) {
          serverError = res.data.messages[0];
        }
        dispatch(setServerAuthDidAnswer(true));
      })
      .catch((err) => console.log(err));
    if (serverError) return { [FORM_ERROR]: serverError };
    // dispatch(loginUserThunk(data));
  };

  return (
    <div className="login-form">
      <Form
        onSubmit={onSubmit}
        validate={formValidate}
        initialValues={{
          rememberMe: false,
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            {props.submitError && (
              <Alert severity="error">{props.submitError}</Alert>
            )}
            <div className="login-form__field">
              <Field name={"email"} component={TextField}>
                {({ input, meta, placeholder }) => (
                  <div>
                    <TextField
                      label="Email"
                      fullWidth
                      variant="outlined"
                      error={
                        (meta.error || meta.submitError) && meta.touched
                          ? true
                          : false
                      }
                      helperText={meta.error || meta.submitError}
                      {...input}
                    />
                    <pre>{JSON.stringify(props)}</pre>
                  </div>
                )}
              </Field>
            </div>
            <div className="login-form__field">
              <Field name={"password"} component={TextField}>
                {({ input, meta, placeholder }) => (
                  <div>
                    <TextField
                      label={"Password"}
                      fullWidth
                      variant="outlined"
                      error={meta.touched && meta.error ? true : false}
                      helperText={meta.touched && meta.error}
                      {...input}
                    />
                    {/* <pre>{JSON.stringify(meta)}</pre> */}
                  </div>
                )}
              </Field>
            </div>
            <Field ld name={"rememberMe"} component={TextField} type="checkbox">
              {({ input, meta, placeholder }) => (
                <div>
                  <FormControlLabel
                    control={<Checkbox {...input} />}
                    label="Remember me"
                  />
                  {/* <pre>{JSON.stringify(meta)}</pre> */}
                </div>
              )}
            </Field>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              endIcon={<ArrowUpwardIcon />}
              disabled={props.submitting}
            >
              Submit
            </Button>
            {/* <pre>{JSON.stringify(form)}</pre> */}
          </form>
        )}
      </Form>
    </div>
  );
};

export default LoginForm;