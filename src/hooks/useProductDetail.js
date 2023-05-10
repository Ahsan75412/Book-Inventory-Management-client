import { useEffect, useState } from "react";


const useProductDetail = (productId) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://book-inventory-wvx9.onrender.com/product/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => { setProduct(data); });
    }, [productId]);

    return [product, setProduct];

}

export default useProductDetail;