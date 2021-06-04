

export const initialState={
    restaurants: [{
        id :"1",
        title:"Hotel Arman",
       place: "Gurujanguli",
       rating : 5,
       dishes:[{
           id: "11",
           name:"biriyani",
           price: 100 
        },
          {
              id: "12",
          name:"Mushroom",
           price: 100 
        },
        {
            id: "11",
            name:"biriyani",
            price: 100 
         },
           {
               id: "12",
           name:"Mushroom",
            price: 100 
         }
    ]
    
    },
    {
        id :"2",
        title:"Spectrum Club",
       place: "Gurujanguli",
       rating : 5,
       dishes:[{
           id: "21",
           name:"biriyani",
           price: 100 
        },
          {
              id: "22",
          name:"Mushroom",
           price: 100 
        }
    ]
    
    },
 ],
   
       basket:[],
    
     order:[],
       user:  null
   
   };
    const reducer =(state={initialState}, action)=>{
    
         switch(action.type){
           case 'SET_USER':
               return {...state, user : action.user}
               case 'REMOVE_USER':
               return {...state, user : null}
           case 'ADD_ORDER':
               const newOrderA =  [state.order,action.item]
    
               return {...state, order :newOrderA}  
        
           case 'REMOVE_ORDER':
              
               let newOrder = state.order.filter((item,id)=>{
                  
                       return action.id !== item.id
                  
               })
                      
               return {...state,order: newOrder}  
   
             case 'ADD_TO_BASKET':
            return {...state, basket:[...state.basket, action.item] }
            case 'REMOVE_BASKET':
                return {...state,basket:[]}   
       
            case 'REMOVE_FROM_BASKET':
               let newBasket = state.basket.filter((item)=>{
                   return action.id !== item.id
               })
               return {...state,basket: newBasket}
                  
                default:
                    return state; 
         }
   }
   export default reducer;