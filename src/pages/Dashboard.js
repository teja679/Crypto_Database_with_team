import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DashboardWrapper from '../components/DBComp/DashboardWrapper'

const Dashboard = () => {
  const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get(API_URL).then(res => {
      res.data ? setData(res.data) : console.log('error')
    })
  }, [])
  return (
    <div>
      <DashboardWrapper data={data} />
    </div>
  )
}

export default Dashboard