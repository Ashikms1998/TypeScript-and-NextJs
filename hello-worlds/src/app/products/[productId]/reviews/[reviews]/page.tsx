import { notFound } from "next/navigation";
export default function ReviewDetail({
 params,
}: {
    params: {
        productId: string;
        reviews: string;
    };
}) {
    if(parseInt(params.reviews)>1000){
        notFound();
    }
    return (
        <h1>
            Review {params.reviews} for product {params.productId}
        </h1>
    );
}
