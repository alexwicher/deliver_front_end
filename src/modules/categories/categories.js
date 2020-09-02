import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoryList} from "../../shared/redux/actions/categoryListActions";
import {filterProductListByCategory} from "../../shared/redux/actions/productListActions";


function Categories() {
    const dispatch = useDispatch();
    const [categorySelected, setCategorySelected] = useState(0); //categoryID=0 is all

    function handleCategoryChange(e) {
        setCategorySelected(Number(e.target.value));
        dispatch(filterProductListByCategory(Number(e.target.value)));
    }
    useEffect(() => {
        dispatch(fetchCategoryList());
    }, []);
    const categoryListData = useSelector(state => state.categoryListReducer);
    return (
        categoryListData.loading ? (<h2> Loading ... </h2>) :
            categoryListData.error ? (<h2> {categoryListData.error} </h2>) : (
                <div className="categoryList">
                    <form>
                        <label className="category" id={0}>All products
                            <input type="checkbox" value={0} checked={categorySelected === 0}
                                   onChange={handleCategoryChange}/>
                        </label>
                        {categoryListData.categories.map(category => (
                            <label className="category" id={category.id}>{category.name}
                                <input type="checkbox" value={category.id} checked={categorySelected === category.id}
                                       onChange={handleCategoryChange}/>
                            </label>
                        ))}
                    </form>
                </div>
            ));
}

export default Categories;