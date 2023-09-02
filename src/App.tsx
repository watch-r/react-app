import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
import ListGroup from "./components/ListGroup/";
import Like from "./components/Like";

function App() {
    // const [firstName, setFirstName] = useState("Hola");
    // const [lastName, setLastName] = useState("James");
    // const fullName = firstName + " " + lastName;

    //! object state hook: Must Use Colon(:) example 'fisrtName:'
    const [person, setPerson] = useState({
        firstName: "hi",
        lastName: "go",
    });
    const [isLoading, setLoading] = useState(false);

    return <div>
        {/* { person } */}
    </div>;
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
