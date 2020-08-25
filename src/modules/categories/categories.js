import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoryList} from "../../shared/redux/actions/categoryListActions";

function Categories() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoryList());
    }, []);
    const categoryListData = useSelector(state => state.categoryListReducer);
    return (
        categoryListData.loading ? (<h2> Loading ... </h2>) :
            categoryListData.error ? (<h2> {categoryListData.error} </h2>) : (
                <div>
                    {categoryListData.categories.map(category => (
                        <div>
                            <h1>{category.name}</h1>
                        </div>
                    ))}
                </div>
            ));
}

export default Categories;