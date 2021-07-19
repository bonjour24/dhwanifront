import React, { Component } from "react";

class Card extends Component {
  state = { list: [4201466059221871] };
  render() {
    const list = this.state.list;
    console.log(list);
    function stopInput(e) {
      const targ = e.target;
      if (targ.value.length > 2) targ.value = targ.value.slice(0, 4);
    }

    function keyUp(e) {
      var target = e.srcElement || e.target;
      var maxLength = parseInt(target.attributes["maxlength"].value, 10);
      var myLength = target.value.length;
      if (myLength >= maxLength) {
        var next = target;
        while ((next = next.nextElementSibling)) {
          if (next == null) break;
          if (next.tagName.toLowerCase() === "input") {
            next.focus();
            break;
          }
        }
      }
      // Move to previous field if empty (user pressed backspace)
      else if (myLength === 0) {
        var previous = target;
        while ((previous = previous.previousElementSibling)) {
          if (previous == null) break;
          if (previous.tagName.toLowerCase() === "input") {
            previous.focus();
            break;
          }
        }
      }
    }
    const addDetails = (e) => {
      e.preventDefault();
      const n1 = parseInt(document.getElementById("n1").value);
      const n2 = parseInt(document.getElementById("n2").value);
      const n3 = parseInt(document.getElementById("n3").value);
      const n4 = parseInt(document.getElementById("n4").value);
      if (
        n1.length !== 4 ||
        n2.length !== 4 ||
        n3.length !== 4 ||
        n4.length !== 4
      )
        alert("Card Info Incorrect!");
      else {
        const cardNum = "" + n1 + n2 + n3 + n4;
        parseInt(cardNum);
        const temp = [...list];
        temp.push(cardNum);
        this.setState({ list: temp });
      }
    };

    const handleDelete = (e) => {
      const temp = list.splice(1, e);
      this.setState({ list: temp });
    };
    
    return (
      <div className="cont">
        <div>Hi</div>
        <div className="cardHolder" onKeyUp={(e) => keyUp(e)}>
          Card Number <input id="n1" type="number" maxLength="4" />
          <input id="n2" type="number" maxLength="4" />
          <input id="n3" type="number" maxLength="4" />
          <input
            type="number"
            id="n4"
            maxLength="4"
            max="9999"
            onChange={(e) => stopInput(e)}
          />{" "}
          <br />
          <button onClick={(e) => addDetails(e)}>Add card details</button>
        </div>
        <div>
          {list.map((ele, index) => (
            <div key={index}>
              <p>
                {ele}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
