import { Box, Flex, Heading } from "@chakra-ui/react"
import OrderCard from "./OrderCard"

function DashboardColumn({ title, orders , onDeleteOrder }) {

    const renderOrders = orders.map(order => {
        return <OrderCard key={order.id} order={order} onDeleteOrder={onDeleteOrder} />
    })

    return (
        <Box>
            <Heading
            //   fontFamily= "Varela Round, sans-serif'"
            fontSize="2.0rem"
            margin="0.5rem"
            textAlign="center"
            >
                {title}
            </Heading>
            <Flex
            flexDirection="column"
            alignItems="center"
            border="2px solid black"
            width="25vw"
            height="65vh"
            borderRadius = "10px"
            margin="2rem"
            overflowY="auto"
            padding="1rem"
            >
                {renderOrders} 
            </Flex>
        </Box>
    )
}

export default DashboardColumn