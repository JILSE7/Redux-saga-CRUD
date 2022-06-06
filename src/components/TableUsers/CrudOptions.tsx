import { MDBBtn, MDBBtnGroup, MDBIcon, MDBTooltip } from 'mdb-react-ui-kit'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { IUser } from '../../redux/Interfaces/Users'
import { deleteUserStart } from '../../redux/actions/index';
import { toast } from 'react-toastify'


const deleteProps = { fas:true, style: {color: '#dd4b39'}, icon: 'trash'}
const editProps = { fas:true, style: {color: '#55acee', marginLeft: '5px', marginRight: '5px'}, icon:'pen'}
const viewProps = { fas:true, style: {color: '#3b5938', marginLeft: '5px'}, icon:'eye'}


interface IProps {
    id: number
}

const CrudOptions:FC<IProps> = ({id}) => {

  const dispatch = useDispatch();

  const handleDelete = (id:number) => {
    dispatch(deleteUserStart(id));
    toast.success(`Se ha eliminado al usuario con id: ${id}`);
    
  }

  return (
    <>
        <MDBBtn className='1' tag={'a'} color={'none'} onClick={() => handleDelete(id)}>
            <MDBTooltip title={'Delete'} tag={'a'}>
                <MDBIcon {...deleteProps} size={'lg'}/>
            </MDBTooltip>
        </MDBBtn>{" "}
        <Link to={`user/${id}`}>
            <MDBTooltip title="Edit" tag={'a'}>
                <MDBIcon {...editProps}/>
            </MDBTooltip>
        </Link>
        <Link to={`userInfo/${id}`}>
            <MDBTooltip title="View" tag={'a'}>
                <MDBIcon {...viewProps}/>
            </MDBTooltip>
        </Link>

    </>
  )
}

export default CrudOptions