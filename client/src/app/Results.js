"use client";
import React from 'react'

 // This is a client component

export default function Results( {data={defProp} }){
    return (
        <div>
            <div>{data.ammonia}</div>
        </div>
        
    )
}

const defProp = {
    ammonia: ""
    // nitrate: nitrate,
    // nitrite: nitrite,
    // phosphate: phosphate,
    // calcium: calcium,
    // alkalinity: alkalinity,
    // magnesium: magnesium,
    // salinity: salinity,
    // pH: pH,
    // chlorine: chlorine,
}


