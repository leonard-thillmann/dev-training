"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherBerlin />
    </QueryClientProvider>
  );
}

function WeatherBerlin() {
  const { isPending, error, data } = useQuery({
    queryKey: ["weatherData"],
    queryFn: () =>
      fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
      )
        .then((res) => res.json())
        .then((data) => data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      The current temperature in Berlin is {data.current.temperature_2m} °C.
    </div>
  );
}
