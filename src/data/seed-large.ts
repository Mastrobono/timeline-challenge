import type { Table, Sector, Reservation, RestaurantConfig } from '@/types';

// Generated seed data for large dataset
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
  },
  {
    "id": "sector-4",
    "name": "Bar",
    "color": "#EF4444",
    "sortOrder": 4
  },
  {
    "id": "sector-5",
    "name": "Patio",
    "color": "#8B5CF6",
    "sortOrder": 5
  },
  {
    "id": "sector-6",
    "name": "VIP Section",
    "color": "#06B6D4",
    "sortOrder": 6
  },
  {
    "id": "sector-7",
    "name": "Family Dining",
    "color": "#84CC16",
    "sortOrder": 7
  },
  {
    "id": "sector-8",
    "name": "Upper Terrace",
    "color": "#F97316",
    "sortOrder": 8
  },
  {
    "id": "sector-9",
    "name": "Event Hall",
    "color": "#EC4899",
    "sortOrder": 9
  }
];

export const seedTables: Table[] = [
  {
    "id": "table-1",
    "sectorId": "sector-1",
    "name": "Table 1",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 1
  },
  {
    "id": "table-2",
    "sectorId": "sector-1",
    "name": "Table 2",
    "capacity": {
      "min": 3,
      "max": 6
    },
    "sortOrder": 2
  },
  {
    "id": "table-3",
    "sectorId": "sector-1",
    "name": "Table 3",
    "capacity": {
      "min": 2,
      "max": 5
    },
    "sortOrder": 3
  },
  {
    "id": "table-4",
    "sectorId": "sector-1",
    "name": "Table 4",
    "capacity": {
      "min": 3,
      "max": 5
    },
    "sortOrder": 4
  },
  {
    "id": "table-5",
    "sectorId": "sector-2",
    "name": "Table 5",
    "capacity": {
      "min": 5,
      "max": 8
    },
    "sortOrder": 5
  },
  {
    "id": "table-6",
    "sectorId": "sector-2",
    "name": "Table 6",
    "capacity": {
      "min": 4,
      "max": 6
    },
    "sortOrder": 6
  },
  {
    "id": "table-7",
    "sectorId": "sector-2",
    "name": "Table 7",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 7
  },
  {
    "id": "table-8",
    "sectorId": "sector-2",
    "name": "Table 8",
    "capacity": {
      "min": 4,
      "max": 7
    },
    "sortOrder": 8
  },
  {
    "id": "table-9",
    "sectorId": "sector-3",
    "name": "Table 9",
    "capacity": {
      "min": 4,
      "max": 6
    },
    "sortOrder": 9
  },
  {
    "id": "table-10",
    "sectorId": "sector-3",
    "name": "Table 10",
    "capacity": {
      "min": 3,
      "max": 6
    },
    "sortOrder": 10
  },
  {
    "id": "table-11",
    "sectorId": "sector-3",
    "name": "Table 11",
    "capacity": {
      "min": 2,
      "max": 5
    },
    "sortOrder": 11
  },
  {
    "id": "table-12",
    "sectorId": "sector-3",
    "name": "Table 12",
    "capacity": {
      "min": 4,
      "max": 7
    },
    "sortOrder": 12
  },
  {
    "id": "table-13",
    "sectorId": "sector-4",
    "name": "Table 13",
    "capacity": {
      "min": 2,
      "max": 4
    },
    "sortOrder": 13
  },
  {
    "id": "table-14",
    "sectorId": "sector-4",
    "name": "Table 14",
    "capacity": {
      "min": 2,
      "max": 5
    },
    "sortOrder": 14
  },
  {
    "id": "table-15",
    "sectorId": "sector-4",
    "name": "Table 15",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 15
  },
  {
    "id": "table-16",
    "sectorId": "sector-5",
    "name": "Table 16",
    "capacity": {
      "min": 3,
      "max": 4
    },
    "sortOrder": 16
  },
  {
    "id": "table-17",
    "sectorId": "sector-5",
    "name": "Table 17",
    "capacity": {
      "min": 3,
      "max": 6
    },
    "sortOrder": 17
  },
  {
    "id": "table-18",
    "sectorId": "sector-5",
    "name": "Table 18",
    "capacity": {
      "min": 2,
      "max": 5
    },
    "sortOrder": 18
  },
  {
    "id": "table-19",
    "sectorId": "sector-6",
    "name": "Table 19",
    "capacity": {
      "min": 3,
      "max": 6
    },
    "sortOrder": 19
  },
  {
    "id": "table-20",
    "sectorId": "sector-6",
    "name": "Table 20",
    "capacity": {
      "min": 2,
      "max": 3
    },
    "sortOrder": 20
  },
  {
    "id": "table-21",
    "sectorId": "sector-6",
    "name": "Table 21",
    "capacity": {
      "min": 2,
      "max": 5
    },
    "sortOrder": 21
  },
  {
    "id": "table-22",
    "sectorId": "sector-7",
    "name": "Table 22",
    "capacity": {
      "min": 3,
      "max": 5
    },
    "sortOrder": 22
  },
  {
    "id": "table-23",
    "sectorId": "sector-7",
    "name": "Table 23",
    "capacity": {
      "min": 5,
      "max": 8
    },
    "sortOrder": 23
  },
  {
    "id": "table-24",
    "sectorId": "sector-7",
    "name": "Table 24",
    "capacity": {
      "min": 3,
      "max": 6
    },
    "sortOrder": 24
  },
  {
    "id": "table-25",
    "sectorId": "sector-8",
    "name": "Table 25",
    "capacity": {
      "min": 3,
      "max": 6
    },
    "sortOrder": 25
  },
  {
    "id": "table-26",
    "sectorId": "sector-8",
    "name": "Table 26",
    "capacity": {
      "min": 4,
      "max": 7
    },
    "sortOrder": 26
  },
  {
    "id": "table-27",
    "sectorId": "sector-8",
    "name": "Table 27",
    "capacity": {
      "min": 3,
      "max": 5
    },
    "sortOrder": 27
  },
  {
    "id": "table-28",
    "sectorId": "sector-9",
    "name": "Table 28",
    "capacity": {
      "min": 3,
      "max": 4
    },
    "sortOrder": 28
  },
  {
    "id": "table-29",
    "sectorId": "sector-9",
    "name": "Table 29",
    "capacity": {
      "min": 2,
      "max": 4
    },
    "sortOrder": 29
  },
  {
    "id": "table-30",
    "sectorId": "sector-9",
    "name": "Table 30",
    "capacity": {
      "min": 4,
      "max": 7
    },
    "sortOrder": 30
  }
];

export const seedReservations: Reservation[] = [
  {
    "id": "res-1",
    "tableId": "table-25",
    "customer": {
      "name": "Javier Torres Rodríguez",
      "phone": "+54-11-1313-4545",
      "email": "javiertorresrodríguez@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-09T19:30:00.000-03:00",
    "endTime": "2025-10-09T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-09T16:32:00.000-03:00",
    "updatedAt": "2025-10-09T16:32:00.000-03:00"
  },
  {
    "id": "res-2",
    "tableId": "table-26",
    "customer": {
      "name": "Carlos López Romero",
      "phone": "+54-11-3333-4444",
      "email": "carloslópezromero@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-08T17:30:00.000-03:00",
    "endTime": "2025-10-08T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-08T15:35:00.000-03:00",
    "updatedAt": "2025-10-08T17:35:00.000-03:00"
  },
  {
    "id": "res-3",
    "tableId": "table-30",
    "customer": {
      "name": "Cristina Romero Aguilar",
      "phone": "+54-11-8901-2345",
      "email": "cristinaromeroaguilar@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-03T17:30:00.000-03:00",
    "endTime": "2025-10-03T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-03T18:05:00.000-03:00",
    "updatedAt": "2025-10-03T18:05:00.000-03:00"
  },
  {
    "id": "res-4",
    "tableId": "table-16",
    "customer": {
      "name": "Patricia Navarro Cabrera",
      "phone": "+54-11-1234-5678",
      "email": "patricianavarrocabrera@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-16T20:00:00.000-03:00",
    "endTime": "2025-10-16T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-16T22:12:00.000-03:00",
    "updatedAt": "2025-10-16T23:12:00.000-03:00"
  },
  {
    "id": "res-5",
    "tableId": "table-6",
    "customer": {
      "name": "Francisco Martín Romero",
      "phone": "+54-11-5678-9012",
      "email": "franciscomartínromero@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-16T22:30:00.000-03:00",
    "endTime": "2025-10-16T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-16T18:16:00.000-03:00",
    "updatedAt": "2025-10-16T18:16:00.000-03:00"
  },
  {
    "id": "res-6",
    "tableId": "table-11",
    "customer": {
      "name": "Javier Torres Moreno",
      "phone": "+54-11-1111-2222",
      "email": "javiertorresmoreno@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-29T23:00:00.000-03:00",
    "endTime": "2025-10-30T02:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-29T16:03:00.000-03:00",
    "updatedAt": "2025-10-29T16:03:00.000-03:00"
  },
  {
    "id": "res-7",
    "tableId": "table-29",
    "customer": {
      "name": "Lucía Morales Delgado",
      "phone": "+54-11-9090-1212",
      "email": "lucíamoralesdelgado@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-05T19:30:00.000-03:00",
    "endTime": "2025-10-05T20:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-05T22:08:00.000-03:00",
    "updatedAt": "2025-10-05T22:08:00.000-03:00"
  },
  {
    "id": "res-8",
    "tableId": "table-3",
    "customer": {
      "name": "Mónica Flores Medina",
      "phone": "+54-11-1111-2222",
      "email": "mónicafloresmedina@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-27T01:30:00.000-03:00",
    "endTime": "2025-10-27T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-26T22:15:00.000-03:00",
    "updatedAt": "2025-10-26T23:15:00.000-03:00"
  },
  {
    "id": "res-9",
    "tableId": "table-4",
    "customer": {
      "name": "Antonio Ruiz González",
      "phone": "+54-11-9012-3456",
      "email": "antonioruizgonzález@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T17:30:00.000-03:00",
    "endTime": "2025-10-03T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-03T13:50:00.000-03:00",
    "updatedAt": "2025-10-03T13:50:00.000-03:00"
  },
  {
    "id": "res-10",
    "tableId": "table-11",
    "customer": {
      "name": "Javier Torres Moreno",
      "phone": "+54-11-4567-8901",
      "email": "javiertorresmoreno@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-11T01:00:00.000-03:00",
    "endTime": "2025-10-11T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-10T18:30:00.000-03:00",
    "updatedAt": "2025-10-10T18:30:00.000-03:00"
  },
  {
    "id": "res-11",
    "tableId": "table-25",
    "customer": {
      "name": "Sofia Reyes Molina",
      "phone": "+54-11-7890-1234",
      "email": "sofiareyesmolina@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-29T14:30:00.000-03:00",
    "endTime": "2025-10-29T16:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-29T21:53:00.000-03:00",
    "updatedAt": "2025-10-29T23:53:00.000-03:00"
  },
  {
    "id": "res-12",
    "tableId": "table-30",
    "customer": {
      "name": "Patricia Navarro Vega",
      "phone": "+54-11-3456-7890",
      "email": "patricianavarrovega@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T19:30:00.000-03:00",
    "endTime": "2025-10-04T20:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-04T11:17:00.000-03:00",
    "updatedAt": "2025-10-04T12:17:00.000-03:00"
  },
  {
    "id": "res-13",
    "tableId": "table-2",
    "customer": {
      "name": "Álvaro Serrano Medina",
      "phone": "+54-11-3456-7890",
      "email": "álvaroserranomedina@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-19T11:00:00.000-03:00",
    "endTime": "2025-10-19T14:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-19T14:35:00.000-03:00",
    "updatedAt": "2025-10-19T14:35:00.000-03:00"
  },
  {
    "id": "res-14",
    "tableId": "table-7",
    "customer": {
      "name": "José Martínez Morales",
      "phone": "+54-11-1212-3434",
      "email": "josémartínezmorales@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-05T11:30:00.000-03:00",
    "endTime": "2025-10-05T13:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-05T13:39:00.000-03:00",
    "updatedAt": "2025-10-05T13:39:00.000-03:00"
  },
  {
    "id": "res-15",
    "tableId": "table-7",
    "customer": {
      "name": "Javier Torres Aguilar",
      "phone": "+54-11-9012-3456",
      "email": "javiertorresaguilar@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-12T14:30:00.000-03:00",
    "endTime": "2025-10-12T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-12T17:23:00.000-03:00",
    "updatedAt": "2025-10-12T17:23:00.000-03:00"
  },
  {
    "id": "res-16",
    "tableId": "table-27",
    "customer": {
      "name": "Carlos López Campos",
      "phone": "+54-11-3333-4444",
      "email": "carloslópezcampos@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T16:30:00.000-03:00",
    "endTime": "2025-10-22T18:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-22T19:26:00.000-03:00",
    "updatedAt": "2025-10-22T19:26:00.000-03:00"
  },
  {
    "id": "res-17",
    "tableId": "table-10",
    "customer": {
      "name": "Fernando Ramos Martínez",
      "phone": "+54-11-1313-4545",
      "email": "fernandoramosmartínez@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-08T20:00:00.000-03:00",
    "endTime": "2025-10-08T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-08T22:17:00.000-03:00",
    "updatedAt": "2025-10-08T22:17:00.000-03:00"
  },
  {
    "id": "res-18",
    "tableId": "table-7",
    "customer": {
      "name": "Elena Moreno Serrano",
      "phone": "+54-11-8901-2345",
      "email": "elenamorenoserrano@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T16:00:00.000-03:00",
    "endTime": "2025-10-10T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-10T12:37:00.000-03:00",
    "updatedAt": "2025-10-10T14:37:00.000-03:00"
  },
  {
    "id": "res-19",
    "tableId": "table-26",
    "customer": {
      "name": "Gabriel Rojas Herrera",
      "phone": "+54-11-9999-0000",
      "email": "gabrielrojasherrera@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T20:30:00.000-03:00",
    "endTime": "2025-10-03T23:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-03T21:42:00.000-03:00",
    "updatedAt": "2025-10-03T21:42:00.000-03:00"
  },
  {
    "id": "res-20",
    "tableId": "table-14",
    "customer": {
      "name": "Laura Sánchez Reyes",
      "phone": "+54-11-3333-4444",
      "email": "laurasánchezreyes@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T20:30:00.000-03:00",
    "endTime": "2025-10-17T22:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-17T19:51:00.000-03:00",
    "updatedAt": "2025-10-17T19:51:00.000-03:00"
  },
  {
    "id": "res-21",
    "tableId": "table-6",
    "customer": {
      "name": "Carlos López Ruiz",
      "phone": "+54-11-1212-3434",
      "email": "carloslópezruiz@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T16:30:00.000-03:00",
    "endTime": "2025-10-18T18:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-18T13:09:00.000-03:00",
    "updatedAt": "2025-10-18T14:09:00.000-03:00"
  },
  {
    "id": "res-22",
    "tableId": "table-26",
    "customer": {
      "name": "Francisco Martín Ortega",
      "phone": "+54-11-8901-2345",
      "email": "franciscomartínortega@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-01T17:00:00.000-03:00",
    "endTime": "2025-10-01T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-01T14:17:00.000-03:00",
    "updatedAt": "2025-10-01T14:17:00.000-03:00"
  },
  {
    "id": "res-23",
    "tableId": "table-26",
    "customer": {
      "name": "Isabel Díaz Martín",
      "phone": "+54-11-7890-1234",
      "email": "isabeldíazmartín@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-11T22:00:00.000-03:00",
    "endTime": "2025-10-12T00:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-11T16:48:00.000-03:00",
    "updatedAt": "2025-10-11T16:48:00.000-03:00"
  },
  {
    "id": "res-24",
    "tableId": "table-24",
    "customer": {
      "name": "Ana García Torres",
      "phone": "+54-11-7777-8888",
      "email": "anagarcíatorres@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-11T12:30:00.000-03:00",
    "endTime": "2025-10-11T13:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-11T20:53:00.000-03:00",
    "updatedAt": "2025-10-11T22:53:00.000-03:00"
  },
  {
    "id": "res-25",
    "tableId": "table-7",
    "customer": {
      "name": "Raquel Vargas Herrera",
      "phone": "+54-11-1212-3434",
      "email": "raquelvargasherrera@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T00:30:00.000-03:00",
    "endTime": "2025-10-23T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-22T22:54:00.000-03:00",
    "updatedAt": "2025-10-23T01:54:00.000-03:00"
  },
  {
    "id": "res-26",
    "tableId": "table-20",
    "customer": {
      "name": "Hugo Aguilar Ruiz",
      "phone": "+54-11-2345-6789",
      "email": "hugoaguilarruiz@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-11T22:00:00.000-03:00",
    "endTime": "2025-10-12T00:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-11T22:32:00.000-03:00",
    "updatedAt": "2025-10-11T22:32:00.000-03:00"
  },
  {
    "id": "res-27",
    "tableId": "table-20",
    "customer": {
      "name": "Fernando Ramos Flores",
      "phone": "+54-11-1234-5678",
      "email": "fernandoramosflores@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-02T00:30:00.000-03:00",
    "endTime": "2025-10-02T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-01T12:17:00.000-03:00",
    "updatedAt": "2025-10-01T12:17:00.000-03:00"
  },
  {
    "id": "res-28",
    "tableId": "table-25",
    "customer": {
      "name": "Patricia Navarro Díaz",
      "phone": "+54-11-5656-7878",
      "email": "patricianavarrodíaz@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T15:30:00.000-03:00",
    "endTime": "2025-10-18T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-18T11:14:00.000-03:00",
    "updatedAt": "2025-10-18T11:14:00.000-03:00"
  },
  {
    "id": "res-29",
    "tableId": "table-27",
    "customer": {
      "name": "Andrea Mendoza Guerrero",
      "phone": "+54-11-4567-8901",
      "email": "andreamendozaguerrero@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-03T11:30:00.000-03:00",
    "endTime": "2025-10-03T13:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-03T20:29:00.000-03:00",
    "updatedAt": "2025-10-03T22:29:00.000-03:00"
  },
  {
    "id": "res-30",
    "tableId": "table-27",
    "customer": {
      "name": "Elena Moreno Torres",
      "phone": "+54-11-8901-2345",
      "email": "elenamorenotorres@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-06T13:00:00.000-03:00",
    "endTime": "2025-10-06T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-06T13:12:00.000-03:00",
    "updatedAt": "2025-10-06T14:12:00.000-03:00"
  },
  {
    "id": "res-31",
    "tableId": "table-14",
    "customer": {
      "name": "Miguel González Sánchez",
      "phone": "+54-11-6789-0123",
      "email": "miguelgonzálezsánchez@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T14:30:00.000-03:00",
    "endTime": "2025-10-04T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-04T11:45:00.000-03:00",
    "updatedAt": "2025-10-04T11:45:00.000-03:00"
  },
  {
    "id": "res-32",
    "tableId": "table-19",
    "customer": {
      "name": "Raquel Vargas Vargas",
      "phone": "+54-11-7777-8888",
      "email": "raquelvargasvargas@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T01:30:00.000-03:00",
    "endTime": "2025-10-18T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-17T12:30:00.000-03:00",
    "updatedAt": "2025-10-17T16:30:00.000-03:00"
  },
  {
    "id": "res-33",
    "tableId": "table-17",
    "customer": {
      "name": "José Martínez Romero",
      "phone": "+54-11-0123-4567",
      "email": "josémartínezromero@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T13:30:00.000-03:00",
    "endTime": "2025-10-03T14:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-03T13:07:00.000-03:00",
    "updatedAt": "2025-10-03T13:07:00.000-03:00"
  },
  {
    "id": "res-34",
    "tableId": "table-13",
    "customer": {
      "name": "Andrea Mendoza Mendoza",
      "phone": "+54-11-9090-1212",
      "email": "andreamendozamendoza@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T15:00:00.000-03:00",
    "endTime": "2025-10-11T18:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-11T11:08:00.000-03:00",
    "updatedAt": "2025-10-11T11:08:00.000-03:00"
  },
  {
    "id": "res-35",
    "tableId": "table-30",
    "customer": {
      "name": "Hugo Aguilar Peña",
      "phone": "+54-11-8901-2345",
      "email": "hugoaguilarpeña@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-09T19:30:00.000-03:00",
    "endTime": "2025-10-09T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-09T19:33:00.000-03:00",
    "updatedAt": "2025-10-09T19:33:00.000-03:00"
  },
  {
    "id": "res-36",
    "tableId": "table-1",
    "customer": {
      "name": "Hugo Aguilar Sánchez",
      "phone": "+54-11-1313-4545",
      "email": "hugoaguilarsánchez@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-05T10:00:00.000-03:00",
    "endTime": "2025-10-05T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-05T15:19:00.000-03:00",
    "updatedAt": "2025-10-05T15:19:00.000-03:00"
  },
  {
    "id": "res-37",
    "tableId": "table-13",
    "customer": {
      "name": "Daniel Campos Martín",
      "phone": "+54-11-9090-1212",
      "email": "danielcamposmartín@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-01T21:30:00.000-03:00",
    "endTime": "2025-10-02T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-01T15:23:00.000-03:00",
    "updatedAt": "2025-10-01T16:23:00.000-03:00"
  },
  {
    "id": "res-38",
    "tableId": "table-15",
    "customer": {
      "name": "Raquel Vargas Herrera",
      "phone": "+54-11-7890-1234",
      "email": "raquelvargasherrera@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T22:30:00.000-03:00",
    "endTime": "2025-10-12T01:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-11T12:40:00.000-03:00",
    "updatedAt": "2025-10-11T14:40:00.000-03:00"
  },
  {
    "id": "res-39",
    "tableId": "table-10",
    "customer": {
      "name": "Francisco Martín Rodríguez",
      "phone": "+54-11-1111-2222",
      "email": "franciscomartínrodríguez@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-22T10:00:00.000-03:00",
    "endTime": "2025-10-22T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-22T18:42:00.000-03:00",
    "updatedAt": "2025-10-22T18:42:00.000-03:00"
  },
  {
    "id": "res-40",
    "tableId": "table-11",
    "customer": {
      "name": "Mónica Flores Ramos",
      "phone": "+54-11-7777-8888",
      "email": "mónicafloresramos@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-01T13:30:00.000-03:00",
    "endTime": "2025-10-01T14:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-01T21:36:00.000-03:00",
    "updatedAt": "2025-10-01T23:36:00.000-03:00"
  },
  {
    "id": "res-41",
    "tableId": "table-23",
    "customer": {
      "name": "David Jiménez Díaz",
      "phone": "+54-11-9999-0000",
      "email": "davidjiménezdíaz@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-07T10:30:00.000-03:00",
    "endTime": "2025-10-07T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-07T15:08:00.000-03:00",
    "updatedAt": "2025-10-07T15:08:00.000-03:00"
  },
  {
    "id": "res-42",
    "tableId": "table-7",
    "customer": {
      "name": "Sofia Reyes Campos",
      "phone": "+54-11-9999-0000",
      "email": "sofiareyescampos@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-15T11:00:00.000-03:00",
    "endTime": "2025-10-15T14:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-15T11:11:00.000-03:00",
    "updatedAt": "2025-10-15T15:11:00.000-03:00"
  },
  {
    "id": "res-43",
    "tableId": "table-18",
    "customer": {
      "name": "Miguel González Morales",
      "phone": "+54-11-7777-8888",
      "email": "miguelgonzálezmorales@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-29T01:30:00.000-03:00",
    "endTime": "2025-10-29T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-28T20:47:00.000-03:00",
    "updatedAt": "2025-10-28T23:47:00.000-03:00"
  },
  {
    "id": "res-44",
    "tableId": "table-20",
    "customer": {
      "name": "Valeria Silva Pérez",
      "phone": "+54-11-9012-3456",
      "email": "valeriasilvapérez@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-09T20:30:00.000-03:00",
    "endTime": "2025-10-09T23:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-09T15:04:00.000-03:00",
    "updatedAt": "2025-10-09T15:04:00.000-03:00"
  },
  {
    "id": "res-45",
    "tableId": "table-19",
    "customer": {
      "name": "Sofia Reyes Guerrero",
      "phone": "+54-11-2345-6789",
      "email": "sofiareyesguerrero@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T22:00:00.000-03:00",
    "endTime": "2025-10-21T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-21T18:37:00.000-03:00",
    "updatedAt": "2025-10-21T18:37:00.000-03:00"
  },
  {
    "id": "res-46",
    "tableId": "table-20",
    "customer": {
      "name": "Camila Espinoza González",
      "phone": "+54-11-7890-1234",
      "email": "camilaespinozagonzález@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T18:00:00.000-03:00",
    "endTime": "2025-10-17T20:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-17T15:47:00.000-03:00",
    "updatedAt": "2025-10-17T16:47:00.000-03:00"
  },
  {
    "id": "res-47",
    "tableId": "table-25",
    "customer": {
      "name": "Rubén Herrera González",
      "phone": "+54-11-9012-3456",
      "email": "rubénherreragonzález@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-25T10:00:00.000-03:00",
    "endTime": "2025-10-25T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-25T12:43:00.000-03:00",
    "updatedAt": "2025-10-25T12:43:00.000-03:00"
  },
  {
    "id": "res-48",
    "tableId": "table-18",
    "customer": {
      "name": "Carlos López Peña",
      "phone": "+54-11-2345-6789",
      "email": "carloslópezpeña@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-16T20:00:00.000-03:00",
    "endTime": "2025-10-16T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-16T16:42:00.000-03:00",
    "updatedAt": "2025-10-16T16:42:00.000-03:00"
  },
  {
    "id": "res-49",
    "tableId": "table-18",
    "customer": {
      "name": "Carlos López Romero",
      "phone": "+54-11-2345-6789",
      "email": "carloslópezromero@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T22:30:00.000-03:00",
    "endTime": "2025-10-24T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T15:45:00.000-03:00",
    "updatedAt": "2025-10-24T15:45:00.000-03:00"
  },
  {
    "id": "res-50",
    "tableId": "table-4",
    "customer": {
      "name": "Miguel González Silva",
      "phone": "+54-11-3333-4444",
      "email": "miguelgonzálezsilva@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T00:30:00.000-03:00",
    "endTime": "2025-10-20T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-19T11:42:00.000-03:00",
    "updatedAt": "2025-10-19T11:42:00.000-03:00"
  },
  {
    "id": "res-51",
    "tableId": "table-12",
    "customer": {
      "name": "Alejandro Castro Vega",
      "phone": "+54-11-0123-4567",
      "email": "alejandrocastrovega@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-05T23:30:00.000-03:00",
    "endTime": "2025-10-06T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-05T17:43:00.000-03:00",
    "updatedAt": "2025-10-05T21:43:00.000-03:00"
  },
  {
    "id": "res-52",
    "tableId": "table-16",
    "customer": {
      "name": "David Jiménez López",
      "phone": "+54-11-7890-1234",
      "email": "davidjiménezlópez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-09T13:00:00.000-03:00",
    "endTime": "2025-10-09T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-09T20:54:00.000-03:00",
    "updatedAt": "2025-10-09T22:54:00.000-03:00"
  },
  {
    "id": "res-53",
    "tableId": "table-15",
    "customer": {
      "name": "Alejandro Castro Rodríguez",
      "phone": "+54-11-1212-3434",
      "email": "alejandrocastrorodríguez@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T01:30:00.000-03:00",
    "endTime": "2025-10-20T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-19T21:57:00.000-03:00",
    "updatedAt": "2025-10-19T21:57:00.000-03:00"
  },
  {
    "id": "res-54",
    "tableId": "table-3",
    "customer": {
      "name": "Sergio Peña Torres",
      "phone": "+54-11-0123-4567",
      "email": "sergiopeñatorres@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T23:30:00.000-03:00",
    "endTime": "2025-10-05T02:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-04T11:25:00.000-03:00",
    "updatedAt": "2025-10-04T11:25:00.000-03:00"
  },
  {
    "id": "res-55",
    "tableId": "table-22",
    "customer": {
      "name": "Laura Sánchez Herrera",
      "phone": "+54-11-6789-0123",
      "email": "laurasánchezherrera@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T20:00:00.000-03:00",
    "endTime": "2025-10-04T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-04T19:29:00.000-03:00",
    "updatedAt": "2025-10-04T21:29:00.000-03:00"
  },
  {
    "id": "res-56",
    "tableId": "table-30",
    "customer": {
      "name": "Raquel Vargas Rojas",
      "phone": "+54-11-7890-1234",
      "email": "raquelvargasrojas@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T19:30:00.000-03:00",
    "endTime": "2025-10-22T22:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-22T15:02:00.000-03:00",
    "updatedAt": "2025-10-22T15:02:00.000-03:00"
  },
  {
    "id": "res-57",
    "tableId": "table-3",
    "customer": {
      "name": "Ana García Morales",
      "phone": "+54-11-1234-5678",
      "email": "anagarcíamorales@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-15T11:00:00.000-03:00",
    "endTime": "2025-10-15T13:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-15T22:35:00.000-03:00",
    "updatedAt": "2025-10-15T22:35:00.000-03:00"
  },
  {
    "id": "res-58",
    "tableId": "table-12",
    "customer": {
      "name": "David Jiménez Rodríguez",
      "phone": "+54-11-7890-1234",
      "email": "davidjiménezrodríguez@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T23:00:00.000-03:00",
    "endTime": "2025-10-11T02:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-10T13:40:00.000-03:00",
    "updatedAt": "2025-10-10T15:40:00.000-03:00"
  },
  {
    "id": "res-59",
    "tableId": "table-7",
    "customer": {
      "name": "Sofia Reyes Delgado",
      "phone": "+54-11-1111-2222",
      "email": "sofiareyesdelgado@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-11T01:00:00.000-03:00",
    "endTime": "2025-10-11T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-10T18:21:00.000-03:00",
    "updatedAt": "2025-10-10T22:21:00.000-03:00"
  },
  {
    "id": "res-60",
    "tableId": "table-26",
    "customer": {
      "name": "Álvaro Serrano Ruiz",
      "phone": "+54-11-9999-0000",
      "email": "álvaroserranoruiz@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T12:00:00.000-03:00",
    "endTime": "2025-10-10T15:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-10T19:05:00.000-03:00",
    "updatedAt": "2025-10-10T21:05:00.000-03:00"
  },
  {
    "id": "res-61",
    "tableId": "table-24",
    "customer": {
      "name": "Teresa Molina Vega",
      "phone": "+54-11-9090-1212",
      "email": "teresamolinavega@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-13T01:30:00.000-03:00",
    "endTime": "2025-10-13T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-12T22:50:00.000-03:00",
    "updatedAt": "2025-10-13T02:50:00.000-03:00"
  },
  {
    "id": "res-62",
    "tableId": "table-8",
    "customer": {
      "name": "Carmen Pérez Castro",
      "phone": "+54-11-1212-3434",
      "email": "carmenpérezcastro@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T17:00:00.000-03:00",
    "endTime": "2025-10-20T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-20T17:36:00.000-03:00",
    "updatedAt": "2025-10-20T17:36:00.000-03:00"
  },
  {
    "id": "res-63",
    "tableId": "table-16",
    "customer": {
      "name": "Alejandro Castro Rojas",
      "phone": "+54-11-3333-4444",
      "email": "alejandrocastrorojas@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T23:30:00.000-03:00",
    "endTime": "2025-10-25T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T19:42:00.000-03:00",
    "updatedAt": "2025-10-24T19:42:00.000-03:00"
  },
  {
    "id": "res-64",
    "tableId": "table-16",
    "customer": {
      "name": "Raquel Vargas Martínez",
      "phone": "+54-11-5656-7878",
      "email": "raquelvargasmartínez@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-03T11:30:00.000-03:00",
    "endTime": "2025-10-03T13:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-03T22:37:00.000-03:00",
    "updatedAt": "2025-10-03T22:37:00.000-03:00"
  },
  {
    "id": "res-65",
    "tableId": "table-7",
    "customer": {
      "name": "Elena Moreno González",
      "phone": "+54-11-5555-6666",
      "email": "elenamorenogonzález@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T10:00:00.000-03:00",
    "endTime": "2025-10-22T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T15:13:00.000-03:00",
    "updatedAt": "2025-10-22T16:13:00.000-03:00"
  },
  {
    "id": "res-66",
    "tableId": "table-6",
    "customer": {
      "name": "Claudia Medina Torres",
      "phone": "+54-11-9012-3456",
      "email": "claudiamedinatorres@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-16T22:30:00.000-03:00",
    "endTime": "2025-10-17T00:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-16T14:08:00.000-03:00",
    "updatedAt": "2025-10-16T14:08:00.000-03:00"
  },
  {
    "id": "res-67",
    "tableId": "table-17",
    "customer": {
      "name": "Lucía Morales Sánchez",
      "phone": "+54-11-9999-0000",
      "email": "lucíamoralessánchez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-26T00:30:00.000-03:00",
    "endTime": "2025-10-26T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-25T14:21:00.000-03:00",
    "updatedAt": "2025-10-25T14:21:00.000-03:00"
  },
  {
    "id": "res-68",
    "tableId": "table-28",
    "customer": {
      "name": "Rubén Herrera Castro",
      "phone": "+54-11-6789-0123",
      "email": "rubénherreracastro@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T21:30:00.000-03:00",
    "endTime": "2025-10-04T23:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-04T21:42:00.000-03:00",
    "updatedAt": "2025-10-04T21:42:00.000-03:00"
  },
  {
    "id": "res-69",
    "tableId": "table-25",
    "customer": {
      "name": "Carmen Pérez Reyes",
      "phone": "+54-11-3333-4444",
      "email": "carmenpérezreyes@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-29T22:30:00.000-03:00",
    "endTime": "2025-10-30T01:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-29T12:08:00.000-03:00",
    "updatedAt": "2025-10-29T14:08:00.000-03:00"
  },
  {
    "id": "res-70",
    "tableId": "table-16",
    "customer": {
      "name": "Daniel Campos López",
      "phone": "+54-11-1234-5678",
      "email": "danielcamposlópez@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-10T11:30:00.000-03:00",
    "endTime": "2025-10-10T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-10T22:03:00.000-03:00",
    "updatedAt": "2025-10-11T00:03:00.000-03:00"
  },
  {
    "id": "res-71",
    "tableId": "table-3",
    "customer": {
      "name": "Sergio Peña González",
      "phone": "+54-11-7777-8888",
      "email": "sergiopeñagonzález@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-08T23:30:00.000-03:00",
    "endTime": "2025-10-09T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-08T15:49:00.000-03:00",
    "updatedAt": "2025-10-08T19:49:00.000-03:00"
  },
  {
    "id": "res-72",
    "tableId": "table-13",
    "customer": {
      "name": "Raquel Vargas Campos",
      "phone": "+54-11-5678-9012",
      "email": "raquelvargascampos@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-01T11:30:00.000-03:00",
    "endTime": "2025-10-01T12:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-01T13:49:00.000-03:00",
    "updatedAt": "2025-10-01T13:49:00.000-03:00"
  },
  {
    "id": "res-73",
    "tableId": "table-14",
    "customer": {
      "name": "Mónica Flores Morales",
      "phone": "+54-11-6767-8989",
      "email": "mónicafloresmorales@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-04T14:00:00.000-03:00",
    "endTime": "2025-10-04T16:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-04T15:00:00.000-03:00",
    "updatedAt": "2025-10-04T15:00:00.000-03:00"
  },
  {
    "id": "res-74",
    "tableId": "table-2",
    "customer": {
      "name": "Roberto Herrera Peña",
      "phone": "+54-11-9999-0000",
      "email": "robertoherrerapeña@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T13:30:00.000-03:00",
    "endTime": "2025-10-11T14:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-11T22:58:00.000-03:00",
    "updatedAt": "2025-10-12T00:58:00.000-03:00"
  },
  {
    "id": "res-75",
    "tableId": "table-29",
    "customer": {
      "name": "Isabel Díaz Díaz",
      "phone": "+54-11-1313-4545",
      "email": "isabeldíazdíaz@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-26T00:30:00.000-03:00",
    "endTime": "2025-10-26T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-25T22:06:00.000-03:00",
    "updatedAt": "2025-10-25T22:06:00.000-03:00"
  },
  {
    "id": "res-76",
    "tableId": "table-21",
    "customer": {
      "name": "Fernando Ramos Rodríguez",
      "phone": "+54-11-7890-1234",
      "email": "fernandoramosrodríguez@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-22T11:30:00.000-03:00",
    "endTime": "2025-10-22T12:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T20:32:00.000-03:00",
    "updatedAt": "2025-10-22T20:32:00.000-03:00"
  },
  {
    "id": "res-77",
    "tableId": "table-6",
    "customer": {
      "name": "Elena Moreno Guerrero",
      "phone": "+54-11-6767-8989",
      "email": "elenamorenoguerrero@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T01:00:00.000-03:00",
    "endTime": "2025-10-21T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-20T13:06:00.000-03:00",
    "updatedAt": "2025-10-20T13:06:00.000-03:00"
  },
  {
    "id": "res-78",
    "tableId": "table-12",
    "customer": {
      "name": "Beatriz Guerrero Serrano",
      "phone": "+54-11-9090-1212",
      "email": "beatrizguerreroserrano@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-29T16:30:00.000-03:00",
    "endTime": "2025-10-29T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-29T19:52:00.000-03:00",
    "updatedAt": "2025-10-29T19:52:00.000-03:00"
  },
  {
    "id": "res-79",
    "tableId": "table-28",
    "customer": {
      "name": "María Rodríguez Reyes",
      "phone": "+54-11-1111-2222",
      "email": "maríarodríguezreyes@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T15:30:00.000-03:00",
    "endTime": "2025-10-04T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-04T14:04:00.000-03:00",
    "updatedAt": "2025-10-04T14:04:00.000-03:00"
  },
  {
    "id": "res-80",
    "tableId": "table-9",
    "customer": {
      "name": "Sofia Reyes López",
      "phone": "+54-11-4567-8901",
      "email": "sofiareyeslópez@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-23T15:00:00.000-03:00",
    "endTime": "2025-10-23T16:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-23T18:18:00.000-03:00",
    "updatedAt": "2025-10-23T21:18:00.000-03:00"
  },
  {
    "id": "res-81",
    "tableId": "table-1",
    "customer": {
      "name": "Claudia Medina Ramos",
      "phone": "+54-11-1313-4545",
      "email": "claudiamedinaramos@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-02T14:00:00.000-03:00",
    "endTime": "2025-10-02T15:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-02T13:07:00.000-03:00",
    "updatedAt": "2025-10-02T15:07:00.000-03:00"
  },
  {
    "id": "res-82",
    "tableId": "table-3",
    "customer": {
      "name": "Teresa Molina Martín",
      "phone": "+54-11-1212-3434",
      "email": "teresamolinamartín@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-02T23:00:00.000-03:00",
    "endTime": "2025-10-03T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-02T16:46:00.000-03:00",
    "updatedAt": "2025-10-02T16:46:00.000-03:00"
  },
  {
    "id": "res-83",
    "tableId": "table-11",
    "customer": {
      "name": "Natalia Ortega Pérez",
      "phone": "+54-11-3333-4444",
      "email": "nataliaortegapérez@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-12T22:00:00.000-03:00",
    "endTime": "2025-10-13T01:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-12T15:27:00.000-03:00",
    "updatedAt": "2025-10-12T18:27:00.000-03:00"
  },
  {
    "id": "res-84",
    "tableId": "table-20",
    "customer": {
      "name": "Adrián Cabrera Serrano",
      "phone": "+54-11-7777-8888",
      "email": "adriáncabreraserrano@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-11T17:00:00.000-03:00",
    "endTime": "2025-10-11T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-11T14:08:00.000-03:00",
    "updatedAt": "2025-10-11T14:08:00.000-03:00"
  },
  {
    "id": "res-85",
    "tableId": "table-22",
    "customer": {
      "name": "Teresa Molina Torres",
      "phone": "+54-11-3333-4444",
      "email": "teresamolinatorres@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-17T17:30:00.000-03:00",
    "endTime": "2025-10-17T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-17T13:34:00.000-03:00",
    "updatedAt": "2025-10-17T17:34:00.000-03:00"
  },
  {
    "id": "res-86",
    "tableId": "table-29",
    "customer": {
      "name": "Rubén Herrera Medina",
      "phone": "+54-11-9012-3456",
      "email": "rubénherreramedina@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-12T15:30:00.000-03:00",
    "endTime": "2025-10-12T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-12T17:42:00.000-03:00",
    "updatedAt": "2025-10-12T20:42:00.000-03:00"
  },
  {
    "id": "res-87",
    "tableId": "table-29",
    "customer": {
      "name": "Laura Sánchez Medina",
      "phone": "+54-11-9999-0000",
      "email": "laurasánchezmedina@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T17:30:00.000-03:00",
    "endTime": "2025-10-19T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-19T22:28:00.000-03:00",
    "updatedAt": "2025-10-20T02:28:00.000-03:00"
  },
  {
    "id": "res-88",
    "tableId": "table-28",
    "customer": {
      "name": "Álvaro Serrano Espinoza",
      "phone": "+54-11-0123-4567",
      "email": "álvaroserranoespinoza@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-11T23:30:00.000-03:00",
    "endTime": "2025-10-12T02:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-11T22:06:00.000-03:00",
    "updatedAt": "2025-10-11T22:06:00.000-03:00"
  },
  {
    "id": "res-89",
    "tableId": "table-18",
    "customer": {
      "name": "Andrea Mendoza Fuentes",
      "phone": "+54-11-5678-9012",
      "email": "andreamendozafuentes@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-12T00:30:00.000-03:00",
    "endTime": "2025-10-12T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-11T19:51:00.000-03:00",
    "updatedAt": "2025-10-11T21:51:00.000-03:00"
  },
  {
    "id": "res-90",
    "tableId": "table-19",
    "customer": {
      "name": "Fernando Ramos Ruiz",
      "phone": "+54-11-8901-2345",
      "email": "fernandoramosruiz@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-10T20:00:00.000-03:00",
    "endTime": "2025-10-10T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-10T17:21:00.000-03:00",
    "updatedAt": "2025-10-10T17:21:00.000-03:00"
  },
  {
    "id": "res-91",
    "tableId": "table-30",
    "customer": {
      "name": "Rubén Herrera Vega",
      "phone": "+54-11-3456-7890",
      "email": "rubénherreravega@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T11:00:00.000-03:00",
    "endTime": "2025-10-24T14:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T21:12:00.000-03:00",
    "updatedAt": "2025-10-24T21:12:00.000-03:00"
  },
  {
    "id": "res-92",
    "tableId": "table-13",
    "customer": {
      "name": "Miguel González Sánchez",
      "phone": "+54-11-5555-6666",
      "email": "miguelgonzálezsánchez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-15T19:30:00.000-03:00",
    "endTime": "2025-10-15T22:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-15T20:35:00.000-03:00",
    "updatedAt": "2025-10-15T22:35:00.000-03:00"
  },
  {
    "id": "res-93",
    "tableId": "table-24",
    "customer": {
      "name": "Cristina Romero Flores",
      "phone": "+54-11-6789-0123",
      "email": "cristinaromeroflores@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-26T15:30:00.000-03:00",
    "endTime": "2025-10-26T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-26T13:59:00.000-03:00",
    "updatedAt": "2025-10-26T13:59:00.000-03:00"
  },
  {
    "id": "res-94",
    "tableId": "table-21",
    "customer": {
      "name": "Sandra Vega Rodríguez",
      "phone": "+54-11-5555-6666",
      "email": "sandravegarodríguez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T00:00:00.000-03:00",
    "endTime": "2025-10-11T02:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-10T12:21:00.000-03:00",
    "updatedAt": "2025-10-10T15:21:00.000-03:00"
  },
  {
    "id": "res-95",
    "tableId": "table-5",
    "customer": {
      "name": "Ana García Torres",
      "phone": "+54-11-0123-4567",
      "email": "anagarcíatorres@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T23:30:00.000-03:00",
    "endTime": "2025-10-18T02:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-17T11:42:00.000-03:00",
    "updatedAt": "2025-10-17T15:42:00.000-03:00"
  },
  {
    "id": "res-96",
    "tableId": "table-11",
    "customer": {
      "name": "Elena Moreno González",
      "phone": "+54-11-9999-0000",
      "email": "elenamorenogonzález@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-16T00:00:00.000-03:00",
    "endTime": "2025-10-16T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-15T15:11:00.000-03:00",
    "updatedAt": "2025-10-15T15:11:00.000-03:00"
  },
  {
    "id": "res-97",
    "tableId": "table-21",
    "customer": {
      "name": "Pablo Delgado Romero",
      "phone": "+54-11-0123-4567",
      "email": "pablodelgadoromero@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-03T23:00:00.000-03:00",
    "endTime": "2025-10-04T02:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-03T17:20:00.000-03:00",
    "updatedAt": "2025-10-03T17:20:00.000-03:00"
  },
  {
    "id": "res-98",
    "tableId": "table-15",
    "customer": {
      "name": "Alejandro Castro Cabrera",
      "phone": "+54-11-7777-8888",
      "email": "alejandrocastrocabrera@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T19:00:00.000-03:00",
    "endTime": "2025-10-20T22:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-20T11:59:00.000-03:00",
    "updatedAt": "2025-10-20T11:59:00.000-03:00"
  },
  {
    "id": "res-99",
    "tableId": "table-4",
    "customer": {
      "name": "Roberto Herrera Fuentes",
      "phone": "+54-11-9090-1212",
      "email": "robertoherrerafuentes@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T13:00:00.000-03:00",
    "endTime": "2025-10-18T15:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-18T21:28:00.000-03:00",
    "updatedAt": "2025-10-18T21:28:00.000-03:00"
  },
  {
    "id": "res-100",
    "tableId": "table-16",
    "customer": {
      "name": "Patricia Navarro Díaz",
      "phone": "+54-11-9012-3456",
      "email": "patricianavarrodíaz@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-12T23:30:00.000-03:00",
    "endTime": "2025-10-13T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-12T12:03:00.000-03:00",
    "updatedAt": "2025-10-12T12:03:00.000-03:00"
  },
  {
    "id": "res-101",
    "tableId": "table-15",
    "customer": {
      "name": "Álvaro Serrano Pérez",
      "phone": "+54-11-4567-8901",
      "email": "álvaroserranopérez@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-12T23:00:00.000-03:00",
    "endTime": "2025-10-13T01:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-12T21:22:00.000-03:00",
    "updatedAt": "2025-10-12T21:22:00.000-03:00"
  },
  {
    "id": "res-102",
    "tableId": "table-7",
    "customer": {
      "name": "David Jiménez Ruiz",
      "phone": "+54-11-5555-6666",
      "email": "davidjiménezruiz@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T19:00:00.000-03:00",
    "endTime": "2025-10-04T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-04T11:31:00.000-03:00",
    "updatedAt": "2025-10-04T11:31:00.000-03:00"
  },
  {
    "id": "res-103",
    "tableId": "table-18",
    "customer": {
      "name": "Antonio Ruiz Reyes",
      "phone": "+54-11-6767-8989",
      "email": "antonioruizreyes@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-09-30T14:00:00.000-03:00",
    "endTime": "2025-09-30T16:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-09-30T12:46:00.000-03:00",
    "updatedAt": "2025-09-30T14:46:00.000-03:00"
  },
  {
    "id": "res-104",
    "tableId": "table-23",
    "customer": {
      "name": "María Rodríguez Medina",
      "phone": "+54-11-0123-4567",
      "email": "maríarodríguezmedina@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-05T15:30:00.000-03:00",
    "endTime": "2025-10-05T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-05T22:01:00.000-03:00",
    "updatedAt": "2025-10-05T22:01:00.000-03:00"
  },
  {
    "id": "res-105",
    "tableId": "table-19",
    "customer": {
      "name": "Laura Sánchez Díaz",
      "phone": "+54-11-9999-0000",
      "email": "laurasánchezdíaz@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-29T23:00:00.000-03:00",
    "endTime": "2025-10-30T01:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-29T15:00:00.000-03:00",
    "updatedAt": "2025-10-29T15:00:00.000-03:00"
  },
  {
    "id": "res-106",
    "tableId": "table-9",
    "customer": {
      "name": "Adrián Cabrera Rodríguez",
      "phone": "+54-11-5656-7878",
      "email": "adriáncabrerarodríguez@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-26T22:00:00.000-03:00",
    "endTime": "2025-10-26T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-26T21:12:00.000-03:00",
    "updatedAt": "2025-10-26T21:12:00.000-03:00"
  },
  {
    "id": "res-107",
    "tableId": "table-19",
    "customer": {
      "name": "Lucía Morales Campos",
      "phone": "+54-11-1212-3434",
      "email": "lucíamoralescampos@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T01:00:00.000-03:00",
    "endTime": "2025-10-11T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-10T15:04:00.000-03:00",
    "updatedAt": "2025-10-10T15:04:00.000-03:00"
  },
  {
    "id": "res-108",
    "tableId": "table-15",
    "customer": {
      "name": "Francisco Martín Silva",
      "phone": "+54-11-1212-3434",
      "email": "franciscomartínsilva@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-16T19:00:00.000-03:00",
    "endTime": "2025-10-16T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-16T21:24:00.000-03:00",
    "updatedAt": "2025-10-16T21:24:00.000-03:00"
  },
  {
    "id": "res-109",
    "tableId": "table-5",
    "customer": {
      "name": "Alejandro Castro Flores",
      "phone": "+54-11-3333-4444",
      "email": "alejandrocastroflores@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T17:00:00.000-03:00",
    "endTime": "2025-10-03T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-03T12:16:00.000-03:00",
    "updatedAt": "2025-10-03T12:16:00.000-03:00"
  },
  {
    "id": "res-110",
    "tableId": "table-1",
    "customer": {
      "name": "Roberto Herrera Castro",
      "phone": "+54-11-2345-6789",
      "email": "robertoherreracastro@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-28T16:00:00.000-03:00",
    "endTime": "2025-10-28T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-28T11:00:00.000-03:00",
    "updatedAt": "2025-10-28T11:00:00.000-03:00"
  },
  {
    "id": "res-111",
    "tableId": "table-24",
    "customer": {
      "name": "Ana García Navarro",
      "phone": "+54-11-6789-0123",
      "email": "anagarcíanavarro@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T16:30:00.000-03:00",
    "endTime": "2025-10-23T18:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-23T21:28:00.000-03:00",
    "updatedAt": "2025-10-23T21:28:00.000-03:00"
  },
  {
    "id": "res-112",
    "tableId": "table-15",
    "customer": {
      "name": "José Martínez Castro",
      "phone": "+54-11-1111-2222",
      "email": "josémartínezcastro@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-21T14:30:00.000-03:00",
    "endTime": "2025-10-21T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-21T20:48:00.000-03:00",
    "updatedAt": "2025-10-21T22:48:00.000-03:00"
  },
  {
    "id": "res-113",
    "tableId": "table-22",
    "customer": {
      "name": "Fernando Ramos Serrano",
      "phone": "+54-11-7890-1234",
      "email": "fernandoramosserrano@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-29T16:00:00.000-03:00",
    "endTime": "2025-10-29T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-29T20:17:00.000-03:00",
    "updatedAt": "2025-10-29T20:17:00.000-03:00"
  },
  {
    "id": "res-114",
    "tableId": "table-27",
    "customer": {
      "name": "Sofia Reyes Herrera",
      "phone": "+54-11-4567-8901",
      "email": "sofiareyesherrera@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T01:00:00.000-03:00",
    "endTime": "2025-10-23T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-22T13:14:00.000-03:00",
    "updatedAt": "2025-10-22T16:14:00.000-03:00"
  },
  {
    "id": "res-115",
    "tableId": "table-5",
    "customer": {
      "name": "Isabel Díaz Espinoza",
      "phone": "+54-11-4567-8901",
      "email": "isabeldíazespinoza@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-26T10:00:00.000-03:00",
    "endTime": "2025-10-26T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-26T20:56:00.000-03:00",
    "updatedAt": "2025-10-26T20:56:00.000-03:00"
  },
  {
    "id": "res-116",
    "tableId": "table-25",
    "customer": {
      "name": "Pablo Delgado Fuentes",
      "phone": "+54-11-9012-3456",
      "email": "pablodelgadofuentes@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T22:30:00.000-03:00",
    "endTime": "2025-10-19T00:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-18T14:28:00.000-03:00",
    "updatedAt": "2025-10-18T14:28:00.000-03:00"
  },
  {
    "id": "res-117",
    "tableId": "table-26",
    "customer": {
      "name": "Sergio Peña Cabrera",
      "phone": "+54-11-5678-9012",
      "email": "sergiopeñacabrera@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-05T13:00:00.000-03:00",
    "endTime": "2025-10-05T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-05T13:56:00.000-03:00",
    "updatedAt": "2025-10-05T14:56:00.000-03:00"
  },
  {
    "id": "res-118",
    "tableId": "table-11",
    "customer": {
      "name": "Natalia Ortega Vega",
      "phone": "+54-11-1234-5678",
      "email": "nataliaortegavega@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-09T12:30:00.000-03:00",
    "endTime": "2025-10-09T13:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-09T14:17:00.000-03:00",
    "updatedAt": "2025-10-09T14:17:00.000-03:00"
  },
  {
    "id": "res-119",
    "tableId": "table-11",
    "customer": {
      "name": "Daniel Campos Navarro",
      "phone": "+54-11-6789-0123",
      "email": "danielcamposnavarro@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T18:30:00.000-03:00",
    "endTime": "2025-10-18T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-18T16:24:00.000-03:00",
    "updatedAt": "2025-10-18T16:24:00.000-03:00"
  },
  {
    "id": "res-120",
    "tableId": "table-15",
    "customer": {
      "name": "Carmen Pérez Espinoza",
      "phone": "+54-11-5555-6666",
      "email": "carmenpérezespinoza@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-25T17:00:00.000-03:00",
    "endTime": "2025-10-25T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-25T14:04:00.000-03:00",
    "updatedAt": "2025-10-25T15:04:00.000-03:00"
  },
  {
    "id": "res-121",
    "tableId": "table-12",
    "customer": {
      "name": "José Martínez Moreno",
      "phone": "+54-11-5555-6666",
      "email": "josémartínezmoreno@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-04T16:00:00.000-03:00",
    "endTime": "2025-10-04T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-04T21:21:00.000-03:00",
    "updatedAt": "2025-10-04T21:21:00.000-03:00"
  },
  {
    "id": "res-122",
    "tableId": "table-23",
    "customer": {
      "name": "Beatriz Guerrero López",
      "phone": "+54-11-2345-6789",
      "email": "beatrizguerrerolópez@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T17:30:00.000-03:00",
    "endTime": "2025-10-17T19:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-17T17:26:00.000-03:00",
    "updatedAt": "2025-10-17T17:26:00.000-03:00"
  },
  {
    "id": "res-123",
    "tableId": "table-19",
    "customer": {
      "name": "Adrián Cabrera Ortega",
      "phone": "+54-11-3333-4444",
      "email": "adriáncabreraortega@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-16T10:30:00.000-03:00",
    "endTime": "2025-10-16T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-16T19:15:00.000-03:00",
    "updatedAt": "2025-10-16T19:15:00.000-03:00"
  },
  {
    "id": "res-124",
    "tableId": "table-6",
    "customer": {
      "name": "Laura Sánchez Pérez",
      "phone": "+54-11-7890-1234",
      "email": "laurasánchezpérez@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-16T22:00:00.000-03:00",
    "endTime": "2025-10-17T00:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-16T18:49:00.000-03:00",
    "updatedAt": "2025-10-16T18:49:00.000-03:00"
  },
  {
    "id": "res-125",
    "tableId": "table-25",
    "customer": {
      "name": "Sergio Peña Ortega",
      "phone": "+54-11-7890-1234",
      "email": "sergiopeñaortega@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T10:30:00.000-03:00",
    "endTime": "2025-10-22T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-22T22:04:00.000-03:00",
    "updatedAt": "2025-10-22T22:04:00.000-03:00"
  },
  {
    "id": "res-126",
    "tableId": "table-4",
    "customer": {
      "name": "Natalia Ortega García",
      "phone": "+54-11-6767-8989",
      "email": "nataliaortegagarcía@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T17:30:00.000-03:00",
    "endTime": "2025-10-17T19:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-17T16:13:00.000-03:00",
    "updatedAt": "2025-10-17T16:13:00.000-03:00"
  },
  {
    "id": "res-127",
    "tableId": "table-10",
    "customer": {
      "name": "Camila Espinoza Vega",
      "phone": "+54-11-1212-3434",
      "email": "camilaespinozavega@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T21:30:00.000-03:00",
    "endTime": "2025-10-10T22:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-10T12:07:00.000-03:00",
    "updatedAt": "2025-10-10T12:07:00.000-03:00"
  },
  {
    "id": "res-128",
    "tableId": "table-8",
    "customer": {
      "name": "Valeria Silva Espinoza",
      "phone": "+54-11-9012-3456",
      "email": "valeriasilvaespinoza@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-06T11:00:00.000-03:00",
    "endTime": "2025-10-06T14:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-06T11:45:00.000-03:00",
    "updatedAt": "2025-10-06T11:45:00.000-03:00"
  },
  {
    "id": "res-129",
    "tableId": "table-18",
    "customer": {
      "name": "David Jiménez Campos",
      "phone": "+54-11-0123-4567",
      "email": "davidjiménezcampos@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-13T17:00:00.000-03:00",
    "endTime": "2025-10-13T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-13T17:31:00.000-03:00",
    "updatedAt": "2025-10-13T17:31:00.000-03:00"
  },
  {
    "id": "res-130",
    "tableId": "table-12",
    "customer": {
      "name": "Fernando Ramos Ruiz",
      "phone": "+54-11-7777-8888",
      "email": "fernandoramosruiz@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T11:30:00.000-03:00",
    "endTime": "2025-10-19T12:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-19T22:41:00.000-03:00",
    "updatedAt": "2025-10-20T02:41:00.000-03:00"
  },
  {
    "id": "res-131",
    "tableId": "table-22",
    "customer": {
      "name": "Fernando Ramos Rodríguez",
      "phone": "+54-11-5555-6666",
      "email": "fernandoramosrodríguez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T10:30:00.000-03:00",
    "endTime": "2025-10-10T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-10T15:48:00.000-03:00",
    "updatedAt": "2025-10-10T15:48:00.000-03:00"
  },
  {
    "id": "res-132",
    "tableId": "table-26",
    "customer": {
      "name": "Carmen Pérez Sánchez",
      "phone": "+54-11-7890-1234",
      "email": "carmenpérezsánchez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T01:30:00.000-03:00",
    "endTime": "2025-10-20T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-19T22:18:00.000-03:00",
    "updatedAt": "2025-10-20T01:18:00.000-03:00"
  },
  {
    "id": "res-133",
    "tableId": "table-2",
    "customer": {
      "name": "Elena Moreno Rodríguez",
      "phone": "+54-11-1212-3434",
      "email": "elenamorenorodríguez@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-02T16:00:00.000-03:00",
    "endTime": "2025-10-02T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-02T15:05:00.000-03:00",
    "updatedAt": "2025-10-02T15:05:00.000-03:00"
  },
  {
    "id": "res-134",
    "tableId": "table-18",
    "customer": {
      "name": "José Martínez Castro",
      "phone": "+54-11-9012-3456",
      "email": "josémartínezcastro@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-03T19:00:00.000-03:00",
    "endTime": "2025-10-03T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-03T13:42:00.000-03:00",
    "updatedAt": "2025-10-03T13:42:00.000-03:00"
  },
  {
    "id": "res-135",
    "tableId": "table-27",
    "customer": {
      "name": "Lucía Morales Flores",
      "phone": "+54-11-0123-4567",
      "email": "lucíamoralesflores@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T20:00:00.000-03:00",
    "endTime": "2025-10-26T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-26T20:44:00.000-03:00",
    "updatedAt": "2025-10-27T00:44:00.000-03:00"
  },
  {
    "id": "res-136",
    "tableId": "table-22",
    "customer": {
      "name": "José Martínez Vargas",
      "phone": "+54-11-9012-3456",
      "email": "josémartínezvargas@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-11T01:30:00.000-03:00",
    "endTime": "2025-10-11T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-10T11:29:00.000-03:00",
    "updatedAt": "2025-10-10T11:29:00.000-03:00"
  },
  {
    "id": "res-137",
    "tableId": "table-14",
    "customer": {
      "name": "Camila Espinoza Martín",
      "phone": "+54-11-5678-9012",
      "email": "camilaespinozamartín@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T16:00:00.000-03:00",
    "endTime": "2025-10-18T19:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-18T11:35:00.000-03:00",
    "updatedAt": "2025-10-18T11:35:00.000-03:00"
  },
  {
    "id": "res-138",
    "tableId": "table-9",
    "customer": {
      "name": "Isabel Díaz Herrera",
      "phone": "+54-11-1313-4545",
      "email": "isabeldíazherrera@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T22:00:00.000-03:00",
    "endTime": "2025-10-18T01:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-17T14:54:00.000-03:00",
    "updatedAt": "2025-10-17T14:54:00.000-03:00"
  },
  {
    "id": "res-139",
    "tableId": "table-23",
    "customer": {
      "name": "Elena Moreno Rodríguez",
      "phone": "+54-11-9999-0000",
      "email": "elenamorenorodríguez@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T16:00:00.000-03:00",
    "endTime": "2025-10-17T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-17T12:41:00.000-03:00",
    "updatedAt": "2025-10-17T12:41:00.000-03:00"
  },
  {
    "id": "res-140",
    "tableId": "table-14",
    "customer": {
      "name": "Adrián Cabrera Rojas",
      "phone": "+54-11-3333-4444",
      "email": "adriáncabrerarojas@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T20:30:00.000-03:00",
    "endTime": "2025-10-18T23:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-18T15:13:00.000-03:00",
    "updatedAt": "2025-10-18T15:13:00.000-03:00"
  },
  {
    "id": "res-141",
    "tableId": "table-25",
    "customer": {
      "name": "Daniel Campos Morales",
      "phone": "+54-11-1234-5678",
      "email": "danielcamposmorales@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-10T16:00:00.000-03:00",
    "endTime": "2025-10-10T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-10T19:43:00.000-03:00",
    "updatedAt": "2025-10-10T19:43:00.000-03:00"
  },
  {
    "id": "res-142",
    "tableId": "table-14",
    "customer": {
      "name": "Patricia Navarro Silva",
      "phone": "+54-11-3456-7890",
      "email": "patricianavarrosilva@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-18T12:00:00.000-03:00",
    "endTime": "2025-10-18T15:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-18T15:44:00.000-03:00",
    "updatedAt": "2025-10-18T15:44:00.000-03:00"
  },
  {
    "id": "res-143",
    "tableId": "table-8",
    "customer": {
      "name": "Beatriz Guerrero Martín",
      "phone": "+54-11-6789-0123",
      "email": "beatrizguerreromartín@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T21:30:00.000-03:00",
    "endTime": "2025-10-27T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-26T11:33:00.000-03:00",
    "updatedAt": "2025-10-26T15:33:00.000-03:00"
  },
  {
    "id": "res-144",
    "tableId": "table-8",
    "customer": {
      "name": "Francisco Martín González",
      "phone": "+54-11-1313-4545",
      "email": "franciscomartíngonzález@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-26T20:30:00.000-03:00",
    "endTime": "2025-10-26T22:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-26T11:30:00.000-03:00",
    "updatedAt": "2025-10-26T11:30:00.000-03:00"
  },
  {
    "id": "res-145",
    "tableId": "table-30",
    "customer": {
      "name": "Camila Espinoza Navarro",
      "phone": "+54-11-9999-0000",
      "email": "camilaespinozanavarro@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-11T18:30:00.000-03:00",
    "endTime": "2025-10-11T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-11T13:10:00.000-03:00",
    "updatedAt": "2025-10-11T13:10:00.000-03:00"
  },
  {
    "id": "res-146",
    "tableId": "table-15",
    "customer": {
      "name": "Beatriz Guerrero Ramos",
      "phone": "+54-11-1212-3434",
      "email": "beatrizguerreroramos@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T00:30:00.000-03:00",
    "endTime": "2025-10-04T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-03T13:46:00.000-03:00",
    "updatedAt": "2025-10-03T13:46:00.000-03:00"
  },
  {
    "id": "res-147",
    "tableId": "table-30",
    "customer": {
      "name": "Roberto Herrera Espinoza",
      "phone": "+54-11-6767-8989",
      "email": "robertoherreraespinoza@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-03T14:30:00.000-03:00",
    "endTime": "2025-10-03T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-03T17:24:00.000-03:00",
    "updatedAt": "2025-10-03T17:24:00.000-03:00"
  },
  {
    "id": "res-148",
    "tableId": "table-21",
    "customer": {
      "name": "Francisco Martín Molina",
      "phone": "+54-11-1234-5678",
      "email": "franciscomartínmolina@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T11:30:00.000-03:00",
    "endTime": "2025-10-04T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-04T13:55:00.000-03:00",
    "updatedAt": "2025-10-04T13:55:00.000-03:00"
  },
  {
    "id": "res-149",
    "tableId": "table-18",
    "customer": {
      "name": "Sebastián Vega Vega",
      "phone": "+54-11-6789-0123",
      "email": "sebastiánvegavega@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T21:30:00.000-03:00",
    "endTime": "2025-10-05T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-04T20:24:00.000-03:00",
    "updatedAt": "2025-10-04T20:24:00.000-03:00"
  },
  {
    "id": "res-150",
    "tableId": "table-21",
    "customer": {
      "name": "Fernando Ramos Díaz",
      "phone": "+54-11-9012-3456",
      "email": "fernandoramosdíaz@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T23:30:00.000-03:00",
    "endTime": "2025-10-11T02:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-10T20:34:00.000-03:00",
    "updatedAt": "2025-10-10T20:34:00.000-03:00"
  },
  {
    "id": "res-151",
    "tableId": "table-12",
    "customer": {
      "name": "Antonio Ruiz Vega",
      "phone": "+54-11-5678-9012",
      "email": "antonioruizvega@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-03T00:00:00.000-03:00",
    "endTime": "2025-10-03T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-02T16:53:00.000-03:00",
    "updatedAt": "2025-10-02T16:53:00.000-03:00"
  },
  {
    "id": "res-152",
    "tableId": "table-5",
    "customer": {
      "name": "Daniel Campos López",
      "phone": "+54-11-9012-3456",
      "email": "danielcamposlópez@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T21:30:00.000-03:00",
    "endTime": "2025-10-04T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-03T21:00:00.000-03:00",
    "updatedAt": "2025-10-03T21:00:00.000-03:00"
  },
  {
    "id": "res-153",
    "tableId": "table-11",
    "customer": {
      "name": "Beatriz Guerrero Herrera",
      "phone": "+54-11-5656-7878",
      "email": "beatrizguerreroherrera@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-25T18:30:00.000-03:00",
    "endTime": "2025-10-25T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-25T21:48:00.000-03:00",
    "updatedAt": "2025-10-25T21:48:00.000-03:00"
  },
  {
    "id": "res-154",
    "tableId": "table-11",
    "customer": {
      "name": "Carlos López Navarro",
      "phone": "+54-11-7890-1234",
      "email": "carloslópeznavarro@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-08T23:00:00.000-03:00",
    "endTime": "2025-10-09T01:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-08T13:18:00.000-03:00",
    "updatedAt": "2025-10-08T13:18:00.000-03:00"
  },
  {
    "id": "res-155",
    "tableId": "table-9",
    "customer": {
      "name": "Antonio Ruiz Ruiz",
      "phone": "+54-11-2345-6789",
      "email": "antonioruizruiz@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-11T20:30:00.000-03:00",
    "endTime": "2025-10-11T21:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-11T13:14:00.000-03:00",
    "updatedAt": "2025-10-11T13:14:00.000-03:00"
  },
  {
    "id": "res-156",
    "tableId": "table-23",
    "customer": {
      "name": "Antonio Ruiz Ramos",
      "phone": "+54-11-9012-3456",
      "email": "antonioruizramos@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T10:30:00.000-03:00",
    "endTime": "2025-10-10T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-10T11:43:00.000-03:00",
    "updatedAt": "2025-10-10T13:43:00.000-03:00"
  },
  {
    "id": "res-157",
    "tableId": "table-17",
    "customer": {
      "name": "Hugo Aguilar Jiménez",
      "phone": "+54-11-1111-2222",
      "email": "hugoaguilarjiménez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-01T20:30:00.000-03:00",
    "endTime": "2025-10-01T23:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-01T16:14:00.000-03:00",
    "updatedAt": "2025-10-01T16:14:00.000-03:00"
  },
  {
    "id": "res-158",
    "tableId": "table-11",
    "customer": {
      "name": "Ana García López",
      "phone": "+54-11-8901-2345",
      "email": "anagarcíalópez@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-11T13:00:00.000-03:00",
    "endTime": "2025-10-11T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-11T14:23:00.000-03:00",
    "updatedAt": "2025-10-11T17:23:00.000-03:00"
  },
  {
    "id": "res-159",
    "tableId": "table-18",
    "customer": {
      "name": "Pablo Delgado Peña",
      "phone": "+54-11-9090-1212",
      "email": "pablodelgadopeña@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-16T17:00:00.000-03:00",
    "endTime": "2025-10-16T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-16T20:56:00.000-03:00",
    "updatedAt": "2025-10-16T20:56:00.000-03:00"
  },
  {
    "id": "res-160",
    "tableId": "table-8",
    "customer": {
      "name": "Fernando Ramos Reyes",
      "phone": "+54-11-7777-8888",
      "email": "fernandoramosreyes@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-10T12:00:00.000-03:00",
    "endTime": "2025-10-10T14:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-10T13:39:00.000-03:00",
    "updatedAt": "2025-10-10T13:39:00.000-03:00"
  },
  {
    "id": "res-161",
    "tableId": "table-19",
    "customer": {
      "name": "Lucía Morales Ramos",
      "phone": "+54-11-7890-1234",
      "email": "lucíamoralesramos@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T10:30:00.000-03:00",
    "endTime": "2025-10-23T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-23T14:38:00.000-03:00",
    "updatedAt": "2025-10-23T14:38:00.000-03:00"
  },
  {
    "id": "res-162",
    "tableId": "table-15",
    "customer": {
      "name": "Sandra Vega Molina",
      "phone": "+54-11-0123-4567",
      "email": "sandravegamolina@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T00:30:00.000-03:00",
    "endTime": "2025-10-11T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-10T16:50:00.000-03:00",
    "updatedAt": "2025-10-10T18:50:00.000-03:00"
  },
  {
    "id": "res-163",
    "tableId": "table-12",
    "customer": {
      "name": "Daniel Campos Torres",
      "phone": "+54-11-5678-9012",
      "email": "danielcampostorres@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T20:00:00.000-03:00",
    "endTime": "2025-10-18T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-18T20:26:00.000-03:00",
    "updatedAt": "2025-10-19T00:26:00.000-03:00"
  },
  {
    "id": "res-164",
    "tableId": "table-4",
    "customer": {
      "name": "José Martínez Peña",
      "phone": "+54-11-5656-7878",
      "email": "josémartínezpeña@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T17:30:00.000-03:00",
    "endTime": "2025-10-18T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-18T22:42:00.000-03:00",
    "updatedAt": "2025-10-18T22:42:00.000-03:00"
  },
  {
    "id": "res-165",
    "tableId": "table-10",
    "customer": {
      "name": "Laura Sánchez Fuentes",
      "phone": "+54-11-1111-2222",
      "email": "laurasánchezfuentes@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-09T23:30:00.000-03:00",
    "endTime": "2025-10-10T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-09T19:01:00.000-03:00",
    "updatedAt": "2025-10-09T19:01:00.000-03:00"
  },
  {
    "id": "res-166",
    "tableId": "table-15",
    "customer": {
      "name": "David Jiménez Ruiz",
      "phone": "+54-11-4567-8901",
      "email": "davidjiménezruiz@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-26T18:30:00.000-03:00",
    "endTime": "2025-10-26T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-26T22:58:00.000-03:00",
    "updatedAt": "2025-10-27T01:58:00.000-03:00"
  },
  {
    "id": "res-167",
    "tableId": "table-17",
    "customer": {
      "name": "Pablo Delgado Ruiz",
      "phone": "+54-11-5678-9012",
      "email": "pablodelgadoruiz@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-26T11:30:00.000-03:00",
    "endTime": "2025-10-26T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-26T11:17:00.000-03:00",
    "updatedAt": "2025-10-26T11:17:00.000-03:00"
  },
  {
    "id": "res-168",
    "tableId": "table-4",
    "customer": {
      "name": "Laura Sánchez Pérez",
      "phone": "+54-11-8901-2345",
      "email": "laurasánchezpérez@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T11:00:00.000-03:00",
    "endTime": "2025-10-17T14:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-17T18:25:00.000-03:00",
    "updatedAt": "2025-10-17T18:25:00.000-03:00"
  },
  {
    "id": "res-169",
    "tableId": "table-16",
    "customer": {
      "name": "Fernando Ramos Sánchez",
      "phone": "+54-11-5555-6666",
      "email": "fernandoramossánchez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-04T23:30:00.000-03:00",
    "endTime": "2025-10-05T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-04T18:52:00.000-03:00",
    "updatedAt": "2025-10-04T20:52:00.000-03:00"
  },
  {
    "id": "res-170",
    "tableId": "table-25",
    "customer": {
      "name": "Nicolás Fuentes López",
      "phone": "+54-11-7890-1234",
      "email": "nicolásfuenteslópez@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-13T14:30:00.000-03:00",
    "endTime": "2025-10-13T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-13T13:06:00.000-03:00",
    "updatedAt": "2025-10-13T13:06:00.000-03:00"
  },
  {
    "id": "res-171",
    "tableId": "table-9",
    "customer": {
      "name": "Hugo Aguilar Espinoza",
      "phone": "+54-11-6789-0123",
      "email": "hugoaguilarespinoza@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-29T23:30:00.000-03:00",
    "endTime": "2025-10-30T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-29T13:33:00.000-03:00",
    "updatedAt": "2025-10-29T13:33:00.000-03:00"
  },
  {
    "id": "res-172",
    "tableId": "table-6",
    "customer": {
      "name": "Miguel González Molina",
      "phone": "+54-11-7890-1234",
      "email": "miguelgonzálezmolina@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-03T20:00:00.000-03:00",
    "endTime": "2025-10-03T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-03T21:27:00.000-03:00",
    "updatedAt": "2025-10-04T01:27:00.000-03:00"
  },
  {
    "id": "res-173",
    "tableId": "table-1",
    "customer": {
      "name": "Valeria Silva Molina",
      "phone": "+54-11-9090-1212",
      "email": "valeriasilvamolina@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-28T01:00:00.000-03:00",
    "endTime": "2025-10-28T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-27T17:47:00.000-03:00",
    "updatedAt": "2025-10-27T17:47:00.000-03:00"
  },
  {
    "id": "res-174",
    "tableId": "table-17",
    "customer": {
      "name": "Carlos López Vega",
      "phone": "+54-11-5656-7878",
      "email": "carloslópezvega@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-05T00:30:00.000-03:00",
    "endTime": "2025-10-05T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-04T15:06:00.000-03:00",
    "updatedAt": "2025-10-04T17:06:00.000-03:00"
  },
  {
    "id": "res-175",
    "tableId": "table-6",
    "customer": {
      "name": "Laura Sánchez González",
      "phone": "+54-11-3456-7890",
      "email": "laurasánchezgonzález@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-10T01:30:00.000-03:00",
    "endTime": "2025-10-10T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-09T12:58:00.000-03:00",
    "updatedAt": "2025-10-09T12:58:00.000-03:00"
  },
  {
    "id": "res-176",
    "tableId": "table-28",
    "customer": {
      "name": "Alejandro Castro Flores",
      "phone": "+54-11-6767-8989",
      "email": "alejandrocastroflores@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-01T15:00:00.000-03:00",
    "endTime": "2025-10-01T17:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-01T22:53:00.000-03:00",
    "updatedAt": "2025-10-01T22:53:00.000-03:00"
  },
  {
    "id": "res-177",
    "tableId": "table-1",
    "customer": {
      "name": "Natalia Ortega Jiménez",
      "phone": "+54-11-9012-3456",
      "email": "nataliaortegajiménez@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-15T11:30:00.000-03:00",
    "endTime": "2025-10-15T13:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-15T13:23:00.000-03:00",
    "updatedAt": "2025-10-15T16:23:00.000-03:00"
  },
  {
    "id": "res-178",
    "tableId": "table-11",
    "customer": {
      "name": "Isabel Díaz García",
      "phone": "+54-11-1212-3434",
      "email": "isabeldíazgarcía@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T19:00:00.000-03:00",
    "endTime": "2025-10-03T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-03T19:46:00.000-03:00",
    "updatedAt": "2025-10-03T19:46:00.000-03:00"
  },
  {
    "id": "res-179",
    "tableId": "table-12",
    "customer": {
      "name": "Sergio Peña García",
      "phone": "+54-11-6789-0123",
      "email": "sergiopeñagarcía@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-01T17:00:00.000-03:00",
    "endTime": "2025-10-01T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-01T11:06:00.000-03:00",
    "updatedAt": "2025-10-01T11:06:00.000-03:00"
  },
  {
    "id": "res-180",
    "tableId": "table-7",
    "customer": {
      "name": "Carmen Pérez Ruiz",
      "phone": "+54-11-9090-1212",
      "email": "carmenpérezruiz@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-27T16:00:00.000-03:00",
    "endTime": "2025-10-27T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-27T17:29:00.000-03:00",
    "updatedAt": "2025-10-27T17:29:00.000-03:00"
  },
  {
    "id": "res-181",
    "tableId": "table-6",
    "customer": {
      "name": "David Jiménez Ortega",
      "phone": "+54-11-2345-6789",
      "email": "davidjiménezortega@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T15:00:00.000-03:00",
    "endTime": "2025-10-03T18:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-03T21:01:00.000-03:00",
    "updatedAt": "2025-10-03T22:01:00.000-03:00"
  },
  {
    "id": "res-182",
    "tableId": "table-21",
    "customer": {
      "name": "Javier Torres Morales",
      "phone": "+54-11-6767-8989",
      "email": "javiertorresmorales@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T00:00:00.000-03:00",
    "endTime": "2025-10-19T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-18T19:04:00.000-03:00",
    "updatedAt": "2025-10-18T19:04:00.000-03:00"
  },
  {
    "id": "res-183",
    "tableId": "table-21",
    "customer": {
      "name": "Mónica Flores Rojas",
      "phone": "+54-11-5555-6666",
      "email": "mónicafloresrojas@live.com"
    },
    "partySize": 5,
    "startTime": "2025-09-30T13:30:00.000-03:00",
    "endTime": "2025-09-30T16:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-09-30T13:08:00.000-03:00",
    "updatedAt": "2025-09-30T15:08:00.000-03:00"
  },
  {
    "id": "res-184",
    "tableId": "table-20",
    "customer": {
      "name": "David Jiménez Martín",
      "phone": "+54-11-7777-8888",
      "email": "davidjiménezmartín@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-06T14:30:00.000-03:00",
    "endTime": "2025-10-06T16:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-06T15:40:00.000-03:00",
    "updatedAt": "2025-10-06T15:40:00.000-03:00"
  },
  {
    "id": "res-185",
    "tableId": "table-14",
    "customer": {
      "name": "Carlos López Reyes",
      "phone": "+54-11-1212-3434",
      "email": "carloslópezreyes@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-05T12:30:00.000-03:00",
    "endTime": "2025-10-05T13:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-05T14:45:00.000-03:00",
    "updatedAt": "2025-10-05T14:45:00.000-03:00"
  },
  {
    "id": "res-186",
    "tableId": "table-8",
    "customer": {
      "name": "Roberto Herrera Rodríguez",
      "phone": "+54-11-5678-9012",
      "email": "robertoherrerarodríguez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-29T17:00:00.000-03:00",
    "endTime": "2025-10-29T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-29T13:39:00.000-03:00",
    "updatedAt": "2025-10-29T13:39:00.000-03:00"
  },
  {
    "id": "res-187",
    "tableId": "table-24",
    "customer": {
      "name": "Fernando Ramos Delgado",
      "phone": "+54-11-6789-0123",
      "email": "fernandoramosdelgado@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-20T21:00:00.000-03:00",
    "endTime": "2025-10-20T22:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-20T20:10:00.000-03:00",
    "updatedAt": "2025-10-20T22:10:00.000-03:00"
  },
  {
    "id": "res-188",
    "tableId": "table-2",
    "customer": {
      "name": "Fernando Ramos Silva",
      "phone": "+54-11-9999-0000",
      "email": "fernandoramossilva@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T19:30:00.000-03:00",
    "endTime": "2025-10-04T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-04T20:13:00.000-03:00",
    "updatedAt": "2025-10-04T20:13:00.000-03:00"
  },
  {
    "id": "res-189",
    "tableId": "table-9",
    "customer": {
      "name": "Roberto Herrera González",
      "phone": "+54-11-0123-4567",
      "email": "robertoherreragonzález@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T19:00:00.000-03:00",
    "endTime": "2025-10-18T22:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-18T21:19:00.000-03:00",
    "updatedAt": "2025-10-18T21:19:00.000-03:00"
  },
  {
    "id": "res-190",
    "tableId": "table-26",
    "customer": {
      "name": "Cristina Romero Sánchez",
      "phone": "+54-11-6789-0123",
      "email": "cristinaromerosánchez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T10:00:00.000-03:00",
    "endTime": "2025-10-23T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-23T13:59:00.000-03:00",
    "updatedAt": "2025-10-23T15:59:00.000-03:00"
  },
  {
    "id": "res-191",
    "tableId": "table-8",
    "customer": {
      "name": "Gabriel Rojas Herrera",
      "phone": "+54-11-6767-8989",
      "email": "gabrielrojasherrera@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-11T12:00:00.000-03:00",
    "endTime": "2025-10-11T14:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-11T12:26:00.000-03:00",
    "updatedAt": "2025-10-11T14:26:00.000-03:00"
  },
  {
    "id": "res-192",
    "tableId": "table-4",
    "customer": {
      "name": "Isabel Díaz Torres",
      "phone": "+54-11-1212-3434",
      "email": "isabeldíaztorres@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-05T23:30:00.000-03:00",
    "endTime": "2025-10-06T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-05T12:01:00.000-03:00",
    "updatedAt": "2025-10-05T12:01:00.000-03:00"
  },
  {
    "id": "res-193",
    "tableId": "table-12",
    "customer": {
      "name": "Cristina Romero Vega",
      "phone": "+54-11-3456-7890",
      "email": "cristinaromerovega@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T17:00:00.000-03:00",
    "endTime": "2025-10-26T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-26T13:25:00.000-03:00",
    "updatedAt": "2025-10-26T13:25:00.000-03:00"
  },
  {
    "id": "res-194",
    "tableId": "table-23",
    "customer": {
      "name": "Carlos López Ruiz",
      "phone": "+54-11-5656-7878",
      "email": "carloslópezruiz@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-29T12:00:00.000-03:00",
    "endTime": "2025-10-29T15:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-29T20:49:00.000-03:00",
    "updatedAt": "2025-10-29T20:49:00.000-03:00"
  },
  {
    "id": "res-195",
    "tableId": "table-25",
    "customer": {
      "name": "Mónica Flores Silva",
      "phone": "+54-11-3333-4444",
      "email": "mónicafloressilva@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-04T00:30:00.000-03:00",
    "endTime": "2025-10-04T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-03T20:44:00.000-03:00",
    "updatedAt": "2025-10-03T20:44:00.000-03:00"
  },
  {
    "id": "res-196",
    "tableId": "table-2",
    "customer": {
      "name": "Javier Torres Vega",
      "phone": "+54-11-3456-7890",
      "email": "javiertorresvega@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T13:30:00.000-03:00",
    "endTime": "2025-10-04T15:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-04T11:29:00.000-03:00",
    "updatedAt": "2025-10-04T11:29:00.000-03:00"
  },
  {
    "id": "res-197",
    "tableId": "table-16",
    "customer": {
      "name": "Rubén Herrera Serrano",
      "phone": "+54-11-6789-0123",
      "email": "rubénherreraserrano@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-02T15:00:00.000-03:00",
    "endTime": "2025-10-02T17:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-02T18:45:00.000-03:00",
    "updatedAt": "2025-10-02T18:45:00.000-03:00"
  },
  {
    "id": "res-198",
    "tableId": "table-22",
    "customer": {
      "name": "Carmen Pérez Vega",
      "phone": "+54-11-3456-7890",
      "email": "carmenpérezvega@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T19:00:00.000-03:00",
    "endTime": "2025-10-18T21:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-18T14:27:00.000-03:00",
    "updatedAt": "2025-10-18T14:27:00.000-03:00"
  },
  {
    "id": "res-199",
    "tableId": "table-13",
    "customer": {
      "name": "Teresa Molina Vargas",
      "phone": "+54-11-9012-3456",
      "email": "teresamolinavargas@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-29T01:00:00.000-03:00",
    "endTime": "2025-10-29T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-28T17:32:00.000-03:00",
    "updatedAt": "2025-10-28T19:32:00.000-03:00"
  },
  {
    "id": "res-200",
    "tableId": "table-8",
    "customer": {
      "name": "Miguel González Delgado",
      "phone": "+54-11-1313-4545",
      "email": "miguelgonzálezdelgado@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-05T01:00:00.000-03:00",
    "endTime": "2025-10-05T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-04T21:41:00.000-03:00",
    "updatedAt": "2025-10-04T23:41:00.000-03:00"
  },
  {
    "id": "res-201",
    "tableId": "table-8",
    "customer": {
      "name": "Carmen Pérez Peña",
      "phone": "+54-11-0123-4567",
      "email": "carmenpérezpeña@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-26T21:30:00.000-03:00",
    "endTime": "2025-10-26T22:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-26T14:10:00.000-03:00",
    "updatedAt": "2025-10-26T15:10:00.000-03:00"
  },
  {
    "id": "res-202",
    "tableId": "table-21",
    "customer": {
      "name": "Sandra Vega Ruiz",
      "phone": "+54-11-9999-0000",
      "email": "sandravegaruiz@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-29T21:30:00.000-03:00",
    "endTime": "2025-10-29T23:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-29T13:08:00.000-03:00",
    "updatedAt": "2025-10-29T13:08:00.000-03:00"
  },
  {
    "id": "res-203",
    "tableId": "table-16",
    "customer": {
      "name": "Sergio Peña Herrera",
      "phone": "+54-11-9999-0000",
      "email": "sergiopeñaherrera@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-15T22:00:00.000-03:00",
    "endTime": "2025-10-16T00:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-15T13:15:00.000-03:00",
    "updatedAt": "2025-10-15T15:15:00.000-03:00"
  },
  {
    "id": "res-204",
    "tableId": "table-21",
    "customer": {
      "name": "Javier Torres Delgado",
      "phone": "+54-11-5656-7878",
      "email": "javiertorresdelgado@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-01T20:00:00.000-03:00",
    "endTime": "2025-10-01T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-01T15:03:00.000-03:00",
    "updatedAt": "2025-10-01T15:03:00.000-03:00"
  },
  {
    "id": "res-205",
    "tableId": "table-18",
    "customer": {
      "name": "Daniel Campos Navarro",
      "phone": "+54-11-1234-5678",
      "email": "danielcamposnavarro@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-16T18:00:00.000-03:00",
    "endTime": "2025-10-16T19:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-16T20:56:00.000-03:00",
    "updatedAt": "2025-10-16T20:56:00.000-03:00"
  },
  {
    "id": "res-206",
    "tableId": "table-14",
    "customer": {
      "name": "Mónica Flores López",
      "phone": "+54-11-7777-8888",
      "email": "mónicafloreslópez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-09T14:00:00.000-03:00",
    "endTime": "2025-10-09T15:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-09T12:31:00.000-03:00",
    "updatedAt": "2025-10-09T12:31:00.000-03:00"
  },
  {
    "id": "res-207",
    "tableId": "table-6",
    "customer": {
      "name": "Daniel Campos Medina",
      "phone": "+54-11-8901-2345",
      "email": "danielcamposmedina@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-05T10:30:00.000-03:00",
    "endTime": "2025-10-05T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-05T16:25:00.000-03:00",
    "updatedAt": "2025-10-05T20:25:00.000-03:00"
  },
  {
    "id": "res-208",
    "tableId": "table-13",
    "customer": {
      "name": "Teresa Molina Rodríguez",
      "phone": "+54-11-3456-7890",
      "email": "teresamolinarodríguez@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-14T10:30:00.000-03:00",
    "endTime": "2025-10-14T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-14T22:01:00.000-03:00",
    "updatedAt": "2025-10-14T22:01:00.000-03:00"
  },
  {
    "id": "res-209",
    "tableId": "table-11",
    "customer": {
      "name": "Camila Espinoza Peña",
      "phone": "+54-11-5555-6666",
      "email": "camilaespinozapeña@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-10T01:30:00.000-03:00",
    "endTime": "2025-10-10T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-09T22:59:00.000-03:00",
    "updatedAt": "2025-10-09T22:59:00.000-03:00"
  },
  {
    "id": "res-210",
    "tableId": "table-9",
    "customer": {
      "name": "Patricia Navarro Castro",
      "phone": "+54-11-8901-2345",
      "email": "patricianavarrocastro@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-19T01:30:00.000-03:00",
    "endTime": "2025-10-19T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-18T16:15:00.000-03:00",
    "updatedAt": "2025-10-18T20:15:00.000-03:00"
  },
  {
    "id": "res-211",
    "tableId": "table-4",
    "customer": {
      "name": "Adrián Cabrera Mendoza",
      "phone": "+54-11-1313-4545",
      "email": "adriáncabreramendoza@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-11T22:30:00.000-03:00",
    "endTime": "2025-10-11T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-11T16:21:00.000-03:00",
    "updatedAt": "2025-10-11T16:21:00.000-03:00"
  },
  {
    "id": "res-212",
    "tableId": "table-19",
    "customer": {
      "name": "Nicolás Fuentes Fuentes",
      "phone": "+54-11-9012-3456",
      "email": "nicolásfuentesfuentes@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T15:30:00.000-03:00",
    "endTime": "2025-10-17T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-17T13:16:00.000-03:00",
    "updatedAt": "2025-10-17T13:16:00.000-03:00"
  },
  {
    "id": "res-213",
    "tableId": "table-28",
    "customer": {
      "name": "Valeria Silva Serrano",
      "phone": "+54-11-3333-4444",
      "email": "valeriasilvaserrano@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-25T13:00:00.000-03:00",
    "endTime": "2025-10-25T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-25T13:05:00.000-03:00",
    "updatedAt": "2025-10-25T13:05:00.000-03:00"
  },
  {
    "id": "res-214",
    "tableId": "table-6",
    "customer": {
      "name": "Claudia Medina Martín",
      "phone": "+54-11-1212-3434",
      "email": "claudiamedinamartín@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-10T23:30:00.000-03:00",
    "endTime": "2025-10-11T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-10T13:38:00.000-03:00",
    "updatedAt": "2025-10-10T13:38:00.000-03:00"
  },
  {
    "id": "res-215",
    "tableId": "table-4",
    "customer": {
      "name": "Sandra Vega Torres",
      "phone": "+54-11-0123-4567",
      "email": "sandravegatorres@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T14:30:00.000-03:00",
    "endTime": "2025-10-17T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-17T14:43:00.000-03:00",
    "updatedAt": "2025-10-17T14:43:00.000-03:00"
  },
  {
    "id": "res-216",
    "tableId": "table-6",
    "customer": {
      "name": "Miguel González Romero",
      "phone": "+54-11-7890-1234",
      "email": "miguelgonzálezromero@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T20:30:00.000-03:00",
    "endTime": "2025-10-17T22:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-17T12:56:00.000-03:00",
    "updatedAt": "2025-10-17T12:56:00.000-03:00"
  },
  {
    "id": "res-217",
    "tableId": "table-26",
    "customer": {
      "name": "Francisco Martín Vega",
      "phone": "+54-11-9012-3456",
      "email": "franciscomartínvega@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-12T16:30:00.000-03:00",
    "endTime": "2025-10-12T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-12T22:18:00.000-03:00",
    "updatedAt": "2025-10-13T01:18:00.000-03:00"
  },
  {
    "id": "res-218",
    "tableId": "table-14",
    "customer": {
      "name": "Sebastián Vega Espinoza",
      "phone": "+54-11-9012-3456",
      "email": "sebastiánvegaespinoza@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T16:00:00.000-03:00",
    "endTime": "2025-10-25T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-25T21:40:00.000-03:00",
    "updatedAt": "2025-10-25T21:40:00.000-03:00"
  },
  {
    "id": "res-219",
    "tableId": "table-16",
    "customer": {
      "name": "Mónica Flores Castro",
      "phone": "+54-11-3333-4444",
      "email": "mónicaflorescastro@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-22T10:30:00.000-03:00",
    "endTime": "2025-10-22T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-22T14:37:00.000-03:00",
    "updatedAt": "2025-10-22T14:37:00.000-03:00"
  },
  {
    "id": "res-220",
    "tableId": "table-14",
    "customer": {
      "name": "Alejandro Castro Delgado",
      "phone": "+54-11-9090-1212",
      "email": "alejandrocastrodelgado@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-02T17:30:00.000-03:00",
    "endTime": "2025-10-02T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-02T17:13:00.000-03:00",
    "updatedAt": "2025-10-02T17:13:00.000-03:00"
  },
  {
    "id": "res-221",
    "tableId": "table-30",
    "customer": {
      "name": "Alejandro Castro Aguilar",
      "phone": "+54-11-4567-8901",
      "email": "alejandrocastroaguilar@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T15:30:00.000-03:00",
    "endTime": "2025-10-18T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-18T15:55:00.000-03:00",
    "updatedAt": "2025-10-18T15:55:00.000-03:00"
  },
  {
    "id": "res-222",
    "tableId": "table-30",
    "customer": {
      "name": "Fernando Ramos Reyes",
      "phone": "+54-11-7777-8888",
      "email": "fernandoramosreyes@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T10:00:00.000-03:00",
    "endTime": "2025-10-18T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-18T13:50:00.000-03:00",
    "updatedAt": "2025-10-18T14:50:00.000-03:00"
  },
  {
    "id": "res-223",
    "tableId": "table-15",
    "customer": {
      "name": "Natalia Ortega Rojas",
      "phone": "+54-11-5656-7878",
      "email": "nataliaortegarojas@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T12:30:00.000-03:00",
    "endTime": "2025-10-10T13:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-10T11:41:00.000-03:00",
    "updatedAt": "2025-10-10T11:41:00.000-03:00"
  },
  {
    "id": "res-224",
    "tableId": "table-21",
    "customer": {
      "name": "Fernando Ramos Peña",
      "phone": "+54-11-9999-0000",
      "email": "fernandoramospeña@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-16T14:00:00.000-03:00",
    "endTime": "2025-10-16T16:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-16T15:14:00.000-03:00",
    "updatedAt": "2025-10-16T19:14:00.000-03:00"
  },
  {
    "id": "res-225",
    "tableId": "table-26",
    "customer": {
      "name": "Alejandro Castro Flores",
      "phone": "+54-11-5555-6666",
      "email": "alejandrocastroflores@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-07T20:00:00.000-03:00",
    "endTime": "2025-10-07T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-07T12:15:00.000-03:00",
    "updatedAt": "2025-10-07T14:15:00.000-03:00"
  },
  {
    "id": "res-226",
    "tableId": "table-12",
    "customer": {
      "name": "Miguel González Torres",
      "phone": "+54-11-9090-1212",
      "email": "miguelgonzáleztorres@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T00:30:00.000-03:00",
    "endTime": "2025-10-04T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-03T19:22:00.000-03:00",
    "updatedAt": "2025-10-03T23:22:00.000-03:00"
  },
  {
    "id": "res-227",
    "tableId": "table-29",
    "customer": {
      "name": "David Jiménez Delgado",
      "phone": "+54-11-4567-8901",
      "email": "davidjiménezdelgado@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T21:00:00.000-03:00",
    "endTime": "2025-10-04T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-03T19:15:00.000-03:00",
    "updatedAt": "2025-10-03T19:15:00.000-03:00"
  },
  {
    "id": "res-228",
    "tableId": "table-4",
    "customer": {
      "name": "Cristina Romero Castro",
      "phone": "+54-11-0123-4567",
      "email": "cristinaromerocastro@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T13:00:00.000-03:00",
    "endTime": "2025-10-20T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-20T20:39:00.000-03:00",
    "updatedAt": "2025-10-20T20:39:00.000-03:00"
  },
  {
    "id": "res-229",
    "tableId": "table-20",
    "customer": {
      "name": "Carmen Pérez Peña",
      "phone": "+54-11-5555-6666",
      "email": "carmenpérezpeña@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T22:30:00.000-03:00",
    "endTime": "2025-10-12T00:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-11T12:35:00.000-03:00",
    "updatedAt": "2025-10-11T12:35:00.000-03:00"
  },
  {
    "id": "res-230",
    "tableId": "table-22",
    "customer": {
      "name": "Antonio Ruiz Vega",
      "phone": "+54-11-6767-8989",
      "email": "antonioruizvega@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T10:30:00.000-03:00",
    "endTime": "2025-10-11T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-11T21:21:00.000-03:00",
    "updatedAt": "2025-10-11T21:21:00.000-03:00"
  },
  {
    "id": "res-231",
    "tableId": "table-26",
    "customer": {
      "name": "Ana García Herrera",
      "phone": "+54-11-5555-6666",
      "email": "anagarcíaherrera@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T14:30:00.000-03:00",
    "endTime": "2025-10-24T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T19:18:00.000-03:00",
    "updatedAt": "2025-10-24T22:18:00.000-03:00"
  },
  {
    "id": "res-232",
    "tableId": "table-19",
    "customer": {
      "name": "Beatriz Guerrero Vargas",
      "phone": "+54-11-9012-3456",
      "email": "beatrizguerrerovargas@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T15:30:00.000-03:00",
    "endTime": "2025-10-25T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-25T21:12:00.000-03:00",
    "updatedAt": "2025-10-25T21:12:00.000-03:00"
  },
  {
    "id": "res-233",
    "tableId": "table-7",
    "customer": {
      "name": "Carmen Pérez Martín",
      "phone": "+54-11-1234-5678",
      "email": "carmenpérezmartín@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-29T16:30:00.000-03:00",
    "endTime": "2025-10-29T18:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-29T13:12:00.000-03:00",
    "updatedAt": "2025-10-29T17:12:00.000-03:00"
  },
  {
    "id": "res-234",
    "tableId": "table-27",
    "customer": {
      "name": "Nicolás Fuentes Medina",
      "phone": "+54-11-1313-4545",
      "email": "nicolásfuentesmedina@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-02T14:30:00.000-03:00",
    "endTime": "2025-10-02T16:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-02T17:57:00.000-03:00",
    "updatedAt": "2025-10-02T18:57:00.000-03:00"
  },
  {
    "id": "res-235",
    "tableId": "table-5",
    "customer": {
      "name": "Rubén Herrera Díaz",
      "phone": "+54-11-3333-4444",
      "email": "rubénherreradíaz@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T21:00:00.000-03:00",
    "endTime": "2025-10-24T22:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T15:08:00.000-03:00",
    "updatedAt": "2025-10-24T15:08:00.000-03:00"
  },
  {
    "id": "res-236",
    "tableId": "table-12",
    "customer": {
      "name": "Lucía Morales Ruiz",
      "phone": "+54-11-8901-2345",
      "email": "lucíamoralesruiz@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-25T19:30:00.000-03:00",
    "endTime": "2025-10-25T22:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-25T11:53:00.000-03:00",
    "updatedAt": "2025-10-25T11:53:00.000-03:00"
  },
  {
    "id": "res-237",
    "tableId": "table-18",
    "customer": {
      "name": "Ana García Martínez",
      "phone": "+54-11-6789-0123",
      "email": "anagarcíamartínez@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-08T15:30:00.000-03:00",
    "endTime": "2025-10-08T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-08T17:48:00.000-03:00",
    "updatedAt": "2025-10-08T17:48:00.000-03:00"
  },
  {
    "id": "res-238",
    "tableId": "table-2",
    "customer": {
      "name": "Antonio Ruiz Molina",
      "phone": "+54-11-3456-7890",
      "email": "antonioruizmolina@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-25T00:30:00.000-03:00",
    "endTime": "2025-10-25T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-24T11:43:00.000-03:00",
    "updatedAt": "2025-10-24T11:43:00.000-03:00"
  },
  {
    "id": "res-239",
    "tableId": "table-6",
    "customer": {
      "name": "María Rodríguez Herrera",
      "phone": "+54-11-6789-0123",
      "email": "maríarodríguezherrera@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-25T14:00:00.000-03:00",
    "endTime": "2025-10-25T16:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-25T13:53:00.000-03:00",
    "updatedAt": "2025-10-25T13:53:00.000-03:00"
  },
  {
    "id": "res-240",
    "tableId": "table-29",
    "customer": {
      "name": "Laura Sánchez Díaz",
      "phone": "+54-11-7777-8888",
      "email": "laurasánchezdíaz@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T16:30:00.000-03:00",
    "endTime": "2025-10-17T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-17T17:49:00.000-03:00",
    "updatedAt": "2025-10-17T17:49:00.000-03:00"
  },
  {
    "id": "res-241",
    "tableId": "table-8",
    "customer": {
      "name": "Cristina Romero Cabrera",
      "phone": "+54-11-9090-1212",
      "email": "cristinaromerocabrera@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-26T14:00:00.000-03:00",
    "endTime": "2025-10-26T15:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-26T20:00:00.000-03:00",
    "updatedAt": "2025-10-26T20:00:00.000-03:00"
  },
  {
    "id": "res-242",
    "tableId": "table-7",
    "customer": {
      "name": "Antonio Ruiz Ruiz",
      "phone": "+54-11-1212-3434",
      "email": "antonioruizruiz@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-12T00:30:00.000-03:00",
    "endTime": "2025-10-12T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-11T14:54:00.000-03:00",
    "updatedAt": "2025-10-11T14:54:00.000-03:00"
  },
  {
    "id": "res-243",
    "tableId": "table-23",
    "customer": {
      "name": "Sebastián Vega Torres",
      "phone": "+54-11-3333-4444",
      "email": "sebastiánvegatorres@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-05T18:00:00.000-03:00",
    "endTime": "2025-10-05T20:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-05T15:12:00.000-03:00",
    "updatedAt": "2025-10-05T16:12:00.000-03:00"
  },
  {
    "id": "res-244",
    "tableId": "table-6",
    "customer": {
      "name": "Elena Moreno Torres",
      "phone": "+54-11-6789-0123",
      "email": "elenamorenotorres@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T20:30:00.000-03:00",
    "endTime": "2025-10-11T22:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-11T12:51:00.000-03:00",
    "updatedAt": "2025-10-11T12:51:00.000-03:00"
  },
  {
    "id": "res-245",
    "tableId": "table-18",
    "customer": {
      "name": "Lucía Morales Silva",
      "phone": "+54-11-1234-5678",
      "email": "lucíamoralessilva@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T23:30:00.000-03:00",
    "endTime": "2025-10-23T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T14:37:00.000-03:00",
    "updatedAt": "2025-10-22T14:37:00.000-03:00"
  },
  {
    "id": "res-246",
    "tableId": "table-3",
    "customer": {
      "name": "Isabel Díaz Díaz",
      "phone": "+54-11-1212-3434",
      "email": "isabeldíazdíaz@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-12T00:00:00.000-03:00",
    "endTime": "2025-10-12T02:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-11T13:16:00.000-03:00",
    "updatedAt": "2025-10-11T16:16:00.000-03:00"
  },
  {
    "id": "res-247",
    "tableId": "table-30",
    "customer": {
      "name": "Sergio Peña Vega",
      "phone": "+54-11-1111-2222",
      "email": "sergiopeñavega@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-04T10:30:00.000-03:00",
    "endTime": "2025-10-04T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-04T12:46:00.000-03:00",
    "updatedAt": "2025-10-04T12:46:00.000-03:00"
  },
  {
    "id": "res-248",
    "tableId": "table-25",
    "customer": {
      "name": "Isabel Díaz Pérez",
      "phone": "+54-11-5656-7878",
      "email": "isabeldíazpérez@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T00:00:00.000-03:00",
    "endTime": "2025-10-10T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-09T13:00:00.000-03:00",
    "updatedAt": "2025-10-09T17:00:00.000-03:00"
  },
  {
    "id": "res-249",
    "tableId": "table-14",
    "customer": {
      "name": "Alejandro Castro González",
      "phone": "+54-11-7890-1234",
      "email": "alejandrocastrogonzález@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-16T16:00:00.000-03:00",
    "endTime": "2025-10-16T19:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-16T17:39:00.000-03:00",
    "updatedAt": "2025-10-16T17:39:00.000-03:00"
  },
  {
    "id": "res-250",
    "tableId": "table-3",
    "customer": {
      "name": "Cristina Romero Medina",
      "phone": "+54-11-7890-1234",
      "email": "cristinaromeromedina@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-12T20:00:00.000-03:00",
    "endTime": "2025-10-12T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-12T12:24:00.000-03:00",
    "updatedAt": "2025-10-12T12:24:00.000-03:00"
  },
  {
    "id": "res-251",
    "tableId": "table-13",
    "customer": {
      "name": "Rubén Herrera Rojas",
      "phone": "+54-11-6789-0123",
      "email": "rubénherrerarojas@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T18:00:00.000-03:00",
    "endTime": "2025-10-24T21:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T21:33:00.000-03:00",
    "updatedAt": "2025-10-24T21:33:00.000-03:00"
  },
  {
    "id": "res-252",
    "tableId": "table-25",
    "customer": {
      "name": "Mónica Flores Ruiz",
      "phone": "+54-11-5656-7878",
      "email": "mónicafloresruiz@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-26T23:00:00.000-03:00",
    "endTime": "2025-10-27T02:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-26T13:37:00.000-03:00",
    "updatedAt": "2025-10-26T16:37:00.000-03:00"
  },
  {
    "id": "res-253",
    "tableId": "table-18",
    "customer": {
      "name": "Roberto Herrera Díaz",
      "phone": "+54-11-1111-2222",
      "email": "robertoherreradíaz@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T17:00:00.000-03:00",
    "endTime": "2025-10-10T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-10T19:33:00.000-03:00",
    "updatedAt": "2025-10-10T19:33:00.000-03:00"
  },
  {
    "id": "res-254",
    "tableId": "table-21",
    "customer": {
      "name": "Laura Sánchez Cabrera",
      "phone": "+54-11-6767-8989",
      "email": "laurasánchezcabrera@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-05T14:30:00.000-03:00",
    "endTime": "2025-10-05T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-05T12:59:00.000-03:00",
    "updatedAt": "2025-10-05T16:59:00.000-03:00"
  },
  {
    "id": "res-255",
    "tableId": "table-17",
    "customer": {
      "name": "Antonio Ruiz García",
      "phone": "+54-11-1313-4545",
      "email": "antonioruizgarcía@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T12:30:00.000-03:00",
    "endTime": "2025-10-19T13:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-19T14:51:00.000-03:00",
    "updatedAt": "2025-10-19T14:51:00.000-03:00"
  },
  {
    "id": "res-256",
    "tableId": "table-17",
    "customer": {
      "name": "Nicolás Fuentes Vega",
      "phone": "+54-11-8901-2345",
      "email": "nicolásfuentesvega@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T23:00:00.000-03:00",
    "endTime": "2025-10-18T02:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-17T22:30:00.000-03:00",
    "updatedAt": "2025-10-17T22:30:00.000-03:00"
  },
  {
    "id": "res-257",
    "tableId": "table-28",
    "customer": {
      "name": "Valeria Silva Flores",
      "phone": "+54-11-9090-1212",
      "email": "valeriasilvaflores@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-03T14:30:00.000-03:00",
    "endTime": "2025-10-03T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-03T13:04:00.000-03:00",
    "updatedAt": "2025-10-03T13:04:00.000-03:00"
  },
  {
    "id": "res-258",
    "tableId": "table-29",
    "customer": {
      "name": "Fernando Ramos Serrano",
      "phone": "+54-11-6789-0123",
      "email": "fernandoramosserrano@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-08T11:30:00.000-03:00",
    "endTime": "2025-10-08T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-08T17:48:00.000-03:00",
    "updatedAt": "2025-10-08T17:48:00.000-03:00"
  },
  {
    "id": "res-259",
    "tableId": "table-10",
    "customer": {
      "name": "Gabriel Rojas Silva",
      "phone": "+54-11-3456-7890",
      "email": "gabrielrojassilva@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T10:00:00.000-03:00",
    "endTime": "2025-10-22T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-22T19:45:00.000-03:00",
    "updatedAt": "2025-10-22T19:45:00.000-03:00"
  },
  {
    "id": "res-260",
    "tableId": "table-17",
    "customer": {
      "name": "Hugo Aguilar Castro",
      "phone": "+54-11-1212-3434",
      "email": "hugoaguilarcastro@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-16T13:30:00.000-03:00",
    "endTime": "2025-10-16T14:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-16T19:03:00.000-03:00",
    "updatedAt": "2025-10-16T19:03:00.000-03:00"
  },
  {
    "id": "res-261",
    "tableId": "table-9",
    "customer": {
      "name": "Gabriel Rojas Espinoza",
      "phone": "+54-11-9090-1212",
      "email": "gabrielrojasespinoza@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T20:30:00.000-03:00",
    "endTime": "2025-10-25T21:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-25T12:23:00.000-03:00",
    "updatedAt": "2025-10-25T12:23:00.000-03:00"
  },
  {
    "id": "res-262",
    "tableId": "table-15",
    "customer": {
      "name": "Lucía Morales Rojas",
      "phone": "+54-11-6767-8989",
      "email": "lucíamoralesrojas@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T17:00:00.000-03:00",
    "endTime": "2025-10-23T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-23T18:23:00.000-03:00",
    "updatedAt": "2025-10-23T18:23:00.000-03:00"
  },
  {
    "id": "res-263",
    "tableId": "table-29",
    "customer": {
      "name": "Miguel González Díaz",
      "phone": "+54-11-8901-2345",
      "email": "miguelgonzálezdíaz@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T15:00:00.000-03:00",
    "endTime": "2025-10-10T18:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-10T17:52:00.000-03:00",
    "updatedAt": "2025-10-10T17:52:00.000-03:00"
  },
  {
    "id": "res-264",
    "tableId": "table-17",
    "customer": {
      "name": "Roberto Herrera Pérez",
      "phone": "+54-11-5555-6666",
      "email": "robertoherrerapérez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T01:30:00.000-03:00",
    "endTime": "2025-10-23T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T22:54:00.000-03:00",
    "updatedAt": "2025-10-23T00:54:00.000-03:00"
  },
  {
    "id": "res-265",
    "tableId": "table-28",
    "customer": {
      "name": "Fernando Ramos López",
      "phone": "+54-11-9999-0000",
      "email": "fernandoramoslópez@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T11:30:00.000-03:00",
    "endTime": "2025-10-03T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-03T14:44:00.000-03:00",
    "updatedAt": "2025-10-03T16:44:00.000-03:00"
  },
  {
    "id": "res-266",
    "tableId": "table-18",
    "customer": {
      "name": "Carmen Pérez Moreno",
      "phone": "+54-11-4567-8901",
      "email": "carmenpérezmoreno@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-08T13:00:00.000-03:00",
    "endTime": "2025-10-08T15:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-08T16:57:00.000-03:00",
    "updatedAt": "2025-10-08T16:57:00.000-03:00"
  },
  {
    "id": "res-267",
    "tableId": "table-26",
    "customer": {
      "name": "Adrián Cabrera Campos",
      "phone": "+54-11-1313-4545",
      "email": "adriáncabreracampos@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-01T17:00:00.000-03:00",
    "endTime": "2025-10-01T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-01T14:20:00.000-03:00",
    "updatedAt": "2025-10-01T14:20:00.000-03:00"
  },
  {
    "id": "res-268",
    "tableId": "table-1",
    "customer": {
      "name": "Isabel Díaz Vargas",
      "phone": "+54-11-9090-1212",
      "email": "isabeldíazvargas@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T22:30:00.000-03:00",
    "endTime": "2025-10-25T00:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-24T12:08:00.000-03:00",
    "updatedAt": "2025-10-24T12:08:00.000-03:00"
  },
  {
    "id": "res-269",
    "tableId": "table-21",
    "customer": {
      "name": "Beatriz Guerrero Herrera",
      "phone": "+54-11-1313-4545",
      "email": "beatrizguerreroherrera@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T18:30:00.000-03:00",
    "endTime": "2025-10-04T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-04T16:20:00.000-03:00",
    "updatedAt": "2025-10-04T16:20:00.000-03:00"
  },
  {
    "id": "res-270",
    "tableId": "table-15",
    "customer": {
      "name": "Natalia Ortega Vega",
      "phone": "+54-11-1234-5678",
      "email": "nataliaortegavega@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T17:30:00.000-03:00",
    "endTime": "2025-10-10T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-10T20:17:00.000-03:00",
    "updatedAt": "2025-10-10T21:17:00.000-03:00"
  },
  {
    "id": "res-271",
    "tableId": "table-23",
    "customer": {
      "name": "Valeria Silva González",
      "phone": "+54-11-3456-7890",
      "email": "valeriasilvagonzález@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T01:30:00.000-03:00",
    "endTime": "2025-10-19T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-18T15:32:00.000-03:00",
    "updatedAt": "2025-10-18T17:32:00.000-03:00"
  },
  {
    "id": "res-272",
    "tableId": "table-27",
    "customer": {
      "name": "Nicolás Fuentes Mendoza",
      "phone": "+54-11-1234-5678",
      "email": "nicolásfuentesmendoza@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T22:00:00.000-03:00",
    "endTime": "2025-10-25T01:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T14:49:00.000-03:00",
    "updatedAt": "2025-10-24T16:49:00.000-03:00"
  },
  {
    "id": "res-273",
    "tableId": "table-28",
    "customer": {
      "name": "Lucía Morales Fuentes",
      "phone": "+54-11-0123-4567",
      "email": "lucíamoralesfuentes@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-12T15:00:00.000-03:00",
    "endTime": "2025-10-12T18:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-12T19:01:00.000-03:00",
    "updatedAt": "2025-10-12T22:01:00.000-03:00"
  },
  {
    "id": "res-274",
    "tableId": "table-17",
    "customer": {
      "name": "Claudia Medina Vega",
      "phone": "+54-11-8901-2345",
      "email": "claudiamedinavega@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-01T22:30:00.000-03:00",
    "endTime": "2025-10-02T00:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-01T19:49:00.000-03:00",
    "updatedAt": "2025-10-01T19:49:00.000-03:00"
  },
  {
    "id": "res-275",
    "tableId": "table-6",
    "customer": {
      "name": "Beatriz Guerrero Castro",
      "phone": "+54-11-9090-1212",
      "email": "beatrizguerrerocastro@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T17:00:00.000-03:00",
    "endTime": "2025-10-19T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-19T20:20:00.000-03:00",
    "updatedAt": "2025-10-19T20:20:00.000-03:00"
  },
  {
    "id": "res-276",
    "tableId": "table-21",
    "customer": {
      "name": "Natalia Ortega González",
      "phone": "+54-11-2345-6789",
      "email": "nataliaortegagonzález@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-03T20:00:00.000-03:00",
    "endTime": "2025-10-03T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-03T19:34:00.000-03:00",
    "updatedAt": "2025-10-03T20:34:00.000-03:00"
  },
  {
    "id": "res-277",
    "tableId": "table-23",
    "customer": {
      "name": "Isabel Díaz Silva",
      "phone": "+54-11-5555-6666",
      "email": "isabeldíazsilva@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-16T14:30:00.000-03:00",
    "endTime": "2025-10-16T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-16T12:14:00.000-03:00",
    "updatedAt": "2025-10-16T12:14:00.000-03:00"
  },
  {
    "id": "res-278",
    "tableId": "table-29",
    "customer": {
      "name": "Camila Espinoza Aguilar",
      "phone": "+54-11-1234-5678",
      "email": "camilaespinozaaguilar@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T11:00:00.000-03:00",
    "endTime": "2025-10-18T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-18T21:39:00.000-03:00",
    "updatedAt": "2025-10-18T21:39:00.000-03:00"
  },
  {
    "id": "res-279",
    "tableId": "table-12",
    "customer": {
      "name": "Claudia Medina Mendoza",
      "phone": "+54-11-6767-8989",
      "email": "claudiamedinamendoza@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T12:00:00.000-03:00",
    "endTime": "2025-10-11T13:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-11T14:57:00.000-03:00",
    "updatedAt": "2025-10-11T14:57:00.000-03:00"
  },
  {
    "id": "res-280",
    "tableId": "table-18",
    "customer": {
      "name": "Cristina Romero Campos",
      "phone": "+54-11-1313-4545",
      "email": "cristinaromerocampos@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-27T14:00:00.000-03:00",
    "endTime": "2025-10-27T16:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-27T18:22:00.000-03:00",
    "updatedAt": "2025-10-27T18:22:00.000-03:00"
  },
  {
    "id": "res-281",
    "tableId": "table-6",
    "customer": {
      "name": "Carlos López Moreno",
      "phone": "+54-11-6789-0123",
      "email": "carloslópezmoreno@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-16T23:00:00.000-03:00",
    "endTime": "2025-10-17T02:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-16T18:25:00.000-03:00",
    "updatedAt": "2025-10-16T18:25:00.000-03:00"
  },
  {
    "id": "res-282",
    "tableId": "table-26",
    "customer": {
      "name": "María Rodríguez Flores",
      "phone": "+54-11-1234-5678",
      "email": "maríarodríguezflores@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-12T12:30:00.000-03:00",
    "endTime": "2025-10-12T14:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-12T16:31:00.000-03:00",
    "updatedAt": "2025-10-12T16:31:00.000-03:00"
  },
  {
    "id": "res-283",
    "tableId": "table-16",
    "customer": {
      "name": "Sofia Reyes Rojas",
      "phone": "+54-11-9999-0000",
      "email": "sofiareyesrojas@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T10:30:00.000-03:00",
    "endTime": "2025-10-23T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-23T21:13:00.000-03:00",
    "updatedAt": "2025-10-23T21:13:00.000-03:00"
  },
  {
    "id": "res-284",
    "tableId": "table-26",
    "customer": {
      "name": "Rubén Herrera Pérez",
      "phone": "+54-11-1111-2222",
      "email": "rubénherrerapérez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-04T12:30:00.000-03:00",
    "endTime": "2025-10-04T15:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-04T21:40:00.000-03:00",
    "updatedAt": "2025-10-05T01:40:00.000-03:00"
  },
  {
    "id": "res-285",
    "tableId": "table-11",
    "customer": {
      "name": "Patricia Navarro Vargas",
      "phone": "+54-11-5555-6666",
      "email": "patricianavarrovargas@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-26T19:00:00.000-03:00",
    "endTime": "2025-10-26T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-26T20:01:00.000-03:00",
    "updatedAt": "2025-10-26T20:01:00.000-03:00"
  },
  {
    "id": "res-286",
    "tableId": "table-2",
    "customer": {
      "name": "Isabel Díaz Vargas",
      "phone": "+54-11-3333-4444",
      "email": "isabeldíazvargas@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T19:00:00.000-03:00",
    "endTime": "2025-10-10T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-10T19:14:00.000-03:00",
    "updatedAt": "2025-10-10T19:14:00.000-03:00"
  },
  {
    "id": "res-287",
    "tableId": "table-9",
    "customer": {
      "name": "Sebastián Vega Ramos",
      "phone": "+54-11-9999-0000",
      "email": "sebastiánvegaramos@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T15:30:00.000-03:00",
    "endTime": "2025-10-24T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T22:37:00.000-03:00",
    "updatedAt": "2025-10-24T22:37:00.000-03:00"
  },
  {
    "id": "res-288",
    "tableId": "table-13",
    "customer": {
      "name": "Cristina Romero Mendoza",
      "phone": "+54-11-8901-2345",
      "email": "cristinaromeromendoza@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T01:00:00.000-03:00",
    "endTime": "2025-10-19T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-18T15:46:00.000-03:00",
    "updatedAt": "2025-10-18T15:46:00.000-03:00"
  },
  {
    "id": "res-289",
    "tableId": "table-9",
    "customer": {
      "name": "Laura Sánchez Espinoza",
      "phone": "+54-11-3333-4444",
      "email": "laurasánchezespinoza@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T11:30:00.000-03:00",
    "endTime": "2025-10-17T12:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-17T21:21:00.000-03:00",
    "updatedAt": "2025-10-17T21:21:00.000-03:00"
  },
  {
    "id": "res-290",
    "tableId": "table-4",
    "customer": {
      "name": "Hugo Aguilar Díaz",
      "phone": "+54-11-5678-9012",
      "email": "hugoaguilardíaz@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T16:00:00.000-03:00",
    "endTime": "2025-10-24T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-24T16:44:00.000-03:00",
    "updatedAt": "2025-10-24T18:44:00.000-03:00"
  },
  {
    "id": "res-291",
    "tableId": "table-19",
    "customer": {
      "name": "Pablo Delgado Morales",
      "phone": "+54-11-3333-4444",
      "email": "pablodelgadomorales@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-12T20:00:00.000-03:00",
    "endTime": "2025-10-12T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-12T15:00:00.000-03:00",
    "updatedAt": "2025-10-12T16:00:00.000-03:00"
  },
  {
    "id": "res-292",
    "tableId": "table-5",
    "customer": {
      "name": "Rubén Herrera Martínez",
      "phone": "+54-11-9012-3456",
      "email": "rubénherreramartínez@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-01T11:00:00.000-03:00",
    "endTime": "2025-10-01T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-01T12:27:00.000-03:00",
    "updatedAt": "2025-10-01T16:27:00.000-03:00"
  },
  {
    "id": "res-293",
    "tableId": "table-21",
    "customer": {
      "name": "Roberto Herrera Aguilar",
      "phone": "+54-11-1212-3434",
      "email": "robertoherreraaguilar@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T23:00:00.000-03:00",
    "endTime": "2025-10-04T01:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-03T20:24:00.000-03:00",
    "updatedAt": "2025-10-03T20:24:00.000-03:00"
  },
  {
    "id": "res-294",
    "tableId": "table-24",
    "customer": {
      "name": "Beatriz Guerrero Rojas",
      "phone": "+54-11-9999-0000",
      "email": "beatrizguerrerorojas@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-23T16:00:00.000-03:00",
    "endTime": "2025-10-23T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-23T20:33:00.000-03:00",
    "updatedAt": "2025-10-23T20:33:00.000-03:00"
  },
  {
    "id": "res-295",
    "tableId": "table-11",
    "customer": {
      "name": "Gabriel Rojas Díaz",
      "phone": "+54-11-3456-7890",
      "email": "gabrielrojasdíaz@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-27T10:00:00.000-03:00",
    "endTime": "2025-10-27T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-27T15:53:00.000-03:00",
    "updatedAt": "2025-10-27T15:53:00.000-03:00"
  },
  {
    "id": "res-296",
    "tableId": "table-9",
    "customer": {
      "name": "Alejandro Castro Espinoza",
      "phone": "+54-11-9090-1212",
      "email": "alejandrocastroespinoza@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-08T22:30:00.000-03:00",
    "endTime": "2025-10-09T00:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-08T17:14:00.000-03:00",
    "updatedAt": "2025-10-08T17:14:00.000-03:00"
  },
  {
    "id": "res-297",
    "tableId": "table-1",
    "customer": {
      "name": "Camila Espinoza Ortega",
      "phone": "+54-11-6789-0123",
      "email": "camilaespinozaortega@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T14:30:00.000-03:00",
    "endTime": "2025-10-17T16:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-17T21:44:00.000-03:00",
    "updatedAt": "2025-10-18T01:44:00.000-03:00"
  },
  {
    "id": "res-298",
    "tableId": "table-5",
    "customer": {
      "name": "José Martínez Guerrero",
      "phone": "+54-11-8901-2345",
      "email": "josémartínezguerrero@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T16:30:00.000-03:00",
    "endTime": "2025-10-23T18:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-23T19:32:00.000-03:00",
    "updatedAt": "2025-10-23T23:32:00.000-03:00"
  },
  {
    "id": "res-299",
    "tableId": "table-16",
    "customer": {
      "name": "Sandra Vega Delgado",
      "phone": "+54-11-2345-6789",
      "email": "sandravegadelgado@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T19:00:00.000-03:00",
    "endTime": "2025-10-24T22:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T20:42:00.000-03:00",
    "updatedAt": "2025-10-24T20:42:00.000-03:00"
  },
  {
    "id": "res-300",
    "tableId": "table-21",
    "customer": {
      "name": "David Jiménez Díaz",
      "phone": "+54-11-3456-7890",
      "email": "davidjiménezdíaz@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-25T21:00:00.000-03:00",
    "endTime": "2025-10-25T22:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-25T16:39:00.000-03:00",
    "updatedAt": "2025-10-25T16:39:00.000-03:00"
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
