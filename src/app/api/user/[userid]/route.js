import { NextResponse } from "next/server"

export function DELETE(request,{params}){
    console.log(params);
    const {userid}=params;
    console.log(userid)
    return NextResponse.json({
        Message:"testing delete"
    })

    
}