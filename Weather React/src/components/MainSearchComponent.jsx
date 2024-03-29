import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

export default function MainSearchComponent({ handleChange, handleClick }) {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <>
      <Container>
        <Form.Group className="mt-4 size" controlId="exampleForm.ControlTextarea">
          <div className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search City...'
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
            <Button
              className='btn-sm'
              onClick={handleClick}
            >
              <i className="bi bi-search"></i>
            </Button>
          </div>
        </Form.Group>
      </Container >
    </>
  )
} 
