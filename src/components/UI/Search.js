import React, {useState} from 'react';

const  Search = ({onSearch}) => {
    const [value, setInputValue] = useState('');

    const onChange = event => {
        setInputValue(event.target.value);
        onSearch(value);
    }

    const onSubmit = event => {
        if(value === '') return;
        onSearch(value);
    }
        return (
            <div>
                <div>
                    Search:
                    <input type="text" {...{value}} onChange={onChange}/>
                </div>
            </div>
        );
}

export default Search;