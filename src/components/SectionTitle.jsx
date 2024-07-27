
const SectionTitle = ({subheading,heading}) => {
    return (
        <div className="w-4/12 mx-auto text-center mb-20">
            <p className="text-yellow-600 mb-3">--- {subheading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-3">{heading}</h3>
        </div>
    );
};

export default SectionTitle;