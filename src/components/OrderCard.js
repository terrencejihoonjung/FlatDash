import { Box, Heading, Text, Button, ButtonGroup, Flex } from "@chakra-ui/react"

function OrderCard({ order , onDeleteOrder }) {

  function handleDelete() {
    fetch(`http://localhost:9292/order/${order.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedOrder) => onDeleteOrder(deletedOrder));
  }

  return (
    <Box
    border="1px solid black"
    borderWidth="2px"
    width="95%"
    height="auto"
    borderRadius="md"
    cursor="grab"
    padding="1rem"
    marginTop="1rem"
    justifyContent="center"
    >
      <Heading size="md" >
        Order #{order.id} for {order.customer.name}
      </Heading>
      <Heading size="md" >
        Total Price: ${order.total_price}
      </Heading>
      <Text size="sm">
        {order.created_at},
        {order.delivery},
      </Text>
      <Flex>
        <Button 
        fontSize="1vh"
        marginRight= "2rem"
        marginTop="1vh"
        >
          View order
        </Button>
        <Button 
        fontSize="sm"
        marginTop="1vh"
        onClick={()=> handleDelete()}
      >
          Delete order
        </Button>
      </Flex>
    </Box>
  )
}

export default OrderCard