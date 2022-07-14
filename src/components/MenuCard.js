import { Box, Heading, Item, Text, GridItem } from "@chakra-ui/react"

function MenuCard({ item, clickHandler }) {

  function handleClick() {
    clickHandler(item)
  }

  return (
    <Box 
    onClick={handleClick}
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
        Price: ${item.price}
      </Heading>
      <Text size="sm">
        Inventory: {item.inventory}
      </Text>
    </Box>
  )
}

export default MenuCard