import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import ListGroup from "./components/ListGroup/";
import Like from "./components/Like";


function App() {

    return (
        <div>
            <Like onClick={()=> console.log('clicked')}/>
        </div>
    )
    // const items = ['New york', 'Dhaka', 'New Delhi', 'Islamabad']
    // return(
    //     <div>
    //         <ListGroup items={items} heading="Cities" onSelectItem={()=> console.log('clicked')} />
    //     </div>
    // );
    // const [alertVisible, setAlertVisibility] = useState(false);
    // return (
    //     <div>
    //         {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
    //         <Button color='primary' onClick={() => setAlertVisibility(true)}>
    //             No Button
    //         </Button>
    //     </div>
    // );
}
export default App;
