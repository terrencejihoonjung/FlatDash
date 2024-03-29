import { Box, Heading } from "@chakra-ui/react"

function CurrentOrderCard({ item, clickHandler , quantity }) {

    function handleDelete() {
        clickHandler(item)
    }

    return (
        <Box 
        onClick={handleDelete}
        border="1px solid black"
        borderWidth="2px"
        width="30%"
        height="16%"
        borderRadius="md"
        padding="1rem"
        margin="0.5rem" 
        flex= "1 0 30%" >
        <Heading size="md">
            {item.item_name}
        </Heading>
        <Heading size="md" >
            Quantity: {quantity}
        </Heading>
        </Box>
    )
}

export default CurrentOrderCard