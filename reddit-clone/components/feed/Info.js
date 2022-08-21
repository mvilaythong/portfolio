const style = {
  profilePic: 'h-4 w-4 rounded-full',
  wrapper: 'flex items-center space-x-1 text-xs text=[#818384]',
  profilePicContainer: 'flex items-center space-x-1',
  tag: 'cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline',
  postedBy: 'flex items-center space-x-1'
}

const Info = () => {
    return (
        <div className={style.wrapper}>
          <div className={style.profilePicContainer}>
            <img
              className={style.profilePic} 
              src='https://i.ibb.co/Ks6r2s5/r-Ll-Cifh-XRJi-T0-Ro-N2-Fj-K-Logo-roundbackground-black.png'
            />
          </div>
          <div className={style.postedBy}>
            <div className={style.tag}>r/veganqueso</div>
            <div>•</div>
            <span>Posted by veganqueso</span>
            <span>•</span>
            <span>Aug 21</span>
          </div>
        </div>
    )
}

export default Info