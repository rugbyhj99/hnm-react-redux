function getProducts(searchQuery){
    return async(dispatch, getState)=> {
        let url = `https://my-json-server.typicode.com/rugbyhj99/hnm-react/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data)
        dispatch( {type:"GET_PRODUCT_SUCCESS", payload: {data}})
    };
}

function getProductDetail(id) {
    return async(dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/rugbyhj99/hnm-react/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        dispatch( { type:"GET_PRODUCTDETAIL_SUCCESS", payload: { data } })

    };
}


export const productAction = {getProducts, getProductDetail}