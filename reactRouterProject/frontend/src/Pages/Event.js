import { defer, json, useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();
  // if(data.isError){
  //   return <p>{data.message}</p>
  // }
  // const events = data.events
  return (
    <>
      {/* <EventsList events={events} /> */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>loading</p>}>
        <Await resolve={events}>
          {(loadedEvents) => 
            { return <EventsList events={loadedEvents}/>}
          }
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;
const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return json({ message: "Cound not fetch response" }, { status: 500 });
    // throw new Response(JSON.stringify({message:'Cound not fetch response'}),{
    //   status: 500,
    // })
    // return {isError: true , message:'could not fetch data!'}
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
