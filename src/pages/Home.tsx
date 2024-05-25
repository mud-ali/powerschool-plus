import GPAHistory from "@/components/GPAHistory";
import Header from "@/components/Header";
import ScatterChart from "@/components/ScatterChart";
import { userInfo } from "@/types/userInfo";

export default function Home(props: userInfo) {
  return (
    <div className="flex flex-col items-center justify-center">
        <Header/>
        <div className="flex flex-row justify-around w-full">
            <div className="chart-container">
                <h1 className="text-3xl font-bold">GPA History</h1>
                <GPAHistory gpa={props.pastGpas}/>
            </div>
            <div className="chart-container">
                <h1 className="text-3xl font-bold">GPA Scatter Chart</h1>
                <ScatterChart gpa={[[1, 3.7], [2, 2.6], [3, 4.0], [4, 3.2], [5, 3.5], [6, 3.6], [7, 3.7]]} />
            </div>
        </div>
    </div>
  );
}