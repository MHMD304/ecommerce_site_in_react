const BASE_URL="http://localhost:3000/";
export const fetcher = async(url)=>{
    let responseObject = {errorMessage:'',data:[]};
    try{
        const response = await fetch(BASE_URL+url);
        if(!response){
            throw new Error(`HTTP ERROR:${response.status}`)
        }
        const jsonData = await response.json();
        responseObject.errorMessage = '';
        responseObject.data = jsonData;
        console.log(responseObject.data);
    }catch(err){
        responseObject.errorMessage = err.message;
    }
    return responseObject;
}
export const getCategories = ()=>{
    return  fetcher("categories");
}

export const getProductByCatId = id=>{
    return  fetcher("products?catId="+id);
}