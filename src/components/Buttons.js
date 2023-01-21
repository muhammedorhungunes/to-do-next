import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CustomModal from "./CustomModal"

export default function BasicButtons(props) {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);

  function handleClick() {
    props?.setShowTable(!props.showTable);
  }
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleClick}>
        Show Tasks
      </Button>
      <Button variant="contained" onClick={handleOpen}>
        Create Task
      </Button>
      {props?.showTable ? (
        <Button variant="outlined" color="error">
          Delete Task
        </Button>
      ) : (
        <></>
      )}
      <CustomModal openModal={openModal} setOpenModal={setOpenModal}></CustomModal>
    </Stack>
  );
}
