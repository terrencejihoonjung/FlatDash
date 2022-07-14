import { FormControl, FormLabel, Checkbox } from "@chakra-ui/react"
import { useState, useEffect } from "react"

function OrderMenu() {

    const [delivery, setDelivery] = useState(true)
    const [dishes, setDishes] = useState([])

    // use effect to load all menu items once
    
    const handleCheck = () => {
        setDelivery(currentDelivery => !currentDelivery)
    }

    return (
        <FormControl id="orderDishesForm" >
            <FormLabel
            htmlFor="delivery"
            marginTop="1rem" 
            >Delivery or Pick-up?</FormLabel>
            <Checkbox
            id="delivery"
            onChange={handleCheck}
            value={delivery}
            defaultChecked >
                Delivery</Checkbox>
        </FormControl>
    )
}


export default OrderMenu