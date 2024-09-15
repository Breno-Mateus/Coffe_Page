import { FeedbackSection, BoxContainer, Title, TitleDecoration } from "./style"
import CardFeedback from "../cardfeedback"
import Client1 from "../../assets/pic-1.png"
import Client2 from "../../assets/pic-2.png"
import Client3 from "../../assets/pic-3.png"

const SectionFeedback = () => {
    return(
        <FeedbackSection>
            <Title>Nossos <TitleDecoration>Clientes</TitleDecoration></Title>
            
            <BoxContainer>
                <CardFeedback SrcImage={Client1} Client="João Pedro"/>
                <CardFeedback SrcImage={Client2} Client="Maria Eduarda"/>
                <CardFeedback SrcImage={Client3} Client="Breno Mateus"/>
            </BoxContainer>
        </FeedbackSection>
    )
}

export default SectionFeedback