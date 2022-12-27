import { useState } from "react";
import { Popover, Button, Form, OverlayTrigger } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>No ice cream will actually be delivered</Popover.Body>
  </Popover>
);

const checkboxLabel = (
  <span>
    I agree to
    <OverlayTrigger placement="right" overlay={popover}>
      <span style={{ color: "blue" }}> Terms and Conditions</span>
    </OverlayTrigger>
  </span>
);

const SummaryForm = () => {
  const [termsAndConditionChecked, setTermsAndConditionChecked] =
    useState(false);

  const onHandlecheckboxClick = (event) => {
    setTermsAndConditionChecked(event.target.checked);
  };

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsAndConditionChecked}
          onChange={onHandlecheckboxClick}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button
        varinat="primary"
        type="submit"
        disabled={!termsAndConditionChecked}
      >
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;

// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// export default function SummaryForm() {
//   const [tcChecked, setTcChecked] = useState(false);

//   const checkboxLabel = (
//     <span>
//       I agree to
//       <span style={{ color: "blue" }}> Terms and Conditions</span>
//     </span>
//   );

//   return (
//     <Form>
//       <Form.Group controlId="terms-and-conditions">
//         <Form.Check
//           type="checkbox"
//           checked={tcChecked}
//           onChange={(e) => setTcChecked(e.target.checked)}
//           label={checkboxLabel}
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit" disabled={!tcChecked}>
//         Confirm order
//       </Button>
//     </Form>
//   );
// }
