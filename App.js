import Route from "./Route";
import { Provider } from "react-redux";
import store from "./Redux/Store";

export default function App() {
    return (
        <Provider store={store}>
            <Route />
        </Provider>

    );
}