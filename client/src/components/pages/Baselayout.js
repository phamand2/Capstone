import Navbar2 from '../Navbar'

const Baselayout = (props) =>  {

    return (
        <div>
            <Navbar2 />
            {props.children}
        </div>
    )
}


export default Baselayout