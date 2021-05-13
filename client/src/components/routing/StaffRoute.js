import { Redirect, Route } from 'react-router-dom'

const StaffRoute = ({component: Component, ...rest}) => {
    return (
        <div>
            <Route
                {...rest}
                render = {(props) => {
                        localStorage.getItem('staffToken') ? (
                            <Component {...props} />
                        ) : (
                            <Redirect to='/login' />
                        )
                    }
            />
        </div>
    )
}

export default StaffRoute