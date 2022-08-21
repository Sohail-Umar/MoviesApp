import React from "react";
// Handle Pagination Component Code:


export default function Pagination({ totalPages, handlePagination }) {
    const totalPagesArray = [];
    for (let i = 0; i < totalPages; i++) {
        totalPagesArray[i] = i + 1;
    }
    return (
        <div>
            {totalPagesArray.map((value, index) => {
                return (
                    <button key={index} onClick={() => handlePagination(value)}>
                        {value}
                    </button>
                );
            })}
        </div>
    );
}

