import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { validator } from 'validate-this'

function Form({ valid }) {
  return (
    <form>
      <Field name="title" component="input" />
      <button disabled={!valid}>Submit</button>
    </form>
  )
}

const required = val => {
  if (!val) {
    return 'Required'
  }
}

export default reduxForm({
  form: 'post',
  enableReinitialize: true,
  validate: values => validator(values, v => {
    v.validate('title').satisfies(required)
  })
})(Form)

