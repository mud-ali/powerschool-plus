import GPAHistory from "@/components/GPAHistory";
import Header from "@/components/Header";
import ScatterChart from "@/components/ScatterChart";
import { userInfo } from "@/types/userInfo";

export default function Home(props: userInfo) {

    function mean(arr: number[]) : number {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }

    function median(arr: number[]) : number {
        const sorted = [...arr].sort();
        return sorted[Math.floor(sorted.length / 2)];
    }

    return (
        <div className="flex flex-row items-center justify-between align-baseline">
            <Header />
            <div className="grid grid-cols-2 w-11/12">
                <div className="chart-container w-full inline-block h-full">
                    <h1 className="text-3xl font-bold">GPA History</h1>
                    <GPAHistory gpa={props.pastGpas} />
                </div>
                <div className="chart-container w-full inline-block h-full">
                    <h1 className="text-3xl font-bold">Featured: Math Grade Scatter Chart</h1>
                    <ScatterChart gpa={[97, 95, 90, 86, 88, 89, 91, 92].map((val, ind) => [ind, val])} />
                </div>
                <div className="chart-container w-full h-full">
                    <h1 className="text-3xl font-bold">Mean GPA</h1>
                    <p className="text-2xl">{mean(props.pastGpas).toFixed(2)}</p>
                </div>
                <div className="chart-container w-full h-full">
                    <h1 className="text-3xl font-bold">Median GPA</h1>
                    <p className="text-2xl">{median(props.pastGpas).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}