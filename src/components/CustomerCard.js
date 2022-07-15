import { Box, Heading, Text} from "@chakra-ui/react"

function CustomerCard({ order }) {
    return (
        <Box
        border="1px solid black"
        borderWidth="2px"
        width="30%"
        height="16%"
        borderRadius="md"
        padding="1rem"
        margin="0.5rem" 
        flex= "1 0 30%" >
            <Heading size="md">
                {order.name}
            </Heading>
            <Heading size="md" >
                Price: ${order.total_price}
            </Heading>
            <Text size="sm">
                Inventory: {order.inventory}
            </Text>
        </Box>
    )
}

export default CustomerCard