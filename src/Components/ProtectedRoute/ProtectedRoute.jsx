import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { userContext } from "../../Context/User.context"

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({children}) {
    let {token} = useContext(userContext)
    if(token){
        return children
    }else{
        return <Navigate to="/login" />
    }
}
