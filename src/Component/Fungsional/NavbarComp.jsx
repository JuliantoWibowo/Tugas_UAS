import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {
    Collapse, Navbar, NavbarToggler,
    NavbarBrand, Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu,
    DropdownItem, NavbarText
} from 'reactstrap';


const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
 const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Mugello MotoSport</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem> 
                        <NavItem>
                            <NavLink href="/Karyawan">Data Karyawan</NavLink>
                        </NavItem> 
                        <NavItem>
                            <NavLink href="/sparepart">Sparepart</NavLink>
                        </NavItem> 
                        <NavItem>
                            <NavLink href="/suplier">Suplier</NavLink>
                        </NavItem> 
                    </Nav>
                    <NavbarText> <Link to="/" className="">
                                              Log out
                              </Link></NavbarText>
                </Collapse>
            </Navbar>
        </div>

    )
}

export default NavbarComp