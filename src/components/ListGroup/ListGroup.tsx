import { useState } from "react";
import styles from "./ListGroup.moodule.css"; // For vanilla CSS
// {items: [], heading: string}

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            {/* use className={styles['list-group']} 
            but for best use it is rather not to use '-', rather use camel notation so we can write styles.listGroup rather than styles['list-group']
            use array and use .join method al of this using a space 
            example: className:{[styles.listGroup,styles.container].join(' ')}
            */}
            <ul className='list-group'>
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
