import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import type { pageInfo } from "@/types/pageInfo";

const pagesData : pageInfo[] = [
    {
        path: "",
        element: <Home />,
        title: "home"
    },
    {
        path: "*",
        element: <NotFound />,
        title: "home"
    }
];

export default pagesData;