import Stripe from 'stripe'; 
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-09-30.acacia'
});

export async  function POST(req : Request ) {
    try {
        const {priceId , userId} = await req.json()  ; 
        if(!priceId || !userId) {
            return NextResponse.json(
                {error : "missing priceId or userId"},
                {status : 400} 
            )
        }; 

        const session = await stripe.checkout.sessions.create({
            mode : "subscription" , 
            payment_method_types : ['card'],
            line_items : [
                {
                    price : priceId , 
                    quantity : 1
                }
            ],
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/generate?session_id={{CHECKOUT_SESSION_ID}}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
            
            client_reference_id: userId,

        }) ; 
        return NextResponse.json({ sessionId : session.id}) ; 
    }catch(error){
        console.error("Error creating checkout session:", error);
    return NextResponse.json( //@ts-expect-error i dont know why but yea
      { error: "Error creating checkout session", details: error.message },
      { status: 500 }
    );
    }
}
