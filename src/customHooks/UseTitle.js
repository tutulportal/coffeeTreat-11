import { useEffect } from "react";

// Title Hook

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - CoffeeTreat`;
    },[title]);
};

export default UseTitle;