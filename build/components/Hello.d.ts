/// <reference types="react" />
import "./Hello.css";
interface HelloProps {
    name: string;
    lang: string;
}
declare function Hello(props: HelloProps): JSX.Element;
export default Hello;
