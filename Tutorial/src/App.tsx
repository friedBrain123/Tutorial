import React from "react";
import Modal from "./Comps/Modal";
import DropDown from "./Comps/DropDown";
import DropDownInternal from "./Comps/DropDownInternal";

export default function App() {
    return (
        <div className="bg-red-500 p-4">
            <Modal value={false} />
            <div className="flex gap-4">
                <DropDown>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            alert("option 1");
                        }}
                    >
                        option 1
                    </button>
                    <Modal />
                </DropDown>
                <DropDownInternal />

                <div>how to make drop donw button clicable with clicking ousdtide to disabled</div>
            </div>
        </div>
    );
}
