import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CustomModal from "./CustomModal";
import { useDispatch } from 'react-redux';
import {
    decrement
  } from './TasksSlice';

export default function BasicButtons(props) {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const dispatch = useDispatch();

  function handleClick() {
    props?.setShowTable(!props.showTable);
  }

  function deleteRow() {
    dispatch(decrement(props?.selectedRows))
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
        <Button variant="outlined" color="error" onClick={deleteRow}>
          Delete Task
        </Button>
      ) : (
        <></>
      )}
      <CustomModal openModal={openModal} setOpenModal={setOpenModal}></CustomModal>
    </Stack>
  );
}
