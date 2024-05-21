import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import type { pageInfo } from "@/types/pageInfo";
import { userInfo } from "@/types/userInfo";

const fakeUser : userInfo = {
    name: "Mudasir",
    gpa: 3.5,
    pastGpas: [
        3.7, 2.6, 4.0, 3.2, 3.5, 3.6, 3.7
    ],
}

const pagesData : pageInfo[] = [
    {
        path: "",
        element: <Home {...fakeUser}/>,
        title: "home"
    },
    {
        path: "*",
        element: <NotFound />,
        title: "home"
    }
];

export default pagesData;