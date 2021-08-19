import { useEffect, useState } from "react";

const getYearsOfAge = (currentDate: string): string => {
  const birthday = "1979-08-14";
  const dateTo = new Date(currentDate);
  const dateFrom = new Date(birthday);
  const months =
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear());
  return ((months - (months % 12)) / 12).toString();
};

const delaySlightlyForSuspense = (callback: Function) => {
  setTimeout(function () {
    callback();
  }, 1 + Math.floor(Math.random() * 1000 * 2));
};

export const Age = () => {
  const [age, setAge] = useState("Calculating..");
  useEffect(() => {
    fetch("https://worldtimeapi.org/api/timezone/CET")
      .then((response) => response.json())
      .then((data) =>
        delaySlightlyForSuspense(() => setAge(getYearsOfAge(data.datetime)))
      );
  }, []);

  return (
    <a
      href="https://github.com/lyng-dev/lyng-dev.github.io/blob/main/src/components/Age.tsx"
      target="_blank"
      rel="noreferrer"
    >
      <span>{age}</span>
    </a>
  );
};
