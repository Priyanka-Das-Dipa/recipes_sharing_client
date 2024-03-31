import { useEffect, useState } from "react";

const usePopularRecipe = () => {
  const [popularRecipe, setPopularRecipe] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/popular_recipe")
      .then((res) => res.json())
      .then((data) => {
        setPopularRecipe(data);
        setLoading(false);
      });
  }, []);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/popular_recipe")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setPopularRecipe(data);
  //         setLoading(false);
  //       });
  //   });
  return [popularRecipe, loading];
};

export default usePopularRecipe;
