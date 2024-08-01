import React from 'react';
import Post from '../../../../models/Post';
import useInfiniteScroll from './useInfiniteScroll';
import PostAllComments from './PostAllComments';
import { RxCross2 } from 'react-icons/rx';
import { PostDetails } from './PostDetails';


export default function PostFeed () {
    
    //show all comments when the user clicks on the comment input
    const [showAllComment, setShowAllComment] = React.useState(false);
    const showComment = () => {
        setShowAllComment(true);
    };
    const closeComment = () => {
        setShowAllComment(false);
    };

    //getting the data of posts from the Post model
    const [post, setPost] = React.useState<Post[]>([]);
    const [page, setPage] = React.useState(1);
    const [morePost, setMorePost] = React.useState(true);

    React.useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postList = await Post.all(page);
                setPost([...post, ...postList]);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        fetchPosts();
    }, [page]);

    useInfiniteScroll(() => {
        if (morePost) {
            setPage(page + 1);
        }
    });

    return (
        <>
        {post.map((post) => (
            <PostDetails key={post.id} post={post} showComment={showComment} />
        ))}
        {morePost && <div id="scroll-anchor" style={{ height: '1px' }}></div>}

        {showAllComment && (
                <>
                    <button
                        className="fixed top-4 text-xl z-10 cursor-pointer"
                        onClick={closeComment}
                    >
                        <RxCross2 />
                    </button>
                    <PostAllComments />
                </>
            )}
        </>
    )
}