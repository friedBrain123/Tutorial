import React, {useState} from "react";

export default function DropDown({children}) {
    const [isDropdown, setDropdown] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setDropdown(true)}>Click</button>
            <div tabIndex={0} onBlur={() => setDropdown(false)} className={`${!isDropdown && "hidden"} max-lg:hidden absolute flex flex-col bg-white border-2 border-gray-600`}>
                {children}
            </div>
        </div>
    );
}
