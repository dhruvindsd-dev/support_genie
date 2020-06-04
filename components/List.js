import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const List = () => {
  const listItems = ["item1", "item2", "item3", "item4", "item5"];
  let list1 = [];
  let list2 = [];
  // react hook
  const [list2State, setList2State] = useState([]);
  //  delete btn handle
  useEffect(() => {
    console.log("updated_list2", list2);
  });
  const handleDel = () => {
    setList2State(
      list2.reduce((total, item) => {
        if (item.checked === false) {
          total.push(item.id);
        }
        item.checked = false;
        return total;
      }, [])
      // callback_fn()
    );
  };
  //  add btn handle
  const handleAdd = () => {
    setList2State(
      list2State.concat(
        list1.reduce((total, item) => {
          if (item.checked) {
            total.push(item.id);
          }
          item.checked = false;
          return total;
        }, [])
        // callback_fn
      )
    );
  };

  return (
    <div className="section">
      <p className="title">Exercise 2</p>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child notification is-dark">
            <p className="title">List 1 </p>
            {listItems.map((item, index) => {
              return (
                <>
                  <label>
                    <span className="subtitle">{item}</span>
                  </label>
                  <input
                    id={item}
                    key={index}
                    type="checkbox"
                    ref={(el) => list1.push(el)}
                  />
                  <br />
                </>
              );
            })}
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child has-text-centered">
            <br />
            <button className="button is-link" onClick={handleAdd}>
              Add
            </button>
            <br />
            <br />
            <button className="button is-danger" onClick={handleDel}>
              Delete
            </button>
            <br />
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child notification is-dark">
            <p className="title">List 2</p>
            {list2State.map((item, index) => {
              return (
                <>
                  <label>
                    <span className="subtitle">{item}</span>
                  </label>
                  <input
                    id={item}
                    key={index}
                    type="checkbox"
                    ref={(el) => list2.push(el)}
                  />
                  <br />
                </>
              );
            })}
            {}
          </div>
        </div>
      </div>
      <Link to="/chatbot" className="button is-link is-medium">
        Link to exercise 1
      </Link>
    </div>
  );
};

export default List;
