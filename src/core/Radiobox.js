import React , {useState} from 'react';

const RadioBox = ({prices, handleFilters}) => {
    const [value, setValue]   =  useState(0);

    const handleChange = (event) => {
        handleFilters(event.target.value)
        setValue(event.target.value)
    }
    
    return prices.map((p, i) => (
        <div key={i}>
           <input onChange={handleChange} value={`${p._id}`} name={p}  className="mr-2 ml-4" type="radio" style={{cursor: "pointer"}}/>
            <label className="form-check-label ms-3">
                {p.name}
            </label>
        </div>
    ))
}

export default RadioBox;