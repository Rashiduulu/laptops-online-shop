// import React, { useState } from "react";

// interface Review {
//   id: number;
//   name?: string;
//   comment: string;
// }

// interface MessageBoxProps {
//   onSubmit: (review: Review) => void;
//   isLoggedIn: boolean;
// }

// const MessageBox: React.FC<MessageBoxProps> = ({ onSubmit, isLoggedIn }) => {
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setMessage(event.target.value);
//     setError("");
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (isLoggedIn) {
//       if (message.trim() !== "") {
//         const newReview = {
//           id: Date.now(),
//           name: "",
//           comment: review.message,
//         };
//         onSubmit(newReview);
//         setMessage("");
//         setError("");
//       } else {
//         setError("Please enter a message");
//       }
//     } else {
//       setError("You must be logged in to submit a review");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <textarea value={message} onChange={handleChange} />
//       <button type="submit" disabled={!isLoggedIn}>
//         Submit
//       </button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default MessageBox;
