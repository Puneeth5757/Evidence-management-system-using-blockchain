import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { AuthClient } from "@dfinity/auth-client";

const Root = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const initializeAuthClient = async () => {
            const authClient = await AuthClient.create();
            await authClient.login({
                identityProvider: "https://identity.ic0.app/#authorize",//2623109
                onSuccess: () => {
                    setIsAuthenticated(true);
                    setIsLoading(false); // Set loading to false after successful login
                },
                onError: (error) => {
                    console.error("Login failed:", error);
                    setIsLoading(false); // Set loading to false even if login fails
                }
            });
        };

        initializeAuthClient();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? <App /> : <div>Please log in</div>;
};

ReactDOM.render(<Root />, document.getElementById("root"));
