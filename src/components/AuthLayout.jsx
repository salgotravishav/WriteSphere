//mechanism to protect pages and routes
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"

export default function Protected({children , authentication = true}) {

    const navigate = useNavigate()
    const[loader,setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(()=>{
        //making it less complex
        if(authentication && authStatus !== authentication){
            navigate("/")
        }
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authentication,authStatus,navigate])

  return loader ? <div>Loading</div> : <>{children}</>
}

Protected.propTypes = {
    children: PropTypes.node.isRequired, // children is required and must be React elements
    authentication: PropTypes.bool,      // authentication is optional and defaults to true
  };


