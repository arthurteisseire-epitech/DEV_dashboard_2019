import React, {useState} from 'react'


export default function SearchBar(props) {

    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
        props.onSearchTermChange(event.target.value);
    };

    return (
        <div>
            <input
                value={term}
                onChange={onInputChange}
            />
        </div>
    )
}
