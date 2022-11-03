const SearchBox = (props) => (
    <div className="col col-sm-4">
        <input
            className="form-control"
            // value={props.value}
            onChange={e => props.setSearchValue(e.target.value)}
            placeholder="search here"
        />
    </div>
)
export default SearchBox