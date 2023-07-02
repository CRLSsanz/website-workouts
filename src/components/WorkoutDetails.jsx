import React from "react";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ item, fetchWorkouts }) => {
  const handleClick = async () => {
    const response = await fetch(
      "https://precious-plum-sun-hat.cyclic.app/api/workouts/" + item._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      fetchWorkouts();
      console.log("Delete to workout", json);
    }
  };

  return (
    <div className="workout-details">
      <h4 className="uppercase">{item.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {item.load}
      </p>
      <p>
        <strong>Reps (kg): </strong>
        {item.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
