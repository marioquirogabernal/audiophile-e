import React from "react"
import { HeaderContainer } from "./header-styles"

const Header = () => {
  return (
    <HeaderContainer>
      <picture>
        <img src="/assets/icons/Burguer-icon.svg" alt=""></img>
      </picture>
      <picture>
        <img src="/assets/icons/Company-icon.svg"></img>
      </picture>
      <picture>
        <img src="/assets/icons/Car-icon.svg"></img>
      </picture>
    </HeaderContainer>
  )
}

export default Header
