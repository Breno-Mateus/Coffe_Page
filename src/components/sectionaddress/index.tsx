import { AddressSection, Title, TitleDecoration, Maps } from "./style"

const SectionAddress = () => {
    return(
        <AddressSection id="SectionAddress">
            <Title>Nosso <TitleDecoration>Endereço</TitleDecoration></Title>

            <Maps src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.860383410842!2d-35.26019104458007!3d-5.754087399999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3ab57b4a154dd%3A0x77a785a2dbaae0e8!2sCafeteria%20em%20Natal%20-%20Rest%20Coffee!5e0!3m2!1spt-BR!2sbr!4v1726403601126!5m2!1spt-BR!2sbr" loading="lazy"></Maps>
        </AddressSection>
    )
}

export default SectionAddress