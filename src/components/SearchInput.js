export default function SearchInput(props) {    
    return (
        <div className="container">
            <div className="input-group mb-3 mt-3">
                <input onChange={(e) => props.setSearchQuery(e.target.value)} type="text" className="form-control" placeholder="Add movie name" aria-label="Add movie name" aria-describedby="button-addon2" />
                <button onClick={props.findMovie} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
        </div>
    )
}