import React from 'react'
import styled from 'styled-components';
const MyInput = styled.input`
        outline:0px;
        border-top:none;
        border-left:none;
        border-right:none;
        border-width:2px ;
        border-style:solid ;
        border-color:${(props)=>props.active?props.theme:'white'};
        transition:0.2s all;
        border-radius:3px;
        width:100%;
        margin-top:${(props)=>props.active?'12px':'10px'};
        padding:11px 9px;
        &:focus{
                --tw-ring-shadow:none;
                border:2px solid #00dd22;
                margin-top:13px;
        }
        
        `;
        const MyLabel = styled.label`
        position:absolute;
        top:${(props)=>props.active?'-10px':'-17px'};
        left:0px;
        transition:0.2s all;
        color:${(props)=>props.active?props.theme:'white'};
        cursor:text;
        font-size:${(props)=>props.active?'12px':'16px'};
        width:min-content;
        border-radius:10px;
        ${MyInput}:focus + & {
                font-size: 12px;
                left:7px;
                top: 0px;
                color: #00dd22;
                background-color:white;
                padding:0px 10px;
                border:2px solid  #00dd22;
                margin-bottom:2px;
              }
        `;
        export default function CustomInput({label,type,value,theme, ...rest}){
                return(
                        <>
                        <div className="relative w-full min-w-min mt-[17px] pb-2 ">

                        <MyInput type = {type} id={label} value={value}  active={(value.length !== 0)} theme={theme} {...rest}/>
                        <MyLabel className=' whitespace-nowrap' htmlFor={label}  active={value.length !== 0} theme={theme}>{label}</MyLabel>
                        </div>
                        </>
                )
        }