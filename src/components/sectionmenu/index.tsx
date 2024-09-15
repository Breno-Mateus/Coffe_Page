import { MenuSection, Title, TitleDecoration, BoxContainer } from "./style"
import CardMenu from "../cardmenu"

import Menu1 from "../../assets/menu-1.png";
import Menu2 from "../../assets/menu-2.png";
import Menu3 from "../../assets/menu-3.png";
import Menu4 from "../../assets/menu-4.png";
import Menu5 from "../../assets/menu-5.png";
import Menu6 from "../../assets/menu-6.png";

const SectionMenu = () => {
    return(
        <MenuSection id="SectionMenu">
            <Title>Nosso <TitleDecoration>Menu</TitleDecoration></Title>

            <BoxContainer>
                <CardMenu srcImage={Menu1} CurrentPrice="R$ 19,99" OldPrice="R$ 22,00"/>
                <CardMenu srcImage={Menu2} CurrentPrice="R$ 12,99" OldPrice="R$ 15,00"/>
                <CardMenu srcImage={Menu3} CurrentPrice="R$ 13,99" OldPrice="R$ 16,00"/>
                <CardMenu srcImage={Menu4} CurrentPrice="R$ 13,99" OldPrice="R$ 17,00"/>
                <CardMenu srcImage={Menu5} CurrentPrice="R$ 11,99" OldPrice="R$ 13,00"/>
                <CardMenu srcImage={Menu6} CurrentPrice="R$ 18,99" OldPrice="R$ 20,00"/>
            </BoxContainer>
        </MenuSection>
    )
}

export default SectionMenu