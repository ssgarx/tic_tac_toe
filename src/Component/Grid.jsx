import React, { useState } from "react";
import Cell from "./Cell";
var tapCount = 0;
function Grid() {

    const [even, setEven] = useState([]);
    const [odd, setOdd] = useState([]);

    function checkForWin(player, arr, tapCount) {
        if (arr.includes("1") && arr.includes("2") && arr.includes("3")) {
            alert(`${player} wins`);
            purge();
        } else if (arr.includes("4") && arr.includes("5") && arr.includes("6")) {
            alert(`${player} wins`);
            purge();
        } else if (arr.includes("7") && arr.includes("8") && arr.includes("9")) {
            alert(`${player} wins`);
            purge();
        } else if (arr.includes("1") && arr.includes("4") && arr.includes("7")) {
            alert(`${player} wins`);
            purge();
        } else if (arr.includes("2") && arr.includes("5") && arr.includes("8")) {
            alert(`${player} wins`);
            purge();
        } else if (arr.includes("3") && arr.includes("6") && arr.includes("9")) {
            alert(`${player} wins`);
            purge();
        } else if (arr.includes("1") && arr.includes("5") && arr.includes("9")) {
            alert(`${player} wins`);
            purge();
        } else if (arr.includes("3") && arr.includes("6") && arr.includes("7")) {
            alert(`${player} wins`);
            purge();
        }
        if (tapCount === 9) {
            alert("Draw");
            purge();
        }
    }

    function purge() {
        for (var i = 1; i <= 9; i++) {
            document.getElementById(i).innerText = "";
        }
        setEven([]);
        setOdd([]);
        tapCount = 0;
    }


    function handleTap(e) {
        var tapped = (e.target.id);
        var tappedDOM = document.getElementById(tapped);
        if (!tappedDOM.innerText) {
            tapCount++;
            if (tapCount % 2 !== 0) {
                //odd
                tappedDOM.innerText = "X";
                setOdd(() => {
                    checkForWin("Player 1", [...odd, tapped], tapCount);
                    return [...odd, tapped];
                });
            } else {
                //even
                tappedDOM.innerText = "O";
                setEven(() => {
                    checkForWin("Player 2", [...even, tapped], tapCount);
                    return [...even, tapped]
                });
            }
        }
    }
    return (
        <div className="container" id="container">
            <div className="grid" onClick={(e) => handleTap(e)} id="grid">
                {[...Array(9)].map((value, index) => {
                    return <Cell id={index} key={index} />
                }
                )}
            </div>
        </div>
    );
}




export default Grid;