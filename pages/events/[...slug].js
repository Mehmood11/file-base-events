import EventList from "@/components/Events/event-list";
import ResultsTitle from "@/components/Events/results-title";
import Button from "@/components/UI/button";
import ErrorAlert from "@/components/UI/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

export default function FilteredEventsPage() {
  const router = useRouter();

  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading....</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid Filter. Please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredData || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No Events Found for the </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList item={filteredEvents} />
    </>
  );
}
