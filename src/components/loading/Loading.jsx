import { ReactComponent as Spinner } from "../../assets/spinner.svg";

const Loading = () => {
    return (
        <span className="react-spinner">
            <Spinner fill='#149ECA' />
        </span>
    );
};

export default Loading;
