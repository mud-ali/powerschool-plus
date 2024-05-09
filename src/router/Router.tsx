import { Route, Routes } from "react-router-dom";
import pagesData from "./pageData";
import type { pageInfo } from "@/types/pageInfo";

export default function Router() {
    const pageRoutes = pagesData.map(({ path, title, element } : pageInfo) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};