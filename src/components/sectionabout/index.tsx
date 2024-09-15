import { AboutSection, Title, TitleDecoration, Row, ContainerImage, Content, TitleContent, Text, Image } from "./style"

import Button from "../button"
import AboutImage from "../../assets/about-img.jpg"

const SectionAbout = () => {
    return(
        <AboutSection>
            <Title>Sobre <TitleDecoration>Nós</TitleDecoration></Title>
            
            <Row>
                <ContainerImage>
                    <Image src={AboutImage}/>
                </ContainerImage>

                <Content>
                    <TitleContent>O Que Faz Nosso Café Especial</TitleContent>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. A fuga aut rem sint obcaecati aperiam nihil reiciendis? Inventore mollitia vitae repudiandae eligendi. Voluptas culpa ipsam neque laborum, tempora incidunt velit!</Text>
                    <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga soluta quam dolores, omnis, autem, asperiores ipsa sed quae sit beatae fugit sint quisquam vel ullam quo velit veniam sunt repellat.</Text>
                    <Button text="Saiba mais"/>
                </Content>
            </Row>
        </AboutSection>
    )
}

export default SectionAbout