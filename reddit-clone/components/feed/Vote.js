import { UpvoteIcon } from '../common/UpvoteIcon'
import { DownvoteIcon } from '../common/DownvoteIcon'

const Vote = () => {
    return (
        <div>
            <button>
                <UpvoteIcon />
            </button>

            <button>
                <DownvoteIcon />
            </button>
        </div>
    )
}

export default Vote