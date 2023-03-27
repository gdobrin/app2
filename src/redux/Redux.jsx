import { store } from './store'
import { Provider } from 'react-redux'
import Counter from './Counter'

const Redux = () => {
    return (<Provider store={store}>
        <Counter/>
    </Provider>)
}

export default Redux;