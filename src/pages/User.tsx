import { MDBInput, MDBValidation, MDBBtn, MDBValidationItem } from 'mdb-react-ui-kit';
import { ChangeEventHandler, FormEvent, useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {toast} from 'react-toastify';
import { createUserStart, updateUserStart } from '../redux/actions/index';
import { selectUsers } from '../redux/selectors/index';
import { IUser } from '../redux/Interfaces/Users';



export interface IForm {
 name:    string
 email:   string
 phone:   string
 address: string
}

const initialState:IForm = {
    name: '',
    email: '',
    phone: '',
    address: ''
}

export const User = () => {

    const {users} = useSelector(selectUsers)
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {id} = useParams() as {id:string};
    
    const [formValues, setformValues] = useState<IForm>(initialState);
    const {address,email, name, phone} = formValues;


    useEffect(() => {
      if(id){
        const user = users.find((user) => user.id === Number(id));

        user && setformValues({address:user.address, name: user.name, email: user.email, phone: user.phone})
      }
    }, [])
    


    console.log(formValues);

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(address &&email && name && phone){
            dispatch(id ? updateUserStart(Number(id),formValues) : createUserStart(formValues));
            toast.success(id?`Woow has editado al usuario ${id}`: `Woow has creado un nuevo usuario`);
            setTimeout(() => navigate('/'), 800);
        }
    }

    const handleChange = (e:FormEvent<HTMLInputElement>) => {
        setformValues(({ ...formValues, [e.currentTarget.name]: e.currentTarget.value }));
    }

    console.log(formValues);

  return (
    <MDBValidation className="row g-3" style={{marginTop: '100px'}} noValidate onSubmit={handleSubmit}>
        <p className="fs-2 fw-bold text-center">{id? 'Edit':'Add' } User Details</p>
        <div style={{margin: 'auto', padding: '15px', maxWidth: '400px', alignContent: 'center'}}>
            <MDBValidationItem className='bt-4' feedback='Please set your name.' invalid>
                <MDBInput  value={name} name='name' type={'text'} onChange={handleChange} required label={'Name'}  />
            </MDBValidationItem>
            <MDBValidationItem className='bt-4' feedback='Please set your email' invalid>
                <MDBInput  value={email} name='email' type={'email'} onChange={handleChange} required label={'Email'}  />
            </MDBValidationItem>
            <MDBValidationItem className='bt-4' feedback='Please set your name' invalid>
                <MDBInput  value={phone} name='phone' type={'text'} onChange={handleChange} required label={'Phone'}  />
            </MDBValidationItem>
            <MDBValidationItem className='bt-4' feedback='Please set your address.' invalid>
                <MDBInput  value={address} name='address' type={'text'} onChange={handleChange} required label={'Address'}  />
            </MDBValidationItem>
            <br />
            <div className="col-12">
                <MDBBtn style={{marginRight: '10px'}} type='submit'>{id ? 'Edit':'Add' }</MDBBtn>
                <MDBBtn onClick={() => navigate(-1)}>Go</MDBBtn>
            </div>
        </div>
    </MDBValidation>
  )
}

