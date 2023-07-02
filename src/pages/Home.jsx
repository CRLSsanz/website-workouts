import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    const response = await fetch(
      "https://precious-plum-sun-hat.cyclic.app/api/workouts"
    );
    const json = await response.json();
    console.log(json);

    if (response.ok) {
      setWorkouts(json);
    }
  };

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((item) => (
            <WorkoutDetails
              key={item._id}
              item={item}
              fetchWorkouts={fetchWorkouts}
            />
          ))}
      </div>

      <WorkoutForm fetchWorkouts={fetchWorkouts} />
    </div>
  );
};

export default Home;
