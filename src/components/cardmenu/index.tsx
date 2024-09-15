import { Card, Image, Title, Price, PriceDecoration } from "./style"
import Button from "../button"
import { ICardMenu } from "./type"

const CardMenu = ({srcImage, CurrentPrice, OldPrice} : ICardMenu) => {
    return(
        <Card>
            <Image src={srcImage}/>
            <Title>Café Coado</Title>
            <Price>{CurrentPrice} <PriceDecoration>{OldPrice}</PriceDecoration></Price>
            <Button text="Adicione ao Carrinho"/>
        </Card>
    )
}

export default CardMenu