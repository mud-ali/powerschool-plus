import GPAHistory from "@/components/GPAHistory";
import Header from "@/components/Header";
import { userInfo } from "@/types/userInfo";

export default function Home(props: userInfo) {
  return (
    <div className="flex flex-row">
        <Header/>
        <div className="pl-4 pt-8">
            <h1 className="text-3xl font-bold block m-4">Welcome, {props.name}</h1>
            <GPAHistory gpa={props.pastGpas}/>
        </div>
    </div>
  )
}