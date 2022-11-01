import { useState } from "react";

const useHttp = (transformData) => {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [transformedData, setTransformedData] = useState();

    const sendRequest = async (requestConfig) => {

        setIsLoading(true);
        setIsError(false);
        setTransformedData('');

        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : requestConfig.body,
                headers : requestConfig.headers
            });
            
            if (transformData) {
                const data = await response.json();
                setTransformedData(transformData(data));
            }
            
        } catch(error) {
            setIsError(true);
            console.log(error);
        }
        setIsLoading(false);
    }

    return {
        isLoading,
        isError,
        transformedData,
        sendRequest
    }
}

export default useHttp;