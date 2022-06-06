import { MDBSpinner } from 'mdb-react-ui-kit'


const CustomSpinner = () => {
  return (
    <div className='container center-content d-flex justify-content-center align-items-center'>
      <MDBSpinner grow color='primary'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className='mx-2' color='secondary'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow color='success'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className='mx-2' color='warning'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow color='danger'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className='mx-2' color='info'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow color='muted'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className='ms-2' color='dark'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner>
    </div>
  )
}

export default CustomSpinner