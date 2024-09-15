import { SpacenHeader, SectionHeader, LinksPage, Image, IconSearch, IconCart, DivIcons } from "./style"
import Logo from "../../assets/logo.png"
import { Link } from "react-scroll";

const Header = () => {
    return(
        <SpacenHeader>
            <SectionHeader>
                <a>
                    <Image src={Logo} alt="Logo"/>
                </a>

                <nav>
                    <Link to="SectionMain"><LinksPage>Home</LinksPage></Link>
                    <Link to="SectionAbout"><LinksPage>Sobre</LinksPage></Link>
                    <Link to="SectionMenu"><LinksPage>Menu</LinksPage></Link>
                    <Link to="SectionFeedback"><LinksPage>Avaliações</LinksPage></Link>
                    <Link to="SectionAddress"><LinksPage>Endereços</LinksPage></Link>
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