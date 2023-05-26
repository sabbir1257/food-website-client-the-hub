import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from '../SingleChef/SingleChef';
import RecipesCard from '../RecipesCard/RecipesCard';

const ViewDetails = () => {

    const data = useLoaderData()
    console.log(data)

    return (
        <main>
            <SingleChef chef={data} />
            <h1 className='text-center text-3xl font-bold mt-32'>Our Chef's All Recipe Items</h1>
            <section className='grid md:grid-cols-3 container gap-6 my-10'>
                {
                    data?.recipes && data.recipes.map((singleData, i) => <RecipesCard key={i} singleData={singleData} />)
                }
            </section>
        </main>
    );
};

export default ViewDetails;