// export  const Collapse = (props) => {
//   return (
//     <div>
//       <p className="d-inline-flex gap-1">
//         <a
//           className="btn btn-primary"
//           data-bs-toggle="collapse"
//           href={"#".concat(props.href)}
//           role="button"
//           aria-expanded="false"
//           aria-controls="collapseExample"
//         >
//           Link with href
//         </a>
//       </p>
//       <div className="collapse" id={props.href}>
//         <div className="card card-body">
//           {props.children}
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";

class Collapse extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
    };
  }

  showMore = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.showMore}>
          {React.Children.map(
            this.props.children,
            (children) => children.props.cardTitle
          )}
        </button>

        {this.state.showContent ? (
          <div className="collapse show" id={this.props.href}>
            <div className="card card-body">
            {/* {this.props.children} */}
            {React.Children.map(
            this.props.children,
            (children) => children
          )}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Collapse;
