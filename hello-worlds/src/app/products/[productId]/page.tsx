export default function productDetails({
    params //the link we have given in url can be accessd using this
}:{
    params:{productId:string}//type defined for type script
}){
    return <h1>Details about product {params.productId}</h1>
}