import { MainDiv , MainSection, Content, Title, Text } from "./style"
import Button from "../button"

const SectionMain = () => {
    return(
        <MainDiv id="SectionMain">
            <MainSection>
                <Content>
                    <Title>CODE COM O MELHOR CAFÉ DA REGIÃO</Title>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, in deserunt, id quibusdam sunt voluptatibus, laboriosam beatae voluptatem ducimus vitae eaque. Maiores nemo, recusandae sequi est voluptates fugiat culpa neque?</Text>
                    
                    <Button text="Pegue o seu Agora" />
                </Content>
            </MainSection>
        </MainDiv>
    )
}

export default SectionMain