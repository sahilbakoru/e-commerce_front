import React, { useState, useEffect } from 'react';
//import Layout from './Layout';
import { getCategories, list } from './apiCore';
import Card from './card'

const Search = () => {
    const [data, setData] = useState({
        categories: [],
        category: '',
        search: '',
        results: [],
        searched: false
    });

    const { categories, category, search, results, searched } = data;

    const loadcategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setData({ ...data, categories: data })
            }
        })
    };

    useEffect(() => {
        loadcategories()
    }, []);

    const searchData = () => {
        // console.log(search, category)
        if (search) {
            list({ search: search || undefined, category: category })
                .then(function (response) {
                    if (response.error) {
                        console.log(response.error)
                    } else {
                        setData({ ...data, results: response, searched: true })
                    }
                })
        }
    }

    const searchSubmit = (e) => {
        e.preventDefault();
        searchData()
    };

    const handleChange = (name) => event => {
        setData({ ...data, [name]: event.target.value, searched: false });
    };

    const searchMessage = (search, results) => {
        if(searched && results.length > 0){
            return `Found ${results.length} products`
        }
        if(searched && results.length < 1){
            return `No products found`
        }
    }

    const searchedProduct = (results = []) => {
        return (
            <div>
                <h2 className="mt-4 mb-4" >
                    { searchMessage(search, results)}
                </h2>
                <div className="row">
                    {results.map((product, i) => (<Card key={i} product={product} />))}
                </div>
            </div>
        )
    }

    const searchForm = () => (
        <form className="mt-5 mb-4" onSubmit={searchSubmit}>
            <span className="input-group-text" >
                <div className="input-group-text input-group-lg w-100">
                    <div className="input-group-prepend" >
                        <select className="btn mr-2" onChange={handleChange('category')}>
                            <option value="All">
                                All
                            </option>
                            {categories.map((c, i) => (
                                <option
                                    key={i}
                                    value={c._id}
                                >
                                    {c.name}
                                </option>))}
                        </select>
                    </div>
                    <input type="search" className="form-control ms-3" style={{ border: 'white' }} onChange={handleChange('search')} placeholder="Search by name" />
                </div>
                <div className="btn input-group-append" style={{ border: 'white' }} >
                    <button className="input-group-text">
                        Search
                    </button>
                </div>
            </span>
        </form>
    );

    return (
        <div>
            <div className="container" >
                {searchForm()}
                <div className="container-fluid">
                    {searchedProduct(results)}
                </div>
            </div>
        </div>
    )
};

export default Search;