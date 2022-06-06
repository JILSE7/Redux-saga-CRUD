import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableUsers from '../components/TableUsers';
import { loadUserStart } from '../redux/actions/index';
import { selectUsers } from '../redux/selectors/index';

import {    MDBSpinner } from 'mdb-react-ui-kit'
import CustomSpinner from '../components/CustomSpinner';


export const Home = () => {

    const {users,loading,error} = useSelector(selectUsers);
    
    const disptach = useDispatch();

    useEffect(() => {
      
        disptach(loadUserStart())
      
    }, [])
    

  return (
    <div className='container' style={{marginTop: '150px'}}>
        {
            !loading && users ? (<TableUsers users={users}/>) : <CustomSpinner/>
        }
        
    </div>
  )
}

