import React, { useEffect, useState } from 'react';
import { getAllTeams, Team } from './service/team.service';
import './App.css';


export const App = () => {
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    getAllTeams().then((ret) => setTeams(ret))
  }, [])

  return <></>
}

