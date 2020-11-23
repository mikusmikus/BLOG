import React, { FC } from 'react';
import './addComment.css';

type Props = {
  inputValue: string;
  inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  saveCommentHandler: () => void;
};

const AddComment: FC<Props> = ({
  inputChangeHandler,
  inputValue,
  saveCommentHandler,
}) => {
  return (
    <div className="input-wrapper">
      <input
        className="input"
        type="text"
        name="comment"
        id=""
        placeholder="add your comment here..."
        value={inputValue}
        onChange={inputChangeHandler}
      />
      <button
        type="button"
        className="input__button"
        onClick={saveCommentHandler}
      >
        add comment
      </button>
    </div>
  );
};

export default AddComment;
