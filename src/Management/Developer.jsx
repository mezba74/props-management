import React from 'react';

const Developer = (props) => {
    const {name,roll,department,hometown}=props
    return (
        <div className='border-3 border-green-400 rounded-xl p-5 text-center my-10'>
            <h1>Name :{name} </h1>
            <p>Roll : {roll}</p>
            <p>Department : {department}</p>
            <p>HomeTown : {hometown}</p>
        </div>
    );
};

export default Developer;