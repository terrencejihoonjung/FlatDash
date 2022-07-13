import { Flex, Heading } from "@chakra-ui/react"
import { useState , useEffect } from "react"
import { useParams } from "react-router-dom";
import OrderCard from "./OrderCard"

function DashboardColumn({ title, orders }) {

    const renderOrders = orders.map(order => {
        return <OrderCard key={order.id} order={order} />
    })

    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            border="2px solid black"
            width="450px"
            height="1000px"
            borderRadius = "25px"
            margin="2rem"
        >
            <Heading
                //   fontFamily= "Varela Round, sans-serif'"
                fontSize="1.5rem"
                margin="0.5rem"
                textAlign="center"
            >
                {title}
            </Heading>

            {renderOrders}

        </Flex>
    )
}

export default DashboardColumn