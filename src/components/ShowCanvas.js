// eslint-disable-next-line

import React, {useState} from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

function ShowCanvas({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="mycanvas">
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
          <img src="../images/cover10.jpg" width="30%" height="20%" alt="cover10"/>
          <p>Here am I</p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
// function Example() {
//   return (
//     <>
//       {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
//         <ShowCanvas key={idx} placement={placement} name={placement} />
//       ))}
//     </>
//   );
// }

// render(<Example />);

// export default ShowCanvas;