import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocument } from "../utils/Firebase/firebase.utils";


export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, SetCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocument();
            SetCategoriesMap(categoryMap)
        }

        getCategoriesMap();
    }, [])

    const value = {categoriesMap}

    return <CategoriesContext.Provider value={value}>{ children }</CategoriesContext.Provider>
}