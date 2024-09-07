import React from "react";
// import { useAppDispatch } from "../../../../redux/hooks";
// import { toggle } from "../../../../redux/slices/home";

interface Props {
    content: string,
};


export function NavbarMenuContents({ content}: Props, key: string ) {
    // const dispatch = useAppDispatch();
    // function toggleMenuShow() {
    //     dispatch(toggle())
    // }
    return (
        <span key={key} className="">{content}</span>
    );
}