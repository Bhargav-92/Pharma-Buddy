import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

function ProtectedRoutes(props) {
    const navigate = useNavigate();
    const {Component} = props;

    useEffect(()=>{
        let login =localStorage.getItem("login");
        if(!login){
            localStorage.setItem("Login Status :- ","Please Login to view dashboard")
            navigate("/",{replace:true});
        }
    }, [])

   
    return <Component/>;
}

export default ProtectedRoutes;
