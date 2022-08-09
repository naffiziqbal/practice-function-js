/*
1. IF tickate num,ber is less than 100: per Price = 100;

2. ifif ticket number is more than 100, but less than 200, first 100 tick will be 100 taka per tic rest will 80 taka;
3. if you take more than 200 tic first 100 will be 100 taka ;
100- 200 == 90 taka;
200+ == 70 taka; 

*/


function ticketPrice (ticketQuantity){
    const first100Rate = 100;
    const sec100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price
    }else if(ticketQuantity > 100 && ticketQuantity <= 200){
        const first100Price = first100Rate * 100;
        const restTicketQuantity = ticketQuantity - 100  ;
        const restTicketPrice = restTicketQuantity * sec100Rate;

        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = first100Rate * 100;
        const  sec100Price = 100 * sec100Rate;
        
        const restTicketQuantity = ticketQuantity - 200   ;
        const restTicketPrice = restTicketQuantity * restTicketRate;


        const totalPrice = restTicketPrice + first100Price + sec100Price;
        return totalPrice;
    }
}

console.log(ticketPrice(220));

