import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { createTeam } from '../service/team.service';


export default function CreateATeam() {
  const [ name, setName ] = useState('')
  const [ city, setCity ] = useState('')

  const handleSubmission = async (e: any) => {
      e.preventDefault()
      await createTeam({ name, city })
  }

  return (
    <form onSubmit={handleSubmission}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-city"
            label="City"
            defaultValue="eg. Miami"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <TextField
            required
            id="outlined-name"
            label="Name"
            defaultValue="eg. Heat"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Button variant='outlined' onClick={handleSubmission}>Create Team</Button>
        </div>
      </Box>
    </form>
  );
}
