import Post from '../common/Post'

// TODO replace dummy data with database
const posts = [
    {id: 0, title: 'build reddit', author: 'veganqueso'},
    {id: 1, title: 'build tik tok', author: 'pjork'},
    {id: 2, title: 'build twitter', author: 'mellowyellow'},
]

const style = {
  wrapper: 'space-y-2.5'
}

const Feed = () => {
    return (
      <div className={style.wrapper}>
        {posts.map((post) => (
            <Post {...post}/> //de-structure each post in array
        ))}
      </div>  
    )
}

export default Feed