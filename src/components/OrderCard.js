import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

function OrderCard({ order, fetchOrders, deletable }) {

  let navigate = useNavigate(); 
  function handleView(e) {
    e.stopPropagation()
    let path = `/order/${order.id}`; 
    navigate(path);
  }

  function handleDelete(e) {
    e.stopPropagation()
    fetch(`http://localhost:9292/orders/${order.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(fetchOrders())
  }

  function handleMove() {
    let status
    if (order.status==="Queued") {
      status = "In-Progress"
    } else {
      status = "Fulfilled"
    }

    fetch(`http://localhost:9292/orders/${order.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        status: status
      })
    })
      .then((r) => r.json())
      .then(fetchOrders());
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
    onClick={handleMove}
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
        marginRight= "1rem"
        marginTop="1vh"
        onClick={handleView} >
          View order
        </Button>
        { deletable ? <Button 
        fontSize="1vh"
        marginTop="1vh"
        marginRight= "1rem"
        onClick={handleDelete} >
          Delete order
        </Button> : <></> }
  
      </Flex>
    </Box>
  )
}

export default OrderCard