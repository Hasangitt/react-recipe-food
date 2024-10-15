import Cook from "./Cook";

const Cooking = ({cookings}) => {
    return (
        <div className="border rounded-md w-1/3 rounded-md h-auto">
            <h1 className="text-center mt-5 text-2xl font-semibold">Want to cook:{cookings.length} </h1>
            {
                cookings.map(cook => <Cook key={cook.id} cook={cook}></Cook>)
            }
        </div>
    );
};

export default Cooking;