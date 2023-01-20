import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

export default function BasicButtons(props) {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
      <Modal
        keepMounted
        open={openModal}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Id:
          </Typography>
          <TextField fullWidth label="fullWidth" id="fullWidth" />
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Project Name:
          </Typography>
          <TextField fullWidth label="fullWidth" id="fullWidth" />
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Task Name:
          </Typography>
          <TextField fullWidth label="fullWidth" id="fullWidth" />
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Status:
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Stack>
  );
}
