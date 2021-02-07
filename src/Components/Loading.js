import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return ( 
        <ClipLoader
         color={"orange"} 
         css={{display: "block", margin:"0 auto"}} 
         size={100} />
     );
}
 
export default Loading;