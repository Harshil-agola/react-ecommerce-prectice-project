import { Link } from "react-router";

export default function HomePage() {
    return (
        <div>
            Home
            <Link to={"/products"} />
        </div>
    )
}
