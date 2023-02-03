import { useEffect, useState } from "react";
import { get, post } from "../../Services/Api"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Inspection = ({ }) => {

    const [test, setTest] = useState<any>("");
    const [message, setMessage] = useState('');

    const [updated, setUpdated] = useState(message);

    const handleChange = (event: any) => {
        setMessage(event.target.value);
    };

    const handleChangeUpdated = (event: any) => {
        setUpdated(event.target.value);
    };

    const handleClick = () => {   
        console.log("handleClick")   
        postInspection();
    };

    const handleGet = () => {         
        getInspection();
    };

    const getInspection = async () => {  
        //ukvKr0Fh   
        const response = await get("/crawl", updated).then((result: any) =>{
            console.log("result do get:",result);
            if(result.data){
                setTest(result);
            }
            else{
                toast.error(result.response.data.message)
            }
        });
        console.log("responseee:", response)
        setTest(response);
    }

    const postInspection = async () => {
        const body = {keyword: message};

        post("/crawl", body).then((result) => {
            console.log(result);
        });
    }
 
    return (
        <>
        <ToastContainer autoClose={3000}/>
            <div>
                <input
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                />

            <button onClick={handleClick}>Insert</button>
            
            <div>
            <input
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChangeUpdated}
                    value={updated}
                />
            </div>
            <button onClick={handleGet}>Update</button>
            </div>
        </>
    );

}

export default Inspection;
