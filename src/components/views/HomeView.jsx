import { useEffect, useState } from "react";
import instance from "../../utils/api";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
import "./homeView.css";
import Error from "../error/Error";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import fashionCollection from "../../assets/fashion-collection.jpg";

const HomeView = () => {
    const [jewelry, setJewerlry] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        instance
            .get("/products/category/jewelery")
            .then((res) => setJewerlry(res.data))
            .catch(() => setError(true))
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="main-page">
            {loading ? (
                <Loading className="loading" />
            ) : error ? (
                <div className="error">
                    <Error />
                </div>
            ) : (
                <div className="advertisement">
                    <Link to={"/products"}>
                        <img
                            src={fashionCollection}
                            alt="Fashion accessories for men and women"
                            className="fashion-collection"
                        />
                    </Link>
                    {jewelry.length ? (
                        <Carousel
                            className="crsl"
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={3000}
                            showStatus={false}
                            showThumbs={false}
                            showArrows={false}
                        >
                            {jewelry.map((item) => (
                                <Link to={`/products/${item.id}`} key={item.id}>
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                        />
                                        <p className="legend">
                                            JEWELLERY EXTRAVAGANZA! <br />{" "}
                                            LIMITED TIME DEALS!
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </Carousel>
                    ) : null}
                </div>
            )}
        </div>
    );
};

export default HomeView;
