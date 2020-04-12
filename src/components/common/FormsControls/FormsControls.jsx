import React from "react";
import styles from "./FormsControls.module.css";
import { Field } from "redux-form";



export const Element = Element => ({ input, meta, ...props }) => {
  
  const hasError = meta.touched && meta.error;
  return (
    <div className={ styles.formControl + " " + (hasError ? styles.error : "") }>
      <Element {...input} {...props} />
      { hasError && <span> { meta.error } </span> }
    </div>
  );
};
 export const createField = (name,  component , validate , props ) => {
   return (
   <div>
     <Field name={name}  component={component} validate={validate}  {...props} />
   </div>
   )
 }