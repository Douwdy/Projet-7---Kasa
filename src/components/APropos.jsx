import { Fragment } from "react";
import DropdownMenu from "./DropdownMenu";

const APropos = () => {
    return (
        <Fragment>
            <img src="../assets/paysage2.jpg" alt="" />
            <DropdownMenu 
                content=""
                name="Fiabilité" 
                renderItem={(item) => <span>{item}</span>} 
            />
            <DropdownMenu 
                content=""
                name="Respect" 
                renderItem={(item) => <span>{item}</span>} 
            />
            <DropdownMenu 
                content=""
                name="Service" 
                renderItem={(item) => <span>{item}</span>} 
            />
            <DropdownMenu 
                content=""
                name="Sécurité" 
                renderItem={(item) => <span>{item}</span>} 
            />
        </Fragment>
    );
}

export default APropos;