import Navbar from '../Navbar'
const Baselayout = (props) =>  {

    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}


export default Baselayout