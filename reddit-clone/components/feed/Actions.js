import { AnnotationIcon, GiftIcon, ShareIcon } from "@heroicons/react/outline"

const style = {
  icon: 'h-4 w-4',
  iconContainer: ''
}

const Actions = () => {
    return (
        <div>
          <div className={style.iconContainer}>
            <AnnotationIcon className={style.icon}/>
            <GiftIcon className={style.icon}/>
            <ShareIcon className={style.icon}/>
          </div>
        </div>
    )
}

export default Actions