import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { FILTER_ITEMS } from "../../utils/actionTypes";
import "./filterItems.css";
import cross from "../../assets/cross.png";
import check from "../../assets/check.png";

const FilterItems = () => {
    const { categories, productsDispatch } = useContext(ProductsContext);

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
        <div className="checkbox-wrapper">
            {categories.map((category, index) => (
                <div key={index}>
                    <label className="category-checkbox">
                        <input
                            type="checkbox"
                            checked={category.isChecked}
                            onChange={() => handleChange(index)}
                        />
                        <span className="checkbox-label">
                            <img
                                src={category.isChecked ? check : cross}
                                width={20}
                            />{" "}
                            <span className="just-label">{category.label}</span>
                        </span>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default FilterItems;
