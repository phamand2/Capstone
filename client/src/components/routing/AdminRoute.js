import { Redirect, Route } from 'react-router-dom'

const AdminRoute = ({component: Component, ...rest}) => {
    return (
        <div>
            <Route
                {...rest}
                render = {(props) => {
                        localStorage.getItem('adminToken') ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to='/login' />
                        )
                    }
            />
        </div>
    )
}

export default AdminRoute