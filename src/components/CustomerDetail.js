import { Flex } from "@chakra-ui/react";
import React , { useEffect , useState } from "react";
import { useParams } from "react-router-dom";

function CustomerDetail() {
  const [ customer , setCustomer ] = useState({})
  let params = useParams()
  
  useEffect( ()=> {
    fetch(`http://localhost:9292/customer/${params.id}`)
    .then(response => response.json())
    .then(object => setCustomer(object))
  } , [ params.id ])

  return (
    <div>{customer["email_address"]}</div>
  )
}

export default CustomerDetail