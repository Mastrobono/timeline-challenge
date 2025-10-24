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
      "min": 5,
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
      "max": 5
    },
    "sortOrder": 2
  },
  {
    "id": "table-3",
    "sectorId": "sector-1",
    "name": "Table 3",
    "capacity": {
      "min": 3,
      "max": 6
    },
    "sortOrder": 3
  },
  {
    "id": "table-4",
    "sectorId": "sector-2",
    "name": "Table 4",
    "capacity": {
      "min": 5,
      "max": 6
    },
    "sortOrder": 4
  },
  {
    "id": "table-5",
    "sectorId": "sector-2",
    "name": "Table 5",
    "capacity": {
      "min": 2,
      "max": 5
    },
    "sortOrder": 5
  },
  {
    "id": "table-6",
    "sectorId": "sector-2",
    "name": "Table 6",
    "capacity": {
      "min": 2,
      "max": 4
    },
    "sortOrder": 6
  },
  {
    "id": "table-7",
    "sectorId": "sector-3",
    "name": "Table 7",
    "capacity": {
      "min": 5,
      "max": 7
    },
    "sortOrder": 7
  },
  {
    "id": "table-8",
    "sectorId": "sector-3",
    "name": "Table 8",
    "capacity": {
      "min": 2,
      "max": 4
    },
    "sortOrder": 8
  }
];

export const seedReservations: Reservation[] = [
  {
    "id": "res-1",
    "tableId": "table-2",
    "customer": {
      "name": "Andrea Mendoza Moreno",
      "phone": "+54-11-9012-3456",
      "email": "andreamendozamoreno@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T23:30:00.000-03:00",
    "endTime": "2025-10-25T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T20:12:00.000-03:00",
    "updatedAt": "2025-10-24T20:12:00.000-03:00"
  },
  {
    "id": "res-2",
    "tableId": "table-3",
    "customer": {
      "name": "Javier Torres Romero",
      "phone": "+54-11-7890-1234",
      "email": "javiertorresromero@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-23T11:00:00.000-03:00",
    "endTime": "2025-10-23T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-23T19:22:00.000-03:00",
    "updatedAt": "2025-10-23T21:22:00.000-03:00"
  },
  {
    "id": "res-3",
    "tableId": "table-4",
    "customer": {
      "name": "Teresa Molina Guerrero",
      "phone": "+54-11-6789-0123",
      "email": "teresamolinaguerrero@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T21:30:00.000-03:00",
    "endTime": "2025-10-25T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T21:56:00.000-03:00",
    "updatedAt": "2025-10-24T21:56:00.000-03:00"
  },
  {
    "id": "res-4",
    "tableId": "table-8",
    "customer": {
      "name": "Hugo Aguilar Herrera",
      "phone": "+54-11-1111-2222",
      "email": "hugoaguilarherrera@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T16:00:00.000-03:00",
    "endTime": "2025-10-24T19:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T16:42:00.000-03:00",
    "updatedAt": "2025-10-24T16:42:00.000-03:00"
  },
  {
    "id": "res-5",
    "tableId": "table-8",
    "customer": {
      "name": "Carlos López Pérez",
      "phone": "+54-11-9999-0000",
      "email": "carloslópezpérez@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T20:30:00.000-03:00",
    "endTime": "2025-10-24T21:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T14:23:00.000-03:00",
    "updatedAt": "2025-10-24T14:23:00.000-03:00"
  },
  {
    "id": "res-6",
    "tableId": "table-5",
    "customer": {
      "name": "Mónica Flores Vargas",
      "phone": "+54-11-4567-8901",
      "email": "mónicafloresvargas@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-21T10:00:00.000-03:00",
    "endTime": "2025-10-21T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-21T22:31:00.000-03:00",
    "updatedAt": "2025-10-21T22:31:00.000-03:00"
  },
  {
    "id": "res-7",
    "tableId": "table-8",
    "customer": {
      "name": "Álvaro Serrano Ortega",
      "phone": "+54-11-3456-7890",
      "email": "álvaroserranoortega@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-25T01:00:00.000-03:00",
    "endTime": "2025-10-25T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T19:20:00.000-03:00",
    "updatedAt": "2025-10-24T19:20:00.000-03:00"
  },
  {
    "id": "res-8",
    "tableId": "table-1",
    "customer": {
      "name": "Rubén Herrera Delgado",
      "phone": "+54-11-2345-6789",
      "email": "rubénherreradelgado@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T18:30:00.000-03:00",
    "endTime": "2025-10-19T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-19T14:17:00.000-03:00",
    "updatedAt": "2025-10-19T14:17:00.000-03:00"
  },
  {
    "id": "res-9",
    "tableId": "table-4",
    "customer": {
      "name": "Adrián Cabrera Molina",
      "phone": "+54-11-1111-2222",
      "email": "adriáncabreramolina@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T16:30:00.000-03:00",
    "endTime": "2025-10-24T17:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T11:00:00.000-03:00",
    "updatedAt": "2025-10-24T11:00:00.000-03:00"
  },
  {
    "id": "res-10",
    "tableId": "table-3",
    "customer": {
      "name": "David Jiménez Rojas",
      "phone": "+54-11-5555-6666",
      "email": "davidjiménezrojas@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T15:30:00.000-03:00",
    "endTime": "2025-10-19T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-19T20:16:00.000-03:00",
    "updatedAt": "2025-10-19T23:16:00.000-03:00"
  },
  {
    "id": "res-11",
    "tableId": "table-6",
    "customer": {
      "name": "Teresa Molina Herrera",
      "phone": "+54-11-3456-7890",
      "email": "teresamolinaherrera@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T23:00:00.000-03:00",
    "endTime": "2025-10-25T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T11:00:00.000-03:00",
    "updatedAt": "2025-10-24T11:00:00.000-03:00"
  },
  {
    "id": "res-12",
    "tableId": "table-8",
    "customer": {
      "name": "Elena Moreno Vargas",
      "phone": "+54-11-8901-2345",
      "email": "elenamorenovargas@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T12:30:00.000-03:00",
    "endTime": "2025-10-24T13:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T12:16:00.000-03:00",
    "updatedAt": "2025-10-24T12:16:00.000-03:00"
  },
  {
    "id": "res-13",
    "tableId": "table-8",
    "customer": {
      "name": "María Rodríguez Romero",
      "phone": "+54-11-1212-3434",
      "email": "maríarodríguezromero@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-22T15:30:00.000-03:00",
    "endTime": "2025-10-22T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T12:37:00.000-03:00",
    "updatedAt": "2025-10-22T14:37:00.000-03:00"
  },
  {
    "id": "res-14",
    "tableId": "table-1",
    "customer": {
      "name": "Rubén Herrera Romero",
      "phone": "+54-11-9012-3456",
      "email": "rubénherreraromero@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T21:30:00.000-03:00",
    "endTime": "2025-10-25T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T19:30:00.000-03:00",
    "updatedAt": "2025-10-24T19:30:00.000-03:00"
  },
  {
    "id": "res-15",
    "tableId": "table-2",
    "customer": {
      "name": "Laura Sánchez Guerrero",
      "phone": "+54-11-9012-3456",
      "email": "laurasánchezguerrero@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T22:00:00.000-03:00",
    "endTime": "2025-10-21T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-21T14:34:00.000-03:00",
    "updatedAt": "2025-10-21T17:34:00.000-03:00"
  },
  {
    "id": "res-16",
    "tableId": "table-2",
    "customer": {
      "name": "Fernando Ramos López",
      "phone": "+54-11-9999-0000",
      "email": "fernandoramoslópez@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T13:30:00.000-03:00",
    "endTime": "2025-10-24T15:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T13:41:00.000-03:00",
    "updatedAt": "2025-10-24T13:41:00.000-03:00"
  },
  {
    "id": "res-17",
    "tableId": "table-7",
    "customer": {
      "name": "Laura Sánchez Ramos",
      "phone": "+54-11-5678-9012",
      "email": "laurasánchezramos@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-20T01:00:00.000-03:00",
    "endTime": "2025-10-20T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-19T12:11:00.000-03:00",
    "updatedAt": "2025-10-19T12:11:00.000-03:00"
  },
  {
    "id": "res-18",
    "tableId": "table-8",
    "customer": {
      "name": "Rubén Herrera Herrera",
      "phone": "+54-11-0123-4567",
      "email": "rubénherreraherrera@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T15:30:00.000-03:00",
    "endTime": "2025-10-23T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-23T16:02:00.000-03:00",
    "updatedAt": "2025-10-23T16:02:00.000-03:00"
  },
  {
    "id": "res-19",
    "tableId": "table-5",
    "customer": {
      "name": "Claudia Medina Cabrera",
      "phone": "+54-11-4567-8901",
      "email": "claudiamedinacabrera@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T17:00:00.000-03:00",
    "endTime": "2025-10-19T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-19T21:47:00.000-03:00",
    "updatedAt": "2025-10-20T01:47:00.000-03:00"
  },
  {
    "id": "res-20",
    "tableId": "table-5",
    "customer": {
      "name": "Javier Torres Sánchez",
      "phone": "+54-11-1234-5678",
      "email": "javiertorressánchez@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T19:00:00.000-03:00",
    "endTime": "2025-10-19T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-19T17:50:00.000-03:00",
    "updatedAt": "2025-10-19T17:50:00.000-03:00"
  },
  {
    "id": "res-21",
    "tableId": "table-2",
    "customer": {
      "name": "Alejandro Castro Vega",
      "phone": "+54-11-3456-7890",
      "email": "alejandrocastrovega@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T12:30:00.000-03:00",
    "endTime": "2025-10-24T14:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T14:14:00.000-03:00",
    "updatedAt": "2025-10-24T17:14:00.000-03:00"
  },
  {
    "id": "res-22",
    "tableId": "table-7",
    "customer": {
      "name": "Carmen Pérez Peña",
      "phone": "+54-11-8901-2345",
      "email": "carmenpérezpeña@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T00:00:00.000-03:00",
    "endTime": "2025-10-20T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T13:19:00.000-03:00",
    "updatedAt": "2025-10-19T14:19:00.000-03:00"
  },
  {
    "id": "res-23",
    "tableId": "table-6",
    "customer": {
      "name": "Alejandro Castro Aguilar",
      "phone": "+54-11-9090-1212",
      "email": "alejandrocastroaguilar@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T16:00:00.000-03:00",
    "endTime": "2025-10-20T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-20T13:52:00.000-03:00",
    "updatedAt": "2025-10-20T13:52:00.000-03:00"
  },
  {
    "id": "res-24",
    "tableId": "table-1",
    "customer": {
      "name": "Teresa Molina Romero",
      "phone": "+54-11-5678-9012",
      "email": "teresamolinaromero@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T16:30:00.000-03:00",
    "endTime": "2025-10-22T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-22T12:01:00.000-03:00",
    "updatedAt": "2025-10-22T15:01:00.000-03:00"
  },
  {
    "id": "res-25",
    "tableId": "table-3",
    "customer": {
      "name": "Ana García Ruiz",
      "phone": "+54-11-5555-6666",
      "email": "anagarcíaruiz@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-21T15:30:00.000-03:00",
    "endTime": "2025-10-21T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-21T22:34:00.000-03:00",
    "updatedAt": "2025-10-22T01:34:00.000-03:00"
  },
  {
    "id": "res-26",
    "tableId": "table-7",
    "customer": {
      "name": "Beatriz Guerrero Silva",
      "phone": "+54-11-8901-2345",
      "email": "beatrizguerrerosilva@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T19:30:00.000-03:00",
    "endTime": "2025-10-22T20:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-22T18:21:00.000-03:00",
    "updatedAt": "2025-10-22T18:21:00.000-03:00"
  },
  {
    "id": "res-27",
    "tableId": "table-7",
    "customer": {
      "name": "Mónica Flores Ramos",
      "phone": "+54-11-6767-8989",
      "email": "mónicafloresramos@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T15:30:00.000-03:00",
    "endTime": "2025-10-23T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-23T21:40:00.000-03:00",
    "updatedAt": "2025-10-23T21:40:00.000-03:00"
  },
  {
    "id": "res-28",
    "tableId": "table-5",
    "customer": {
      "name": "Sergio Peña López",
      "phone": "+54-11-5678-9012",
      "email": "sergiopeñalópez@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T21:00:00.000-03:00",
    "endTime": "2025-10-25T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-24T14:37:00.000-03:00",
    "updatedAt": "2025-10-24T14:37:00.000-03:00"
  },
  {
    "id": "res-29",
    "tableId": "table-5",
    "customer": {
      "name": "Claudia Medina López",
      "phone": "+54-11-7890-1234",
      "email": "claudiamedinalópez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T15:00:00.000-03:00",
    "endTime": "2025-10-24T18:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-24T14:47:00.000-03:00",
    "updatedAt": "2025-10-24T14:47:00.000-03:00"
  },
  {
    "id": "res-30",
    "tableId": "table-4",
    "customer": {
      "name": "Carmen Pérez Molina",
      "phone": "+54-11-4567-8901",
      "email": "carmenpérezmolina@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T20:30:00.000-03:00",
    "endTime": "2025-10-20T21:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-20T16:38:00.000-03:00",
    "updatedAt": "2025-10-20T16:38:00.000-03:00"
  },
  {
    "id": "res-31",
    "tableId": "table-6",
    "customer": {
      "name": "Javier Torres Ortega",
      "phone": "+54-11-3456-7890",
      "email": "javiertorresortega@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T00:30:00.000-03:00",
    "endTime": "2025-10-24T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-23T16:31:00.000-03:00",
    "updatedAt": "2025-10-23T16:31:00.000-03:00"
  },
  {
    "id": "res-32",
    "tableId": "table-4",
    "customer": {
      "name": "Valeria Silva Guerrero",
      "phone": "+54-11-3456-7890",
      "email": "valeriasilvaguerrero@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T11:00:00.000-03:00",
    "endTime": "2025-10-24T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T14:35:00.000-03:00",
    "updatedAt": "2025-10-24T18:35:00.000-03:00"
  },
  {
    "id": "res-33",
    "tableId": "table-5",
    "customer": {
      "name": "Valeria Silva Cabrera",
      "phone": "+54-11-9012-3456",
      "email": "valeriasilvacabrera@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T16:30:00.000-03:00",
    "endTime": "2025-10-20T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-20T14:03:00.000-03:00",
    "updatedAt": "2025-10-20T14:03:00.000-03:00"
  },
  {
    "id": "res-34",
    "tableId": "table-4",
    "customer": {
      "name": "Camila Espinoza Aguilar",
      "phone": "+54-11-0123-4567",
      "email": "camilaespinozaaguilar@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T10:30:00.000-03:00",
    "endTime": "2025-10-24T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-24T19:35:00.000-03:00",
    "updatedAt": "2025-10-24T22:35:00.000-03:00"
  },
  {
    "id": "res-35",
    "tableId": "table-7",
    "customer": {
      "name": "David Jiménez Silva",
      "phone": "+54-11-9999-0000",
      "email": "davidjiménezsilva@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T15:00:00.000-03:00",
    "endTime": "2025-10-24T16:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T16:56:00.000-03:00",
    "updatedAt": "2025-10-24T16:56:00.000-03:00"
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
