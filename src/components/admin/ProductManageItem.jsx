import { useContext, useState } from "react";
import trashCan from "../../assets/trash-can.png";
import edit from "../../assets/editing.png";
import instance from "../../utils/api";
import { ProductsContext } from "../../contexts/ProductsContext";
import { DELETE_ITEM } from "../../utils/actionTypes";
import UpdateProduct from "./UpdateProduct";
import Modal from "react-modal";
import "./productManageItem.css";

const ProductManageItem = ({ product }) => {
    const { title, price, image, id } = product;
    const { productsDispatch } = useContext(ProductsContext);

    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#E0EFFF",
            maxWidth: "90%",
            width: "700px",
            height: "43em",
            paddingTop: "0.3em",
            paddingBottom: "0.3em",
        },
        overlay: {
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
    };

    const handleClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        instance.delete(`/products/${id}`).then((res) => console.log(res));
        productsDispatch({
            type: DELETE_ITEM,
            payload: id,
        });
    };

    const openModal = (e) => {
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    return (
        <li className="product-management-list-item">
            <div className="product-management-first-3">
                <div className="product-management-img-title">
                    <div className="product-management-img-wrapper">
                        <img
                            src={image}
                            alt={title}
                            className="product-management-img"
                        />
                    </div>
                    <div className="product-management-title">
                        <span className="">{title}</span>
                    </div>
                </div>

                <div className="product-manage-price-wrapper">
                    <div className="">
                        <span>&pound;{price}</span>
                    </div>
                </div>
            </div>

            <div className="product-management-icons">
                <span onClick={openModal}>
                    <img
                        src={edit}
                        title="Update Product"
                        className="edit-icon"
                    />
                </span>

                <span onClick={handleClick}>
                    <img
                        src={trashCan}
                        alt="trash can"
                        title="Remove Product"
                        className="product-management-trash"
                    />
                </span>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <UpdateProduct product={product} closeModal={closeModal} />
            </Modal>
        </li>
    );
};

export default ProductManageItem;
