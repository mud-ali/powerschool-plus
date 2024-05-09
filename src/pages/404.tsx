export default function NotFound() {
    return (
        <div className="mx-auto w-1/5 text-lg text-center mt-16">
            <h1 className="text-7xl">404</h1>
            <br />
            <p>Page not found
                <br /> <br />
                Lost? Go <a href="/" className="text-blue-700 underline">Home.</a>
            </p>
        </div>
    );
}