import { Flex } from "@chakra-ui/react"
import { useEffect } from "react"
import MenuCard from "./MenuCard"

function OrderMenu({ clickHandler, menuItems, setMenuItems }) {

    useEffect(()=> {
        fetch(`http://localhost:9292/menu_items`)
        .then(response => response.json())
        .then(setMenuItems)
    }, [])

    const renderMenuItems = menuItems.map(item => {
        return <MenuCard key={item.id} item={item} clickHandler={clickHandler} />
    })

    return (
        <Flex
        // flexDirection="column"
        alignItems="center"
        border="2px solid black"
        marginTop="2rem"
        width="45vw"
        height="65vh"
        borderRadius = "10px"
        padding="1rem"
        flexWrap="wrap"
        overflowY="scroll"
        >
            {renderMenuItems}
        </Flex>
    )
}


export default OrderMenu