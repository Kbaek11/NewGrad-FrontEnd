import Link from 'next/link';

export default ({children}) => (
    <div>
        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </nav>
        </header>
        {children}
    </div>
);
