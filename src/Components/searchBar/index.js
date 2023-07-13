import { AiOutlineSearch } from "react-icons/ai"
import "./index.css"
const SearchBar = () => {
    return (
        <div className="inputBody">
            <div className="d-flex">
                <div className="backColor">
                    <input placeholder="Search..." className="inputField"/>
                </div>
                <div className="position-relative">
                    <div className="inputicon">
                        <AiOutlineSearch style={{color:"white",fontSize:"26px"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchBar