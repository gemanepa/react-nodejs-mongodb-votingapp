import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { css } from 'emotion';

const formCSS = css`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    height: 100%;

    label {
        width: 100%;
    }

    input[type=text], input[type=number] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }
    
    input[type=radio] {
        width: 25px;
        height: 25px;
    }
    
    input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      input[type=submit] {
        width: 100%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      
      input[type=submit]:hover {
        background-color: #45a049;
      }

      input[type=submit][disabled], input[type=submit][disabled]:hover {
        background-color: gray;
        cursor: default
      }



    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    .radioInputs {
        display: flex;
        flex-direction: row;
        justify-content: center;
        label {
            display: flex;
            flex-direction: row;
            width: 35%;
            p {
                margin-top: 7px;
                margin-left: 5px;
            }
        }
    }

    .validation {
        height: 30px;
        width: 100%;
        max-height: 30px;
        overflow: hidden;
        color: red;
    }
`;


function validationHandler(error) {
  let message = <div className="validation" />;
  if (!error) return message;

  switch (error.type) {
    case 'required':
      message = <div className="validation">Campo requerido</div>;
      break;
    case 'pattern':
      message = <div className="validation">Hay caracteres incorrectos</div>;
      break;
    case 'minLength':
      message = <div className="validation">Debajo de caracteres minimos</div>;
      break;
    case 'max':
      message = <div className="validation">Sobrepasa valor maximo</div>;
      break;
    case 'min':
      message = <div className="validation">Debajo de valor minimo</div>;
      break;
  }
  return message;
}

export default function Form(props) {
  const { register, handleSubmit, errors } = useForm();
  const [submitdDisabled, setSubmitdDisabled] = useState({
    firstName: true, lastName: true, dni: true, gender: true
  });

  const onSubmit = async (submittedData) => {
    props.validateVoterData(submittedData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formCSS}>

      <label htmlFor="firstName">
        Nombre
        <br />
        <input name="firstName" id="firstName" type="text" ref={register({ required: true, pattern: /^[A-Za-z ]+$/i, minLength: 3 })} onFocus={() => submitdDisabled.firstName && setSubmitdDisabled({ ...submitdDisabled, firstName: false })} />
        {validationHandler(errors.firstName)}
      </label>

      <label htmlFor="lastName">
        Apellido
        <br />
        <input name="lastName" id="lastName" type="text" ref={register({ required: true, pattern: /^[A-Za-z ]+$/i, min: 3 })} onFocus={() => submitdDisabled.lastName && setSubmitdDisabled({ ...submitdDisabled, lastName: false })} />
        {validationHandler(errors.lastName)}
      </label>

      <label htmlFor="dni">
        DNI
        <br />
        <input name="dni" type="number" id="dni" ref={register({ required: true, min: 10000000, max: 50000000 })} onFocus={() => submitdDisabled.dni && setSubmitdDisabled({ ...submitdDisabled, dni: false })} />
        {validationHandler(errors.dni)}
      </label>

      <p>Genero</p>
      <div className="radioInputs">
        <label htmlFor="radio-male">
          <input name="gender" type="radio" value="male" id="radio-male" ref={register({ required: true })} onFocus={() => submitdDisabled.gender && setSubmitdDisabled({ ...submitdDisabled, gender: false })} />
          <p>Hombre</p>
        </label>

        <label htmlFor="radio-female">
          <input name="gender" type="radio" value="female" id="radio-female" ref={register({ required: true })} onFocus={() => submitdDisabled.gender && setSubmitdDisabled({ ...submitdDisabled, gender: false })} />
          <p>Mujer</p>
        </label>
      </div>
      {validationHandler(errors.gender)}

      <input type="submit" disabled={!((!submitdDisabled.firstName && !submitdDisabled.lastName && !submitdDisabled.dni && !submitdDisabled.gender))} />
    </form>
  );
}

Form.propTypes = {
  validateVoterData: PropTypes.func.isRequired
};
