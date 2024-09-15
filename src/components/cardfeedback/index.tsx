import { Card, Image, Text, ImageClient, Name, Stars } from "./style"
import Quote from "../../assets/quote-img.png" 
import { ICardFeedback } from "./type"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


const CardFeedback = ({SrcImage, Client} : ICardFeedback) => {
    return(
        <Card>
            <Image src={Quote}/>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, commodi dolore similique neque culpa, sequi, laudantium corporis cum odio quaerat dolorum deserunt consectetur. Eveniet distinctio quia aliquam alias similique corporis?</Text>
            <ImageClient src={SrcImage}/>
            <Name>{Client}</Name>
            <Stars>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
            </Stars>
        </Card>        
    )
}

export default CardFeedback