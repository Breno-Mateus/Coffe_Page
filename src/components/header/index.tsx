import { SpacenHeader, SectionHeader, LinksPage, Image, IconSearch, IconCart, DivIcons } from "./style"
import Logo from "../../assets/logo.png"

const Header = () => {
    return(
        <SpacenHeader>
            <SectionHeader>
                <a>
                    <Image src={Logo} alt="Logo"/>
                </a>

                <nav>
                    <LinksPage href="#">Home</LinksPage>
                    <LinksPage href="#">Sobre</LinksPage>
                    <LinksPage href="#">Menu</LinksPage>
                    <LinksPage href="#">Avaliações</LinksPage>
                    <LinksPage href="#">Endereços</LinksPage>
                </nav>

                <DivIcons>
                    <IconSearch />
                    <IconCart />
                </DivIcons>
            </SectionHeader>
        </SpacenHeader>
    )
}

export default Header