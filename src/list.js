import React from "react";
import owner from "./avatar.png";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allheader: props.Allheader,
      list: props.list
    };
  }
  state = {};
  dragStart = (ev, data) => {
    ev.dataTransfer.setData("text", data);
  };
  drop_handler = (ev, index, isList = true) => {
    ev.preventDefault();
    let itemPrev = ev.dataTransfer.getData("text");
    let currentData = index;
    let items = isList ? this.state.list : this.state.allheader;
    let swap = items[itemPrev];
    items[itemPrev] = items[currentData];
    items[currentData] = swap;
    if (isList) {
      this.setState({ list: items });
    } else {
      this.setState({ allheader: items });
    }
  };
  dragover_handler = (e, index) => {
    e.preventDefault();
  };
  tableHeader = header => {
    return (
      <div className="row">
        {header.map((row, index) => (
          <div
            className="items"
            key={index}
            draggable={true}
            onDragStart={e => this.dragStart(e, index)}
            onDrop={e => this.drop_handler(e, index, false)}
            onDragOver={e => this.dragover_handler(e, index)}
          >
            <span>{row.label}</span>
          </div>
        ))}
      </div>
    );
  };
  tableBody = (Allheader, list) => {
    return list.map((lrow, index) => (
      <div
        className="row"
        key={index}
        draggable={true}
        onDragStart={e => this.dragStart(e, index)}
        onDrop={e => this.drop_handler(e, index)}
        onDragOver={e => this.dragover_handler(e, index)}
        id={lrow.id}
      >
        {Allheader.map((hrow, keyIndex) => (
          <div className="items" key={keyIndex}>
            <span>
              {hrow.key !== "status" &&
                hrow.key !== "priority" &&
                lrow[hrow.key]}
              {hrow.key === "owner" && <img src={owner} alt="Avatar" />}
              {hrow.key === "status" && (
                <>
                  <button
                    className={`status ${lrow[hrow.key]
                      .replace(/\s/g, "")
                      .toLowerCase()}`}
                  >
                    {lrow[hrow.key]}
                  </button>
                  <span
                    className={`dot ${lrow[hrow.key]
                      .replace(/\s/g, "")
                      .toLowerCase()}`}
                  ></span>
                  <span className="bslue"></span>
                </>
              )}
              {hrow.key === "priority" && (
                <button
                  className={`priority ${lrow[hrow.key]
                    .replace(/\s/g, "")
                    .toLowerCase()}`}
                >
                  {lrow[hrow.key]}
                </button>
              )}
            </span>
          </div>
        ))}
      </div>
    ));
  };
  addNew = () => {
    let items = this.state.list;
    items.push(this.state.list[0]);
    this.setState({ list: items });
  };
  render() {
    const { allheader, list } = this.state;
    return (
      <div className="container">
        <div className="list">
          <div className="head">{this.tableHeader(allheader)}</div>
          <div className="list-body">{this.tableBody(allheader, list)}</div>
          {this.props.addItems && (
            <div class="addItems">
              <div className="row">
                <button className="btn " onClick={() => this.addNew()}>
                  Add New
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default List;
