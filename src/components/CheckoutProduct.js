import React from "react";
import Image from "next/image";
import {StarIcon} from "@heroicons/react/20/solid"
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket,removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
    id,
    title,
    price,
    description,
    category,
    rating,
    image,
    hasPrime
}) {

    const dispatch = useDispatch();
    const additemstoBasket =() =>{
        const product ={
            id,
            title,
            price,
            description,
            category,
            rating,
            image,
            hasPrime 
        }
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket =() =>{
        dispatch(removeFromBasket({id}))

    }
    
  return (
    <div className="grid grid-cols-5">
        <Image src={image} height={200} width={200} objectFit="contain"/>
    
    <div className="col-span-3 mx-5">
    <p>{title}</p>
    <div className="flex">
        {Array(rating)
        .fill()
        .map((_, i) =>{
            <StarIcon key={i} className="h-5 text-yellow-500"/>
        })}
        </div>
        
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <CurrencyFormat value={price} displayType={"text"} thousandSeparator={true} prefix={"$"}/>
        
        {hasPrime &&(
        <div className="flex items-center space-x-2">
            <img
            loading="lazy" 
            className="w-12"
            src="https://links.papareact.com/fdw" 
            alt=""
            />
            <p className="text-xs text-gray-500">Free Next Day Delivery</p>
        </div>    
        )}
    </div>
    <div className="flex flex-col space-y-2 my-auto justify-self-end">
    <button className="button" onClick={additemstoBasket}>Add to Basket</button>
    <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
    </div>
    </div>
  );
}

export default CheckoutProduct