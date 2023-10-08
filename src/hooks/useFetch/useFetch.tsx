import axios from 'axios'
import { useEffect, useState } from 'react'
import { ParkReturnData } from '../../types';


type UseFetchProps = {
    url: string;
}

const useFetch = ({ url }: UseFetchProps) => {
    const [data, setData] = useState<ParkReturnData | null>(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true);
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        }).catch((error) => {
            setError(error);
        }).finally(() => {
            setLoading(false)
        })
    }, [url])

    return { data, loading, error }
}

export default useFetch


//    "allowImportingTsExtensions": true,