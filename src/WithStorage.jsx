import React from 'react'

const WithStorage = (WrappedComponent) => {
    
    function HOC(props){
            function save(key, data){
                localStorage.setItem(key, data);
            }
            function load(key){
                return localStorage.getItem(key);
            }
            function clear(){
                localStorage.clear();
            }
            return (
                <WrappedComponent {...props} save={save} load={load} clear={clear}/>
            )
    }
    return HOC;
}

export default WithStorage;
