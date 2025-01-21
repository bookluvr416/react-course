import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem.js";

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;

  return (
    <>
      <EventItem event={event} />
    </>
  );
}

export default EventDetailPage;

export const loader = async ({request, params}) => {
  const id = params.id;
  const res = await fetch(`http://localhost:8080/events/${id}`);

  if (!res.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch details for selected event.' }), { status: 500 });
  }

  return res;
};

export const action = async ({ request, params }) => {
  const id = params.id;
  const res = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });

  if (!res.ok) {
    console.log(res);
    throw new Response(JSON.stringify({ message: 'Could not delete event.' }), { status: 500 });
  }

  return redirect('/events');
};
