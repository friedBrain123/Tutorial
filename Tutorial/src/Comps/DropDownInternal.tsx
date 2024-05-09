import React, {useState} from "react";

export default function DropDownInternal() {
    const [isDropdown, setDropdown] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setDropdown(true)}>Click</button>
            <div tabIndex={0} className={`${!isDropdown && "hidden"} max-lg:hidden absolute flex flex-col bg-white border-2 border-gray-600`}>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        alert("option internal 1");
                    }}
                >
                    option 1
                </button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        alert("option internal 2");
                    }}
                >
                    option 2
                </button>
            </div>
        </div>
    );
}
