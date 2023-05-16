import ErrorAlert from "@/components/UI/error-alert";
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

export default function EventDetailsPage() {
  const router = useRouter();

  const eventID = router.query.eventId;

  const event = getEventById(eventID);

  if (!event) {
    return (
      <ErrorAlert>
        <p>NO event found</p>
      </ErrorAlert>
    );
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event?.description}</p>
      </EventContent>
    </>
  );
}
