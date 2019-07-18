import React from 'react';

function ListItems(props) {
    const items = props.items.map(
        (item, key) => <li key={key}>{item.value}
        <button onClick={() => props.remove(item)}>x</button>
        </li>
    );
    return (
        <ul>
            {items}
        </ul>
    );
}

export default ListItems;