import React, {useEffect} from "react";
import Spinner from "../components/spinner";

const withFetchItems = (Component) => {


    return function (props) {
        useEffect(() => {
            props.fetchItems()
        },[])

        if (props.loading) {
            return <Spinner/>
        }
        return <Component {...props}/>
    }
}


export default withFetchItems