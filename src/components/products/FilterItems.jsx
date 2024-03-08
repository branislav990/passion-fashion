import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { FILTER_ITEMS, SORT_FILTERED_ITEMS } from "../../utils/actionTypes";
import instance from "../../utils/api";
import Swal from "sweetalert2";

const FilterItems = () => {
    const { categories, products, sorted, productsDispatch } =
        useContext(ProductsContext);

    const handleChange = (index) => {
        const updatedCategories = categories.map((category, i) =>
            i === index
                ? { ...category, isChecked: !category.isChecked }
                : category
        );

        if (
            updatedCategories[index].isChecked &&
            !products.some(
                (product) => product.category === updatedCategories[index].label
            )
        ) {
            instance
                .get("/products")
                .then((res) => {
                    const excludedElectronics = res.data.filter(
                        (item) => item.category !== "electronics"
                    );
                    productsDispatch({
                        type: SORT_FILTERED_ITEMS,
                        payload: {
                            products: excludedElectronics,
                            categories: updatedCategories,
                        },
                    });
                })
                .catch(() => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                });
        } else {
            productsDispatch({
                type: FILTER_ITEMS,
                payload: {
                    categories: updatedCategories,
                    category: updatedCategories[index].label,
                    isChecked: updatedCategories[index].isChecked,
                },
            });
        }
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
