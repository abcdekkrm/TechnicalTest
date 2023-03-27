import React from "react";
import AlbumsList from "../Components/AlbumsList";
import PostList from "../Components/PostList";
import ToDoList from "../Components/ToDoList";
import UserList from "../Components/UserList";

function Home() {
  return(
    <>
      <div style={{width: '100vw', backgroundColor: '#E7EAEA', zIndex: '-2'}}>
        <div style={{ paddingTop: '85px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <UserList />
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