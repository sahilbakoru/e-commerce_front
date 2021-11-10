import React, {useState} from 'react';

const Checkbox = ({categories , handleFilters}) => {

    const [checked, setCheked] = useState([])

    const handleToggle = c => () => {
        // return the first index or -1
        const currentCategoryId = checked.indexOf(c) 
        const newCheckedCategoryId = [...checked]

        //if currently checked was not already in checked state > push
        //else pull/takeoff
        
        if(currentCategoryId === -1){
            newCheckedCategoryId.push(c)
        } else{
            newCheckedCategoryId.splice(currentCategoryId, 1)
        }
        
        // console.log(newCheckedCategoryId)
        setCheked(newCheckedCategoryId)
        handleFilters(newCheckedCategoryId)
    }

    return categories.map((c, i) => (
        
        <li key={i} className="list-unstyled" >
           <input onChange={handleToggle(c._id)} value={checked.indexOf(c._id === -1)}  className="form-check-input" type="checkbox" style={{cursor: "pointer"}}/>
            <label className="form-check-label ms-3" >
                {c.name}
            </label>
        </li>
        
    ))
}

export default Checkbox;