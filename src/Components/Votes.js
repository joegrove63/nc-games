import React from 'react';
import { patchVotes } from '../utils/api';
import { useState } from 'react';

const Vote = ({ votes, review_id }) => {
  const [votesChange, setVotesChange] = useState(0);
  const upVote = () => {
    setVotesChange((currVotes) => currVotes + 1);
    patchVotes(review_id, 1).catch(() => {
      setVotesChange(0);
    });
  };
  const downVote = () => {
    if (votes + votesChange > 0) {
      setVotesChange((currVotes) => currVotes - 1);
      patchVotes(review_id, -1).catch(() => {
        setVotesChange(0);
      });
    }
  };

  const upIsDisabled = votesChange > 0;
  const downIsDisabled = votesChange < 0;

  return (
    <section>
      <button disabled={upIsDisabled} onClick={upVote}>
        Upvote
      </button>
      <p>{votes + votesChange}</p>
      <button disabled={downIsDisabled} onClick={downVote}>
        Downvote
      </button>
    </section>
  );
};

export default Vote;
