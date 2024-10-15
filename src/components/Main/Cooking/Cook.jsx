
const Cook = ({cook}) => {
    const {recipe_name, preparing_time, calories} = cook;
    return (
        <div>
            <h1 className="text-sm bg-slate-400">{recipe_name}{preparing_time}{calories}</h1>
        </div>
    );
};

export default Cook;