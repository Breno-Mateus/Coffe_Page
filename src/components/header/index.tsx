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
                    <LinksPage to="SectionMain">Home</LinksPage>
                    <LinksPage to="SectionAbout">Sobre</LinksPage>
                    <LinksPage to="SectionMenu">Menu</LinksPage>
                    <LinksPage to="SectionFeedback">Avaliações</LinksPage>
                    <LinksPage to="SectionAddress">Endereços</LinksPage>
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