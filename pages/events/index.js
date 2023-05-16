import EventList from "@/components/Events/event-list";
import EventSearch from "@/components/Events/events-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

export default function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList item={events} />
    </div>
  );
}
