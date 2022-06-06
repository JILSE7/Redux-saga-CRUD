import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn,
    MDBIcon,
    MDBTooltip,
    MDBSpinner
} from 'mdb-react-ui-kit'
import { FC } from 'react';
import { IUser } from '../../redux/Interfaces/Users';
import CrudOptions from './CrudOptions';

interface IProps {
  users: IUser[] | undefined
}

const TableUsers:FC<IProps> = ({users}) => {
  return (
    <MDBTable>
    <MDBTableHead>
        <tr>
            <th scope='col'>No.</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Address</th>
            <th scope='col'>Action</th>
        </tr>
    </MDBTableHead>
    <MDBTableBody>
        {
            users && 
            users.map (({id,address,email,name,phone}) => (
            <tr>
                <th>{id + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{address}</td>
                <td>
                  <CrudOptions id={id}/>
                </td>
            </tr>
            ))
        }
    </MDBTableBody>
</MDBTable>
  )
}

export default TableUsers
