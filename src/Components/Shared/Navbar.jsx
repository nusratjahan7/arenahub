import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <Link href={'/login'}>Login</Link>
            <Link href={'/signup'}>signup</Link>
        </div>
    );
};

export default Navbar;