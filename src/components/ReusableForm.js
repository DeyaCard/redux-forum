import React from 'react'
// import PropTypes from 'prop-types'

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}> {/*formSubmissionHandler calls different functions for EditTicketForm and NewTicketForm*/}
        <input
          type='text'
          name='userName'
          placeholder='User Name' />
        <input
          type='text'
          name='title'
          placeholder='Title' />
        <textarea
          name='content'
          placeholder='Post Content' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {}

export default ReusableForm

