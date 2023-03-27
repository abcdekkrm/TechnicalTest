import React from "react";
import { useMediaQuery } from 'react-responsive';
import AlbumsList from "../Components/AlbumsList";
import PostList from "../Components/PostList";
import ToDoList from "../Components/ToDoList";
import UserList from "../Components/UserList";
import UserListDrawer from "../Components/UserListDrawer";

function Home() {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });

  return(
    <>
      <div style={{width: '100vw', backgroundColor: '#E7EAEA', zIndex: '-2'}}>
        <div style={{ paddingTop: '85px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          {isTablet
            ?
            <UserListDrawer />
            :
            <UserList />
          }
          <PostList notHome={false} />
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <ToDoList notHome={false}/>
            <AlbumsList notHome={false} userAlbums={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;