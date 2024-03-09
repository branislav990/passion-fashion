import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { FILTER_ITEMS } from "../../utils/actionTypes";

const FilterItems = () => {
    const { categories, productsDispatch } =
        useContext(ProductsContext);

    const handleChange = (index) => {
        productsDispatch({
            type: FILTER_ITEMS,
            payload: {
                categories: categories.map((category, i) =>
                    i === index
                        ? { ...category, isChecked: !category.isChecked }
                        : category
                ),
            },
        });
    };

    return (
        <div>
            {categories.map((category, index) => (
                <div key={index}>
                    <label>
                        <input
                            type="checkbox"
                            checked={category.isChecked}
                            onChange={() => handleChange(index)}
                        />
                        <span>{category.label}</span>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default FilterItems;
