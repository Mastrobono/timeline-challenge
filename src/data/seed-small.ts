import type { Table, Sector, Reservation, RestaurantConfig } from '@/types';

// Generated seed data for small dataset
export const seedSectors: Sector[] = [
  {
    "id": "sector-1",
    "name": "Main Dining",
    "color": "#3B82F6",
    "sortOrder": 1
  },
  {
    "id": "sector-2",
    "name": "Terrace",
    "color": "#10B981",
    "sortOrder": 2
  },
  {
    "id": "sector-3",
    "name": "Private Room",
    "color": "#F59E0B",
    "sortOrder": 3
  }
];

export const seedTables: Table[] = [
  {
    "id": "table-1",
    "sectorId": "sector-1",
    "name": "Table 1",
    "capacity": {
      "min": 3,
      "max": 6
    },
    "sortOrder": 1
  },
  {
    "id": "table-2",
    "sectorId": "sector-1",
    "name": "Table 2",
    "capacity": {
      "min": 2,
      "max": 4
    },
    "sortOrder": 2
  },
  {
    "id": "table-3",
    "sectorId": "sector-1",
    "name": "Table 3",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 3
  },
  {
    "id": "table-4",
    "sectorId": "sector-2",
    "name": "Table 4",
    "capacity": {
      "min": 4,
      "max": 7
    },
    "sortOrder": 4
  },
  {
    "id": "table-5",
    "sectorId": "sector-2",
    "name": "Table 5",
    "capacity": {
      "min": 3,
      "max": 6
    },
    "sortOrder": 5
  },
  {
    "id": "table-6",
    "sectorId": "sector-2",
    "name": "Table 6",
    "capacity": {
      "min": 3,
      "max": 5
    },
    "sortOrder": 6
  },
  {
    "id": "table-7",
    "sectorId": "sector-3",
    "name": "Table 7",
    "capacity": {
      "min": 2,
      "max": 3
    },
    "sortOrder": 7
  },
  {
    "id": "table-8",
    "sectorId": "sector-3",
    "name": "Table 8",
    "capacity": {
      "min": 5,
      "max": 8
    },
    "sortOrder": 8
  }
];

export const seedReservations: Reservation[] = [
  {
    "id": "res-1",
    "tableId": "table-6",
    "customer": {
      "name": "Roberto Herrera Vega",
      "phone": "+54-11-1212-3434",
      "email": "robertoherreravega@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T22:00:00.000-03:00",
    "endTime": "2025-10-19T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-19T14:20:00.000-03:00",
    "updatedAt": "2025-10-19T14:20:00.000-03:00"
  },
  {
    "id": "res-2",
    "tableId": "table-3",
    "customer": {
      "name": "Natalia Ortega Peña",
      "phone": "+54-11-1234-5678",
      "email": "nataliaortegapeña@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T21:30:00.000-03:00",
    "endTime": "2025-10-19T23:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-19T15:00:00.000-03:00",
    "updatedAt": "2025-10-19T15:00:00.000-03:00"
  },
  {
    "id": "res-3",
    "tableId": "table-5",
    "customer": {
      "name": "Miguel González Martínez",
      "phone": "+54-11-9999-0000",
      "email": "miguelgonzálezmartínez@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T14:00:00.000-03:00",
    "endTime": "2025-10-19T16:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-19T11:00:00.000-03:00",
    "updatedAt": "2025-10-19T11:00:00.000-03:00"
  },
  {
    "id": "res-4",
    "tableId": "table-6",
    "customer": {
      "name": "Daniel Campos Torres",
      "phone": "+54-11-7777-8888",
      "email": "danielcampostorres@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T22:00:00.000-03:00",
    "endTime": "2025-10-24T00:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-23T18:04:00.000-03:00",
    "updatedAt": "2025-10-23T18:04:00.000-03:00"
  },
  {
    "id": "res-5",
    "tableId": "table-6",
    "customer": {
      "name": "Ana García Rojas",
      "phone": "+54-11-3456-7890",
      "email": "anagarcíarojas@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T13:00:00.000-03:00",
    "endTime": "2025-10-24T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T15:33:00.000-03:00",
    "updatedAt": "2025-10-24T15:33:00.000-03:00"
  },
  {
    "id": "res-6",
    "tableId": "table-2",
    "customer": {
      "name": "Adrián Cabrera Ramos",
      "phone": "+54-11-7777-8888",
      "email": "adriáncabreraramos@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T22:30:00.000-03:00",
    "endTime": "2025-10-25T01:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T18:16:00.000-03:00",
    "updatedAt": "2025-10-24T19:16:00.000-03:00"
  },
  {
    "id": "res-7",
    "tableId": "table-6",
    "customer": {
      "name": "Elena Moreno Moreno",
      "phone": "+54-11-1234-5678",
      "email": "elenamorenomoreno@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T12:00:00.000-03:00",
    "endTime": "2025-10-19T14:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-19T16:54:00.000-03:00",
    "updatedAt": "2025-10-19T16:54:00.000-03:00"
  },
  {
    "id": "res-8",
    "tableId": "table-5",
    "customer": {
      "name": "Valeria Silva Guerrero",
      "phone": "+54-11-2345-6789",
      "email": "valeriasilvaguerrero@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T23:30:00.000-03:00",
    "endTime": "2025-10-25T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T18:30:00.000-03:00",
    "updatedAt": "2025-10-24T18:30:00.000-03:00"
  },
  {
    "id": "res-9",
    "tableId": "table-1",
    "customer": {
      "name": "Raquel Vargas Castro",
      "phone": "+54-11-5656-7878",
      "email": "raquelvargascastro@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T22:30:00.000-03:00",
    "endTime": "2025-10-23T01:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T14:29:00.000-03:00",
    "updatedAt": "2025-10-22T14:29:00.000-03:00"
  },
  {
    "id": "res-10",
    "tableId": "table-2",
    "customer": {
      "name": "Sebastián Vega Torres",
      "phone": "+54-11-6789-0123",
      "email": "sebastiánvegatorres@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T22:00:00.000-03:00",
    "endTime": "2025-10-24T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T14:50:00.000-03:00",
    "updatedAt": "2025-10-24T17:50:00.000-03:00"
  },
  {
    "id": "res-11",
    "tableId": "table-3",
    "customer": {
      "name": "Valeria Silva Vega",
      "phone": "+54-11-1111-2222",
      "email": "valeriasilvavega@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T12:00:00.000-03:00",
    "endTime": "2025-10-22T13:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T15:17:00.000-03:00",
    "updatedAt": "2025-10-22T15:17:00.000-03:00"
  },
  {
    "id": "res-12",
    "tableId": "table-6",
    "customer": {
      "name": "Francisco Martín Cabrera",
      "phone": "+54-11-1111-2222",
      "email": "franciscomartíncabrera@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T19:30:00.000-03:00",
    "endTime": "2025-10-23T22:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-23T17:34:00.000-03:00",
    "updatedAt": "2025-10-23T17:34:00.000-03:00"
  },
  {
    "id": "res-13",
    "tableId": "table-5",
    "customer": {
      "name": "Carlos López Sánchez",
      "phone": "+54-11-9012-3456",
      "email": "carloslópezsánchez@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T16:00:00.000-03:00",
    "endTime": "2025-10-19T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-19T18:38:00.000-03:00",
    "updatedAt": "2025-10-19T22:38:00.000-03:00"
  },
  {
    "id": "res-14",
    "tableId": "table-7",
    "customer": {
      "name": "Sebastián Vega Moreno",
      "phone": "+54-11-4567-8901",
      "email": "sebastiánvegamoreno@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-22T16:00:00.000-03:00",
    "endTime": "2025-10-22T19:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-22T22:51:00.000-03:00",
    "updatedAt": "2025-10-22T22:51:00.000-03:00"
  },
  {
    "id": "res-15",
    "tableId": "table-4",
    "customer": {
      "name": "Roberto Herrera Morales",
      "phone": "+54-11-8901-2345",
      "email": "robertoherreramorales@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T22:00:00.000-03:00",
    "endTime": "2025-10-25T01:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T18:27:00.000-03:00",
    "updatedAt": "2025-10-24T18:27:00.000-03:00"
  },
  {
    "id": "res-16",
    "tableId": "table-1",
    "customer": {
      "name": "Sofia Reyes González",
      "phone": "+54-11-9012-3456",
      "email": "sofiareyesgonzález@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T14:30:00.000-03:00",
    "endTime": "2025-10-24T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T14:25:00.000-03:00",
    "updatedAt": "2025-10-24T16:25:00.000-03:00"
  },
  {
    "id": "res-17",
    "tableId": "table-2",
    "customer": {
      "name": "Laura Sánchez López",
      "phone": "+54-11-0123-4567",
      "email": "laurasánchezlópez@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T19:30:00.000-03:00",
    "endTime": "2025-10-24T22:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T18:13:00.000-03:00",
    "updatedAt": "2025-10-24T19:13:00.000-03:00"
  },
  {
    "id": "res-18",
    "tableId": "table-1",
    "customer": {
      "name": "Carlos López Ortega",
      "phone": "+54-11-1111-2222",
      "email": "carloslópezortega@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T11:00:00.000-03:00",
    "endTime": "2025-10-20T13:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-20T22:20:00.000-03:00",
    "updatedAt": "2025-10-20T22:20:00.000-03:00"
  },
  {
    "id": "res-19",
    "tableId": "table-3",
    "customer": {
      "name": "Sofia Reyes Aguilar",
      "phone": "+54-11-5678-9012",
      "email": "sofiareyesaguilar@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T01:30:00.000-03:00",
    "endTime": "2025-10-21T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-20T15:03:00.000-03:00",
    "updatedAt": "2025-10-20T15:03:00.000-03:00"
  },
  {
    "id": "res-20",
    "tableId": "table-2",
    "customer": {
      "name": "Sofia Reyes Molina",
      "phone": "+54-11-5656-7878",
      "email": "sofiareyesmolina@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T15:00:00.000-03:00",
    "endTime": "2025-10-19T16:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-19T12:11:00.000-03:00",
    "updatedAt": "2025-10-19T12:11:00.000-03:00"
  },
  {
    "id": "res-21",
    "tableId": "table-4",
    "customer": {
      "name": "Francisco Martín Herrera",
      "phone": "+54-11-1234-5678",
      "email": "franciscomartínherrera@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T00:30:00.000-03:00",
    "endTime": "2025-10-20T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-19T14:28:00.000-03:00",
    "updatedAt": "2025-10-19T16:28:00.000-03:00"
  },
  {
    "id": "res-22",
    "tableId": "table-5",
    "customer": {
      "name": "Patricia Navarro Ruiz",
      "phone": "+54-11-5656-7878",
      "email": "patricianavarroruiz@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T16:00:00.000-03:00",
    "endTime": "2025-10-19T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-19T17:38:00.000-03:00",
    "updatedAt": "2025-10-19T17:38:00.000-03:00"
  },
  {
    "id": "res-23",
    "tableId": "table-7",
    "customer": {
      "name": "Sofia Reyes Espinoza",
      "phone": "+54-11-0123-4567",
      "email": "sofiareyesespinoza@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T21:30:00.000-03:00",
    "endTime": "2025-10-19T23:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-19T21:49:00.000-03:00",
    "updatedAt": "2025-10-19T21:49:00.000-03:00"
  },
  {
    "id": "res-24",
    "tableId": "table-6",
    "customer": {
      "name": "Mónica Flores Cabrera",
      "phone": "+54-11-9012-3456",
      "email": "mónicaflorescabrera@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T10:30:00.000-03:00",
    "endTime": "2025-10-19T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-19T21:31:00.000-03:00",
    "updatedAt": "2025-10-20T00:31:00.000-03:00"
  },
  {
    "id": "res-25",
    "tableId": "table-8",
    "customer": {
      "name": "Camila Espinoza Martínez",
      "phone": "+54-11-5656-7878",
      "email": "camilaespinozamartínez@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-20T17:00:00.000-03:00",
    "endTime": "2025-10-20T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-20T21:19:00.000-03:00",
    "updatedAt": "2025-10-20T22:19:00.000-03:00"
  },
  {
    "id": "res-26",
    "tableId": "table-2",
    "customer": {
      "name": "Francisco Martín Molina",
      "phone": "+54-11-3333-4444",
      "email": "franciscomartínmolina@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T10:30:00.000-03:00",
    "endTime": "2025-10-24T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T22:15:00.000-03:00",
    "updatedAt": "2025-10-24T22:15:00.000-03:00"
  },
  {
    "id": "res-27",
    "tableId": "table-2",
    "customer": {
      "name": "Nicolás Fuentes Campos",
      "phone": "+54-11-8901-2345",
      "email": "nicolásfuentescampos@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T16:30:00.000-03:00",
    "endTime": "2025-10-24T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T19:06:00.000-03:00",
    "updatedAt": "2025-10-24T19:06:00.000-03:00"
  },
  {
    "id": "res-28",
    "tableId": "table-6",
    "customer": {
      "name": "Lucía Morales Reyes",
      "phone": "+54-11-3333-4444",
      "email": "lucíamoralesreyes@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T20:00:00.000-03:00",
    "endTime": "2025-10-24T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T22:17:00.000-03:00",
    "updatedAt": "2025-10-25T00:17:00.000-03:00"
  },
  {
    "id": "res-29",
    "tableId": "table-3",
    "customer": {
      "name": "Carmen Pérez Sánchez",
      "phone": "+54-11-9012-3456",
      "email": "carmenpérezsánchez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T20:00:00.000-03:00",
    "endTime": "2025-10-21T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-21T15:57:00.000-03:00",
    "updatedAt": "2025-10-21T15:57:00.000-03:00"
  },
  {
    "id": "res-30",
    "tableId": "table-4",
    "customer": {
      "name": "Roberto Herrera Cabrera",
      "phone": "+54-11-4567-8901",
      "email": "robertoherreracabrera@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T00:00:00.000-03:00",
    "endTime": "2025-10-24T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T18:39:00.000-03:00",
    "updatedAt": "2025-10-23T18:39:00.000-03:00"
  },
  {
    "id": "res-31",
    "tableId": "table-8",
    "customer": {
      "name": "Elena Moreno Espinoza",
      "phone": "+54-11-5656-7878",
      "email": "elenamorenoespinoza@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T20:30:00.000-03:00",
    "endTime": "2025-10-22T23:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-22T17:33:00.000-03:00",
    "updatedAt": "2025-10-22T17:33:00.000-03:00"
  },
  {
    "id": "res-32",
    "tableId": "table-3",
    "customer": {
      "name": "Javier Torres Medina",
      "phone": "+54-11-9999-0000",
      "email": "javiertorresmedina@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-25T01:30:00.000-03:00",
    "endTime": "2025-10-25T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-24T16:31:00.000-03:00",
    "updatedAt": "2025-10-24T20:31:00.000-03:00"
  },
  {
    "id": "res-33",
    "tableId": "table-5",
    "customer": {
      "name": "David Jiménez Vega",
      "phone": "+54-11-9012-3456",
      "email": "davidjiménezvega@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T18:00:00.000-03:00",
    "endTime": "2025-10-24T21:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-24T18:00:00.000-03:00",
    "updatedAt": "2025-10-24T19:00:00.000-03:00"
  },
  {
    "id": "res-34",
    "tableId": "table-7",
    "customer": {
      "name": "Mónica Flores Moreno",
      "phone": "+54-11-5678-9012",
      "email": "mónicafloresmoreno@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T12:30:00.000-03:00",
    "endTime": "2025-10-19T14:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-19T17:04:00.000-03:00",
    "updatedAt": "2025-10-19T17:04:00.000-03:00"
  },
  {
    "id": "res-35",
    "tableId": "table-2",
    "customer": {
      "name": "Beatriz Guerrero Serrano",
      "phone": "+54-11-3456-7890",
      "email": "beatrizguerreroserrano@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T21:00:00.000-03:00",
    "endTime": "2025-10-24T22:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T21:24:00.000-03:00",
    "updatedAt": "2025-10-24T21:24:00.000-03:00"
  }
];

// Restaurant configuration
export const seedRestaurantConfig: RestaurantConfig = {
  "id": "restaurant-1",
  "name": "Woki Restaurant",
  "timezone": "America/Argentina/Buenos_Aires",
  "operatingHours": {
    "startHour": 7,
    "endHour": 23
  },
  "slotConfiguration": {
    "slotMinutes": 15,
    "defaultSlotWidth": 60
  },
  "createdAt": "2025-10-24T00:00:00.000-03:00",
  "updatedAt": "2025-10-24T00:00:00.000-03:00"
};
