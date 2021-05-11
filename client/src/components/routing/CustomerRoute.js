import { Redirect, Route } from 'react-router-dom'

const CustomerRoute = ({component: Component, ...rest}) => {
    return (
        <div>
            <Route
                {...rest}
                render = {(props) => {
                        localStorage.getItem('customerToken') ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to='/login' />
                        )
                    }
            />
        </div>
    )
}

export default CustomerRoute