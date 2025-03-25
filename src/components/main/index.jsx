import React from 'react'
import Categories from './categories'
import { Cards } from './cards'


const Main = () => {
    return (
        <div className="max-w-[1440px] mx-auto mt-[50xp] mb-[50px] ">
            <div className="container max-w-[1211px] mx-auto ">
                <div className="flex justify-between">

                    <Categories />
                    <Cards />
                </div>

            </div>


        </div>


    )
}

export default Main