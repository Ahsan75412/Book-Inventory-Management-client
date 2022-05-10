import { useEffect, useState } from "react";


const useProductDetail = (productId) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => { setProduct(data); console.log(data); });
    }, [productId]);

    return [product];

}

export default useProductDetail;