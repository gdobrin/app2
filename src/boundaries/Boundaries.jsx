import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./Fallback"
import Counter from "./Counter";

const Boundaries = () => {
    return (
        <ErrorBoundary FallbackComponent={Fallback}>
          <Counter />
        </ErrorBoundary>)
}

export default Boundaries