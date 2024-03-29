import { Flex } from "@chakra-ui/react"
import CurrentOrderCard from "./CurrentOrderCard"

function CurrentOrder({ clickHandler, dishesToAdd , qtys }) {

    const renderCurrentOrderCards = dishesToAdd.map(item => {
        return <CurrentOrderCard key={item.id} item={item} clickHandler={clickHandler} quantity={qtys[item.id]} />
    })

    /*
    const totalPrice = dishesToAdd.reduce()
    */

    return (
        <Flex
        // flexDirection="column"
        alignItems="center"
        border="2px solid black"
        marginTop="2rem"
        width="45vw"
        height="65vh"
        borderRadius = "10px"
        padding="1rem"
        flexWrap="wrap"
        overflowY="scroll"
        >
            {renderCurrentOrderCards}
        </Flex>
    )
}


export default CurrentOrder