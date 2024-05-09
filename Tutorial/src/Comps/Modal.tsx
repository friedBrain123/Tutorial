import React, {useState} from "react";

export default function Modal({value}) {
    const [isModal, setModal] = useState(value);
    return (
        <div>
            <button onClick={() => setModal(true)}>open</button>
            <div className={`${!isModal && "hidden"} fixed top-0 left-0 w-screen h-screen bg-green-500/50`}>Modal</div>;
        </div>
    );
}
