import { authContext } from "@/context/authContext";
import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function Comments({ id }) {
  const queryClient = useQueryClient();
  const { access, user } = useContext(authContext);
  const [commentText, setCommentText] = useState("");
  const { data } = useQuery(["comments", id], async () => {
    const res = await axios.get(
      `https://modulus-project.onrender.com/commentairs/${id}`,
      {
        headers: {
          Authorization: `JWT ${access}`,
        },
      }
    );
    return res.data;
  });
  const mutation = useMutation(
    () => {
      axios.post(
        `https://modulus-project.onrender.com/commenter/${id}/`,
        {
          commentaire: commentText,
        },
        {
          headers: {
            Authorization: `JWT ${access}`,
          },
        }
      );
    },
    {
      onSuccess: async () => {
        await queryClient.cancelQueries(["comments", id]);
        queryClient.setQueryData(["comments", id], (old) => {
          return [
            {
              commentaire: commentText,
              user,
              time: new Date().toISOString(),
            },
            ...old,
          ];
        });
      },
    }
  );
  const handleComment = useCallback((e) => {
    e.preventDefault();
    mutation.mutate();
  }, []);
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Comments ({data ? data.length : 0})
          </h2>
        </div>
        <form className="mb-6" onSubmit={handleComment}>
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              id="comment"
              rows="6"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 ml-auto"
          >
            Post comment
          </button>
        </form>
        {data
          ? data.map(({ commentaire, user, time }) => (
              <article
                className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900"
                key={time}
              >
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center flex-wrap">
                    <p className="inline-flex items-center mr-3 mb-2  text-gray-900 dark:text-white">
                      <img
                        className="mr-2 w-6 h-6 rounded-full"
                        src={`https://modulus-project.onrender.com${user.photo}`}
                      />
                      {user.first_name} {user.last_name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <time>
                        {time.slice(0, 10)}, {time.slice(11, 19)}
                      </time>
                    </p>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">
                  {commentaire}
                </p>
                <div className="h-[1px] w-full my-4 bg-gray-200"></div>
              </article>
            ))
          : null}
      </div>
    </section>
  );
}

export default Comments;
