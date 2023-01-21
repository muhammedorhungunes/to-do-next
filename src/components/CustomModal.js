import * as React from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomModal(props) {
  const handleClose = () => props?.setOpenModal(false);
  const [status, setStatus] = React.useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Modal
      keepMounted
      open={props?.openModal}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
      <Box sx={style}>
        <Close
          style={{ float: "right", cursor: "pointer", margin: "10px" }}
          onClick={handleClose}
        />
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Id:
        </Typography>
        <TextField fullWidth label="Id" id="ID" />
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Project Name:
        </Typography>
        <TextField fullWidth label="Project Name" id="ProjectName" />
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Task Name:
        </Typography>
        <TextField fullWidth label="Task Name" id="TaskName" />
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
          Status:
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Not Started</MenuItem>
            <MenuItem value={20}>In Progress</MenuItem>
            <MenuItem value={30}>Completed</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" style={{ float: "right", margin: "10px" }}>
          Contained
        </Button>
      </Box>
    </Modal>
  );
}
