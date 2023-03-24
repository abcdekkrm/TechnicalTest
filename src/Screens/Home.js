import React from "react";
// import PersonIcon from '@mui/icons-material/Person';
import PostList from "../Components/PostList";
import UserList from "../Components/UserList";

function Home() {
  // const [users, setUsers] = React.useState([]);
  // useEffect(() => {
  //   getUsers();
  // });
  // function getUsers() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) => response.json())
  //   .then((json) => {setUsers(json)});
  // }
  // const getUser = (id) => {
  //   console.log(id);
  // }
  return(
    <>
      {/* <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center', paddingTop: '65px', backgroundColor: '#00395E'}}> */}
      {/* <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', paddingTop: '80px', backgroundColor: '#00395E' }}> */}
      <div style={{width: '100vw', backgroundColor: '#B1D6ED', zIndex: '-2'}}>
        {/* <div style={{ fontSize: 40, color: 'white', marginRight: '30px', fontWeight: 'bold' }}>Users</div> */}
        <div style={{position: 'fixed', paddingTop: '80px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {/* <div style={{paddingLeft: '20px', fontSize: '20px', color: ''}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <PersonIcon sx={{fill: 'white'}}/>
              <div>users</div>
            </div>
          </div> */}
          <UserList />
        </div>
        <div style={{marginLeft: '400px', paddingTop: '80px', paddingBottom: '20px'}}>
          <PostList />
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;