import { useId, useState } from 'react'

import { NavLink } from 'react-router-dom'

import {
     MDBCollapse,
     MDBContainer,
     MDBIcon,
     MDBNavbar,
     MDBNavbarBrand,
     MDBNavbarItem,
     MDBNavbarLink,
     MDBNavbarNav,
     MDBNavbarToggler
} from 'mdb-react-ui-kit'


const itemsNav = [
    { to: '/', namePath: 'Home' },
    { to: '/user', namePath: 'Add User' },
    { to: '/about', namePath: 'About' }
]

export const Header = () => {

    const reactId = useId()

    const [showBasics, setshowBasics] = useState<boolean>(true)

  return (
    <header>
        <MDBNavbar expand="lg" bgColor='dark'>
            <MDBContainer fluid>
                <MDBNavbarBrand className='text-white'>
                    <span style={{marginRight: "10px"}}>
                        <MDBIcon fas icon='book-open'/>
                    </span>
                    contact
                </MDBNavbarBrand>
                <MDBNavbarToggler
                    data-target='navbar'
                    aria-expanded='false'
                    aria-label='Toogle navigation'
                    className='text-white'
                    onClick={() => setshowBasics((state) => !state)}
                >
                    <MDBIcon fas icon='bars'/>
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showBasics} >
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

                        {
                            itemsNav.map((item, id) => (
                                <MDBNavbarItem key={reactId+id}>
                                    <NavLink className='nav-link text-white' to={item.to}>
                                        <MDBNavbarLink >
                                                {item.namePath}
                                        </MDBNavbarLink>
                                    </NavLink>
                                </MDBNavbarItem>
                            ))
                        }
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    </header>
  )
}





