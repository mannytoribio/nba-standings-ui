import { List } from "@mui/material"
import { useState, useEffect } from "react"
import { getAllTeams, Team } from "../service/team.service"
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TeamStandings () {
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    getAllTeams().then((ret) => setTeams(ret))
  }, [])

  return (
    <div>
      <Stack spacing={2}>
        {!teams.length
        ? <h2>Loading...</h2>
        : teams.map(item => {
          return <Item key={item._id}>{item.city} {item.name}</Item>
        })}
     </Stack>
    </div>
  )
}
