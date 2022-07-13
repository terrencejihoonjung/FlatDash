import { Box, Heading, Text, Button, ButtonGroup, Flex } from "@chakra-ui/react"

function OrderCard({ order }) {

  return (
    <Box
    border="1px solid black"
    borderWidth="2px"
    width="auto"
    height="auto"
    borderRadius="md"
    cursor="grab"
    padding="1rem"
    marginTop="1rem"
    >
      <Heading size="md">
        Order #{order.id} for {order.customer.name}
      </Heading>
      <Heading size="md">
        Total Price: ${order.total_price}
      </Heading>
      <Text size="sm">
        {order.created_at},
        {order.delivery},
      </Text>

      <Flex
      >
        <Button 
        fontSize="sm"
        marginRight= "2rem"
        marginTop="1rem"
        >
          View order details
        </Button>
        <Button 
        fontSize="sm"
        marginTop="1rem"
      >
          Delete this order
        </Button>
      </Flex>
    </Box>
  )
}

export default OrderCard