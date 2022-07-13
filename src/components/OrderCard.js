import { Box, Heading } from "@chakra-ui/react"

function OrderCard({ order }) {

  return (
    <Box
        border="1px solid black"
        borderWidth="2px"
        width="12rem"
        height="4rem"
        borderRadius="md"
        cursor="grab"
    >
        <Heading
            fontSize="1.5rem"
        >
            {order.customer.name}
            {order.delivery}
            {order.created_at}
            {order.total_price}
        </Heading>

      <span></span>

    </Box>
  )
}

export default OrderCard