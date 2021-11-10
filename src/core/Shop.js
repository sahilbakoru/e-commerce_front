import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Card from './card';
import { getCategories, getFilteredProducts } from './apiCore';
import Checkbox from './Checkbox';
import {prices} from './fixedPrices';
import RadioBox from './Radiobox';
import Search from './Search'


const Shop = () => {
    const [myFilters, setMyFilters] = useState({
        filters : {category : [] , price : [] }
    })
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(false)
    const [limit, setLimit] = useState(6)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(0)
    const [filteredResults, setFilteredResults] = useState([])

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError()
            } else {
                setCategories(data)
            }
        })
    };

    const loadFilteredResults = newFilters => {
        // console.log(newFilters)
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if(data.error){
                setError(data.error)
            } else {
                setFilteredResults(data.data);
                setSize(data.size)
                setSkip(0)
            }
        })
    }

    
    const loadMore = () => {
        let toSkip = skip + limit
        // console.log(newFilters)
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if(data.error){
                setError(data.error)
            } else {
                setFilteredResults([...filteredResults, ...data.data]);
                setSize(data.size)
                setSkip(toSkip)
            }
        })
    }

    const loadMoreButton = () => {
        return  (
            size > 0 && size >= limit && (
                <button onClick={loadMore} className="btn btn-danger mb-5 ml-5">
                    Load More
                </button>
            )
        )
    }

    useEffect(() => {
        init();
        loadFilteredResults(skip, limit, myFilters.filters);
    }, []);

    const handleFilters = (filters, filterBy) => {
        // console.log("SHOP",filters, filterBy)
        const newFilters = {...myFilters}
        newFilters.filters[filterBy] = filters

        if(filterBy === 'price' ) {
            let priceValues = handlePrice(filters);
            newFilters.filters[filterBy] = priceValues;
        }

        loadFilteredResults(myFilters.filters)

        setMyFilters(newFilters)
    };

    const handlePrice = value => {
        const data = prices
        let array = []

        for(let key in data){
            if(data[key]._id === parseInt(value)){
                array = data[key].array
            } 
        }
        return array;
    };

 
    return (
        <Layout
            className="overflow-hidden container-fluid"
            title="Shop Page"
            discription="Search and find products of your choice"
        >
            <Search/>
            <div className="row mt-5">
                <div className="col-4" >
                    <h4 >Filter by categories</h4>
                    <br />
                    <ul >
                        <Checkbox categories={categories} handleFilters={ filters =>  handleFilters(filters, 'category')} />
                    </ul>

                    <h4 >Filter by price range</h4>
                    <br />
                    <div className='ms-4' >
                        <RadioBox prices={prices} handleFilters={ filters =>  handleFilters(filters, 'price')} />
                    </div>
                </div>
                <div className="col-8" >
                    <h2 className="mb-4">
                        Products
                    </h2>
                    <div className="row">
                        {filteredResults.map((p, i) => (
                            <Card key={i} product={p} />
                        ))}
                    </div>
                    <hr/>
                    {loadMoreButton()}
                </div>
            </div>
        </Layout>
    )

}

export default Shop;