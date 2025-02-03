import React from 'react';
import Data from '../Component/Data';
import UserData from '../Component/UserData';
import { useSelector } from 'react-redux';
import Skeleton from '../Component/Skeleton';

function Dashboard() {

  return (
    <div id='d'>
      <Data/>
      <UserData />
    </div>
  );
}

export default React.memo(Dashboard);
