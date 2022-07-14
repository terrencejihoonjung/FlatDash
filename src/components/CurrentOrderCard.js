import { Box, Heading, Item, Text, GridItem } from "@chakra-ui/react"

function CurrentOrderCard({ item, clickHandler }) {

    return (
        <Box 
        onClick={clickHandler}
        border="1px solid black"
        borderWidth="2px"
        width="30%"
        height="16%"
        borderRadius="md"
        padding="1rem"
        margin="0.5rem" 
        flex= "1 0 30%" >
        <Heading size="md">
            {item.name}
        </Heading>
        <Heading size="md" >
            Quantity: 
        </Heading>
        </Box>
    )
}

export default CurrentOrderCard