import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {


    return (
        <form onSubmit={onSubmit}>
            <input
                placeholder="Enter your search query"
                name="search"       
            />
            <button type="submit">Submit</button>
        </form>

    )
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}