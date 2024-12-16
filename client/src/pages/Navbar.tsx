import {Hamburger, NavDrawer, NavItem} from '@fluentui/react-nav-preview'
import { useState } from 'react'
import { pages } from './routes'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const openBtn = <Hamburger onClick={()=>setIsOpen(!isOpen)}/>
  return (<>
  {!isOpen && openBtn}
    <NavDrawer open={isOpen}>
        {openBtn}
        {pages.map(page => <NavItem href={'/'+ page.path} value={page.path}>{page.display}</NavItem>)}
    </NavDrawer>
  </>
  )
}
