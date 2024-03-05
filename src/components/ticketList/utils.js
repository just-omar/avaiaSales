import { sortBy } from 'lodash';

export function filterTickets(tickets, filters) {
  return tickets.filter((ticket) => {
    return (
      ticket.segments[0].stops.length === ticket.segments[1].stops.length &&
      filters.includes(ticket.segments[0].stops.length)
    );
  });
}

export function sortTickets(tickets, selectedKey) {
  return sortBy(tickets, [
    (o) => {
      return selectedKey === 'fast' ? o.segments[0].duration + o.segments[1].duration : o.price;
    },
  ]);
}
