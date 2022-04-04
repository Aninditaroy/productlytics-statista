import { useEffect, useState } from "react"
const useBarRecharts= () => {
    const [data2,setData2] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData2(data));
    }, []);
    return [data2,setData2];
}
export default useBarRecharts;