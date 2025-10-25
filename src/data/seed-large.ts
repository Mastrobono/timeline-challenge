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
      "min": 5,
      "max": 7
    },
    "sortOrder": 1
  },
  {
    "id": "table-2",
    "sectorId": "sector-1",
    "name": "Table 2",
    "capacity": {
      "min": 5,
      "max": 7
    },
    "sortOrder": 2
  },
  {
    "id": "table-3",
    "sectorId": "sector-1",
    "name": "Table 3",
    "capacity": {
      "min": 3,
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
      "max": 4
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
      "min": 4,
      "max": 7
    },
    "sortOrder": 6
  },
  {
    "id": "table-7",
    "sectorId": "sector-2",
    "name": "Table 7",
    "capacity": {
      "min": 2,
      "max": 5
    },
    "sortOrder": 7
  },
  {
    "id": "table-8",
    "sectorId": "sector-2",
    "name": "Table 8",
    "capacity": {
      "min": 3,
      "max": 6
    },
    "sortOrder": 8
  },
  {
    "id": "table-9",
    "sectorId": "sector-3",
    "name": "Table 9",
    "capacity": {
      "min": 5,
      "max": 7
    },
    "sortOrder": 9
  },
  {
    "id": "table-10",
    "sectorId": "sector-3",
    "name": "Table 10",
    "capacity": {
      "min": 2,
      "max": 5
    },
    "sortOrder": 10
  },
  {
    "id": "table-11",
    "sectorId": "sector-3",
    "name": "Table 11",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 11
  },
  {
    "id": "table-12",
    "sectorId": "sector-3",
    "name": "Table 12",
    "capacity": {
      "min": 5,
      "max": 7
    },
    "sortOrder": 12
  },
  {
    "id": "table-13",
    "sectorId": "sector-4",
    "name": "Table 13",
    "capacity": {
      "min": 3,
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
      "min": 3,
      "max": 6
    },
    "sortOrder": 15
  },
  {
    "id": "table-16",
    "sectorId": "sector-5",
    "name": "Table 16",
    "capacity": {
      "min": 4,
      "max": 7
    },
    "sortOrder": 16
  },
  {
    "id": "table-17",
    "sectorId": "sector-5",
    "name": "Table 17",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 17
  },
  {
    "id": "table-18",
    "sectorId": "sector-5",
    "name": "Table 18",
    "capacity": {
      "min": 3,
      "max": 5
    },
    "sortOrder": 18
  },
  {
    "id": "table-19",
    "sectorId": "sector-6",
    "name": "Table 19",
    "capacity": {
      "min": 2,
      "max": 4
    },
    "sortOrder": 19
  },
  {
    "id": "table-20",
    "sectorId": "sector-6",
    "name": "Table 20",
    "capacity": {
      "min": 4,
      "max": 6
    },
    "sortOrder": 20
  },
  {
    "id": "table-21",
    "sectorId": "sector-6",
    "name": "Table 21",
    "capacity": {
      "min": 3,
      "max": 5
    },
    "sortOrder": 21
  },
  {
    "id": "table-22",
    "sectorId": "sector-7",
    "name": "Table 22",
    "capacity": {
      "min": 5,
      "max": 8
    },
    "sortOrder": 22
  },
  {
    "id": "table-23",
    "sectorId": "sector-7",
    "name": "Table 23",
    "capacity": {
      "min": 4,
      "max": 7
    },
    "sortOrder": 23
  },
  {
    "id": "table-24",
    "sectorId": "sector-7",
    "name": "Table 24",
    "capacity": {
      "min": 4,
      "max": 6
    },
    "sortOrder": 24
  },
  {
    "id": "table-25",
    "sectorId": "sector-8",
    "name": "Table 25",
    "capacity": {
      "min": 2,
      "max": 3
    },
    "sortOrder": 25
  },
  {
    "id": "table-26",
    "sectorId": "sector-8",
    "name": "Table 26",
    "capacity": {
      "min": 5,
      "max": 7
    },
    "sortOrder": 26
  },
  {
    "id": "table-27",
    "sectorId": "sector-8",
    "name": "Table 27",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 27
  },
  {
    "id": "table-28",
    "sectorId": "sector-9",
    "name": "Table 28",
    "capacity": {
      "min": 2,
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
      "max": 5
    },
    "sortOrder": 29
  },
  {
    "id": "table-30",
    "sectorId": "sector-9",
    "name": "Table 30",
    "capacity": {
      "min": 3,
      "max": 5
    },
    "sortOrder": 30
  }
];

export const seedReservations: Reservation[] = [
  {
    "id": "res-1",
    "tableId": "table-25",
    "customer": {
      "name": "Fernando Ramos Navarro",
      "phone": "+54-11-0123-4567",
      "email": "fernandoramosnavarro@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T22:00:00.000-03:00",
    "endTime": "2025-10-24T00:03:00.000-03:00",
    "durationMinutes": 123,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-23T11:05:00.000-03:00",
    "updatedAt": "2025-10-23T11:05:00.000-03:00"
  },
  {
    "id": "res-2",
    "tableId": "table-9",
    "customer": {
      "name": "Beatriz Guerrero Romero",
      "phone": "+54-11-2345-6789",
      "email": "beatrizguerreroromero@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T11:00:00.000-03:00",
    "endTime": "2025-10-11T14:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-11T13:49:00.000-03:00",
    "updatedAt": "2025-10-11T13:49:00.000-03:00"
  },
  {
    "id": "res-3",
    "tableId": "table-3",
    "customer": {
      "name": "Valeria Silva Pérez",
      "phone": "+54-11-9012-3456",
      "email": "valeriasilvapérez@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-21T17:30:00.000-03:00",
    "endTime": "2025-10-21T19:25:00.000-03:00",
    "durationMinutes": 115,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-21T12:44:00.000-03:00",
    "updatedAt": "2025-10-21T12:44:00.000-03:00"
  },
  {
    "id": "res-4",
    "tableId": "table-20",
    "customer": {
      "name": "Ana García Herrera",
      "phone": "+54-11-3456-7890",
      "email": "anagarcíaherrera@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T19:00:00.000-03:00",
    "endTime": "2025-10-17T22:06:00.000-03:00",
    "durationMinutes": 186,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-17T16:34:00.000-03:00",
    "updatedAt": "2025-10-17T16:34:00.000-03:00"
  },
  {
    "id": "res-5",
    "tableId": "table-6",
    "customer": {
      "name": "Valeria Silva Navarro",
      "phone": "+54-11-3456-7890",
      "email": "valeriasilvanavarro@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-08T20:30:00.000-03:00",
    "endTime": "2025-10-08T21:57:00.000-03:00",
    "durationMinutes": 87,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-08T21:09:00.000-03:00",
    "updatedAt": "2025-10-08T21:09:00.000-03:00"
  },
  {
    "id": "res-6",
    "tableId": "table-7",
    "customer": {
      "name": "Fernando Ramos Torres",
      "phone": "+54-11-5656-7878",
      "email": "fernandoramostorres@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T19:30:00.000-03:00",
    "endTime": "2025-10-25T21:20:00.000-03:00",
    "durationMinutes": 110,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-25T14:49:00.000-03:00",
    "updatedAt": "2025-10-25T14:49:00.000-03:00"
  },
  {
    "id": "res-7",
    "tableId": "table-19",
    "customer": {
      "name": "Hugo Aguilar Morales",
      "phone": "+54-11-5555-6666",
      "email": "hugoaguilarmorales@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-26T18:30:00.000-03:00",
    "endTime": "2025-10-26T20:26:00.000-03:00",
    "durationMinutes": 116,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-26T12:42:00.000-03:00",
    "updatedAt": "2025-10-26T15:42:00.000-03:00"
  },
  {
    "id": "res-8",
    "tableId": "table-24",
    "customer": {
      "name": "Sergio Peña Espinoza",
      "phone": "+54-11-1111-2222",
      "email": "sergiopeñaespinoza@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-03T17:30:00.000-03:00",
    "endTime": "2025-10-03T18:53:00.000-03:00",
    "durationMinutes": 83,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-03T21:12:00.000-03:00",
    "updatedAt": "2025-10-03T21:12:00.000-03:00"
  },
  {
    "id": "res-9",
    "tableId": "table-4",
    "customer": {
      "name": "Gabriel Rojas Medina",
      "phone": "+54-11-9012-3456",
      "email": "gabrielrojasmedina@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T12:00:00.000-03:00",
    "endTime": "2025-10-03T14:04:00.000-03:00",
    "durationMinutes": 124,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-03T22:33:00.000-03:00",
    "updatedAt": "2025-10-03T22:33:00.000-03:00"
  },
  {
    "id": "res-10",
    "tableId": "table-13",
    "customer": {
      "name": "Daniel Campos Martín",
      "phone": "+54-11-5555-6666",
      "email": "danielcamposmartín@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-03T22:30:00.000-03:00",
    "endTime": "2025-10-04T00:53:00.000-03:00",
    "durationMinutes": 143,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-03T18:00:00.000-03:00",
    "updatedAt": "2025-10-03T18:00:00.000-03:00"
  },
  {
    "id": "res-11",
    "tableId": "table-25",
    "customer": {
      "name": "Cristina Romero Romero",
      "phone": "+54-11-0123-4567",
      "email": "cristinaromeroromero@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-16T17:00:00.000-03:00",
    "endTime": "2025-10-16T19:54:00.000-03:00",
    "durationMinutes": 174,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-16T19:38:00.000-03:00",
    "updatedAt": "2025-10-16T19:38:00.000-03:00"
  },
  {
    "id": "res-12",
    "tableId": "table-30",
    "customer": {
      "name": "Álvaro Serrano Flores",
      "phone": "+54-11-8901-2345",
      "email": "álvaroserranoflores@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T10:00:00.000-03:00",
    "endTime": "2025-10-24T13:26:00.000-03:00",
    "durationMinutes": 206,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T18:42:00.000-03:00",
    "updatedAt": "2025-10-24T20:42:00.000-03:00"
  },
  {
    "id": "res-13",
    "tableId": "table-29",
    "customer": {
      "name": "Elena Moreno Herrera",
      "phone": "+54-11-5656-7878",
      "email": "elenamorenoherrera@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T19:30:00.000-03:00",
    "endTime": "2025-10-10T22:26:00.000-03:00",
    "durationMinutes": 176,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-10T11:03:00.000-03:00",
    "updatedAt": "2025-10-10T11:03:00.000-03:00"
  },
  {
    "id": "res-14",
    "tableId": "table-15",
    "customer": {
      "name": "Pablo Delgado Vega",
      "phone": "+54-11-5656-7878",
      "email": "pablodelgadovega@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-17T19:00:00.000-03:00",
    "endTime": "2025-10-17T21:28:00.000-03:00",
    "durationMinutes": 148,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-17T14:31:00.000-03:00",
    "updatedAt": "2025-10-17T14:31:00.000-03:00"
  },
  {
    "id": "res-15",
    "tableId": "table-3",
    "customer": {
      "name": "Daniel Campos Castro",
      "phone": "+54-11-1313-4545",
      "email": "danielcamposcastro@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T10:30:00.000-03:00",
    "endTime": "2025-10-04T11:39:00.000-03:00",
    "durationMinutes": 69,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-04T16:15:00.000-03:00",
    "updatedAt": "2025-10-04T16:15:00.000-03:00"
  },
  {
    "id": "res-16",
    "tableId": "table-2",
    "customer": {
      "name": "Teresa Molina Jiménez",
      "phone": "+54-11-6789-0123",
      "email": "teresamolinajiménez@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-08T21:00:00.000-03:00",
    "endTime": "2025-10-08T22:55:00.000-03:00",
    "durationMinutes": 115,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-08T13:32:00.000-03:00",
    "updatedAt": "2025-10-08T16:32:00.000-03:00"
  },
  {
    "id": "res-17",
    "tableId": "table-5",
    "customer": {
      "name": "Camila Espinoza Rodríguez",
      "phone": "+54-11-6789-0123",
      "email": "camilaespinozarodríguez@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-09T16:30:00.000-03:00",
    "endTime": "2025-10-09T18:14:00.000-03:00",
    "durationMinutes": 104,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-09T16:56:00.000-03:00",
    "updatedAt": "2025-10-09T16:56:00.000-03:00"
  },
  {
    "id": "res-18",
    "tableId": "table-6",
    "customer": {
      "name": "Carlos López Silva",
      "phone": "+54-11-5656-7878",
      "email": "carloslópezsilva@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T18:00:00.000-03:00",
    "endTime": "2025-10-18T19:51:00.000-03:00",
    "durationMinutes": 111,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-18T18:34:00.000-03:00",
    "updatedAt": "2025-10-18T18:34:00.000-03:00"
  },
  {
    "id": "res-19",
    "tableId": "table-30",
    "customer": {
      "name": "Carmen Pérez Romero",
      "phone": "+54-11-3456-7890",
      "email": "carmenpérezromero@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T19:30:00.000-03:00",
    "endTime": "2025-10-20T22:50:00.000-03:00",
    "durationMinutes": 200,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-20T15:25:00.000-03:00",
    "updatedAt": "2025-10-20T15:25:00.000-03:00"
  },
  {
    "id": "res-20",
    "tableId": "table-14",
    "customer": {
      "name": "Nicolás Fuentes Jiménez",
      "phone": "+54-11-1111-2222",
      "email": "nicolásfuentesjiménez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-05T19:30:00.000-03:00",
    "endTime": "2025-10-05T20:39:00.000-03:00",
    "durationMinutes": 69,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-05T17:52:00.000-03:00",
    "updatedAt": "2025-10-05T17:52:00.000-03:00"
  },
  {
    "id": "res-21",
    "tableId": "table-7",
    "customer": {
      "name": "Carlos López Mendoza",
      "phone": "+54-11-4567-8901",
      "email": "carloslópezmendoza@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T10:30:00.000-03:00",
    "endTime": "2025-10-23T13:36:00.000-03:00",
    "durationMinutes": 186,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-23T11:17:00.000-03:00",
    "updatedAt": "2025-10-23T12:17:00.000-03:00"
  },
  {
    "id": "res-22",
    "tableId": "table-29",
    "customer": {
      "name": "Álvaro Serrano Navarro",
      "phone": "+54-11-3456-7890",
      "email": "álvaroserranonavarro@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-08T11:00:00.000-03:00",
    "endTime": "2025-10-08T13:33:00.000-03:00",
    "durationMinutes": 153,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-08T20:55:00.000-03:00",
    "updatedAt": "2025-10-08T23:55:00.000-03:00"
  },
  {
    "id": "res-23",
    "tableId": "table-11",
    "customer": {
      "name": "Daniel Campos Herrera",
      "phone": "+54-11-9999-0000",
      "email": "danielcamposherrera@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T14:30:00.000-03:00",
    "endTime": "2025-10-25T17:28:00.000-03:00",
    "durationMinutes": 178,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-25T20:32:00.000-03:00",
    "updatedAt": "2025-10-25T20:32:00.000-03:00"
  },
  {
    "id": "res-24",
    "tableId": "table-6",
    "customer": {
      "name": "Pablo Delgado Fuentes",
      "phone": "+54-11-7777-8888",
      "email": "pablodelgadofuentes@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T22:00:00.000-03:00",
    "endTime": "2025-10-05T00:18:00.000-03:00",
    "durationMinutes": 138,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-04T16:39:00.000-03:00",
    "updatedAt": "2025-10-04T20:39:00.000-03:00"
  },
  {
    "id": "res-25",
    "tableId": "table-1",
    "customer": {
      "name": "Roberto Herrera Silva",
      "phone": "+54-11-5555-6666",
      "email": "robertoherrerasilva@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-03T12:00:00.000-03:00",
    "endTime": "2025-10-03T14:28:00.000-03:00",
    "durationMinutes": 148,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-03T13:37:00.000-03:00",
    "updatedAt": "2025-10-03T14:37:00.000-03:00"
  },
  {
    "id": "res-26",
    "tableId": "table-13",
    "customer": {
      "name": "Hugo Aguilar García",
      "phone": "+54-11-3456-7890",
      "email": "hugoaguilargarcía@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-15T21:00:00.000-03:00",
    "endTime": "2025-10-15T23:34:00.000-03:00",
    "durationMinutes": 154,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-15T17:44:00.000-03:00",
    "updatedAt": "2025-10-15T18:44:00.000-03:00"
  },
  {
    "id": "res-27",
    "tableId": "table-12",
    "customer": {
      "name": "Miguel González Reyes",
      "phone": "+54-11-6789-0123",
      "email": "miguelgonzálezreyes@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T21:00:00.000-03:00",
    "endTime": "2025-10-20T00:14:00.000-03:00",
    "durationMinutes": 194,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-19T19:12:00.000-03:00",
    "updatedAt": "2025-10-19T20:12:00.000-03:00"
  },
  {
    "id": "res-28",
    "tableId": "table-29",
    "customer": {
      "name": "Carlos López Rodríguez",
      "phone": "+54-11-5678-9012",
      "email": "carloslópezrodríguez@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-26T14:00:00.000-03:00",
    "endTime": "2025-10-26T16:05:00.000-03:00",
    "durationMinutes": 125,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-26T21:47:00.000-03:00",
    "updatedAt": "2025-10-26T21:47:00.000-03:00"
  },
  {
    "id": "res-29",
    "tableId": "table-3",
    "customer": {
      "name": "Gabriel Rojas Castro",
      "phone": "+54-11-1313-4545",
      "email": "gabrielrojascastro@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T17:30:00.000-03:00",
    "endTime": "2025-10-17T18:51:00.000-03:00",
    "durationMinutes": 81,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-17T21:00:00.000-03:00",
    "updatedAt": "2025-10-17T21:00:00.000-03:00"
  },
  {
    "id": "res-30",
    "tableId": "table-30",
    "customer": {
      "name": "Hugo Aguilar Torres",
      "phone": "+54-11-5656-7878",
      "email": "hugoaguilartorres@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-28T11:30:00.000-03:00",
    "endTime": "2025-10-28T13:20:00.000-03:00",
    "durationMinutes": 110,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-28T21:51:00.000-03:00",
    "updatedAt": "2025-10-29T01:51:00.000-03:00"
  },
  {
    "id": "res-31",
    "tableId": "table-23",
    "customer": {
      "name": "Mónica Flores Vega",
      "phone": "+54-11-6789-0123",
      "email": "mónicafloresvega@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-03T21:00:00.000-03:00",
    "endTime": "2025-10-03T22:07:00.000-03:00",
    "durationMinutes": 67,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-03T20:29:00.000-03:00",
    "updatedAt": "2025-10-03T21:29:00.000-03:00"
  },
  {
    "id": "res-32",
    "tableId": "table-3",
    "customer": {
      "name": "María Rodríguez Serrano",
      "phone": "+54-11-4567-8901",
      "email": "maríarodríguezserrano@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-12T19:30:00.000-03:00",
    "endTime": "2025-10-12T21:13:00.000-03:00",
    "durationMinutes": 103,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-12T12:09:00.000-03:00",
    "updatedAt": "2025-10-12T12:09:00.000-03:00"
  },
  {
    "id": "res-33",
    "tableId": "table-29",
    "customer": {
      "name": "Francisco Martín Rojas",
      "phone": "+54-11-2345-6789",
      "email": "franciscomartínrojas@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T22:00:00.000-03:00",
    "endTime": "2025-10-11T23:59:00.000-03:00",
    "durationMinutes": 119,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-11T14:22:00.000-03:00",
    "updatedAt": "2025-10-11T14:22:00.000-03:00"
  },
  {
    "id": "res-34",
    "tableId": "table-14",
    "customer": {
      "name": "Claudia Medina Herrera",
      "phone": "+54-11-2345-6789",
      "email": "claudiamedinaherrera@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-13T11:00:00.000-03:00",
    "endTime": "2025-10-13T12:07:00.000-03:00",
    "durationMinutes": 67,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-13T16:45:00.000-03:00",
    "updatedAt": "2025-10-13T16:45:00.000-03:00"
  },
  {
    "id": "res-35",
    "tableId": "table-9",
    "customer": {
      "name": "Pablo Delgado Vega",
      "phone": "+54-11-6767-8989",
      "email": "pablodelgadovega@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-03T20:00:00.000-03:00",
    "endTime": "2025-10-03T21:57:00.000-03:00",
    "durationMinutes": 117,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-03T20:42:00.000-03:00",
    "updatedAt": "2025-10-03T20:42:00.000-03:00"
  },
  {
    "id": "res-36",
    "tableId": "table-16",
    "customer": {
      "name": "Claudia Medina Campos",
      "phone": "+54-11-5555-6666",
      "email": "claudiamedinacampos@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-29T16:30:00.000-03:00",
    "endTime": "2025-10-29T18:28:00.000-03:00",
    "durationMinutes": 118,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-29T13:37:00.000-03:00",
    "updatedAt": "2025-10-29T13:37:00.000-03:00"
  },
  {
    "id": "res-37",
    "tableId": "table-30",
    "customer": {
      "name": "Adrián Cabrera Moreno",
      "phone": "+54-11-1212-3434",
      "email": "adriáncabreramoreno@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T15:00:00.000-03:00",
    "endTime": "2025-10-04T17:36:00.000-03:00",
    "durationMinutes": 156,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-04T11:06:00.000-03:00",
    "updatedAt": "2025-10-04T13:06:00.000-03:00"
  },
  {
    "id": "res-38",
    "tableId": "table-8",
    "customer": {
      "name": "Lucía Morales Morales",
      "phone": "+54-11-1111-2222",
      "email": "lucíamoralesmorales@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T12:00:00.000-03:00",
    "endTime": "2025-10-04T14:21:00.000-03:00",
    "durationMinutes": 141,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-04T11:34:00.000-03:00",
    "updatedAt": "2025-10-04T15:34:00.000-03:00"
  },
  {
    "id": "res-39",
    "tableId": "table-12",
    "customer": {
      "name": "Camila Espinoza Ruiz",
      "phone": "+54-11-5555-6666",
      "email": "camilaespinozaruiz@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-15T19:00:00.000-03:00",
    "endTime": "2025-10-15T20:11:00.000-03:00",
    "durationMinutes": 71,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-15T11:45:00.000-03:00",
    "updatedAt": "2025-10-15T11:45:00.000-03:00"
  },
  {
    "id": "res-40",
    "tableId": "table-29",
    "customer": {
      "name": "Beatriz Guerrero Medina",
      "phone": "+54-11-5555-6666",
      "email": "beatrizguerreromedina@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T16:30:00.000-03:00",
    "endTime": "2025-10-10T17:52:00.000-03:00",
    "durationMinutes": 82,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-10T21:47:00.000-03:00",
    "updatedAt": "2025-10-10T21:47:00.000-03:00"
  },
  {
    "id": "res-41",
    "tableId": "table-18",
    "customer": {
      "name": "David Jiménez Ramos",
      "phone": "+54-11-9999-0000",
      "email": "davidjiménezramos@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-27T20:00:00.000-03:00",
    "endTime": "2025-10-27T21:11:00.000-03:00",
    "durationMinutes": 71,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-27T17:13:00.000-03:00",
    "updatedAt": "2025-10-27T17:13:00.000-03:00"
  },
  {
    "id": "res-42",
    "tableId": "table-13",
    "customer": {
      "name": "Beatriz Guerrero Vega",
      "phone": "+54-11-9090-1212",
      "email": "beatrizguerrerovega@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T15:30:00.000-03:00",
    "endTime": "2025-10-24T18:26:00.000-03:00",
    "durationMinutes": 176,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-24T19:59:00.000-03:00",
    "updatedAt": "2025-10-24T19:59:00.000-03:00"
  },
  {
    "id": "res-43",
    "tableId": "table-16",
    "customer": {
      "name": "Elena Moreno Torres",
      "phone": "+54-11-2345-6789",
      "email": "elenamorenotorres@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T22:00:00.000-03:00",
    "endTime": "2025-10-24T23:52:00.000-03:00",
    "durationMinutes": 112,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-24T13:55:00.000-03:00",
    "updatedAt": "2025-10-24T13:55:00.000-03:00"
  },
  {
    "id": "res-44",
    "tableId": "table-8",
    "customer": {
      "name": "Antonio Ruiz Cabrera",
      "phone": "+54-11-6767-8989",
      "email": "antonioruizcabrera@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-16T15:00:00.000-03:00",
    "endTime": "2025-10-16T16:11:00.000-03:00",
    "durationMinutes": 71,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-16T21:12:00.000-03:00",
    "updatedAt": "2025-10-16T21:12:00.000-03:00"
  },
  {
    "id": "res-45",
    "tableId": "table-15",
    "customer": {
      "name": "Alejandro Castro Campos",
      "phone": "+54-11-2345-6789",
      "email": "alejandrocastrocampos@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-08T17:00:00.000-03:00",
    "endTime": "2025-10-08T18:17:00.000-03:00",
    "durationMinutes": 77,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-08T14:17:00.000-03:00",
    "updatedAt": "2025-10-08T14:17:00.000-03:00"
  },
  {
    "id": "res-46",
    "tableId": "table-5",
    "customer": {
      "name": "Isabel Díaz Díaz",
      "phone": "+54-11-2345-6789",
      "email": "isabeldíazdíaz@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-02T16:00:00.000-03:00",
    "endTime": "2025-10-02T17:49:00.000-03:00",
    "durationMinutes": 109,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-02T11:45:00.000-03:00",
    "updatedAt": "2025-10-02T11:45:00.000-03:00"
  },
  {
    "id": "res-47",
    "tableId": "table-29",
    "customer": {
      "name": "Pablo Delgado González",
      "phone": "+54-11-1313-4545",
      "email": "pablodelgadogonzález@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-05T15:30:00.000-03:00",
    "endTime": "2025-10-05T17:36:00.000-03:00",
    "durationMinutes": 126,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-05T13:25:00.000-03:00",
    "updatedAt": "2025-10-05T13:25:00.000-03:00"
  },
  {
    "id": "res-48",
    "tableId": "table-5",
    "customer": {
      "name": "Elena Moreno Ramos",
      "phone": "+54-11-0123-4567",
      "email": "elenamorenoramos@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-08T10:30:00.000-03:00",
    "endTime": "2025-10-08T11:47:00.000-03:00",
    "durationMinutes": 77,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-08T15:51:00.000-03:00",
    "updatedAt": "2025-10-08T15:51:00.000-03:00"
  },
  {
    "id": "res-49",
    "tableId": "table-4",
    "customer": {
      "name": "Gabriel Rojas Vega",
      "phone": "+54-11-3456-7890",
      "email": "gabrielrojasvega@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T22:00:00.000-03:00",
    "endTime": "2025-10-26T23:37:00.000-03:00",
    "durationMinutes": 97,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-26T21:38:00.000-03:00",
    "updatedAt": "2025-10-26T21:38:00.000-03:00"
  },
  {
    "id": "res-50",
    "tableId": "table-21",
    "customer": {
      "name": "Carmen Pérez Molina",
      "phone": "+54-11-4567-8901",
      "email": "carmenpérezmolina@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T18:00:00.000-03:00",
    "endTime": "2025-10-18T21:03:00.000-03:00",
    "durationMinutes": 183,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-18T15:46:00.000-03:00",
    "updatedAt": "2025-10-18T19:46:00.000-03:00"
  },
  {
    "id": "res-51",
    "tableId": "table-28",
    "customer": {
      "name": "Sergio Peña Torres",
      "phone": "+54-11-5678-9012",
      "email": "sergiopeñatorres@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T20:30:00.000-03:00",
    "endTime": "2025-10-24T22:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T21:27:00.000-03:00",
    "updatedAt": "2025-10-25T01:27:00.000-03:00"
  },
  {
    "id": "res-52",
    "tableId": "table-12",
    "customer": {
      "name": "Andrea Mendoza Silva",
      "phone": "+54-11-5555-6666",
      "email": "andreamendozasilva@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-01T18:30:00.000-03:00",
    "endTime": "2025-10-01T20:51:00.000-03:00",
    "durationMinutes": 141,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-01T18:19:00.000-03:00",
    "updatedAt": "2025-10-01T18:19:00.000-03:00"
  },
  {
    "id": "res-53",
    "tableId": "table-23",
    "customer": {
      "name": "Daniel Campos Reyes",
      "phone": "+54-11-6789-0123",
      "email": "danielcamposreyes@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-21T20:30:00.000-03:00",
    "endTime": "2025-10-21T21:58:00.000-03:00",
    "durationMinutes": 88,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-21T14:58:00.000-03:00",
    "updatedAt": "2025-10-21T14:58:00.000-03:00"
  },
  {
    "id": "res-54",
    "tableId": "table-27",
    "customer": {
      "name": "Andrea Mendoza Espinoza",
      "phone": "+54-11-9999-0000",
      "email": "andreamendozaespinoza@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-29T18:00:00.000-03:00",
    "endTime": "2025-10-29T19:26:00.000-03:00",
    "durationMinutes": 86,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-29T14:16:00.000-03:00",
    "updatedAt": "2025-10-29T18:16:00.000-03:00"
  },
  {
    "id": "res-55",
    "tableId": "table-7",
    "customer": {
      "name": "Javier Torres Herrera",
      "phone": "+54-11-1111-2222",
      "email": "javiertorresherrera@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T16:30:00.000-03:00",
    "endTime": "2025-10-24T19:57:00.000-03:00",
    "durationMinutes": 207,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T11:41:00.000-03:00",
    "updatedAt": "2025-10-24T11:41:00.000-03:00"
  },
  {
    "id": "res-56",
    "tableId": "table-20",
    "customer": {
      "name": "Sandra Vega Martín",
      "phone": "+54-11-9090-1212",
      "email": "sandravegamartín@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-02T18:30:00.000-03:00",
    "endTime": "2025-10-02T20:26:00.000-03:00",
    "durationMinutes": 116,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-02T13:46:00.000-03:00",
    "updatedAt": "2025-10-02T13:46:00.000-03:00"
  },
  {
    "id": "res-57",
    "tableId": "table-17",
    "customer": {
      "name": "María Rodríguez Moreno",
      "phone": "+54-11-6789-0123",
      "email": "maríarodríguezmoreno@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-05T10:00:00.000-03:00",
    "endTime": "2025-10-05T11:08:00.000-03:00",
    "durationMinutes": 68,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-05T20:33:00.000-03:00",
    "updatedAt": "2025-10-05T21:33:00.000-03:00"
  },
  {
    "id": "res-58",
    "tableId": "table-19",
    "customer": {
      "name": "Fernando Ramos Peña",
      "phone": "+54-11-7890-1234",
      "email": "fernandoramospeña@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-03T12:00:00.000-03:00",
    "endTime": "2025-10-03T15:26:00.000-03:00",
    "durationMinutes": 206,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-03T14:41:00.000-03:00",
    "updatedAt": "2025-10-03T18:41:00.000-03:00"
  },
  {
    "id": "res-59",
    "tableId": "table-29",
    "customer": {
      "name": "Laura Sánchez López",
      "phone": "+54-11-9090-1212",
      "email": "laurasánchezlópez@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T15:30:00.000-03:00",
    "endTime": "2025-10-23T17:33:00.000-03:00",
    "durationMinutes": 123,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-23T19:32:00.000-03:00",
    "updatedAt": "2025-10-23T19:32:00.000-03:00"
  },
  {
    "id": "res-60",
    "tableId": "table-5",
    "customer": {
      "name": "Rubén Herrera Navarro",
      "phone": "+54-11-7777-8888",
      "email": "rubénherreranavarro@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T22:30:00.000-03:00",
    "endTime": "2025-10-19T00:33:00.000-03:00",
    "durationMinutes": 123,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-18T17:51:00.000-03:00",
    "updatedAt": "2025-10-18T20:51:00.000-03:00"
  },
  {
    "id": "res-61",
    "tableId": "table-29",
    "customer": {
      "name": "Carlos López Medina",
      "phone": "+54-11-1313-4545",
      "email": "carloslópezmedina@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T14:30:00.000-03:00",
    "endTime": "2025-10-18T17:58:00.000-03:00",
    "durationMinutes": 208,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-18T18:17:00.000-03:00",
    "updatedAt": "2025-10-18T18:17:00.000-03:00"
  },
  {
    "id": "res-62",
    "tableId": "table-30",
    "customer": {
      "name": "Sandra Vega Jiménez",
      "phone": "+54-11-9999-0000",
      "email": "sandravegajiménez@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T15:00:00.000-03:00",
    "endTime": "2025-10-24T17:48:00.000-03:00",
    "durationMinutes": 168,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T16:18:00.000-03:00",
    "updatedAt": "2025-10-24T16:18:00.000-03:00"
  },
  {
    "id": "res-63",
    "tableId": "table-11",
    "customer": {
      "name": "Andrea Mendoza Vega",
      "phone": "+54-11-7777-8888",
      "email": "andreamendozavega@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-01T20:00:00.000-03:00",
    "endTime": "2025-10-01T21:35:00.000-03:00",
    "durationMinutes": 95,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-01T13:44:00.000-03:00",
    "updatedAt": "2025-10-01T14:44:00.000-03:00"
  },
  {
    "id": "res-64",
    "tableId": "table-13",
    "customer": {
      "name": "Francisco Martín Pérez",
      "phone": "+54-11-1234-5678",
      "email": "franciscomartínpérez@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-09-30T12:30:00.000-03:00",
    "endTime": "2025-09-30T13:34:00.000-03:00",
    "durationMinutes": 64,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-09-30T21:07:00.000-03:00",
    "updatedAt": "2025-09-30T21:07:00.000-03:00"
  },
  {
    "id": "res-65",
    "tableId": "table-6",
    "customer": {
      "name": "Teresa Molina Aguilar",
      "phone": "+54-11-9090-1212",
      "email": "teresamolinaaguilar@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-03T14:30:00.000-03:00",
    "endTime": "2025-10-03T16:58:00.000-03:00",
    "durationMinutes": 148,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-03T14:40:00.000-03:00",
    "updatedAt": "2025-10-03T14:40:00.000-03:00"
  },
  {
    "id": "res-66",
    "tableId": "table-27",
    "customer": {
      "name": "Álvaro Serrano Herrera",
      "phone": "+54-11-8901-2345",
      "email": "álvaroserranoherrera@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T17:30:00.000-03:00",
    "endTime": "2025-10-24T20:29:00.000-03:00",
    "durationMinutes": 179,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T19:19:00.000-03:00",
    "updatedAt": "2025-10-24T19:19:00.000-03:00"
  },
  {
    "id": "res-67",
    "tableId": "table-22",
    "customer": {
      "name": "Alejandro Castro Castro",
      "phone": "+54-11-7777-8888",
      "email": "alejandrocastrocastro@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T21:30:00.000-03:00",
    "endTime": "2025-10-24T22:42:00.000-03:00",
    "durationMinutes": 72,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T14:23:00.000-03:00",
    "updatedAt": "2025-10-24T16:23:00.000-03:00"
  },
  {
    "id": "res-68",
    "tableId": "table-21",
    "customer": {
      "name": "Lucía Morales García",
      "phone": "+54-11-1111-2222",
      "email": "lucíamoralesgarcía@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-12T12:30:00.000-03:00",
    "endTime": "2025-10-12T14:06:00.000-03:00",
    "durationMinutes": 96,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-12T16:42:00.000-03:00",
    "updatedAt": "2025-10-12T16:42:00.000-03:00"
  },
  {
    "id": "res-69",
    "tableId": "table-13",
    "customer": {
      "name": "Valeria Silva Cabrera",
      "phone": "+54-11-8901-2345",
      "email": "valeriasilvacabrera@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T14:30:00.000-03:00",
    "endTime": "2025-10-24T15:46:00.000-03:00",
    "durationMinutes": 76,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T19:37:00.000-03:00",
    "updatedAt": "2025-10-24T21:37:00.000-03:00"
  },
  {
    "id": "res-70",
    "tableId": "table-3",
    "customer": {
      "name": "Álvaro Serrano Ruiz",
      "phone": "+54-11-8901-2345",
      "email": "álvaroserranoruiz@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T20:30:00.000-03:00",
    "endTime": "2025-10-10T23:28:00.000-03:00",
    "durationMinutes": 178,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-10T17:22:00.000-03:00",
    "updatedAt": "2025-10-10T17:22:00.000-03:00"
  },
  {
    "id": "res-71",
    "tableId": "table-27",
    "customer": {
      "name": "Isabel Díaz Silva",
      "phone": "+54-11-2345-6789",
      "email": "isabeldíazsilva@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-25T18:30:00.000-03:00",
    "endTime": "2025-10-25T19:59:00.000-03:00",
    "durationMinutes": 89,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-25T19:54:00.000-03:00",
    "updatedAt": "2025-10-25T22:54:00.000-03:00"
  },
  {
    "id": "res-72",
    "tableId": "table-5",
    "customer": {
      "name": "Patricia Navarro Campos",
      "phone": "+54-11-6767-8989",
      "email": "patricianavarrocampos@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-04T17:00:00.000-03:00",
    "endTime": "2025-10-04T19:39:00.000-03:00",
    "durationMinutes": 159,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-04T18:38:00.000-03:00",
    "updatedAt": "2025-10-04T18:38:00.000-03:00"
  },
  {
    "id": "res-73",
    "tableId": "table-11",
    "customer": {
      "name": "Miguel González Reyes",
      "phone": "+54-11-7890-1234",
      "email": "miguelgonzálezreyes@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T15:30:00.000-03:00",
    "endTime": "2025-10-24T16:38:00.000-03:00",
    "durationMinutes": 68,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T15:56:00.000-03:00",
    "updatedAt": "2025-10-24T15:56:00.000-03:00"
  },
  {
    "id": "res-74",
    "tableId": "table-7",
    "customer": {
      "name": "Hugo Aguilar Vega",
      "phone": "+54-11-0123-4567",
      "email": "hugoaguilarvega@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T20:00:00.000-03:00",
    "endTime": "2025-10-22T21:39:00.000-03:00",
    "durationMinutes": 99,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-22T11:47:00.000-03:00",
    "updatedAt": "2025-10-22T11:47:00.000-03:00"
  },
  {
    "id": "res-75",
    "tableId": "table-15",
    "customer": {
      "name": "Antonio Ruiz Rodríguez",
      "phone": "+54-11-1111-2222",
      "email": "antonioruizrodríguez@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T18:30:00.000-03:00",
    "endTime": "2025-10-17T20:51:00.000-03:00",
    "durationMinutes": 141,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-17T20:21:00.000-03:00",
    "updatedAt": "2025-10-17T20:21:00.000-03:00"
  },
  {
    "id": "res-76",
    "tableId": "table-9",
    "customer": {
      "name": "Andrea Mendoza Rojas",
      "phone": "+54-11-1313-4545",
      "email": "andreamendozarojas@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T15:00:00.000-03:00",
    "endTime": "2025-10-22T16:39:00.000-03:00",
    "durationMinutes": 99,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-22T16:41:00.000-03:00",
    "updatedAt": "2025-10-22T16:41:00.000-03:00"
  },
  {
    "id": "res-77",
    "tableId": "table-5",
    "customer": {
      "name": "María Rodríguez García",
      "phone": "+54-11-6789-0123",
      "email": "maríarodríguezgarcía@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-16T12:00:00.000-03:00",
    "endTime": "2025-10-16T15:04:00.000-03:00",
    "durationMinutes": 184,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-16T11:16:00.000-03:00",
    "updatedAt": "2025-10-16T11:16:00.000-03:00"
  },
  {
    "id": "res-78",
    "tableId": "table-20",
    "customer": {
      "name": "Natalia Ortega Herrera",
      "phone": "+54-11-3456-7890",
      "email": "nataliaortegaherrera@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T12:00:00.000-03:00",
    "endTime": "2025-10-19T15:10:00.000-03:00",
    "durationMinutes": 190,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-19T12:12:00.000-03:00",
    "updatedAt": "2025-10-19T12:12:00.000-03:00"
  },
  {
    "id": "res-79",
    "tableId": "table-24",
    "customer": {
      "name": "Valeria Silva López",
      "phone": "+54-11-6767-8989",
      "email": "valeriasilvalópez@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T13:30:00.000-03:00",
    "endTime": "2025-10-19T15:36:00.000-03:00",
    "durationMinutes": 126,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-19T13:42:00.000-03:00",
    "updatedAt": "2025-10-19T13:42:00.000-03:00"
  },
  {
    "id": "res-80",
    "tableId": "table-26",
    "customer": {
      "name": "José Martínez Campos",
      "phone": "+54-11-8901-2345",
      "email": "josémartínezcampos@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-10T15:00:00.000-03:00",
    "endTime": "2025-10-10T16:22:00.000-03:00",
    "durationMinutes": 82,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-10T13:42:00.000-03:00",
    "updatedAt": "2025-10-10T16:42:00.000-03:00"
  },
  {
    "id": "res-81",
    "tableId": "table-22",
    "customer": {
      "name": "Carmen Pérez Herrera",
      "phone": "+54-11-3333-4444",
      "email": "carmenpérezherrera@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-12T18:00:00.000-03:00",
    "endTime": "2025-10-12T21:01:00.000-03:00",
    "durationMinutes": 181,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-12T19:46:00.000-03:00",
    "updatedAt": "2025-10-12T19:46:00.000-03:00"
  },
  {
    "id": "res-82",
    "tableId": "table-22",
    "customer": {
      "name": "Cristina Romero Rodríguez",
      "phone": "+54-11-1234-5678",
      "email": "cristinaromerorodríguez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-16T17:00:00.000-03:00",
    "endTime": "2025-10-16T20:24:00.000-03:00",
    "durationMinutes": 204,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-16T22:17:00.000-03:00",
    "updatedAt": "2025-10-16T22:17:00.000-03:00"
  },
  {
    "id": "res-83",
    "tableId": "table-12",
    "customer": {
      "name": "Sofia Reyes López",
      "phone": "+54-11-9012-3456",
      "email": "sofiareyeslópez@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T14:00:00.000-03:00",
    "endTime": "2025-10-18T16:48:00.000-03:00",
    "durationMinutes": 168,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-18T19:51:00.000-03:00",
    "updatedAt": "2025-10-18T19:51:00.000-03:00"
  },
  {
    "id": "res-84",
    "tableId": "table-30",
    "customer": {
      "name": "Nicolás Fuentes Romero",
      "phone": "+54-11-9999-0000",
      "email": "nicolásfuentesromero@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-15T11:00:00.000-03:00",
    "endTime": "2025-10-15T13:30:00.000-03:00",
    "durationMinutes": 150,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-15T13:17:00.000-03:00",
    "updatedAt": "2025-10-15T13:17:00.000-03:00"
  },
  {
    "id": "res-85",
    "tableId": "table-10",
    "customer": {
      "name": "Antonio Ruiz Moreno",
      "phone": "+54-11-7890-1234",
      "email": "antonioruizmoreno@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-05T12:00:00.000-03:00",
    "endTime": "2025-10-05T13:34:00.000-03:00",
    "durationMinutes": 94,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-05T20:38:00.000-03:00",
    "updatedAt": "2025-10-05T20:38:00.000-03:00"
  },
  {
    "id": "res-86",
    "tableId": "table-21",
    "customer": {
      "name": "Claudia Medina Vargas",
      "phone": "+54-11-4567-8901",
      "email": "claudiamedinavargas@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-17T20:00:00.000-03:00",
    "endTime": "2025-10-17T22:13:00.000-03:00",
    "durationMinutes": 133,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-17T15:13:00.000-03:00",
    "updatedAt": "2025-10-17T16:13:00.000-03:00"
  },
  {
    "id": "res-87",
    "tableId": "table-7",
    "customer": {
      "name": "Daniel Campos Torres",
      "phone": "+54-11-6789-0123",
      "email": "danielcampostorres@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-29T20:00:00.000-03:00",
    "endTime": "2025-10-29T23:29:00.000-03:00",
    "durationMinutes": 209,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-29T13:30:00.000-03:00",
    "updatedAt": "2025-10-29T15:30:00.000-03:00"
  },
  {
    "id": "res-88",
    "tableId": "table-18",
    "customer": {
      "name": "Francisco Martín Delgado",
      "phone": "+54-11-1111-2222",
      "email": "franciscomartíndelgado@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-05T10:00:00.000-03:00",
    "endTime": "2025-10-05T13:18:00.000-03:00",
    "durationMinutes": 198,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-05T11:47:00.000-03:00",
    "updatedAt": "2025-10-05T13:47:00.000-03:00"
  },
  {
    "id": "res-89",
    "tableId": "table-23",
    "customer": {
      "name": "Javier Torres Medina",
      "phone": "+54-11-6789-0123",
      "email": "javiertorresmedina@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T12:00:00.000-03:00",
    "endTime": "2025-10-17T13:24:00.000-03:00",
    "durationMinutes": 84,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-17T13:36:00.000-03:00",
    "updatedAt": "2025-10-17T16:36:00.000-03:00"
  },
  {
    "id": "res-90",
    "tableId": "table-27",
    "customer": {
      "name": "Antonio Ruiz Molina",
      "phone": "+54-11-5656-7878",
      "email": "antonioruizmolina@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-08T14:30:00.000-03:00",
    "endTime": "2025-10-08T15:50:00.000-03:00",
    "durationMinutes": 80,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-08T21:44:00.000-03:00",
    "updatedAt": "2025-10-08T21:44:00.000-03:00"
  },
  {
    "id": "res-91",
    "tableId": "table-2",
    "customer": {
      "name": "Nicolás Fuentes Aguilar",
      "phone": "+54-11-9999-0000",
      "email": "nicolásfuentesaguilar@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T20:00:00.000-03:00",
    "endTime": "2025-10-18T22:21:00.000-03:00",
    "durationMinutes": 141,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-18T20:41:00.000-03:00",
    "updatedAt": "2025-10-18T20:41:00.000-03:00"
  },
  {
    "id": "res-92",
    "tableId": "table-15",
    "customer": {
      "name": "Gabriel Rojas Silva",
      "phone": "+54-11-9090-1212",
      "email": "gabrielrojassilva@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T16:30:00.000-03:00",
    "endTime": "2025-10-17T19:06:00.000-03:00",
    "durationMinutes": 156,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-17T16:15:00.000-03:00",
    "updatedAt": "2025-10-17T18:15:00.000-03:00"
  },
  {
    "id": "res-93",
    "tableId": "table-27",
    "customer": {
      "name": "Daniel Campos Herrera",
      "phone": "+54-11-4567-8901",
      "email": "danielcamposherrera@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T16:00:00.000-03:00",
    "endTime": "2025-10-18T18:29:00.000-03:00",
    "durationMinutes": 149,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-18T12:46:00.000-03:00",
    "updatedAt": "2025-10-18T12:46:00.000-03:00"
  },
  {
    "id": "res-94",
    "tableId": "table-1",
    "customer": {
      "name": "Pablo Delgado Delgado",
      "phone": "+54-11-6767-8989",
      "email": "pablodelgadodelgado@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-29T21:30:00.000-03:00",
    "endTime": "2025-10-29T23:01:00.000-03:00",
    "durationMinutes": 91,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-29T20:22:00.000-03:00",
    "updatedAt": "2025-10-29T20:22:00.000-03:00"
  },
  {
    "id": "res-95",
    "tableId": "table-20",
    "customer": {
      "name": "Mónica Flores Ruiz",
      "phone": "+54-11-7890-1234",
      "email": "mónicafloresruiz@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-02T11:00:00.000-03:00",
    "endTime": "2025-10-02T14:05:00.000-03:00",
    "durationMinutes": 185,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-02T12:14:00.000-03:00",
    "updatedAt": "2025-10-02T12:14:00.000-03:00"
  },
  {
    "id": "res-96",
    "tableId": "table-14",
    "customer": {
      "name": "José Martínez Martínez",
      "phone": "+54-11-6767-8989",
      "email": "josémartínezmartínez@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-20T22:00:00.000-03:00",
    "endTime": "2025-10-21T01:16:00.000-03:00",
    "durationMinutes": 196,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-20T18:38:00.000-03:00",
    "updatedAt": "2025-10-20T21:38:00.000-03:00"
  },
  {
    "id": "res-97",
    "tableId": "table-17",
    "customer": {
      "name": "Sofia Reyes Rodríguez",
      "phone": "+54-11-8901-2345",
      "email": "sofiareyesrodríguez@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-25T18:30:00.000-03:00",
    "endTime": "2025-10-25T20:00:00.000-03:00",
    "durationMinutes": 90,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-25T18:59:00.000-03:00",
    "updatedAt": "2025-10-25T19:59:00.000-03:00"
  },
  {
    "id": "res-98",
    "tableId": "table-26",
    "customer": {
      "name": "Teresa Molina Moreno",
      "phone": "+54-11-1313-4545",
      "email": "teresamolinamoreno@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T14:00:00.000-03:00",
    "endTime": "2025-10-18T15:18:00.000-03:00",
    "durationMinutes": 78,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-18T15:46:00.000-03:00",
    "updatedAt": "2025-10-18T15:46:00.000-03:00"
  },
  {
    "id": "res-99",
    "tableId": "table-2",
    "customer": {
      "name": "Rubén Herrera Cabrera",
      "phone": "+54-11-1111-2222",
      "email": "rubénherreracabrera@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-10T21:30:00.000-03:00",
    "endTime": "2025-10-10T23:38:00.000-03:00",
    "durationMinutes": 128,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-10T17:02:00.000-03:00",
    "updatedAt": "2025-10-10T20:02:00.000-03:00"
  },
  {
    "id": "res-100",
    "tableId": "table-8",
    "customer": {
      "name": "Álvaro Serrano Aguilar",
      "phone": "+54-11-5678-9012",
      "email": "álvaroserranoaguilar@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-25T20:30:00.000-03:00",
    "endTime": "2025-10-25T22:10:00.000-03:00",
    "durationMinutes": 100,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-25T18:00:00.000-03:00",
    "updatedAt": "2025-10-25T18:00:00.000-03:00"
  },
  {
    "id": "res-101",
    "tableId": "table-3",
    "customer": {
      "name": "Mónica Flores Martín",
      "phone": "+54-11-1234-5678",
      "email": "mónicafloresmartín@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-16T14:30:00.000-03:00",
    "endTime": "2025-10-16T17:40:00.000-03:00",
    "durationMinutes": 190,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-16T12:53:00.000-03:00",
    "updatedAt": "2025-10-16T13:53:00.000-03:00"
  },
  {
    "id": "res-102",
    "tableId": "table-15",
    "customer": {
      "name": "Valeria Silva López",
      "phone": "+54-11-5555-6666",
      "email": "valeriasilvalópez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-15T21:30:00.000-03:00",
    "endTime": "2025-10-15T23:52:00.000-03:00",
    "durationMinutes": 142,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-15T21:19:00.000-03:00",
    "updatedAt": "2025-10-15T21:19:00.000-03:00"
  },
  {
    "id": "res-103",
    "tableId": "table-16",
    "customer": {
      "name": "Mónica Flores Campos",
      "phone": "+54-11-5555-6666",
      "email": "mónicaflorescampos@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-26T11:30:00.000-03:00",
    "endTime": "2025-10-26T12:49:00.000-03:00",
    "durationMinutes": 79,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-26T11:57:00.000-03:00",
    "updatedAt": "2025-10-26T11:57:00.000-03:00"
  },
  {
    "id": "res-104",
    "tableId": "table-1",
    "customer": {
      "name": "Cristina Romero Ramos",
      "phone": "+54-11-2345-6789",
      "email": "cristinaromeroramos@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-21T18:30:00.000-03:00",
    "endTime": "2025-10-21T21:08:00.000-03:00",
    "durationMinutes": 158,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-21T14:36:00.000-03:00",
    "updatedAt": "2025-10-21T17:36:00.000-03:00"
  },
  {
    "id": "res-105",
    "tableId": "table-17",
    "customer": {
      "name": "Patricia Navarro Ortega",
      "phone": "+54-11-9999-0000",
      "email": "patricianavarroortega@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T16:30:00.000-03:00",
    "endTime": "2025-10-24T19:38:00.000-03:00",
    "durationMinutes": 188,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T13:20:00.000-03:00",
    "updatedAt": "2025-10-24T15:20:00.000-03:00"
  },
  {
    "id": "res-106",
    "tableId": "table-22",
    "customer": {
      "name": "Gabriel Rojas Martínez",
      "phone": "+54-11-0123-4567",
      "email": "gabrielrojasmartínez@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-16T15:00:00.000-03:00",
    "endTime": "2025-10-16T16:54:00.000-03:00",
    "durationMinutes": 114,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-16T22:44:00.000-03:00",
    "updatedAt": "2025-10-16T22:44:00.000-03:00"
  },
  {
    "id": "res-107",
    "tableId": "table-26",
    "customer": {
      "name": "Elena Moreno Medina",
      "phone": "+54-11-5678-9012",
      "email": "elenamorenomedina@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-22T19:30:00.000-03:00",
    "endTime": "2025-10-22T21:12:00.000-03:00",
    "durationMinutes": 102,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-22T20:51:00.000-03:00",
    "updatedAt": "2025-10-22T21:51:00.000-03:00"
  },
  {
    "id": "res-108",
    "tableId": "table-22",
    "customer": {
      "name": "José Martínez Flores",
      "phone": "+54-11-0123-4567",
      "email": "josémartínezflores@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T18:00:00.000-03:00",
    "endTime": "2025-10-26T19:56:00.000-03:00",
    "durationMinutes": 116,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-26T14:22:00.000-03:00",
    "updatedAt": "2025-10-26T16:22:00.000-03:00"
  },
  {
    "id": "res-109",
    "tableId": "table-2",
    "customer": {
      "name": "Adrián Cabrera Moreno",
      "phone": "+54-11-9090-1212",
      "email": "adriáncabreramoreno@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-03T15:00:00.000-03:00",
    "endTime": "2025-10-03T18:17:00.000-03:00",
    "durationMinutes": 197,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-03T18:40:00.000-03:00",
    "updatedAt": "2025-10-03T18:40:00.000-03:00"
  },
  {
    "id": "res-110",
    "tableId": "table-30",
    "customer": {
      "name": "Lucía Morales Torres",
      "phone": "+54-11-5678-9012",
      "email": "lucíamoralestorres@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-09T18:00:00.000-03:00",
    "endTime": "2025-10-09T20:05:00.000-03:00",
    "durationMinutes": 125,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-09T19:10:00.000-03:00",
    "updatedAt": "2025-10-09T20:10:00.000-03:00"
  },
  {
    "id": "res-111",
    "tableId": "table-21",
    "customer": {
      "name": "Miguel González Silva",
      "phone": "+54-11-9999-0000",
      "email": "miguelgonzálezsilva@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T18:00:00.000-03:00",
    "endTime": "2025-10-23T21:03:00.000-03:00",
    "durationMinutes": 183,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-23T17:08:00.000-03:00",
    "updatedAt": "2025-10-23T20:08:00.000-03:00"
  },
  {
    "id": "res-112",
    "tableId": "table-30",
    "customer": {
      "name": "Sandra Vega Campos",
      "phone": "+54-11-7890-1234",
      "email": "sandravegacampos@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-06T21:30:00.000-03:00",
    "endTime": "2025-10-07T00:04:00.000-03:00",
    "durationMinutes": 154,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-06T20:03:00.000-03:00",
    "updatedAt": "2025-10-06T20:03:00.000-03:00"
  },
  {
    "id": "res-113",
    "tableId": "table-20",
    "customer": {
      "name": "Laura Sánchez Flores",
      "phone": "+54-11-3333-4444",
      "email": "laurasánchezflores@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T11:00:00.000-03:00",
    "endTime": "2025-10-18T12:26:00.000-03:00",
    "durationMinutes": 86,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-18T22:38:00.000-03:00",
    "updatedAt": "2025-10-18T22:38:00.000-03:00"
  },
  {
    "id": "res-114",
    "tableId": "table-14",
    "customer": {
      "name": "Valeria Silva Vargas",
      "phone": "+54-11-4567-8901",
      "email": "valeriasilvavargas@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-15T14:00:00.000-03:00",
    "endTime": "2025-10-15T16:54:00.000-03:00",
    "durationMinutes": 174,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-15T15:47:00.000-03:00",
    "updatedAt": "2025-10-15T15:47:00.000-03:00"
  },
  {
    "id": "res-115",
    "tableId": "table-7",
    "customer": {
      "name": "Nicolás Fuentes Pérez",
      "phone": "+54-11-7777-8888",
      "email": "nicolásfuentespérez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-05T19:00:00.000-03:00",
    "endTime": "2025-10-05T21:24:00.000-03:00",
    "durationMinutes": 144,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-05T16:06:00.000-03:00",
    "updatedAt": "2025-10-05T16:06:00.000-03:00"
  },
  {
    "id": "res-116",
    "tableId": "table-2",
    "customer": {
      "name": "Camila Espinoza Martín",
      "phone": "+54-11-6789-0123",
      "email": "camilaespinozamartín@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-05T10:00:00.000-03:00",
    "endTime": "2025-10-05T13:27:00.000-03:00",
    "durationMinutes": 207,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-05T19:00:00.000-03:00",
    "updatedAt": "2025-10-05T20:00:00.000-03:00"
  },
  {
    "id": "res-117",
    "tableId": "table-19",
    "customer": {
      "name": "Hugo Aguilar Guerrero",
      "phone": "+54-11-1234-5678",
      "email": "hugoaguilarguerrero@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-15T14:30:00.000-03:00",
    "endTime": "2025-10-15T16:00:00.000-03:00",
    "durationMinutes": 90,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-15T21:01:00.000-03:00",
    "updatedAt": "2025-10-15T21:01:00.000-03:00"
  },
  {
    "id": "res-118",
    "tableId": "table-9",
    "customer": {
      "name": "Raquel Vargas Vega",
      "phone": "+54-11-7777-8888",
      "email": "raquelvargasvega@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T22:30:00.000-03:00",
    "endTime": "2025-10-05T01:22:00.000-03:00",
    "durationMinutes": 172,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-04T19:10:00.000-03:00",
    "updatedAt": "2025-10-04T19:10:00.000-03:00"
  },
  {
    "id": "res-119",
    "tableId": "table-3",
    "customer": {
      "name": "José Martínez Jiménez",
      "phone": "+54-11-3333-4444",
      "email": "josémartínezjiménez@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T13:00:00.000-03:00",
    "endTime": "2025-10-18T14:53:00.000-03:00",
    "durationMinutes": 113,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-18T20:39:00.000-03:00",
    "updatedAt": "2025-10-18T22:39:00.000-03:00"
  },
  {
    "id": "res-120",
    "tableId": "table-20",
    "customer": {
      "name": "Javier Torres Delgado",
      "phone": "+54-11-1111-2222",
      "email": "javiertorresdelgado@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-09-30T19:30:00.000-03:00",
    "endTime": "2025-09-30T22:37:00.000-03:00",
    "durationMinutes": 187,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-09-30T11:29:00.000-03:00",
    "updatedAt": "2025-09-30T11:29:00.000-03:00"
  },
  {
    "id": "res-121",
    "tableId": "table-11",
    "customer": {
      "name": "Rubén Herrera Díaz",
      "phone": "+54-11-9999-0000",
      "email": "rubénherreradíaz@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T20:00:00.000-03:00",
    "endTime": "2025-10-04T22:43:00.000-03:00",
    "durationMinutes": 163,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-04T21:32:00.000-03:00",
    "updatedAt": "2025-10-04T21:32:00.000-03:00"
  },
  {
    "id": "res-122",
    "tableId": "table-30",
    "customer": {
      "name": "José Martínez Flores",
      "phone": "+54-11-1313-4545",
      "email": "josémartínezflores@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T16:30:00.000-03:00",
    "endTime": "2025-10-18T19:31:00.000-03:00",
    "durationMinutes": 181,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-18T12:14:00.000-03:00",
    "updatedAt": "2025-10-18T16:14:00.000-03:00"
  },
  {
    "id": "res-123",
    "tableId": "table-12",
    "customer": {
      "name": "Fernando Ramos Cabrera",
      "phone": "+54-11-7890-1234",
      "email": "fernandoramoscabrera@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-02T22:30:00.000-03:00",
    "endTime": "2025-10-03T00:36:00.000-03:00",
    "durationMinutes": 126,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-02T11:06:00.000-03:00",
    "updatedAt": "2025-10-02T11:06:00.000-03:00"
  },
  {
    "id": "res-124",
    "tableId": "table-23",
    "customer": {
      "name": "Pablo Delgado Ramos",
      "phone": "+54-11-2345-6789",
      "email": "pablodelgadoramos@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T22:30:00.000-03:00",
    "endTime": "2025-10-04T00:43:00.000-03:00",
    "durationMinutes": 133,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-03T15:34:00.000-03:00",
    "updatedAt": "2025-10-03T15:34:00.000-03:00"
  },
  {
    "id": "res-125",
    "tableId": "table-9",
    "customer": {
      "name": "Pablo Delgado Silva",
      "phone": "+54-11-9999-0000",
      "email": "pablodelgadosilva@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-25T14:00:00.000-03:00",
    "endTime": "2025-10-25T17:18:00.000-03:00",
    "durationMinutes": 198,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-25T18:15:00.000-03:00",
    "updatedAt": "2025-10-25T18:15:00.000-03:00"
  },
  {
    "id": "res-126",
    "tableId": "table-9",
    "customer": {
      "name": "Roberto Herrera Ramos",
      "phone": "+54-11-0123-4567",
      "email": "robertoherreraramos@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-08T11:30:00.000-03:00",
    "endTime": "2025-10-08T13:56:00.000-03:00",
    "durationMinutes": 146,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-08T18:31:00.000-03:00",
    "updatedAt": "2025-10-08T18:31:00.000-03:00"
  },
  {
    "id": "res-127",
    "tableId": "table-18",
    "customer": {
      "name": "Valeria Silva López",
      "phone": "+54-11-8901-2345",
      "email": "valeriasilvalópez@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T22:30:00.000-03:00",
    "endTime": "2025-10-24T00:08:00.000-03:00",
    "durationMinutes": 98,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-23T11:16:00.000-03:00",
    "updatedAt": "2025-10-23T11:16:00.000-03:00"
  },
  {
    "id": "res-128",
    "tableId": "table-11",
    "customer": {
      "name": "Ana García Silva",
      "phone": "+54-11-9090-1212",
      "email": "anagarcíasilva@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-03T11:30:00.000-03:00",
    "endTime": "2025-10-03T12:42:00.000-03:00",
    "durationMinutes": 72,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-03T11:58:00.000-03:00",
    "updatedAt": "2025-10-03T11:58:00.000-03:00"
  },
  {
    "id": "res-129",
    "tableId": "table-20",
    "customer": {
      "name": "Miguel González Rodríguez",
      "phone": "+54-11-9012-3456",
      "email": "miguelgonzálezrodríguez@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T16:00:00.000-03:00",
    "endTime": "2025-10-24T17:09:00.000-03:00",
    "durationMinutes": 69,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T21:16:00.000-03:00",
    "updatedAt": "2025-10-24T21:16:00.000-03:00"
  },
  {
    "id": "res-130",
    "tableId": "table-5",
    "customer": {
      "name": "Mónica Flores Moreno",
      "phone": "+54-11-1212-3434",
      "email": "mónicafloresmoreno@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-12T12:00:00.000-03:00",
    "endTime": "2025-10-12T14:41:00.000-03:00",
    "durationMinutes": 161,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-12T15:07:00.000-03:00",
    "updatedAt": "2025-10-12T15:07:00.000-03:00"
  },
  {
    "id": "res-131",
    "tableId": "table-23",
    "customer": {
      "name": "Valeria Silva Ramos",
      "phone": "+54-11-6789-0123",
      "email": "valeriasilvaramos@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T15:00:00.000-03:00",
    "endTime": "2025-10-04T18:06:00.000-03:00",
    "durationMinutes": 186,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-04T20:31:00.000-03:00",
    "updatedAt": "2025-10-04T20:31:00.000-03:00"
  },
  {
    "id": "res-132",
    "tableId": "table-19",
    "customer": {
      "name": "Alejandro Castro Silva",
      "phone": "+54-11-7890-1234",
      "email": "alejandrocastrosilva@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T17:00:00.000-03:00",
    "endTime": "2025-10-23T18:13:00.000-03:00",
    "durationMinutes": 73,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-23T21:44:00.000-03:00",
    "updatedAt": "2025-10-23T21:44:00.000-03:00"
  },
  {
    "id": "res-133",
    "tableId": "table-21",
    "customer": {
      "name": "José Martínez Cabrera",
      "phone": "+54-11-5555-6666",
      "email": "josémartínezcabrera@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T20:00:00.000-03:00",
    "endTime": "2025-10-04T21:23:00.000-03:00",
    "durationMinutes": 83,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-04T11:16:00.000-03:00",
    "updatedAt": "2025-10-04T15:16:00.000-03:00"
  },
  {
    "id": "res-134",
    "tableId": "table-30",
    "customer": {
      "name": "Raquel Vargas Pérez",
      "phone": "+54-11-7777-8888",
      "email": "raquelvargaspérez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T19:00:00.000-03:00",
    "endTime": "2025-10-18T21:03:00.000-03:00",
    "durationMinutes": 123,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-18T18:12:00.000-03:00",
    "updatedAt": "2025-10-18T18:12:00.000-03:00"
  },
  {
    "id": "res-135",
    "tableId": "table-12",
    "customer": {
      "name": "Carlos López Fuentes",
      "phone": "+54-11-3333-4444",
      "email": "carloslópezfuentes@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T17:30:00.000-03:00",
    "endTime": "2025-10-25T19:48:00.000-03:00",
    "durationMinutes": 138,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-25T15:15:00.000-03:00",
    "updatedAt": "2025-10-25T17:15:00.000-03:00"
  },
  {
    "id": "res-136",
    "tableId": "table-29",
    "customer": {
      "name": "Carmen Pérez Vega",
      "phone": "+54-11-5555-6666",
      "email": "carmenpérezvega@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-11T12:00:00.000-03:00",
    "endTime": "2025-10-11T15:17:00.000-03:00",
    "durationMinutes": 197,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-11T11:17:00.000-03:00",
    "updatedAt": "2025-10-11T11:17:00.000-03:00"
  },
  {
    "id": "res-137",
    "tableId": "table-25",
    "customer": {
      "name": "Álvaro Serrano Reyes",
      "phone": "+54-11-1212-3434",
      "email": "álvaroserranoreyes@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-05T22:30:00.000-03:00",
    "endTime": "2025-10-06T01:42:00.000-03:00",
    "durationMinutes": 192,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-05T15:19:00.000-03:00",
    "updatedAt": "2025-10-05T15:19:00.000-03:00"
  },
  {
    "id": "res-138",
    "tableId": "table-19",
    "customer": {
      "name": "David Jiménez Espinoza",
      "phone": "+54-11-5555-6666",
      "email": "davidjiménezespinoza@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-03T15:30:00.000-03:00",
    "endTime": "2025-10-03T16:56:00.000-03:00",
    "durationMinutes": 86,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-03T13:38:00.000-03:00",
    "updatedAt": "2025-10-03T17:38:00.000-03:00"
  },
  {
    "id": "res-139",
    "tableId": "table-12",
    "customer": {
      "name": "Sebastián Vega Pérez",
      "phone": "+54-11-9012-3456",
      "email": "sebastiánvegapérez@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T11:00:00.000-03:00",
    "endTime": "2025-10-17T13:28:00.000-03:00",
    "durationMinutes": 148,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-17T21:34:00.000-03:00",
    "updatedAt": "2025-10-17T21:34:00.000-03:00"
  },
  {
    "id": "res-140",
    "tableId": "table-21",
    "customer": {
      "name": "Sandra Vega Torres",
      "phone": "+54-11-9090-1212",
      "email": "sandravegatorres@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-03T22:00:00.000-03:00",
    "endTime": "2025-10-04T00:50:00.000-03:00",
    "durationMinutes": 170,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-03T13:52:00.000-03:00",
    "updatedAt": "2025-10-03T13:52:00.000-03:00"
  },
  {
    "id": "res-141",
    "tableId": "table-30",
    "customer": {
      "name": "Francisco Martín Peña",
      "phone": "+54-11-9012-3456",
      "email": "franciscomartínpeña@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-05T14:30:00.000-03:00",
    "endTime": "2025-10-05T16:15:00.000-03:00",
    "durationMinutes": 105,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-05T20:59:00.000-03:00",
    "updatedAt": "2025-10-05T20:59:00.000-03:00"
  },
  {
    "id": "res-142",
    "tableId": "table-17",
    "customer": {
      "name": "David Jiménez Espinoza",
      "phone": "+54-11-8901-2345",
      "email": "davidjiménezespinoza@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-25T20:00:00.000-03:00",
    "endTime": "2025-10-25T21:15:00.000-03:00",
    "durationMinutes": 75,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-25T15:33:00.000-03:00",
    "updatedAt": "2025-10-25T15:33:00.000-03:00"
  },
  {
    "id": "res-143",
    "tableId": "table-22",
    "customer": {
      "name": "José Martínez Martín",
      "phone": "+54-11-6767-8989",
      "email": "josémartínezmartín@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T18:00:00.000-03:00",
    "endTime": "2025-10-19T21:10:00.000-03:00",
    "durationMinutes": 190,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T15:07:00.000-03:00",
    "updatedAt": "2025-10-19T15:07:00.000-03:00"
  },
  {
    "id": "res-144",
    "tableId": "table-21",
    "customer": {
      "name": "Claudia Medina Silva",
      "phone": "+54-11-4567-8901",
      "email": "claudiamedinasilva@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T10:00:00.000-03:00",
    "endTime": "2025-10-10T11:01:00.000-03:00",
    "durationMinutes": 61,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-10T15:11:00.000-03:00",
    "updatedAt": "2025-10-10T17:11:00.000-03:00"
  },
  {
    "id": "res-145",
    "tableId": "table-4",
    "customer": {
      "name": "Pablo Delgado González",
      "phone": "+54-11-5678-9012",
      "email": "pablodelgadogonzález@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T12:00:00.000-03:00",
    "endTime": "2025-10-11T14:11:00.000-03:00",
    "durationMinutes": 131,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-11T15:46:00.000-03:00",
    "updatedAt": "2025-10-11T15:46:00.000-03:00"
  },
  {
    "id": "res-146",
    "tableId": "table-18",
    "customer": {
      "name": "Sebastián Vega Aguilar",
      "phone": "+54-11-1212-3434",
      "email": "sebastiánvegaaguilar@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T21:00:00.000-03:00",
    "endTime": "2025-10-19T00:10:00.000-03:00",
    "durationMinutes": 190,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-18T12:27:00.000-03:00",
    "updatedAt": "2025-10-18T16:27:00.000-03:00"
  },
  {
    "id": "res-147",
    "tableId": "table-13",
    "customer": {
      "name": "Alejandro Castro Rodríguez",
      "phone": "+54-11-5678-9012",
      "email": "alejandrocastrorodríguez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T20:00:00.000-03:00",
    "endTime": "2025-10-17T22:17:00.000-03:00",
    "durationMinutes": 137,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-17T21:06:00.000-03:00",
    "updatedAt": "2025-10-17T23:06:00.000-03:00"
  },
  {
    "id": "res-148",
    "tableId": "table-16",
    "customer": {
      "name": "Elena Moreno Moreno",
      "phone": "+54-11-4567-8901",
      "email": "elenamorenomoreno@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T22:00:00.000-03:00",
    "endTime": "2025-10-25T00:29:00.000-03:00",
    "durationMinutes": 149,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T14:31:00.000-03:00",
    "updatedAt": "2025-10-24T14:31:00.000-03:00"
  },
  {
    "id": "res-149",
    "tableId": "table-5",
    "customer": {
      "name": "Mónica Flores Vega",
      "phone": "+54-11-4567-8901",
      "email": "mónicafloresvega@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T21:00:00.000-03:00",
    "endTime": "2025-10-24T22:31:00.000-03:00",
    "durationMinutes": 91,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T18:14:00.000-03:00",
    "updatedAt": "2025-10-24T18:14:00.000-03:00"
  },
  {
    "id": "res-150",
    "tableId": "table-3",
    "customer": {
      "name": "Francisco Martín Espinoza",
      "phone": "+54-11-5678-9012",
      "email": "franciscomartínespinoza@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-15T15:00:00.000-03:00",
    "endTime": "2025-10-15T17:29:00.000-03:00",
    "durationMinutes": 149,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-15T15:45:00.000-03:00",
    "updatedAt": "2025-10-15T15:45:00.000-03:00"
  },
  {
    "id": "res-151",
    "tableId": "table-30",
    "customer": {
      "name": "David Jiménez Herrera",
      "phone": "+54-11-1212-3434",
      "email": "davidjiménezherrera@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T19:00:00.000-03:00",
    "endTime": "2025-10-17T20:15:00.000-03:00",
    "durationMinutes": 75,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-17T16:10:00.000-03:00",
    "updatedAt": "2025-10-17T18:10:00.000-03:00"
  },
  {
    "id": "res-152",
    "tableId": "table-15",
    "customer": {
      "name": "Carlos López Moreno",
      "phone": "+54-11-6789-0123",
      "email": "carloslópezmoreno@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T18:00:00.000-03:00",
    "endTime": "2025-10-10T21:07:00.000-03:00",
    "durationMinutes": 187,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-10T14:47:00.000-03:00",
    "updatedAt": "2025-10-10T18:47:00.000-03:00"
  },
  {
    "id": "res-153",
    "tableId": "table-13",
    "customer": {
      "name": "Sofia Reyes Romero",
      "phone": "+54-11-3456-7890",
      "email": "sofiareyesromero@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-18T12:00:00.000-03:00",
    "endTime": "2025-10-18T15:16:00.000-03:00",
    "durationMinutes": 196,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-18T21:58:00.000-03:00",
    "updatedAt": "2025-10-18T21:58:00.000-03:00"
  },
  {
    "id": "res-154",
    "tableId": "table-11",
    "customer": {
      "name": "Ana García Ortega",
      "phone": "+54-11-9999-0000",
      "email": "anagarcíaortega@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T17:00:00.000-03:00",
    "endTime": "2025-10-26T20:26:00.000-03:00",
    "durationMinutes": 206,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-26T18:33:00.000-03:00",
    "updatedAt": "2025-10-26T18:33:00.000-03:00"
  },
  {
    "id": "res-155",
    "tableId": "table-27",
    "customer": {
      "name": "Francisco Martín Pérez",
      "phone": "+54-11-1234-5678",
      "email": "franciscomartínpérez@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-29T17:00:00.000-03:00",
    "endTime": "2025-10-29T20:25:00.000-03:00",
    "durationMinutes": 205,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-29T19:04:00.000-03:00",
    "updatedAt": "2025-10-29T20:04:00.000-03:00"
  },
  {
    "id": "res-156",
    "tableId": "table-7",
    "customer": {
      "name": "Isabel Díaz Serrano",
      "phone": "+54-11-8901-2345",
      "email": "isabeldíazserrano@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T16:30:00.000-03:00",
    "endTime": "2025-10-04T18:14:00.000-03:00",
    "durationMinutes": 104,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-04T17:12:00.000-03:00",
    "updatedAt": "2025-10-04T17:12:00.000-03:00"
  },
  {
    "id": "res-157",
    "tableId": "table-1",
    "customer": {
      "name": "Fernando Ramos Guerrero",
      "phone": "+54-11-5678-9012",
      "email": "fernandoramosguerrero@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-25T13:00:00.000-03:00",
    "endTime": "2025-10-25T15:51:00.000-03:00",
    "durationMinutes": 171,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-25T11:06:00.000-03:00",
    "updatedAt": "2025-10-25T11:06:00.000-03:00"
  },
  {
    "id": "res-158",
    "tableId": "table-27",
    "customer": {
      "name": "Fernando Ramos Herrera",
      "phone": "+54-11-6789-0123",
      "email": "fernandoramosherrera@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-26T17:30:00.000-03:00",
    "endTime": "2025-10-26T20:01:00.000-03:00",
    "durationMinutes": 151,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-26T16:17:00.000-03:00",
    "updatedAt": "2025-10-26T19:17:00.000-03:00"
  },
  {
    "id": "res-159",
    "tableId": "table-7",
    "customer": {
      "name": "Natalia Ortega Flores",
      "phone": "+54-11-5555-6666",
      "email": "nataliaortegaflores@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-26T15:00:00.000-03:00",
    "endTime": "2025-10-26T17:37:00.000-03:00",
    "durationMinutes": 157,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-26T17:36:00.000-03:00",
    "updatedAt": "2025-10-26T20:36:00.000-03:00"
  },
  {
    "id": "res-160",
    "tableId": "table-26",
    "customer": {
      "name": "Elena Moreno García",
      "phone": "+54-11-4567-8901",
      "email": "elenamorenogarcía@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-15T18:30:00.000-03:00",
    "endTime": "2025-10-15T19:56:00.000-03:00",
    "durationMinutes": 86,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-15T13:46:00.000-03:00",
    "updatedAt": "2025-10-15T13:46:00.000-03:00"
  },
  {
    "id": "res-161",
    "tableId": "table-28",
    "customer": {
      "name": "Cristina Romero Sánchez",
      "phone": "+54-11-9090-1212",
      "email": "cristinaromerosánchez@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-17T13:30:00.000-03:00",
    "endTime": "2025-10-17T14:41:00.000-03:00",
    "durationMinutes": 71,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-17T17:29:00.000-03:00",
    "updatedAt": "2025-10-17T17:29:00.000-03:00"
  },
  {
    "id": "res-162",
    "tableId": "table-23",
    "customer": {
      "name": "Laura Sánchez Ortega",
      "phone": "+54-11-7777-8888",
      "email": "laurasánchezortega@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-01T21:30:00.000-03:00",
    "endTime": "2025-10-01T22:44:00.000-03:00",
    "durationMinutes": 74,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-01T20:17:00.000-03:00",
    "updatedAt": "2025-10-01T20:17:00.000-03:00"
  },
  {
    "id": "res-163",
    "tableId": "table-10",
    "customer": {
      "name": "Teresa Molina Molina",
      "phone": "+54-11-1111-2222",
      "email": "teresamolinamolina@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T13:30:00.000-03:00",
    "endTime": "2025-10-17T15:13:00.000-03:00",
    "durationMinutes": 103,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-17T12:24:00.000-03:00",
    "updatedAt": "2025-10-17T12:24:00.000-03:00"
  },
  {
    "id": "res-164",
    "tableId": "table-11",
    "customer": {
      "name": "José Martínez Jiménez",
      "phone": "+54-11-9090-1212",
      "email": "josémartínezjiménez@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T21:30:00.000-03:00",
    "endTime": "2025-10-23T23:28:00.000-03:00",
    "durationMinutes": 118,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-23T12:06:00.000-03:00",
    "updatedAt": "2025-10-23T14:06:00.000-03:00"
  },
  {
    "id": "res-165",
    "tableId": "table-15",
    "customer": {
      "name": "Patricia Navarro Ortega",
      "phone": "+54-11-6767-8989",
      "email": "patricianavarroortega@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T19:00:00.000-03:00",
    "endTime": "2025-10-11T21:56:00.000-03:00",
    "durationMinutes": 176,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-11T19:08:00.000-03:00",
    "updatedAt": "2025-10-11T19:08:00.000-03:00"
  },
  {
    "id": "res-166",
    "tableId": "table-6",
    "customer": {
      "name": "Nicolás Fuentes Morales",
      "phone": "+54-11-4567-8901",
      "email": "nicolásfuentesmorales@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-26T11:00:00.000-03:00",
    "endTime": "2025-10-26T14:25:00.000-03:00",
    "durationMinutes": 205,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-26T17:52:00.000-03:00",
    "updatedAt": "2025-10-26T19:52:00.000-03:00"
  },
  {
    "id": "res-167",
    "tableId": "table-19",
    "customer": {
      "name": "Lucía Morales Fuentes",
      "phone": "+54-11-8901-2345",
      "email": "lucíamoralesfuentes@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T18:30:00.000-03:00",
    "endTime": "2025-10-18T21:08:00.000-03:00",
    "durationMinutes": 158,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-18T16:21:00.000-03:00",
    "updatedAt": "2025-10-18T16:21:00.000-03:00"
  },
  {
    "id": "res-168",
    "tableId": "table-14",
    "customer": {
      "name": "Sofia Reyes Ortega",
      "phone": "+54-11-3456-7890",
      "email": "sofiareyesortega@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-09-30T22:30:00.000-03:00",
    "endTime": "2025-10-01T01:33:00.000-03:00",
    "durationMinutes": 183,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-09-30T15:39:00.000-03:00",
    "updatedAt": "2025-09-30T16:39:00.000-03:00"
  },
  {
    "id": "res-169",
    "tableId": "table-3",
    "customer": {
      "name": "Nicolás Fuentes Rojas",
      "phone": "+54-11-5678-9012",
      "email": "nicolásfuentesrojas@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-08T21:30:00.000-03:00",
    "endTime": "2025-10-08T23:14:00.000-03:00",
    "durationMinutes": 104,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-08T15:01:00.000-03:00",
    "updatedAt": "2025-10-08T15:01:00.000-03:00"
  },
  {
    "id": "res-170",
    "tableId": "table-27",
    "customer": {
      "name": "Pablo Delgado Martín",
      "phone": "+54-11-1313-4545",
      "email": "pablodelgadomartín@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T14:30:00.000-03:00",
    "endTime": "2025-10-18T17:09:00.000-03:00",
    "durationMinutes": 159,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-18T15:11:00.000-03:00",
    "updatedAt": "2025-10-18T15:11:00.000-03:00"
  },
  {
    "id": "res-171",
    "tableId": "table-8",
    "customer": {
      "name": "Carlos López Campos",
      "phone": "+54-11-5555-6666",
      "email": "carloslópezcampos@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T17:30:00.000-03:00",
    "endTime": "2025-10-17T18:54:00.000-03:00",
    "durationMinutes": 84,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-17T21:13:00.000-03:00",
    "updatedAt": "2025-10-17T21:13:00.000-03:00"
  },
  {
    "id": "res-172",
    "tableId": "table-29",
    "customer": {
      "name": "Sergio Peña Medina",
      "phone": "+54-11-3333-4444",
      "email": "sergiopeñamedina@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T16:30:00.000-03:00",
    "endTime": "2025-10-11T17:33:00.000-03:00",
    "durationMinutes": 63,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-11T16:58:00.000-03:00",
    "updatedAt": "2025-10-11T18:58:00.000-03:00"
  },
  {
    "id": "res-173",
    "tableId": "table-29",
    "customer": {
      "name": "Adrián Cabrera Vega",
      "phone": "+54-11-6767-8989",
      "email": "adriáncabreravega@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-10T15:30:00.000-03:00",
    "endTime": "2025-10-10T18:13:00.000-03:00",
    "durationMinutes": 163,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-10T12:55:00.000-03:00",
    "updatedAt": "2025-10-10T12:55:00.000-03:00"
  },
  {
    "id": "res-174",
    "tableId": "table-22",
    "customer": {
      "name": "Valeria Silva Mendoza",
      "phone": "+54-11-6789-0123",
      "email": "valeriasilvamendoza@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T20:00:00.000-03:00",
    "endTime": "2025-10-18T22:39:00.000-03:00",
    "durationMinutes": 159,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-18T15:09:00.000-03:00",
    "updatedAt": "2025-10-18T15:09:00.000-03:00"
  },
  {
    "id": "res-175",
    "tableId": "table-5",
    "customer": {
      "name": "Miguel González Rodríguez",
      "phone": "+54-11-1212-3434",
      "email": "miguelgonzálezrodríguez@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-04T14:00:00.000-03:00",
    "endTime": "2025-10-04T15:49:00.000-03:00",
    "durationMinutes": 109,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-04T13:03:00.000-03:00",
    "updatedAt": "2025-10-04T13:03:00.000-03:00"
  },
  {
    "id": "res-176",
    "tableId": "table-19",
    "customer": {
      "name": "Andrea Mendoza Vega",
      "phone": "+54-11-7890-1234",
      "email": "andreamendozavega@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T16:30:00.000-03:00",
    "endTime": "2025-10-24T18:16:00.000-03:00",
    "durationMinutes": 106,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T11:53:00.000-03:00",
    "updatedAt": "2025-10-24T11:53:00.000-03:00"
  },
  {
    "id": "res-177",
    "tableId": "table-19",
    "customer": {
      "name": "Fernando Ramos Campos",
      "phone": "+54-11-8901-2345",
      "email": "fernandoramoscampos@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-25T20:30:00.000-03:00",
    "endTime": "2025-10-25T21:48:00.000-03:00",
    "durationMinutes": 78,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-25T17:02:00.000-03:00",
    "updatedAt": "2025-10-25T18:02:00.000-03:00"
  },
  {
    "id": "res-178",
    "tableId": "table-6",
    "customer": {
      "name": "Miguel González López",
      "phone": "+54-11-1111-2222",
      "email": "miguelgonzálezlópez@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-05T19:00:00.000-03:00",
    "endTime": "2025-10-05T20:34:00.000-03:00",
    "durationMinutes": 94,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-05T14:32:00.000-03:00",
    "updatedAt": "2025-10-05T17:32:00.000-03:00"
  },
  {
    "id": "res-179",
    "tableId": "table-15",
    "customer": {
      "name": "Sandra Vega Silva",
      "phone": "+54-11-7890-1234",
      "email": "sandravegasilva@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T11:30:00.000-03:00",
    "endTime": "2025-10-11T14:26:00.000-03:00",
    "durationMinutes": 176,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-11T21:56:00.000-03:00",
    "updatedAt": "2025-10-12T00:56:00.000-03:00"
  },
  {
    "id": "res-180",
    "tableId": "table-16",
    "customer": {
      "name": "Valeria Silva Moreno",
      "phone": "+54-11-5555-6666",
      "email": "valeriasilvamoreno@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-25T11:30:00.000-03:00",
    "endTime": "2025-10-25T14:55:00.000-03:00",
    "durationMinutes": 205,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-25T16:51:00.000-03:00",
    "updatedAt": "2025-10-25T16:51:00.000-03:00"
  },
  {
    "id": "res-181",
    "tableId": "table-21",
    "customer": {
      "name": "Beatriz Guerrero López",
      "phone": "+54-11-0123-4567",
      "email": "beatrizguerrerolópez@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T15:00:00.000-03:00",
    "endTime": "2025-10-17T16:39:00.000-03:00",
    "durationMinutes": 99,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-17T13:16:00.000-03:00",
    "updatedAt": "2025-10-17T17:16:00.000-03:00"
  },
  {
    "id": "res-182",
    "tableId": "table-16",
    "customer": {
      "name": "Alejandro Castro Herrera",
      "phone": "+54-11-2345-6789",
      "email": "alejandrocastroherrera@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-01T10:30:00.000-03:00",
    "endTime": "2025-10-01T11:41:00.000-03:00",
    "durationMinutes": 71,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-01T13:00:00.000-03:00",
    "updatedAt": "2025-10-01T15:00:00.000-03:00"
  },
  {
    "id": "res-183",
    "tableId": "table-10",
    "customer": {
      "name": "Raquel Vargas Sánchez",
      "phone": "+54-11-7777-8888",
      "email": "raquelvargassánchez@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-29T21:30:00.000-03:00",
    "endTime": "2025-10-29T23:50:00.000-03:00",
    "durationMinutes": 140,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-29T17:34:00.000-03:00",
    "updatedAt": "2025-10-29T17:34:00.000-03:00"
  },
  {
    "id": "res-184",
    "tableId": "table-11",
    "customer": {
      "name": "Antonio Ruiz Herrera",
      "phone": "+54-11-2345-6789",
      "email": "antonioruizherrera@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-26T10:00:00.000-03:00",
    "endTime": "2025-10-26T11:58:00.000-03:00",
    "durationMinutes": 118,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-26T12:37:00.000-03:00",
    "updatedAt": "2025-10-26T12:37:00.000-03:00"
  },
  {
    "id": "res-185",
    "tableId": "table-27",
    "customer": {
      "name": "Isabel Díaz Vega",
      "phone": "+54-11-5656-7878",
      "email": "isabeldíazvega@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T18:00:00.000-03:00",
    "endTime": "2025-10-24T19:32:00.000-03:00",
    "durationMinutes": 92,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-24T18:55:00.000-03:00",
    "updatedAt": "2025-10-24T18:55:00.000-03:00"
  },
  {
    "id": "res-186",
    "tableId": "table-26",
    "customer": {
      "name": "Gabriel Rojas Campos",
      "phone": "+54-11-7777-8888",
      "email": "gabrielrojascampos@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T12:30:00.000-03:00",
    "endTime": "2025-10-10T13:47:00.000-03:00",
    "durationMinutes": 77,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-10T20:58:00.000-03:00",
    "updatedAt": "2025-10-10T20:58:00.000-03:00"
  },
  {
    "id": "res-187",
    "tableId": "table-2",
    "customer": {
      "name": "Cristina Romero García",
      "phone": "+54-11-2345-6789",
      "email": "cristinaromerogarcía@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T15:30:00.000-03:00",
    "endTime": "2025-10-20T17:55:00.000-03:00",
    "durationMinutes": 145,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-20T16:00:00.000-03:00",
    "updatedAt": "2025-10-20T18:00:00.000-03:00"
  },
  {
    "id": "res-188",
    "tableId": "table-13",
    "customer": {
      "name": "Carmen Pérez Espinoza",
      "phone": "+54-11-2345-6789",
      "email": "carmenpérezespinoza@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-12T11:30:00.000-03:00",
    "endTime": "2025-10-12T14:12:00.000-03:00",
    "durationMinutes": 162,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-12T22:55:00.000-03:00",
    "updatedAt": "2025-10-12T22:55:00.000-03:00"
  },
  {
    "id": "res-189",
    "tableId": "table-6",
    "customer": {
      "name": "Mónica Flores López",
      "phone": "+54-11-5656-7878",
      "email": "mónicafloreslópez@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T21:00:00.000-03:00",
    "endTime": "2025-10-10T22:02:00.000-03:00",
    "durationMinutes": 62,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-10T14:16:00.000-03:00",
    "updatedAt": "2025-10-10T18:16:00.000-03:00"
  },
  {
    "id": "res-190",
    "tableId": "table-11",
    "customer": {
      "name": "Andrea Mendoza Cabrera",
      "phone": "+54-11-3456-7890",
      "email": "andreamendozacabrera@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-07T14:30:00.000-03:00",
    "endTime": "2025-10-07T17:51:00.000-03:00",
    "durationMinutes": 201,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-07T17:27:00.000-03:00",
    "updatedAt": "2025-10-07T17:27:00.000-03:00"
  },
  {
    "id": "res-191",
    "tableId": "table-11",
    "customer": {
      "name": "Daniel Campos Morales",
      "phone": "+54-11-7777-8888",
      "email": "danielcamposmorales@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-07T13:00:00.000-03:00",
    "endTime": "2025-10-07T14:27:00.000-03:00",
    "durationMinutes": 87,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-07T16:24:00.000-03:00",
    "updatedAt": "2025-10-07T16:24:00.000-03:00"
  },
  {
    "id": "res-192",
    "tableId": "table-16",
    "customer": {
      "name": "Sandra Vega Fuentes",
      "phone": "+54-11-9999-0000",
      "email": "sandravegafuentes@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-29T14:00:00.000-03:00",
    "endTime": "2025-10-29T15:08:00.000-03:00",
    "durationMinutes": 68,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-29T18:03:00.000-03:00",
    "updatedAt": "2025-10-29T18:03:00.000-03:00"
  },
  {
    "id": "res-193",
    "tableId": "table-22",
    "customer": {
      "name": "Francisco Martín Reyes",
      "phone": "+54-11-7890-1234",
      "email": "franciscomartínreyes@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T14:30:00.000-03:00",
    "endTime": "2025-10-25T16:45:00.000-03:00",
    "durationMinutes": 135,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-25T15:33:00.000-03:00",
    "updatedAt": "2025-10-25T15:33:00.000-03:00"
  },
  {
    "id": "res-194",
    "tableId": "table-18",
    "customer": {
      "name": "Javier Torres Medina",
      "phone": "+54-11-6767-8989",
      "email": "javiertorresmedina@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-01T17:00:00.000-03:00",
    "endTime": "2025-10-01T20:04:00.000-03:00",
    "durationMinutes": 184,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-01T19:39:00.000-03:00",
    "updatedAt": "2025-10-01T22:39:00.000-03:00"
  },
  {
    "id": "res-195",
    "tableId": "table-25",
    "customer": {
      "name": "Alejandro Castro Navarro",
      "phone": "+54-11-3456-7890",
      "email": "alejandrocastronavarro@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-25T22:30:00.000-03:00",
    "endTime": "2025-10-26T01:45:00.000-03:00",
    "durationMinutes": 195,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-25T20:02:00.000-03:00",
    "updatedAt": "2025-10-25T22:02:00.000-03:00"
  },
  {
    "id": "res-196",
    "tableId": "table-25",
    "customer": {
      "name": "Pablo Delgado García",
      "phone": "+54-11-1212-3434",
      "email": "pablodelgadogarcía@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-15T13:30:00.000-03:00",
    "endTime": "2025-10-15T15:24:00.000-03:00",
    "durationMinutes": 114,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-15T21:36:00.000-03:00",
    "updatedAt": "2025-10-15T21:36:00.000-03:00"
  },
  {
    "id": "res-197",
    "tableId": "table-3",
    "customer": {
      "name": "Hugo Aguilar Martínez",
      "phone": "+54-11-9090-1212",
      "email": "hugoaguilarmartínez@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T18:00:00.000-03:00",
    "endTime": "2025-10-23T20:17:00.000-03:00",
    "durationMinutes": 137,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-23T14:17:00.000-03:00",
    "updatedAt": "2025-10-23T18:17:00.000-03:00"
  },
  {
    "id": "res-198",
    "tableId": "table-27",
    "customer": {
      "name": "Nicolás Fuentes Morales",
      "phone": "+54-11-1313-4545",
      "email": "nicolásfuentesmorales@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T21:00:00.000-03:00",
    "endTime": "2025-10-23T22:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T12:55:00.000-03:00",
    "updatedAt": "2025-10-23T12:55:00.000-03:00"
  },
  {
    "id": "res-199",
    "tableId": "table-24",
    "customer": {
      "name": "Carlos López Castro",
      "phone": "+54-11-6789-0123",
      "email": "carloslópezcastro@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-13T17:00:00.000-03:00",
    "endTime": "2025-10-13T18:31:00.000-03:00",
    "durationMinutes": 91,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-13T11:30:00.000-03:00",
    "updatedAt": "2025-10-13T11:30:00.000-03:00"
  },
  {
    "id": "res-200",
    "tableId": "table-17",
    "customer": {
      "name": "Miguel González Morales",
      "phone": "+54-11-3456-7890",
      "email": "miguelgonzálezmorales@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-19T20:00:00.000-03:00",
    "endTime": "2025-10-19T22:34:00.000-03:00",
    "durationMinutes": 154,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-19T16:55:00.000-03:00",
    "updatedAt": "2025-10-19T16:55:00.000-03:00"
  },
  {
    "id": "res-201",
    "tableId": "table-10",
    "customer": {
      "name": "Beatriz Guerrero Vega",
      "phone": "+54-11-0123-4567",
      "email": "beatrizguerrerovega@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T14:30:00.000-03:00",
    "endTime": "2025-10-18T16:54:00.000-03:00",
    "durationMinutes": 144,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-18T19:18:00.000-03:00",
    "updatedAt": "2025-10-18T22:18:00.000-03:00"
  },
  {
    "id": "res-202",
    "tableId": "table-11",
    "customer": {
      "name": "José Martínez Peña",
      "phone": "+54-11-3333-4444",
      "email": "josémartínezpeña@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T10:30:00.000-03:00",
    "endTime": "2025-10-25T13:16:00.000-03:00",
    "durationMinutes": 166,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-25T16:56:00.000-03:00",
    "updatedAt": "2025-10-25T16:56:00.000-03:00"
  },
  {
    "id": "res-203",
    "tableId": "table-26",
    "customer": {
      "name": "Natalia Ortega Herrera",
      "phone": "+54-11-3456-7890",
      "email": "nataliaortegaherrera@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-06T11:00:00.000-03:00",
    "endTime": "2025-10-06T12:46:00.000-03:00",
    "durationMinutes": 106,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-06T13:21:00.000-03:00",
    "updatedAt": "2025-10-06T15:21:00.000-03:00"
  },
  {
    "id": "res-204",
    "tableId": "table-29",
    "customer": {
      "name": "Claudia Medina Silva",
      "phone": "+54-11-9012-3456",
      "email": "claudiamedinasilva@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T13:00:00.000-03:00",
    "endTime": "2025-10-10T14:23:00.000-03:00",
    "durationMinutes": 83,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-10T18:24:00.000-03:00",
    "updatedAt": "2025-10-10T18:24:00.000-03:00"
  },
  {
    "id": "res-205",
    "tableId": "table-17",
    "customer": {
      "name": "Valeria Silva Morales",
      "phone": "+54-11-5555-6666",
      "email": "valeriasilvamorales@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-02T17:00:00.000-03:00",
    "endTime": "2025-10-02T18:13:00.000-03:00",
    "durationMinutes": 73,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-02T12:33:00.000-03:00",
    "updatedAt": "2025-10-02T12:33:00.000-03:00"
  },
  {
    "id": "res-206",
    "tableId": "table-10",
    "customer": {
      "name": "Sandra Vega Campos",
      "phone": "+54-11-2345-6789",
      "email": "sandravegacampos@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-25T14:30:00.000-03:00",
    "endTime": "2025-10-25T18:00:00.000-03:00",
    "durationMinutes": 210,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-25T21:31:00.000-03:00",
    "updatedAt": "2025-10-25T21:31:00.000-03:00"
  },
  {
    "id": "res-207",
    "tableId": "table-23",
    "customer": {
      "name": "Raquel Vargas Silva",
      "phone": "+54-11-3333-4444",
      "email": "raquelvargassilva@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T13:00:00.000-03:00",
    "endTime": "2025-10-10T16:11:00.000-03:00",
    "durationMinutes": 191,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-10T12:26:00.000-03:00",
    "updatedAt": "2025-10-10T12:26:00.000-03:00"
  },
  {
    "id": "res-208",
    "tableId": "table-6",
    "customer": {
      "name": "Francisco Martín García",
      "phone": "+54-11-7777-8888",
      "email": "franciscomartíngarcía@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-07T16:30:00.000-03:00",
    "endTime": "2025-10-07T17:36:00.000-03:00",
    "durationMinutes": 66,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-07T21:50:00.000-03:00",
    "updatedAt": "2025-10-07T21:50:00.000-03:00"
  },
  {
    "id": "res-209",
    "tableId": "table-28",
    "customer": {
      "name": "Adrián Cabrera García",
      "phone": "+54-11-6767-8989",
      "email": "adriáncabreragarcía@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T20:30:00.000-03:00",
    "endTime": "2025-10-24T22:59:00.000-03:00",
    "durationMinutes": 149,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T12:56:00.000-03:00",
    "updatedAt": "2025-10-24T12:56:00.000-03:00"
  },
  {
    "id": "res-210",
    "tableId": "table-20",
    "customer": {
      "name": "José Martínez García",
      "phone": "+54-11-9999-0000",
      "email": "josémartínezgarcía@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T16:00:00.000-03:00",
    "endTime": "2025-10-10T17:06:00.000-03:00",
    "durationMinutes": 66,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-10T11:38:00.000-03:00",
    "updatedAt": "2025-10-10T11:38:00.000-03:00"
  },
  {
    "id": "res-211",
    "tableId": "table-26",
    "customer": {
      "name": "Daniel Campos Peña",
      "phone": "+54-11-7777-8888",
      "email": "danielcampospeña@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-05T17:30:00.000-03:00",
    "endTime": "2025-10-05T19:05:00.000-03:00",
    "durationMinutes": 95,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-05T11:05:00.000-03:00",
    "updatedAt": "2025-10-05T11:05:00.000-03:00"
  },
  {
    "id": "res-212",
    "tableId": "table-23",
    "customer": {
      "name": "Sofia Reyes Martínez",
      "phone": "+54-11-7890-1234",
      "email": "sofiareyesmartínez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T22:30:00.000-03:00",
    "endTime": "2025-10-12T00:58:00.000-03:00",
    "durationMinutes": 148,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-11T12:46:00.000-03:00",
    "updatedAt": "2025-10-11T12:46:00.000-03:00"
  },
  {
    "id": "res-213",
    "tableId": "table-6",
    "customer": {
      "name": "Cristina Romero Mendoza",
      "phone": "+54-11-1234-5678",
      "email": "cristinaromeromendoza@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-29T11:00:00.000-03:00",
    "endTime": "2025-10-29T12:50:00.000-03:00",
    "durationMinutes": 110,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-29T17:46:00.000-03:00",
    "updatedAt": "2025-10-29T17:46:00.000-03:00"
  },
  {
    "id": "res-214",
    "tableId": "table-2",
    "customer": {
      "name": "Sofia Reyes Romero",
      "phone": "+54-11-9090-1212",
      "email": "sofiareyesromero@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T19:30:00.000-03:00",
    "endTime": "2025-10-18T21:20:00.000-03:00",
    "durationMinutes": 110,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-18T17:14:00.000-03:00",
    "updatedAt": "2025-10-18T17:14:00.000-03:00"
  },
  {
    "id": "res-215",
    "tableId": "table-19",
    "customer": {
      "name": "Claudia Medina Campos",
      "phone": "+54-11-2345-6789",
      "email": "claudiamedinacampos@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T18:30:00.000-03:00",
    "endTime": "2025-10-04T20:13:00.000-03:00",
    "durationMinutes": 103,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-04T16:50:00.000-03:00",
    "updatedAt": "2025-10-04T20:50:00.000-03:00"
  },
  {
    "id": "res-216",
    "tableId": "table-12",
    "customer": {
      "name": "Sebastián Vega Medina",
      "phone": "+54-11-3333-4444",
      "email": "sebastiánvegamedina@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-12T18:00:00.000-03:00",
    "endTime": "2025-10-12T19:49:00.000-03:00",
    "durationMinutes": 109,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-12T19:33:00.000-03:00",
    "updatedAt": "2025-10-12T23:33:00.000-03:00"
  },
  {
    "id": "res-217",
    "tableId": "table-3",
    "customer": {
      "name": "Álvaro Serrano Moreno",
      "phone": "+54-11-5555-6666",
      "email": "álvaroserranomoreno@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T21:30:00.000-03:00",
    "endTime": "2025-10-11T00:39:00.000-03:00",
    "durationMinutes": 189,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-10T18:15:00.000-03:00",
    "updatedAt": "2025-10-10T18:15:00.000-03:00"
  },
  {
    "id": "res-218",
    "tableId": "table-19",
    "customer": {
      "name": "Fernando Ramos Herrera",
      "phone": "+54-11-5555-6666",
      "email": "fernandoramosherrera@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-12T22:00:00.000-03:00",
    "endTime": "2025-10-13T00:11:00.000-03:00",
    "durationMinutes": 131,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-12T18:35:00.000-03:00",
    "updatedAt": "2025-10-12T18:35:00.000-03:00"
  },
  {
    "id": "res-219",
    "tableId": "table-18",
    "customer": {
      "name": "Sofia Reyes Ruiz",
      "phone": "+54-11-3333-4444",
      "email": "sofiareyesruiz@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T10:30:00.000-03:00",
    "endTime": "2025-10-18T13:09:00.000-03:00",
    "durationMinutes": 159,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-18T11:23:00.000-03:00",
    "updatedAt": "2025-10-18T11:23:00.000-03:00"
  },
  {
    "id": "res-220",
    "tableId": "table-17",
    "customer": {
      "name": "Elena Moreno Medina",
      "phone": "+54-11-5555-6666",
      "email": "elenamorenomedina@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-15T18:00:00.000-03:00",
    "endTime": "2025-10-15T19:19:00.000-03:00",
    "durationMinutes": 79,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-15T11:40:00.000-03:00",
    "updatedAt": "2025-10-15T11:40:00.000-03:00"
  },
  {
    "id": "res-221",
    "tableId": "table-4",
    "customer": {
      "name": "Roberto Herrera Reyes",
      "phone": "+54-11-9999-0000",
      "email": "robertoherrerareyes@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T15:00:00.000-03:00",
    "endTime": "2025-10-26T18:08:00.000-03:00",
    "durationMinutes": 188,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-26T13:10:00.000-03:00",
    "updatedAt": "2025-10-26T13:10:00.000-03:00"
  },
  {
    "id": "res-222",
    "tableId": "table-25",
    "customer": {
      "name": "Daniel Campos García",
      "phone": "+54-11-6767-8989",
      "email": "danielcamposgarcía@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-19T13:00:00.000-03:00",
    "endTime": "2025-10-19T14:20:00.000-03:00",
    "durationMinutes": 80,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-19T17:49:00.000-03:00",
    "updatedAt": "2025-10-19T17:49:00.000-03:00"
  },
  {
    "id": "res-223",
    "tableId": "table-12",
    "customer": {
      "name": "Daniel Campos Vega",
      "phone": "+54-11-3456-7890",
      "email": "danielcamposvega@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T17:00:00.000-03:00",
    "endTime": "2025-10-10T19:47:00.000-03:00",
    "durationMinutes": 167,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-10T13:21:00.000-03:00",
    "updatedAt": "2025-10-10T14:21:00.000-03:00"
  },
  {
    "id": "res-224",
    "tableId": "table-19",
    "customer": {
      "name": "Roberto Herrera Espinoza",
      "phone": "+54-11-7890-1234",
      "email": "robertoherreraespinoza@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T21:30:00.000-03:00",
    "endTime": "2025-10-22T22:37:00.000-03:00",
    "durationMinutes": 67,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-22T18:45:00.000-03:00",
    "updatedAt": "2025-10-22T18:45:00.000-03:00"
  },
  {
    "id": "res-225",
    "tableId": "table-6",
    "customer": {
      "name": "Camila Espinoza Fuentes",
      "phone": "+54-11-3456-7890",
      "email": "camilaespinozafuentes@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-01T10:30:00.000-03:00",
    "endTime": "2025-10-01T13:27:00.000-03:00",
    "durationMinutes": 177,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-01T17:17:00.000-03:00",
    "updatedAt": "2025-10-01T17:17:00.000-03:00"
  },
  {
    "id": "res-226",
    "tableId": "table-2",
    "customer": {
      "name": "Pablo Delgado Díaz",
      "phone": "+54-11-7777-8888",
      "email": "pablodelgadodíaz@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T22:30:00.000-03:00",
    "endTime": "2025-10-11T01:26:00.000-03:00",
    "durationMinutes": 176,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-10T15:04:00.000-03:00",
    "updatedAt": "2025-10-10T17:04:00.000-03:00"
  },
  {
    "id": "res-227",
    "tableId": "table-8",
    "customer": {
      "name": "Camila Espinoza Romero",
      "phone": "+54-11-9999-0000",
      "email": "camilaespinozaromero@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T11:30:00.000-03:00",
    "endTime": "2025-10-18T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-18T22:23:00.000-03:00",
    "updatedAt": "2025-10-18T22:23:00.000-03:00"
  },
  {
    "id": "res-228",
    "tableId": "table-8",
    "customer": {
      "name": "José Martínez Fuentes",
      "phone": "+54-11-7890-1234",
      "email": "josémartínezfuentes@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T20:30:00.000-03:00",
    "endTime": "2025-10-24T23:23:00.000-03:00",
    "durationMinutes": 173,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-24T16:06:00.000-03:00",
    "updatedAt": "2025-10-24T16:06:00.000-03:00"
  },
  {
    "id": "res-229",
    "tableId": "table-17",
    "customer": {
      "name": "Nicolás Fuentes Navarro",
      "phone": "+54-11-5678-9012",
      "email": "nicolásfuentesnavarro@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T11:30:00.000-03:00",
    "endTime": "2025-10-11T13:09:00.000-03:00",
    "durationMinutes": 99,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-11T11:12:00.000-03:00",
    "updatedAt": "2025-10-11T11:12:00.000-03:00"
  },
  {
    "id": "res-230",
    "tableId": "table-5",
    "customer": {
      "name": "Camila Espinoza Flores",
      "phone": "+54-11-9999-0000",
      "email": "camilaespinozaflores@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T21:30:00.000-03:00",
    "endTime": "2025-10-18T23:14:00.000-03:00",
    "durationMinutes": 104,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-18T20:35:00.000-03:00",
    "updatedAt": "2025-10-19T00:35:00.000-03:00"
  },
  {
    "id": "res-231",
    "tableId": "table-9",
    "customer": {
      "name": "Nicolás Fuentes Rodríguez",
      "phone": "+54-11-9999-0000",
      "email": "nicolásfuentesrodríguez@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-07T10:00:00.000-03:00",
    "endTime": "2025-10-07T12:12:00.000-03:00",
    "durationMinutes": 132,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-07T11:45:00.000-03:00",
    "updatedAt": "2025-10-07T13:45:00.000-03:00"
  },
  {
    "id": "res-232",
    "tableId": "table-15",
    "customer": {
      "name": "Andrea Mendoza Vega",
      "phone": "+54-11-2345-6789",
      "email": "andreamendozavega@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-16T14:00:00.000-03:00",
    "endTime": "2025-10-16T16:44:00.000-03:00",
    "durationMinutes": 164,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-16T20:35:00.000-03:00",
    "updatedAt": "2025-10-16T20:35:00.000-03:00"
  },
  {
    "id": "res-233",
    "tableId": "table-1",
    "customer": {
      "name": "Lucía Morales Cabrera",
      "phone": "+54-11-2345-6789",
      "email": "lucíamoralescabrera@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-07T16:30:00.000-03:00",
    "endTime": "2025-10-07T19:05:00.000-03:00",
    "durationMinutes": 155,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-07T19:10:00.000-03:00",
    "updatedAt": "2025-10-07T19:10:00.000-03:00"
  },
  {
    "id": "res-234",
    "tableId": "table-4",
    "customer": {
      "name": "Álvaro Serrano Aguilar",
      "phone": "+54-11-3333-4444",
      "email": "álvaroserranoaguilar@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T21:30:00.000-03:00",
    "endTime": "2025-10-11T00:29:00.000-03:00",
    "durationMinutes": 179,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-10T16:55:00.000-03:00",
    "updatedAt": "2025-10-10T20:55:00.000-03:00"
  },
  {
    "id": "res-235",
    "tableId": "table-12",
    "customer": {
      "name": "Cristina Romero Jiménez",
      "phone": "+54-11-8901-2345",
      "email": "cristinaromerojiménez@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T22:00:00.000-03:00",
    "endTime": "2025-10-24T23:16:00.000-03:00",
    "durationMinutes": 76,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T17:07:00.000-03:00",
    "updatedAt": "2025-10-24T18:07:00.000-03:00"
  },
  {
    "id": "res-236",
    "tableId": "table-16",
    "customer": {
      "name": "Adrián Cabrera Aguilar",
      "phone": "+54-11-2345-6789",
      "email": "adriáncabreraaguilar@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-16T13:30:00.000-03:00",
    "endTime": "2025-10-16T16:52:00.000-03:00",
    "durationMinutes": 202,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-16T15:18:00.000-03:00",
    "updatedAt": "2025-10-16T15:18:00.000-03:00"
  },
  {
    "id": "res-237",
    "tableId": "table-10",
    "customer": {
      "name": "Álvaro Serrano Reyes",
      "phone": "+54-11-9012-3456",
      "email": "álvaroserranoreyes@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T10:30:00.000-03:00",
    "endTime": "2025-10-18T11:51:00.000-03:00",
    "durationMinutes": 81,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-18T13:07:00.000-03:00",
    "updatedAt": "2025-10-18T13:07:00.000-03:00"
  },
  {
    "id": "res-238",
    "tableId": "table-10",
    "customer": {
      "name": "Sergio Peña Silva",
      "phone": "+54-11-2345-6789",
      "email": "sergiopeñasilva@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-12T17:30:00.000-03:00",
    "endTime": "2025-10-12T20:20:00.000-03:00",
    "durationMinutes": 170,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-12T13:59:00.000-03:00",
    "updatedAt": "2025-10-12T14:59:00.000-03:00"
  },
  {
    "id": "res-239",
    "tableId": "table-16",
    "customer": {
      "name": "María Rodríguez Morales",
      "phone": "+54-11-5678-9012",
      "email": "maríarodríguezmorales@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-16T15:30:00.000-03:00",
    "endTime": "2025-10-16T16:44:00.000-03:00",
    "durationMinutes": 74,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-16T12:45:00.000-03:00",
    "updatedAt": "2025-10-16T12:45:00.000-03:00"
  },
  {
    "id": "res-240",
    "tableId": "table-7",
    "customer": {
      "name": "Carlos López Sánchez",
      "phone": "+54-11-9999-0000",
      "email": "carloslópezsánchez@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-26T17:30:00.000-03:00",
    "endTime": "2025-10-26T20:28:00.000-03:00",
    "durationMinutes": 178,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-26T20:43:00.000-03:00",
    "updatedAt": "2025-10-26T21:43:00.000-03:00"
  },
  {
    "id": "res-241",
    "tableId": "table-15",
    "customer": {
      "name": "Natalia Ortega Ramos",
      "phone": "+54-11-8901-2345",
      "email": "nataliaortegaramos@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T12:30:00.000-03:00",
    "endTime": "2025-10-24T14:55:00.000-03:00",
    "durationMinutes": 145,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T14:19:00.000-03:00",
    "updatedAt": "2025-10-24T16:19:00.000-03:00"
  },
  {
    "id": "res-242",
    "tableId": "table-17",
    "customer": {
      "name": "Claudia Medina Espinoza",
      "phone": "+54-11-1313-4545",
      "email": "claudiamedinaespinoza@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-21T20:00:00.000-03:00",
    "endTime": "2025-10-21T23:09:00.000-03:00",
    "durationMinutes": 189,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-21T18:33:00.000-03:00",
    "updatedAt": "2025-10-21T22:33:00.000-03:00"
  },
  {
    "id": "res-243",
    "tableId": "table-17",
    "customer": {
      "name": "Gabriel Rojas Ramos",
      "phone": "+54-11-9090-1212",
      "email": "gabrielrojasramos@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-26T10:30:00.000-03:00",
    "endTime": "2025-10-26T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-26T11:34:00.000-03:00",
    "updatedAt": "2025-10-26T11:34:00.000-03:00"
  },
  {
    "id": "res-244",
    "tableId": "table-15",
    "customer": {
      "name": "Rubén Herrera López",
      "phone": "+54-11-9090-1212",
      "email": "rubénherreralópez@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-05T12:30:00.000-03:00",
    "endTime": "2025-10-05T14:08:00.000-03:00",
    "durationMinutes": 98,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-05T16:18:00.000-03:00",
    "updatedAt": "2025-10-05T19:18:00.000-03:00"
  },
  {
    "id": "res-245",
    "tableId": "table-28",
    "customer": {
      "name": "Pablo Delgado Silva",
      "phone": "+54-11-7777-8888",
      "email": "pablodelgadosilva@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-09T11:30:00.000-03:00",
    "endTime": "2025-10-09T14:54:00.000-03:00",
    "durationMinutes": 204,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-09T17:20:00.000-03:00",
    "updatedAt": "2025-10-09T17:20:00.000-03:00"
  },
  {
    "id": "res-246",
    "tableId": "table-3",
    "customer": {
      "name": "Roberto Herrera Campos",
      "phone": "+54-11-5656-7878",
      "email": "robertoherreracampos@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-12T18:30:00.000-03:00",
    "endTime": "2025-10-12T19:59:00.000-03:00",
    "durationMinutes": 89,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-12T17:32:00.000-03:00",
    "updatedAt": "2025-10-12T17:32:00.000-03:00"
  },
  {
    "id": "res-247",
    "tableId": "table-27",
    "customer": {
      "name": "Camila Espinoza Jiménez",
      "phone": "+54-11-8901-2345",
      "email": "camilaespinozajiménez@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T13:00:00.000-03:00",
    "endTime": "2025-10-17T14:51:00.000-03:00",
    "durationMinutes": 111,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-17T17:07:00.000-03:00",
    "updatedAt": "2025-10-17T17:07:00.000-03:00"
  },
  {
    "id": "res-248",
    "tableId": "table-22",
    "customer": {
      "name": "María Rodríguez Guerrero",
      "phone": "+54-11-5656-7878",
      "email": "maríarodríguezguerrero@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T13:00:00.000-03:00",
    "endTime": "2025-10-19T15:56:00.000-03:00",
    "durationMinutes": 176,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-19T21:46:00.000-03:00",
    "updatedAt": "2025-10-19T21:46:00.000-03:00"
  },
  {
    "id": "res-249",
    "tableId": "table-6",
    "customer": {
      "name": "María Rodríguez Rodríguez",
      "phone": "+54-11-9090-1212",
      "email": "maríarodríguezrodríguez@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-06T22:30:00.000-03:00",
    "endTime": "2025-10-06T23:54:00.000-03:00",
    "durationMinutes": 84,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-06T15:42:00.000-03:00",
    "updatedAt": "2025-10-06T15:42:00.000-03:00"
  },
  {
    "id": "res-250",
    "tableId": "table-17",
    "customer": {
      "name": "Patricia Navarro Navarro",
      "phone": "+54-11-7777-8888",
      "email": "patricianavarronavarro@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-27T16:30:00.000-03:00",
    "endTime": "2025-10-27T19:00:00.000-03:00",
    "durationMinutes": 150,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-27T22:08:00.000-03:00",
    "updatedAt": "2025-10-27T22:08:00.000-03:00"
  },
  {
    "id": "res-251",
    "tableId": "table-13",
    "customer": {
      "name": "Natalia Ortega Navarro",
      "phone": "+54-11-5656-7878",
      "email": "nataliaorteganavarro@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-20T22:30:00.000-03:00",
    "endTime": "2025-10-20T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-20T19:07:00.000-03:00",
    "updatedAt": "2025-10-20T20:07:00.000-03:00"
  },
  {
    "id": "res-252",
    "tableId": "table-23",
    "customer": {
      "name": "Lucía Morales Campos",
      "phone": "+54-11-9090-1212",
      "email": "lucíamoralescampos@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T19:30:00.000-03:00",
    "endTime": "2025-10-10T22:51:00.000-03:00",
    "durationMinutes": 201,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-10T21:12:00.000-03:00",
    "updatedAt": "2025-10-10T22:12:00.000-03:00"
  },
  {
    "id": "res-253",
    "tableId": "table-4",
    "customer": {
      "name": "Rubén Herrera Ruiz",
      "phone": "+54-11-8901-2345",
      "email": "rubénherreraruiz@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-29T13:30:00.000-03:00",
    "endTime": "2025-10-29T15:02:00.000-03:00",
    "durationMinutes": 92,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-29T14:48:00.000-03:00",
    "updatedAt": "2025-10-29T14:48:00.000-03:00"
  },
  {
    "id": "res-254",
    "tableId": "table-6",
    "customer": {
      "name": "Sandra Vega Castro",
      "phone": "+54-11-5678-9012",
      "email": "sandravegacastro@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-08T14:00:00.000-03:00",
    "endTime": "2025-10-08T17:17:00.000-03:00",
    "durationMinutes": 197,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-08T17:39:00.000-03:00",
    "updatedAt": "2025-10-08T17:39:00.000-03:00"
  },
  {
    "id": "res-255",
    "tableId": "table-11",
    "customer": {
      "name": "Cristina Romero Fuentes",
      "phone": "+54-11-6789-0123",
      "email": "cristinaromerofuentes@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-17T20:30:00.000-03:00",
    "endTime": "2025-10-17T22:40:00.000-03:00",
    "durationMinutes": 130,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-17T22:22:00.000-03:00",
    "updatedAt": "2025-10-18T02:22:00.000-03:00"
  },
  {
    "id": "res-256",
    "tableId": "table-14",
    "customer": {
      "name": "Adrián Cabrera Castro",
      "phone": "+54-11-5555-6666",
      "email": "adriáncabreracastro@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-29T16:00:00.000-03:00",
    "endTime": "2025-10-29T17:59:00.000-03:00",
    "durationMinutes": 119,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-29T12:13:00.000-03:00",
    "updatedAt": "2025-10-29T16:13:00.000-03:00"
  },
  {
    "id": "res-257",
    "tableId": "table-16",
    "customer": {
      "name": "Adrián Cabrera Fuentes",
      "phone": "+54-11-2345-6789",
      "email": "adriáncabrerafuentes@live.com"
    },
    "partySize": 4,
    "startTime": "2025-09-30T21:30:00.000-03:00",
    "endTime": "2025-10-01T00:17:00.000-03:00",
    "durationMinutes": 167,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-09-30T12:12:00.000-03:00",
    "updatedAt": "2025-09-30T12:12:00.000-03:00"
  },
  {
    "id": "res-258",
    "tableId": "table-4",
    "customer": {
      "name": "Carlos López Castro",
      "phone": "+54-11-0123-4567",
      "email": "carloslópezcastro@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-29T13:00:00.000-03:00",
    "endTime": "2025-10-29T14:58:00.000-03:00",
    "durationMinutes": 118,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-29T21:04:00.000-03:00",
    "updatedAt": "2025-10-29T21:04:00.000-03:00"
  },
  {
    "id": "res-259",
    "tableId": "table-5",
    "customer": {
      "name": "Pablo Delgado Aguilar",
      "phone": "+54-11-3333-4444",
      "email": "pablodelgadoaguilar@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T22:30:00.000-03:00",
    "endTime": "2025-10-18T00:02:00.000-03:00",
    "durationMinutes": 92,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-17T15:38:00.000-03:00",
    "updatedAt": "2025-10-17T16:38:00.000-03:00"
  },
  {
    "id": "res-260",
    "tableId": "table-12",
    "customer": {
      "name": "Cristina Romero Mendoza",
      "phone": "+54-11-9999-0000",
      "email": "cristinaromeromendoza@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-12T20:30:00.000-03:00",
    "endTime": "2025-10-12T23:38:00.000-03:00",
    "durationMinutes": 188,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-12T11:07:00.000-03:00",
    "updatedAt": "2025-10-12T11:07:00.000-03:00"
  },
  {
    "id": "res-261",
    "tableId": "table-19",
    "customer": {
      "name": "Camila Espinoza Herrera",
      "phone": "+54-11-9090-1212",
      "email": "camilaespinozaherrera@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T17:00:00.000-03:00",
    "endTime": "2025-10-26T19:37:00.000-03:00",
    "durationMinutes": 157,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-26T19:59:00.000-03:00",
    "updatedAt": "2025-10-26T21:59:00.000-03:00"
  },
  {
    "id": "res-262",
    "tableId": "table-1",
    "customer": {
      "name": "David Jiménez Vega",
      "phone": "+54-11-7890-1234",
      "email": "davidjiménezvega@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-15T21:00:00.000-03:00",
    "endTime": "2025-10-16T00:21:00.000-03:00",
    "durationMinutes": 201,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-15T12:56:00.000-03:00",
    "updatedAt": "2025-10-15T12:56:00.000-03:00"
  },
  {
    "id": "res-263",
    "tableId": "table-23",
    "customer": {
      "name": "Cristina Romero Delgado",
      "phone": "+54-11-6767-8989",
      "email": "cristinaromerodelgado@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-03T19:00:00.000-03:00",
    "endTime": "2025-10-03T21:23:00.000-03:00",
    "durationMinutes": 143,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-03T15:41:00.000-03:00",
    "updatedAt": "2025-10-03T15:41:00.000-03:00"
  },
  {
    "id": "res-264",
    "tableId": "table-11",
    "customer": {
      "name": "Pablo Delgado Cabrera",
      "phone": "+54-11-6767-8989",
      "email": "pablodelgadocabrera@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-08T15:30:00.000-03:00",
    "endTime": "2025-10-08T17:49:00.000-03:00",
    "durationMinutes": 139,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-08T14:27:00.000-03:00",
    "updatedAt": "2025-10-08T14:27:00.000-03:00"
  },
  {
    "id": "res-265",
    "tableId": "table-12",
    "customer": {
      "name": "Camila Espinoza Campos",
      "phone": "+54-11-0123-4567",
      "email": "camilaespinozacampos@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-21T14:00:00.000-03:00",
    "endTime": "2025-10-21T15:09:00.000-03:00",
    "durationMinutes": 69,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-21T16:58:00.000-03:00",
    "updatedAt": "2025-10-21T20:58:00.000-03:00"
  },
  {
    "id": "res-266",
    "tableId": "table-4",
    "customer": {
      "name": "Lucía Morales Sánchez",
      "phone": "+54-11-0123-4567",
      "email": "lucíamoralessánchez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T15:00:00.000-03:00",
    "endTime": "2025-10-23T16:14:00.000-03:00",
    "durationMinutes": 74,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T20:55:00.000-03:00",
    "updatedAt": "2025-10-23T23:55:00.000-03:00"
  },
  {
    "id": "res-267",
    "tableId": "table-25",
    "customer": {
      "name": "Natalia Ortega López",
      "phone": "+54-11-5656-7878",
      "email": "nataliaortegalópez@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T18:30:00.000-03:00",
    "endTime": "2025-10-22T21:00:00.000-03:00",
    "durationMinutes": 150,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-22T15:37:00.000-03:00",
    "updatedAt": "2025-10-22T15:37:00.000-03:00"
  },
  {
    "id": "res-268",
    "tableId": "table-28",
    "customer": {
      "name": "Claudia Medina Vega",
      "phone": "+54-11-5656-7878",
      "email": "claudiamedinavega@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-16T16:00:00.000-03:00",
    "endTime": "2025-10-16T19:03:00.000-03:00",
    "durationMinutes": 183,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-16T14:43:00.000-03:00",
    "updatedAt": "2025-10-16T14:43:00.000-03:00"
  },
  {
    "id": "res-269",
    "tableId": "table-8",
    "customer": {
      "name": "Elena Moreno Mendoza",
      "phone": "+54-11-1212-3434",
      "email": "elenamorenomendoza@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-02T11:00:00.000-03:00",
    "endTime": "2025-10-02T12:48:00.000-03:00",
    "durationMinutes": 108,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-02T13:23:00.000-03:00",
    "updatedAt": "2025-10-02T13:23:00.000-03:00"
  },
  {
    "id": "res-270",
    "tableId": "table-24",
    "customer": {
      "name": "Valeria Silva Morales",
      "phone": "+54-11-6789-0123",
      "email": "valeriasilvamorales@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-16T12:00:00.000-03:00",
    "endTime": "2025-10-16T13:31:00.000-03:00",
    "durationMinutes": 91,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-16T14:35:00.000-03:00",
    "updatedAt": "2025-10-16T18:35:00.000-03:00"
  },
  {
    "id": "res-271",
    "tableId": "table-27",
    "customer": {
      "name": "Laura Sánchez Mendoza",
      "phone": "+54-11-5656-7878",
      "email": "laurasánchezmendoza@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-16T18:30:00.000-03:00",
    "endTime": "2025-10-16T20:26:00.000-03:00",
    "durationMinutes": 116,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-16T19:52:00.000-03:00",
    "updatedAt": "2025-10-16T19:52:00.000-03:00"
  },
  {
    "id": "res-272",
    "tableId": "table-15",
    "customer": {
      "name": "Andrea Mendoza Díaz",
      "phone": "+54-11-9999-0000",
      "email": "andreamendozadíaz@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T15:30:00.000-03:00",
    "endTime": "2025-10-10T16:44:00.000-03:00",
    "durationMinutes": 74,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-10T11:05:00.000-03:00",
    "updatedAt": "2025-10-10T11:05:00.000-03:00"
  },
  {
    "id": "res-273",
    "tableId": "table-22",
    "customer": {
      "name": "Andrea Mendoza Molina",
      "phone": "+54-11-3456-7890",
      "email": "andreamendozamolina@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-01T19:00:00.000-03:00",
    "endTime": "2025-10-01T20:10:00.000-03:00",
    "durationMinutes": 70,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-01T13:41:00.000-03:00",
    "updatedAt": "2025-10-01T14:41:00.000-03:00"
  },
  {
    "id": "res-274",
    "tableId": "table-29",
    "customer": {
      "name": "Carmen Pérez Serrano",
      "phone": "+54-11-8901-2345",
      "email": "carmenpérezserrano@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T21:00:00.000-03:00",
    "endTime": "2025-10-04T22:04:00.000-03:00",
    "durationMinutes": 64,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-04T12:40:00.000-03:00",
    "updatedAt": "2025-10-04T12:40:00.000-03:00"
  },
  {
    "id": "res-275",
    "tableId": "table-25",
    "customer": {
      "name": "Carmen Pérez Morales",
      "phone": "+54-11-6767-8989",
      "email": "carmenpérezmorales@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-04T16:00:00.000-03:00",
    "endTime": "2025-10-04T18:59:00.000-03:00",
    "durationMinutes": 179,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-04T20:42:00.000-03:00",
    "updatedAt": "2025-10-04T22:42:00.000-03:00"
  },
  {
    "id": "res-276",
    "tableId": "table-2",
    "customer": {
      "name": "Francisco Martín Romero",
      "phone": "+54-11-5656-7878",
      "email": "franciscomartínromero@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-03T15:00:00.000-03:00",
    "endTime": "2025-10-03T17:40:00.000-03:00",
    "durationMinutes": 160,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-03T16:20:00.000-03:00",
    "updatedAt": "2025-10-03T16:20:00.000-03:00"
  },
  {
    "id": "res-277",
    "tableId": "table-13",
    "customer": {
      "name": "Pablo Delgado Silva",
      "phone": "+54-11-9090-1212",
      "email": "pablodelgadosilva@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T13:00:00.000-03:00",
    "endTime": "2025-10-23T14:50:00.000-03:00",
    "durationMinutes": 110,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T22:42:00.000-03:00",
    "updatedAt": "2025-10-23T23:42:00.000-03:00"
  },
  {
    "id": "res-278",
    "tableId": "table-9",
    "customer": {
      "name": "Valeria Silva Herrera",
      "phone": "+54-11-1111-2222",
      "email": "valeriasilvaherrera@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T21:30:00.000-03:00",
    "endTime": "2025-10-25T00:47:00.000-03:00",
    "durationMinutes": 197,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T18:11:00.000-03:00",
    "updatedAt": "2025-10-24T19:11:00.000-03:00"
  },
  {
    "id": "res-279",
    "tableId": "table-6",
    "customer": {
      "name": "Daniel Campos Martín",
      "phone": "+54-11-2345-6789",
      "email": "danielcamposmartín@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T17:00:00.000-03:00",
    "endTime": "2025-10-25T19:33:00.000-03:00",
    "durationMinutes": 153,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-25T19:35:00.000-03:00",
    "updatedAt": "2025-10-25T23:35:00.000-03:00"
  },
  {
    "id": "res-280",
    "tableId": "table-22",
    "customer": {
      "name": "Miguel González Silva",
      "phone": "+54-11-7890-1234",
      "email": "miguelgonzálezsilva@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-08T16:30:00.000-03:00",
    "endTime": "2025-10-08T19:00:00.000-03:00",
    "durationMinutes": 150,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-08T15:58:00.000-03:00",
    "updatedAt": "2025-10-08T15:58:00.000-03:00"
  },
  {
    "id": "res-281",
    "tableId": "table-17",
    "customer": {
      "name": "Valeria Silva Guerrero",
      "phone": "+54-11-6767-8989",
      "email": "valeriasilvaguerrero@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-29T13:00:00.000-03:00",
    "endTime": "2025-10-29T15:26:00.000-03:00",
    "durationMinutes": 146,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-29T13:03:00.000-03:00",
    "updatedAt": "2025-10-29T14:03:00.000-03:00"
  },
  {
    "id": "res-282",
    "tableId": "table-14",
    "customer": {
      "name": "Valeria Silva Martín",
      "phone": "+54-11-2345-6789",
      "email": "valeriasilvamartín@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T12:30:00.000-03:00",
    "endTime": "2025-10-11T13:32:00.000-03:00",
    "durationMinutes": 62,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-11T22:11:00.000-03:00",
    "updatedAt": "2025-10-11T22:11:00.000-03:00"
  },
  {
    "id": "res-283",
    "tableId": "table-3",
    "customer": {
      "name": "Camila Espinoza López",
      "phone": "+54-11-4567-8901",
      "email": "camilaespinozalópez@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T11:00:00.000-03:00",
    "endTime": "2025-10-10T12:26:00.000-03:00",
    "durationMinutes": 86,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-10T16:15:00.000-03:00",
    "updatedAt": "2025-10-10T16:15:00.000-03:00"
  },
  {
    "id": "res-284",
    "tableId": "table-18",
    "customer": {
      "name": "Carlos López Serrano",
      "phone": "+54-11-0123-4567",
      "email": "carloslópezserrano@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-15T19:30:00.000-03:00",
    "endTime": "2025-10-15T22:21:00.000-03:00",
    "durationMinutes": 171,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-15T11:30:00.000-03:00",
    "updatedAt": "2025-10-15T11:30:00.000-03:00"
  },
  {
    "id": "res-285",
    "tableId": "table-11",
    "customer": {
      "name": "Javier Torres Vega",
      "phone": "+54-11-9012-3456",
      "email": "javiertorresvega@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-21T17:30:00.000-03:00",
    "endTime": "2025-10-21T19:31:00.000-03:00",
    "durationMinutes": 121,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-21T20:16:00.000-03:00",
    "updatedAt": "2025-10-21T22:16:00.000-03:00"
  },
  {
    "id": "res-286",
    "tableId": "table-24",
    "customer": {
      "name": "Carlos López Castro",
      "phone": "+54-11-0123-4567",
      "email": "carloslópezcastro@live.com"
    },
    "partySize": 5,
    "startTime": "2025-09-30T12:30:00.000-03:00",
    "endTime": "2025-09-30T14:55:00.000-03:00",
    "durationMinutes": 145,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-09-30T18:13:00.000-03:00",
    "updatedAt": "2025-09-30T18:13:00.000-03:00"
  },
  {
    "id": "res-287",
    "tableId": "table-3",
    "customer": {
      "name": "Daniel Campos González",
      "phone": "+54-11-9999-0000",
      "email": "danielcamposgonzález@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T20:30:00.000-03:00",
    "endTime": "2025-10-26T21:58:00.000-03:00",
    "durationMinutes": 88,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-26T11:46:00.000-03:00",
    "updatedAt": "2025-10-26T11:46:00.000-03:00"
  },
  {
    "id": "res-288",
    "tableId": "table-13",
    "customer": {
      "name": "Álvaro Serrano Espinoza",
      "phone": "+54-11-4567-8901",
      "email": "álvaroserranoespinoza@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T12:30:00.000-03:00",
    "endTime": "2025-10-24T15:09:00.000-03:00",
    "durationMinutes": 159,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T16:06:00.000-03:00",
    "updatedAt": "2025-10-24T16:06:00.000-03:00"
  },
  {
    "id": "res-289",
    "tableId": "table-3",
    "customer": {
      "name": "Roberto Herrera Ruiz",
      "phone": "+54-11-7777-8888",
      "email": "robertoherreraruiz@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T12:30:00.000-03:00",
    "endTime": "2025-10-10T15:37:00.000-03:00",
    "durationMinutes": 187,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-10T19:01:00.000-03:00",
    "updatedAt": "2025-10-10T19:01:00.000-03:00"
  },
  {
    "id": "res-290",
    "tableId": "table-1",
    "customer": {
      "name": "Javier Torres Martínez",
      "phone": "+54-11-9090-1212",
      "email": "javiertorresmartínez@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-29T12:00:00.000-03:00",
    "endTime": "2025-10-29T13:04:00.000-03:00",
    "durationMinutes": 64,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-29T15:57:00.000-03:00",
    "updatedAt": "2025-10-29T18:57:00.000-03:00"
  },
  {
    "id": "res-291",
    "tableId": "table-19",
    "customer": {
      "name": "David Jiménez López",
      "phone": "+54-11-1111-2222",
      "email": "davidjiménezlópez@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-08T22:00:00.000-03:00",
    "endTime": "2025-10-09T00:27:00.000-03:00",
    "durationMinutes": 147,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-08T11:40:00.000-03:00",
    "updatedAt": "2025-10-08T13:40:00.000-03:00"
  },
  {
    "id": "res-292",
    "tableId": "table-5",
    "customer": {
      "name": "Daniel Campos Herrera",
      "phone": "+54-11-1111-2222",
      "email": "danielcamposherrera@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-12T11:30:00.000-03:00",
    "endTime": "2025-10-12T14:51:00.000-03:00",
    "durationMinutes": 201,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-12T15:29:00.000-03:00",
    "updatedAt": "2025-10-12T15:29:00.000-03:00"
  },
  {
    "id": "res-293",
    "tableId": "table-28",
    "customer": {
      "name": "Francisco Martín Campos",
      "phone": "+54-11-1313-4545",
      "email": "franciscomartíncampos@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T21:30:00.000-03:00",
    "endTime": "2025-10-03T23:57:00.000-03:00",
    "durationMinutes": 147,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-03T12:05:00.000-03:00",
    "updatedAt": "2025-10-03T12:05:00.000-03:00"
  },
  {
    "id": "res-294",
    "tableId": "table-30",
    "customer": {
      "name": "Nicolás Fuentes Romero",
      "phone": "+54-11-1111-2222",
      "email": "nicolásfuentesromero@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T20:30:00.000-03:00",
    "endTime": "2025-10-11T22:39:00.000-03:00",
    "durationMinutes": 129,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-11T12:17:00.000-03:00",
    "updatedAt": "2025-10-11T16:17:00.000-03:00"
  },
  {
    "id": "res-295",
    "tableId": "table-2",
    "customer": {
      "name": "Lucía Morales Molina",
      "phone": "+54-11-9012-3456",
      "email": "lucíamoralesmolina@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T21:30:00.000-03:00",
    "endTime": "2025-10-19T00:23:00.000-03:00",
    "durationMinutes": 173,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-18T16:56:00.000-03:00",
    "updatedAt": "2025-10-18T16:56:00.000-03:00"
  },
  {
    "id": "res-296",
    "tableId": "table-23",
    "customer": {
      "name": "Gabriel Rojas Mendoza",
      "phone": "+54-11-9012-3456",
      "email": "gabrielrojasmendoza@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T21:30:00.000-03:00",
    "endTime": "2025-10-05T00:53:00.000-03:00",
    "durationMinutes": 203,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-04T20:26:00.000-03:00",
    "updatedAt": "2025-10-04T20:26:00.000-03:00"
  },
  {
    "id": "res-297",
    "tableId": "table-13",
    "customer": {
      "name": "Alejandro Castro Vega",
      "phone": "+54-11-3333-4444",
      "email": "alejandrocastrovega@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T12:30:00.000-03:00",
    "endTime": "2025-10-10T14:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-10T20:34:00.000-03:00",
    "updatedAt": "2025-10-10T20:34:00.000-03:00"
  },
  {
    "id": "res-298",
    "tableId": "table-10",
    "customer": {
      "name": "Raquel Vargas Ortega",
      "phone": "+54-11-4567-8901",
      "email": "raquelvargasortega@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T22:30:00.000-03:00",
    "endTime": "2025-10-18T00:28:00.000-03:00",
    "durationMinutes": 118,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-17T19:16:00.000-03:00",
    "updatedAt": "2025-10-17T21:16:00.000-03:00"
  },
  {
    "id": "res-299",
    "tableId": "table-26",
    "customer": {
      "name": "Cristina Romero Herrera",
      "phone": "+54-11-9012-3456",
      "email": "cristinaromeroherrera@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-11T19:30:00.000-03:00",
    "endTime": "2025-10-11T21:22:00.000-03:00",
    "durationMinutes": 112,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-11T14:26:00.000-03:00",
    "updatedAt": "2025-10-11T17:26:00.000-03:00"
  },
  {
    "id": "res-300",
    "tableId": "table-23",
    "customer": {
      "name": "Nicolás Fuentes Martínez",
      "phone": "+54-11-0123-4567",
      "email": "nicolásfuentesmartínez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T21:30:00.000-03:00",
    "endTime": "2025-10-11T22:58:00.000-03:00",
    "durationMinutes": 88,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-11T15:12:00.000-03:00",
    "updatedAt": "2025-10-11T19:12:00.000-03:00"
  }
];

// Restaurant configuration
export const seedRestaurantConfig: RestaurantConfig = {
  "id": "restaurant-1",
  "name": "Woki Restaurant",
  "timezone": "America/Argentina/Buenos_Aires",
  "operatingHours": {
    "startHour": 7,
    "endHour": 22
  },
  "slotConfiguration": {
    "slotMinutes": 15,
    "defaultSlotWidth": 60
  },
  "createdAt": "2025-10-24T00:00:00.000-03:00",
  "updatedAt": "2025-10-24T00:00:00.000-03:00"
};
