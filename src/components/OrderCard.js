import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

function OrderCard({ order , onDeleteOrder }) {

  let navigate = useNavigate(); 
  function handleView() {
    let path = `/order/${order.id}`; 
    navigate(path);
  }

  function handleDelete() {
    fetch(`http://localhost:9292/orders/${order.id}`, {
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
        onClick={() => handleView()}
        >
          View order
        </Button>
        <Button 
        fontSize="sm"
        marginTop="1vh"
        onClick={() => handleDelete()}
      >
          Delete order
        </Button>
      </Flex>
    </Box>
  )
}

export default OrderCard