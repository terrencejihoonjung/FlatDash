import { FormControl, FormLabel, Checkbox } from "@chakra-ui/react"

function OrderMenu() {

    return (
        <FormControl id="orderDishesForm" >
            <FormLabel htmlFor="delivery" marginTop="1rem" >Delivery or Pick-up?</FormLabel>
            <Checkbox
            id="delivery"
            onChange={handleInput}
            value={form.delivery} >
                Delivery
            </Checkbox>
        </FormControl>
    )
}


default export OrderMenu