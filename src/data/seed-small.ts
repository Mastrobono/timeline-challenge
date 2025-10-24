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
      "min": 5,
      "max": 8
    },
    "sortOrder": 2
  },
  {
    "id": "table-3",
    "sectorId": "sector-1",
    "name": "Table 3",
    "capacity": {
      "min": 5,
      "max": 8
    },
    "sortOrder": 3
  },
  {
    "id": "table-4",
    "sectorId": "sector-2",
    "name": "Table 4",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 4
  },
  {
    "id": "table-5",
    "sectorId": "sector-2",
    "name": "Table 5",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 5
  },
  {
    "id": "table-6",
    "sectorId": "sector-2",
    "name": "Table 6",
    "capacity": {
      "min": 3,
      "max": 4
    },
    "sortOrder": 6
  },
  {
    "id": "table-7",
    "sectorId": "sector-3",
    "name": "Table 7",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 7
  },
  {
    "id": "table-8",
    "sectorId": "sector-3",
    "name": "Table 8",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 8
  }
];

export const seedReservations: Reservation[] = [
  {
    "id": "res-1",
    "tableId": "table-6",
    "customer": {
      "name": "Sergio Peña Moreno",
      "phone": "+54-11-6767-8989",
      "email": "sergiopeñamoreno@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T19:30:00.000-03:00",
    "endTime": "2025-10-22T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-22T11:54:00.000-03:00",
    "updatedAt": "2025-10-22T11:54:00.000-03:00"
  },
  {
    "id": "res-2",
    "tableId": "table-5",
    "customer": {
      "name": "Adrián Cabrera Martín",
      "phone": "+54-11-8901-2345",
      "email": "adriáncabreramartín@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T16:00:00.000-03:00",
    "endTime": "2025-10-23T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-23T19:08:00.000-03:00",
    "updatedAt": "2025-10-23T19:08:00.000-03:00"
  },
  {
    "id": "res-3",
    "tableId": "table-8",
    "customer": {
      "name": "Carlos López Díaz",
      "phone": "+54-11-2345-6789",
      "email": "carloslópezdíaz@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-21T22:30:00.000-03:00",
    "endTime": "2025-10-21T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-21T21:08:00.000-03:00",
    "updatedAt": "2025-10-21T23:08:00.000-03:00"
  },
  {
    "id": "res-4",
    "tableId": "table-6",
    "customer": {
      "name": "Antonio Ruiz Flores",
      "phone": "+54-11-1111-2222",
      "email": "antonioruizflores@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T16:00:00.000-03:00",
    "endTime": "2025-10-24T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T15:50:00.000-03:00",
    "updatedAt": "2025-10-24T15:50:00.000-03:00"
  },
  {
    "id": "res-5",
    "tableId": "table-1",
    "customer": {
      "name": "Isabel Díaz Rojas",
      "phone": "+54-11-7777-8888",
      "email": "isabeldíazrojas@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T17:30:00.000-03:00",
    "endTime": "2025-10-19T19:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-19T16:01:00.000-03:00",
    "updatedAt": "2025-10-19T17:01:00.000-03:00"
  },
  {
    "id": "res-6",
    "tableId": "table-5",
    "customer": {
      "name": "Roberto Herrera Delgado",
      "phone": "+54-11-1313-4545",
      "email": "robertoherreradelgado@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-21T15:30:00.000-03:00",
    "endTime": "2025-10-21T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-21T13:32:00.000-03:00",
    "updatedAt": "2025-10-21T13:32:00.000-03:00"
  },
  {
    "id": "res-7",
    "tableId": "table-2",
    "customer": {
      "name": "Alejandro Castro Guerrero",
      "phone": "+54-11-5678-9012",
      "email": "alejandrocastroguerrero@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T15:00:00.000-03:00",
    "endTime": "2025-10-24T17:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T13:44:00.000-03:00",
    "updatedAt": "2025-10-24T15:44:00.000-03:00"
  },
  {
    "id": "res-8",
    "tableId": "table-6",
    "customer": {
      "name": "Pablo Delgado Morales",
      "phone": "+54-11-9999-0000",
      "email": "pablodelgadomorales@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-22T18:30:00.000-03:00",
    "endTime": "2025-10-22T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-22T20:09:00.000-03:00",
    "updatedAt": "2025-10-22T20:09:00.000-03:00"
  },
  {
    "id": "res-9",
    "tableId": "table-4",
    "customer": {
      "name": "Patricia Navarro Moreno",
      "phone": "+54-11-2345-6789",
      "email": "patricianavarromoreno@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-20T22:30:00.000-03:00",
    "endTime": "2025-10-21T00:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-20T11:19:00.000-03:00",
    "updatedAt": "2025-10-20T13:19:00.000-03:00"
  },
  {
    "id": "res-10",
    "tableId": "table-3",
    "customer": {
      "name": "Ana García Ortega",
      "phone": "+54-11-9090-1212",
      "email": "anagarcíaortega@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-21T18:00:00.000-03:00",
    "endTime": "2025-10-21T21:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-21T15:49:00.000-03:00",
    "updatedAt": "2025-10-21T16:49:00.000-03:00"
  },
  {
    "id": "res-11",
    "tableId": "table-1",
    "customer": {
      "name": "Sebastián Vega Herrera",
      "phone": "+54-11-5555-6666",
      "email": "sebastiánvegaherrera@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T18:30:00.000-03:00",
    "endTime": "2025-10-23T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-23T21:06:00.000-03:00",
    "updatedAt": "2025-10-23T21:06:00.000-03:00"
  },
  {
    "id": "res-12",
    "tableId": "table-2",
    "customer": {
      "name": "Ana García Medina",
      "phone": "+54-11-5656-7878",
      "email": "anagarcíamedina@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T14:00:00.000-03:00",
    "endTime": "2025-10-22T15:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-22T18:13:00.000-03:00",
    "updatedAt": "2025-10-22T18:13:00.000-03:00"
  },
  {
    "id": "res-13",
    "tableId": "table-3",
    "customer": {
      "name": "Valeria Silva Herrera",
      "phone": "+54-11-5555-6666",
      "email": "valeriasilvaherrera@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-21T16:30:00.000-03:00",
    "endTime": "2025-10-21T18:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-21T19:28:00.000-03:00",
    "updatedAt": "2025-10-21T19:28:00.000-03:00"
  },
  {
    "id": "res-14",
    "tableId": "table-6",
    "customer": {
      "name": "Isabel Díaz Herrera",
      "phone": "+54-11-5678-9012",
      "email": "isabeldíazherrera@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-20T00:30:00.000-03:00",
    "endTime": "2025-10-20T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-19T16:02:00.000-03:00",
    "updatedAt": "2025-10-19T16:02:00.000-03:00"
  },
  {
    "id": "res-15",
    "tableId": "table-1",
    "customer": {
      "name": "Beatriz Guerrero Aguilar",
      "phone": "+54-11-0123-4567",
      "email": "beatrizguerreroaguilar@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T23:00:00.000-03:00",
    "endTime": "2025-10-25T01:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T19:54:00.000-03:00",
    "updatedAt": "2025-10-24T21:54:00.000-03:00"
  },
  {
    "id": "res-16",
    "tableId": "table-5",
    "customer": {
      "name": "Alejandro Castro Navarro",
      "phone": "+54-11-6789-0123",
      "email": "alejandrocastronavarro@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T20:30:00.000-03:00",
    "endTime": "2025-10-24T22:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T19:56:00.000-03:00",
    "updatedAt": "2025-10-24T23:56:00.000-03:00"
  },
  {
    "id": "res-17",
    "tableId": "table-1",
    "customer": {
      "name": "Elena Moreno Castro",
      "phone": "+54-11-6767-8989",
      "email": "elenamorenocastro@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-23T17:00:00.000-03:00",
    "endTime": "2025-10-23T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-23T12:17:00.000-03:00",
    "updatedAt": "2025-10-23T12:17:00.000-03:00"
  },
  {
    "id": "res-18",
    "tableId": "table-6",
    "customer": {
      "name": "Camila Espinoza Romero",
      "phone": "+54-11-6789-0123",
      "email": "camilaespinozaromero@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T10:00:00.000-03:00",
    "endTime": "2025-10-19T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-19T19:15:00.000-03:00",
    "updatedAt": "2025-10-19T19:15:00.000-03:00"
  },
  {
    "id": "res-19",
    "tableId": "table-4",
    "customer": {
      "name": "Beatriz Guerrero Fuentes",
      "phone": "+54-11-8901-2345",
      "email": "beatrizguerrerofuentes@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T18:30:00.000-03:00",
    "endTime": "2025-10-22T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-22T20:14:00.000-03:00",
    "updatedAt": "2025-10-22T23:14:00.000-03:00"
  },
  {
    "id": "res-20",
    "tableId": "table-4",
    "customer": {
      "name": "Pablo Delgado Martínez",
      "phone": "+54-11-4567-8901",
      "email": "pablodelgadomartínez@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T13:30:00.000-03:00",
    "endTime": "2025-10-23T16:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-23T11:03:00.000-03:00",
    "updatedAt": "2025-10-23T12:03:00.000-03:00"
  },
  {
    "id": "res-21",
    "tableId": "table-4",
    "customer": {
      "name": "Hugo Aguilar Serrano",
      "phone": "+54-11-6767-8989",
      "email": "hugoaguilarserrano@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-22T21:30:00.000-03:00",
    "endTime": "2025-10-22T22:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-22T22:32:00.000-03:00",
    "updatedAt": "2025-10-22T23:32:00.000-03:00"
  },
  {
    "id": "res-22",
    "tableId": "table-8",
    "customer": {
      "name": "Sebastián Vega Sánchez",
      "phone": "+54-11-1111-2222",
      "email": "sebastiánvegasánchez@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T14:30:00.000-03:00",
    "endTime": "2025-10-24T16:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T15:55:00.000-03:00",
    "updatedAt": "2025-10-24T15:55:00.000-03:00"
  },
  {
    "id": "res-23",
    "tableId": "table-5",
    "customer": {
      "name": "Carlos López Molina",
      "phone": "+54-11-4567-8901",
      "email": "carloslópezmolina@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T20:00:00.000-03:00",
    "endTime": "2025-10-24T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T22:12:00.000-03:00",
    "updatedAt": "2025-10-24T22:12:00.000-03:00"
  },
  {
    "id": "res-24",
    "tableId": "table-7",
    "customer": {
      "name": "Carmen Pérez Campos",
      "phone": "+54-11-1234-5678",
      "email": "carmenpérezcampos@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T13:00:00.000-03:00",
    "endTime": "2025-10-19T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-19T13:28:00.000-03:00",
    "updatedAt": "2025-10-19T13:28:00.000-03:00"
  },
  {
    "id": "res-25",
    "tableId": "table-2",
    "customer": {
      "name": "Natalia Ortega Serrano",
      "phone": "+54-11-6789-0123",
      "email": "nataliaortegaserrano@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-22T14:00:00.000-03:00",
    "endTime": "2025-10-22T17:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-22T19:07:00.000-03:00",
    "updatedAt": "2025-10-22T20:07:00.000-03:00"
  },
  {
    "id": "res-26",
    "tableId": "table-1",
    "customer": {
      "name": "Sandra Vega López",
      "phone": "+54-11-7777-8888",
      "email": "sandravegalópez@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T20:00:00.000-03:00",
    "endTime": "2025-10-19T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-19T19:46:00.000-03:00",
    "updatedAt": "2025-10-19T23:46:00.000-03:00"
  },
  {
    "id": "res-27",
    "tableId": "table-6",
    "customer": {
      "name": "Ana García López",
      "phone": "+54-11-9999-0000",
      "email": "anagarcíalópez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T21:00:00.000-03:00",
    "endTime": "2025-10-24T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-23T16:58:00.000-03:00",
    "updatedAt": "2025-10-23T16:58:00.000-03:00"
  },
  {
    "id": "res-28",
    "tableId": "table-8",
    "customer": {
      "name": "Carlos López Molina",
      "phone": "+54-11-4567-8901",
      "email": "carloslópezmolina@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T10:30:00.000-03:00",
    "endTime": "2025-10-23T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-23T21:51:00.000-03:00",
    "updatedAt": "2025-10-23T21:51:00.000-03:00"
  },
  {
    "id": "res-29",
    "tableId": "table-3",
    "customer": {
      "name": "Natalia Ortega Cabrera",
      "phone": "+54-11-7777-8888",
      "email": "nataliaortegacabrera@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T11:30:00.000-03:00",
    "endTime": "2025-10-24T12:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T16:32:00.000-03:00",
    "updatedAt": "2025-10-24T17:32:00.000-03:00"
  },
  {
    "id": "res-30",
    "tableId": "table-8",
    "customer": {
      "name": "Sofia Reyes Romero",
      "phone": "+54-11-1111-2222",
      "email": "sofiareyesromero@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-25T00:00:00.000-03:00",
    "endTime": "2025-10-25T02:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-24T17:02:00.000-03:00",
    "updatedAt": "2025-10-24T19:02:00.000-03:00"
  },
  {
    "id": "res-31",
    "tableId": "table-3",
    "customer": {
      "name": "Fernando Ramos Rodríguez",
      "phone": "+54-11-2345-6789",
      "email": "fernandoramosrodríguez@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T23:30:00.000-03:00",
    "endTime": "2025-10-25T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T19:14:00.000-03:00",
    "updatedAt": "2025-10-24T19:14:00.000-03:00"
  },
  {
    "id": "res-32",
    "tableId": "table-1",
    "customer": {
      "name": "Sergio Peña Vega",
      "phone": "+54-11-9090-1212",
      "email": "sergiopeñavega@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-21T12:30:00.000-03:00",
    "endTime": "2025-10-21T15:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-21T16:34:00.000-03:00",
    "updatedAt": "2025-10-21T16:34:00.000-03:00"
  },
  {
    "id": "res-33",
    "tableId": "table-8",
    "customer": {
      "name": "María Rodríguez Ramos",
      "phone": "+54-11-1111-2222",
      "email": "maríarodríguezramos@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T10:00:00.000-03:00",
    "endTime": "2025-10-23T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-23T18:23:00.000-03:00",
    "updatedAt": "2025-10-23T21:23:00.000-03:00"
  },
  {
    "id": "res-34",
    "tableId": "table-6",
    "customer": {
      "name": "Adrián Cabrera Martín",
      "phone": "+54-11-6789-0123",
      "email": "adriáncabreramartín@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T13:30:00.000-03:00",
    "endTime": "2025-10-24T15:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T14:49:00.000-03:00",
    "updatedAt": "2025-10-24T14:49:00.000-03:00"
  },
  {
    "id": "res-35",
    "tableId": "table-5",
    "customer": {
      "name": "Sandra Vega González",
      "phone": "+54-11-7890-1234",
      "email": "sandravegagonzález@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-23T00:00:00.000-03:00",
    "endTime": "2025-10-23T02:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-22T16:21:00.000-03:00",
    "updatedAt": "2025-10-22T16:21:00.000-03:00"
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
