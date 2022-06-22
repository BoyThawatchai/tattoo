import "./AppSearch.css"

function AppSearch (props) {
    const {value, onValurChange} = props
    return (
        <div className="app-search">
        <input className="app-search-input" type="text" placeholder="Search" value={value} onChange={(event) => {onValurChange(event.target.value)}}/>
        </div>
    )
}

export default AppSearch