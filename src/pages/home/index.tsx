import { use, useState } from "react"
import { Link, useNavigate } from "react-router"
import { apiClient } from "../../actions/api-client"


const userPromise = apiClient.getCurrentLoggedInUser()

export default function HomePage() {

    const token = apiClient.getAccessToken()
    console.log(token)



    return (
        <>
            Home Page
        </>
    )
}

