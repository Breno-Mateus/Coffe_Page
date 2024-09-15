import { SectionFooter, Share, Instagram, Facebook, Twitter, DivLinks } from "./style"


const Footer = () => {
    return(
        <SectionFooter>
            <Share>
                <DivLinks><Instagram /></DivLinks>
                <DivLinks><Facebook /></DivLinks>
                <DivLinks><Twitter /></DivLinks>
            </Share>
        </SectionFooter>
    )
}

export default Footer