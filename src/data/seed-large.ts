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
      "min": 2,
      "max": 5
    },
    "sortOrder": 1
  },
  {
    "id": "table-2",
    "sectorId": "sector-1",
    "name": "Table 2",
    "capacity": {
      "min": 4,
      "max": 5
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
      "min": 3,
      "max": 5
    },
    "sortOrder": 6
  },
  {
    "id": "table-7",
    "sectorId": "sector-2",
    "name": "Table 7",
    "capacity": {
      "min": 4,
      "max": 6
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
      "max": 5
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
      "min": 2,
      "max": 4
    },
    "sortOrder": 12
  },
  {
    "id": "table-13",
    "sectorId": "sector-4",
    "name": "Table 13",
    "capacity": {
      "min": 2,
      "max": 5
    },
    "sortOrder": 13
  },
  {
    "id": "table-14",
    "sectorId": "sector-4",
    "name": "Table 14",
    "capacity": {
      "min": 5,
      "max": 7
    },
    "sortOrder": 14
  },
  {
    "id": "table-15",
    "sectorId": "sector-4",
    "name": "Table 15",
    "capacity": {
      "min": 3,
      "max": 5
    },
    "sortOrder": 15
  },
  {
    "id": "table-16",
    "sectorId": "sector-5",
    "name": "Table 16",
    "capacity": {
      "min": 5,
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
      "max": 6
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
      "min": 5,
      "max": 6
    },
    "sortOrder": 20
  },
  {
    "id": "table-21",
    "sectorId": "sector-6",
    "name": "Table 21",
    "capacity": {
      "min": 2,
      "max": 4
    },
    "sortOrder": 21
  },
  {
    "id": "table-22",
    "sectorId": "sector-7",
    "name": "Table 22",
    "capacity": {
      "min": 2,
      "max": 3
    },
    "sortOrder": 22
  },
  {
    "id": "table-23",
    "sectorId": "sector-7",
    "name": "Table 23",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 23
  },
  {
    "id": "table-24",
    "sectorId": "sector-7",
    "name": "Table 24",
    "capacity": {
      "min": 5,
      "max": 8
    },
    "sortOrder": 24
  },
  {
    "id": "table-25",
    "sectorId": "sector-8",
    "name": "Table 25",
    "capacity": {
      "min": 2,
      "max": 4
    },
    "sortOrder": 25
  },
  {
    "id": "table-26",
    "sectorId": "sector-8",
    "name": "Table 26",
    "capacity": {
      "min": 4,
      "max": 6
    },
    "sortOrder": 26
  },
  {
    "id": "table-27",
    "sectorId": "sector-8",
    "name": "Table 27",
    "capacity": {
      "min": 3,
      "max": 6
    },
    "sortOrder": 27
  },
  {
    "id": "table-28",
    "sectorId": "sector-9",
    "name": "Table 28",
    "capacity": {
      "min": 2,
      "max": 5
    },
    "sortOrder": 28
  },
  {
    "id": "table-29",
    "sectorId": "sector-9",
    "name": "Table 29",
    "capacity": {
      "min": 4,
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
      "max": 4
    },
    "sortOrder": 30
  }
];

export const seedReservations: Reservation[] = [
  {
    "id": "res-1",
    "tableId": "table-11",
    "customer": {
      "name": "Natalia Ortega Ramos",
      "phone": "+54-11-7890-1234",
      "email": "nataliaortegaramos@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-17T17:30:00.000-03:00",
    "endTime": "2025-10-17T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-17T15:05:00.000-03:00",
    "updatedAt": "2025-10-17T16:05:00.000-03:00"
  },
  {
    "id": "res-2",
    "tableId": "table-2",
    "customer": {
      "name": "Sebastián Vega García",
      "phone": "+54-11-5555-6666",
      "email": "sebastiánvegagarcía@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-25T18:30:00.000-03:00",
    "endTime": "2025-10-25T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-25T12:09:00.000-03:00",
    "updatedAt": "2025-10-25T13:09:00.000-03:00"
  },
  {
    "id": "res-3",
    "tableId": "table-19",
    "customer": {
      "name": "Fernando Ramos Molina",
      "phone": "+54-11-1234-5678",
      "email": "fernandoramosmolina@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-09T13:00:00.000-03:00",
    "endTime": "2025-10-09T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-09T11:50:00.000-03:00",
    "updatedAt": "2025-10-09T12:50:00.000-03:00"
  },
  {
    "id": "res-4",
    "tableId": "table-4",
    "customer": {
      "name": "Patricia Navarro Aguilar",
      "phone": "+54-11-1212-3434",
      "email": "patricianavarroaguilar@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T23:30:00.000-03:00",
    "endTime": "2025-10-21T02:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-20T22:31:00.000-03:00",
    "updatedAt": "2025-10-21T02:31:00.000-03:00"
  },
  {
    "id": "res-5",
    "tableId": "table-22",
    "customer": {
      "name": "Sergio Peña Flores",
      "phone": "+54-11-5656-7878",
      "email": "sergiopeñaflores@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T01:30:00.000-03:00",
    "endTime": "2025-10-19T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-18T13:43:00.000-03:00",
    "updatedAt": "2025-10-18T16:43:00.000-03:00"
  },
  {
    "id": "res-6",
    "tableId": "table-12",
    "customer": {
      "name": "Nicolás Fuentes Medina",
      "phone": "+54-11-5678-9012",
      "email": "nicolásfuentesmedina@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T23:30:00.000-03:00",
    "endTime": "2025-10-12T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-11T14:04:00.000-03:00",
    "updatedAt": "2025-10-11T15:04:00.000-03:00"
  },
  {
    "id": "res-7",
    "tableId": "table-8",
    "customer": {
      "name": "Ana García Herrera",
      "phone": "+54-11-9090-1212",
      "email": "anagarcíaherrera@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-10T17:00:00.000-03:00",
    "endTime": "2025-10-10T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-10T21:44:00.000-03:00",
    "updatedAt": "2025-10-10T21:44:00.000-03:00"
  },
  {
    "id": "res-8",
    "tableId": "table-9",
    "customer": {
      "name": "Sofia Reyes Reyes",
      "phone": "+54-11-6789-0123",
      "email": "sofiareyesreyes@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T20:30:00.000-03:00",
    "endTime": "2025-10-11T22:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-11T14:41:00.000-03:00",
    "updatedAt": "2025-10-11T14:41:00.000-03:00"
  },
  {
    "id": "res-9",
    "tableId": "table-5",
    "customer": {
      "name": "Alejandro Castro Reyes",
      "phone": "+54-11-3333-4444",
      "email": "alejandrocastroreyes@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-04T18:30:00.000-03:00",
    "endTime": "2025-10-04T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-04T13:08:00.000-03:00",
    "updatedAt": "2025-10-04T13:08:00.000-03:00"
  },
  {
    "id": "res-10",
    "tableId": "table-5",
    "customer": {
      "name": "Adrián Cabrera Reyes",
      "phone": "+54-11-5555-6666",
      "email": "adriáncabrerareyes@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T19:00:00.000-03:00",
    "endTime": "2025-10-24T21:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T14:09:00.000-03:00",
    "updatedAt": "2025-10-24T18:09:00.000-03:00"
  },
  {
    "id": "res-11",
    "tableId": "table-20",
    "customer": {
      "name": "Pablo Delgado Ruiz",
      "phone": "+54-11-5555-6666",
      "email": "pablodelgadoruiz@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-07T13:30:00.000-03:00",
    "endTime": "2025-10-07T14:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-07T20:39:00.000-03:00",
    "updatedAt": "2025-10-07T20:39:00.000-03:00"
  },
  {
    "id": "res-12",
    "tableId": "table-10",
    "customer": {
      "name": "Raquel Vargas Molina",
      "phone": "+54-11-3333-4444",
      "email": "raquelvargasmolina@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-03T00:30:00.000-03:00",
    "endTime": "2025-10-03T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-02T21:25:00.000-03:00",
    "updatedAt": "2025-10-02T21:25:00.000-03:00"
  },
  {
    "id": "res-13",
    "tableId": "table-11",
    "customer": {
      "name": "Beatriz Guerrero Campos",
      "phone": "+54-11-6767-8989",
      "email": "beatrizguerrerocampos@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T23:30:00.000-03:00",
    "endTime": "2025-10-19T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-18T16:31:00.000-03:00",
    "updatedAt": "2025-10-18T16:31:00.000-03:00"
  },
  {
    "id": "res-14",
    "tableId": "table-19",
    "customer": {
      "name": "Isabel Díaz Reyes",
      "phone": "+54-11-2345-6789",
      "email": "isabeldíazreyes@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T11:00:00.000-03:00",
    "endTime": "2025-10-17T13:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-17T14:59:00.000-03:00",
    "updatedAt": "2025-10-17T14:59:00.000-03:00"
  },
  {
    "id": "res-15",
    "tableId": "table-16",
    "customer": {
      "name": "Francisco Martín Romero",
      "phone": "+54-11-9012-3456",
      "email": "franciscomartínromero@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-14T23:00:00.000-03:00",
    "endTime": "2025-10-15T02:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-14T16:14:00.000-03:00",
    "updatedAt": "2025-10-14T20:14:00.000-03:00"
  },
  {
    "id": "res-16",
    "tableId": "table-13",
    "customer": {
      "name": "Mónica Flores García",
      "phone": "+54-11-1234-5678",
      "email": "mónicafloresgarcía@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T01:00:00.000-03:00",
    "endTime": "2025-10-19T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-18T22:18:00.000-03:00",
    "updatedAt": "2025-10-18T22:18:00.000-03:00"
  },
  {
    "id": "res-17",
    "tableId": "table-6",
    "customer": {
      "name": "Patricia Navarro Aguilar",
      "phone": "+54-11-5555-6666",
      "email": "patricianavarroaguilar@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-22T23:30:00.000-03:00",
    "endTime": "2025-10-23T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-22T15:45:00.000-03:00",
    "updatedAt": "2025-10-22T18:45:00.000-03:00"
  },
  {
    "id": "res-18",
    "tableId": "table-11",
    "customer": {
      "name": "Elena Moreno Mendoza",
      "phone": "+54-11-6789-0123",
      "email": "elenamorenomendoza@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-28T14:30:00.000-03:00",
    "endTime": "2025-10-28T16:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-28T18:53:00.000-03:00",
    "updatedAt": "2025-10-28T18:53:00.000-03:00"
  },
  {
    "id": "res-19",
    "tableId": "table-21",
    "customer": {
      "name": "Laura Sánchez Rojas",
      "phone": "+54-11-1212-3434",
      "email": "laurasánchezrojas@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T15:00:00.000-03:00",
    "endTime": "2025-10-26T17:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-26T12:55:00.000-03:00",
    "updatedAt": "2025-10-26T12:55:00.000-03:00"
  },
  {
    "id": "res-20",
    "tableId": "table-7",
    "customer": {
      "name": "Andrea Mendoza Castro",
      "phone": "+54-11-7890-1234",
      "email": "andreamendozacastro@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-02T18:00:00.000-03:00",
    "endTime": "2025-10-02T20:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-02T20:34:00.000-03:00",
    "updatedAt": "2025-10-02T21:34:00.000-03:00"
  },
  {
    "id": "res-21",
    "tableId": "table-16",
    "customer": {
      "name": "Roberto Herrera Pérez",
      "phone": "+54-11-5555-6666",
      "email": "robertoherrerapérez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T22:00:00.000-03:00",
    "endTime": "2025-10-22T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-22T14:31:00.000-03:00",
    "updatedAt": "2025-10-22T14:31:00.000-03:00"
  },
  {
    "id": "res-22",
    "tableId": "table-17",
    "customer": {
      "name": "Roberto Herrera Campos",
      "phone": "+54-11-7890-1234",
      "email": "robertoherreracampos@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-16T13:30:00.000-03:00",
    "endTime": "2025-10-16T16:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-16T15:08:00.000-03:00",
    "updatedAt": "2025-10-16T15:08:00.000-03:00"
  },
  {
    "id": "res-23",
    "tableId": "table-8",
    "customer": {
      "name": "Daniel Campos Peña",
      "phone": "+54-11-5656-7878",
      "email": "danielcampospeña@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-02T23:30:00.000-03:00",
    "endTime": "2025-10-03T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-02T18:37:00.000-03:00",
    "updatedAt": "2025-10-02T20:37:00.000-03:00"
  },
  {
    "id": "res-24",
    "tableId": "table-19",
    "customer": {
      "name": "Javier Torres Ortega",
      "phone": "+54-11-1111-2222",
      "email": "javiertorresortega@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T20:30:00.000-03:00",
    "endTime": "2025-10-18T23:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-18T20:59:00.000-03:00",
    "updatedAt": "2025-10-19T00:59:00.000-03:00"
  },
  {
    "id": "res-25",
    "tableId": "table-12",
    "customer": {
      "name": "Rubén Herrera Castro",
      "phone": "+54-11-5656-7878",
      "email": "rubénherreracastro@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T00:00:00.000-03:00",
    "endTime": "2025-10-19T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-18T21:42:00.000-03:00",
    "updatedAt": "2025-10-18T21:42:00.000-03:00"
  },
  {
    "id": "res-26",
    "tableId": "table-25",
    "customer": {
      "name": "Nicolás Fuentes Delgado",
      "phone": "+54-11-1313-4545",
      "email": "nicolásfuentesdelgado@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-12T16:30:00.000-03:00",
    "endTime": "2025-10-12T18:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-12T20:19:00.000-03:00",
    "updatedAt": "2025-10-12T20:19:00.000-03:00"
  },
  {
    "id": "res-27",
    "tableId": "table-28",
    "customer": {
      "name": "Daniel Campos López",
      "phone": "+54-11-9999-0000",
      "email": "danielcamposlópez@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T15:00:00.000-03:00",
    "endTime": "2025-10-22T17:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-22T21:39:00.000-03:00",
    "updatedAt": "2025-10-22T21:39:00.000-03:00"
  },
  {
    "id": "res-28",
    "tableId": "table-14",
    "customer": {
      "name": "Elena Moreno Silva",
      "phone": "+54-11-5555-6666",
      "email": "elenamorenosilva@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T19:00:00.000-03:00",
    "endTime": "2025-10-10T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-10T18:52:00.000-03:00",
    "updatedAt": "2025-10-10T19:52:00.000-03:00"
  },
  {
    "id": "res-29",
    "tableId": "table-20",
    "customer": {
      "name": "Adrián Cabrera Medina",
      "phone": "+54-11-3456-7890",
      "email": "adriáncabreramedina@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T11:00:00.000-03:00",
    "endTime": "2025-10-11T13:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-11T12:16:00.000-03:00",
    "updatedAt": "2025-10-11T13:16:00.000-03:00"
  },
  {
    "id": "res-30",
    "tableId": "table-15",
    "customer": {
      "name": "Natalia Ortega Morales",
      "phone": "+54-11-3333-4444",
      "email": "nataliaortegamorales@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T01:00:00.000-03:00",
    "endTime": "2025-10-04T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-03T21:10:00.000-03:00",
    "updatedAt": "2025-10-03T21:10:00.000-03:00"
  },
  {
    "id": "res-31",
    "tableId": "table-15",
    "customer": {
      "name": "Mónica Flores Aguilar",
      "phone": "+54-11-1111-2222",
      "email": "mónicafloresaguilar@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-02T10:00:00.000-03:00",
    "endTime": "2025-10-02T11:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-02T11:06:00.000-03:00",
    "updatedAt": "2025-10-02T11:06:00.000-03:00"
  },
  {
    "id": "res-32",
    "tableId": "table-26",
    "customer": {
      "name": "David Jiménez Ruiz",
      "phone": "+54-11-6767-8989",
      "email": "davidjiménezruiz@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T22:00:00.000-03:00",
    "endTime": "2025-10-11T00:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-10T13:42:00.000-03:00",
    "updatedAt": "2025-10-10T13:42:00.000-03:00"
  },
  {
    "id": "res-33",
    "tableId": "table-27",
    "customer": {
      "name": "David Jiménez Jiménez",
      "phone": "+54-11-9012-3456",
      "email": "davidjiménezjiménez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T23:00:00.000-03:00",
    "endTime": "2025-10-11T01:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-10T15:13:00.000-03:00",
    "updatedAt": "2025-10-10T15:13:00.000-03:00"
  },
  {
    "id": "res-34",
    "tableId": "table-11",
    "customer": {
      "name": "María Rodríguez Martín",
      "phone": "+54-11-6789-0123",
      "email": "maríarodríguezmartín@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-16T20:30:00.000-03:00",
    "endTime": "2025-10-16T22:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-16T13:09:00.000-03:00",
    "updatedAt": "2025-10-16T15:09:00.000-03:00"
  },
  {
    "id": "res-35",
    "tableId": "table-29",
    "customer": {
      "name": "Pablo Delgado Navarro",
      "phone": "+54-11-9999-0000",
      "email": "pablodelgadonavarro@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-12T10:30:00.000-03:00",
    "endTime": "2025-10-12T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-12T16:51:00.000-03:00",
    "updatedAt": "2025-10-12T16:51:00.000-03:00"
  },
  {
    "id": "res-36",
    "tableId": "table-14",
    "customer": {
      "name": "Alejandro Castro Espinoza",
      "phone": "+54-11-4567-8901",
      "email": "alejandrocastroespinoza@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-09-30T18:00:00.000-03:00",
    "endTime": "2025-09-30T19:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-09-30T18:14:00.000-03:00",
    "updatedAt": "2025-09-30T18:14:00.000-03:00"
  },
  {
    "id": "res-37",
    "tableId": "table-24",
    "customer": {
      "name": "José Martínez Espinoza",
      "phone": "+54-11-1234-5678",
      "email": "josémartínezespinoza@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T18:30:00.000-03:00",
    "endTime": "2025-10-11T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-11T22:20:00.000-03:00",
    "updatedAt": "2025-10-11T23:20:00.000-03:00"
  },
  {
    "id": "res-38",
    "tableId": "table-11",
    "customer": {
      "name": "Fernando Ramos Flores",
      "phone": "+54-11-7777-8888",
      "email": "fernandoramosflores@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-29T16:00:00.000-03:00",
    "endTime": "2025-10-29T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-29T18:22:00.000-03:00",
    "updatedAt": "2025-10-29T18:22:00.000-03:00"
  },
  {
    "id": "res-39",
    "tableId": "table-6",
    "customer": {
      "name": "Cristina Romero Jiménez",
      "phone": "+54-11-6789-0123",
      "email": "cristinaromerojiménez@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-26T00:30:00.000-03:00",
    "endTime": "2025-10-26T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-25T18:37:00.000-03:00",
    "updatedAt": "2025-10-25T19:37:00.000-03:00"
  },
  {
    "id": "res-40",
    "tableId": "table-22",
    "customer": {
      "name": "Camila Espinoza Serrano",
      "phone": "+54-11-6789-0123",
      "email": "camilaespinozaserrano@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T22:00:00.000-03:00",
    "endTime": "2025-10-19T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-19T19:15:00.000-03:00",
    "updatedAt": "2025-10-19T23:15:00.000-03:00"
  },
  {
    "id": "res-41",
    "tableId": "table-2",
    "customer": {
      "name": "Andrea Mendoza Martín",
      "phone": "+54-11-1111-2222",
      "email": "andreamendozamartín@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-12T21:30:00.000-03:00",
    "endTime": "2025-10-12T23:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-12T13:16:00.000-03:00",
    "updatedAt": "2025-10-12T13:16:00.000-03:00"
  },
  {
    "id": "res-42",
    "tableId": "table-2",
    "customer": {
      "name": "Lucía Morales Silva",
      "phone": "+54-11-1111-2222",
      "email": "lucíamoralessilva@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-09T18:00:00.000-03:00",
    "endTime": "2025-10-09T21:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-09T13:16:00.000-03:00",
    "updatedAt": "2025-10-09T13:16:00.000-03:00"
  },
  {
    "id": "res-43",
    "tableId": "table-29",
    "customer": {
      "name": "Adrián Cabrera Rojas",
      "phone": "+54-11-7890-1234",
      "email": "adriáncabrerarojas@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-26T17:00:00.000-03:00",
    "endTime": "2025-10-26T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-26T14:54:00.000-03:00",
    "updatedAt": "2025-10-26T14:54:00.000-03:00"
  },
  {
    "id": "res-44",
    "tableId": "table-17",
    "customer": {
      "name": "Camila Espinoza Herrera",
      "phone": "+54-11-7777-8888",
      "email": "camilaespinozaherrera@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-08T19:30:00.000-03:00",
    "endTime": "2025-10-08T22:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-08T20:35:00.000-03:00",
    "updatedAt": "2025-10-08T23:35:00.000-03:00"
  },
  {
    "id": "res-45",
    "tableId": "table-20",
    "customer": {
      "name": "Álvaro Serrano Molina",
      "phone": "+54-11-2345-6789",
      "email": "álvaroserranomolina@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-25T15:30:00.000-03:00",
    "endTime": "2025-10-25T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-25T19:12:00.000-03:00",
    "updatedAt": "2025-10-25T19:12:00.000-03:00"
  },
  {
    "id": "res-46",
    "tableId": "table-12",
    "customer": {
      "name": "Cristina Romero Flores",
      "phone": "+54-11-2345-6789",
      "email": "cristinaromeroflores@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-01T13:00:00.000-03:00",
    "endTime": "2025-10-01T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-01T19:00:00.000-03:00",
    "updatedAt": "2025-10-01T19:00:00.000-03:00"
  },
  {
    "id": "res-47",
    "tableId": "table-15",
    "customer": {
      "name": "María Rodríguez Delgado",
      "phone": "+54-11-4567-8901",
      "email": "maríarodríguezdelgado@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-17T18:00:00.000-03:00",
    "endTime": "2025-10-17T19:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-17T16:49:00.000-03:00",
    "updatedAt": "2025-10-17T19:49:00.000-03:00"
  },
  {
    "id": "res-48",
    "tableId": "table-18",
    "customer": {
      "name": "Sofia Reyes Ortega",
      "phone": "+54-11-3333-4444",
      "email": "sofiareyesortega@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-02T10:00:00.000-03:00",
    "endTime": "2025-10-02T11:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-02T20:10:00.000-03:00",
    "updatedAt": "2025-10-02T20:10:00.000-03:00"
  },
  {
    "id": "res-49",
    "tableId": "table-21",
    "customer": {
      "name": "Gabriel Rojas Ruiz",
      "phone": "+54-11-8901-2345",
      "email": "gabrielrojasruiz@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T16:00:00.000-03:00",
    "endTime": "2025-10-19T19:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-19T15:19:00.000-03:00",
    "updatedAt": "2025-10-19T15:19:00.000-03:00"
  },
  {
    "id": "res-50",
    "tableId": "table-17",
    "customer": {
      "name": "Mónica Flores Morales",
      "phone": "+54-11-9012-3456",
      "email": "mónicafloresmorales@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T12:30:00.000-03:00",
    "endTime": "2025-10-26T15:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-26T15:57:00.000-03:00",
    "updatedAt": "2025-10-26T18:57:00.000-03:00"
  },
  {
    "id": "res-51",
    "tableId": "table-7",
    "customer": {
      "name": "Elena Moreno García",
      "phone": "+54-11-8901-2345",
      "email": "elenamorenogarcía@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T10:00:00.000-03:00",
    "endTime": "2025-10-04T11:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-04T15:43:00.000-03:00",
    "updatedAt": "2025-10-04T15:43:00.000-03:00"
  },
  {
    "id": "res-52",
    "tableId": "table-10",
    "customer": {
      "name": "Adrián Cabrera Delgado",
      "phone": "+54-11-3456-7890",
      "email": "adriáncabreradelgado@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-02T17:00:00.000-03:00",
    "endTime": "2025-10-02T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-02T21:24:00.000-03:00",
    "updatedAt": "2025-10-02T21:24:00.000-03:00"
  },
  {
    "id": "res-53",
    "tableId": "table-25",
    "customer": {
      "name": "Cristina Romero Romero",
      "phone": "+54-11-5555-6666",
      "email": "cristinaromeroromero@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T22:00:00.000-03:00",
    "endTime": "2025-10-12T01:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-11T12:29:00.000-03:00",
    "updatedAt": "2025-10-11T15:29:00.000-03:00"
  },
  {
    "id": "res-54",
    "tableId": "table-15",
    "customer": {
      "name": "Patricia Navarro Romero",
      "phone": "+54-11-1234-5678",
      "email": "patricianavarroromero@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-09T22:00:00.000-03:00",
    "endTime": "2025-10-09T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-09T12:07:00.000-03:00",
    "updatedAt": "2025-10-09T12:07:00.000-03:00"
  },
  {
    "id": "res-55",
    "tableId": "table-1",
    "customer": {
      "name": "Raquel Vargas Espinoza",
      "phone": "+54-11-8901-2345",
      "email": "raquelvargasespinoza@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-15T21:00:00.000-03:00",
    "endTime": "2025-10-15T23:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-15T15:37:00.000-03:00",
    "updatedAt": "2025-10-15T15:37:00.000-03:00"
  },
  {
    "id": "res-56",
    "tableId": "table-3",
    "customer": {
      "name": "Carmen Pérez Díaz",
      "phone": "+54-11-7777-8888",
      "email": "carmenpérezdíaz@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-16T17:30:00.000-03:00",
    "endTime": "2025-10-16T19:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-16T22:38:00.000-03:00",
    "updatedAt": "2025-10-16T23:38:00.000-03:00"
  },
  {
    "id": "res-57",
    "tableId": "table-5",
    "customer": {
      "name": "Elena Moreno Aguilar",
      "phone": "+54-11-8901-2345",
      "email": "elenamorenoaguilar@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T19:00:00.000-03:00",
    "endTime": "2025-10-04T21:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-04T15:40:00.000-03:00",
    "updatedAt": "2025-10-04T15:40:00.000-03:00"
  },
  {
    "id": "res-58",
    "tableId": "table-28",
    "customer": {
      "name": "Rubén Herrera Vega",
      "phone": "+54-11-1212-3434",
      "email": "rubénherreravega@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T19:30:00.000-03:00",
    "endTime": "2025-10-19T22:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-19T14:22:00.000-03:00",
    "updatedAt": "2025-10-19T14:22:00.000-03:00"
  },
  {
    "id": "res-59",
    "tableId": "table-1",
    "customer": {
      "name": "Mónica Flores González",
      "phone": "+54-11-7890-1234",
      "email": "mónicafloresgonzález@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T17:00:00.000-03:00",
    "endTime": "2025-10-24T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T19:09:00.000-03:00",
    "updatedAt": "2025-10-24T19:09:00.000-03:00"
  },
  {
    "id": "res-60",
    "tableId": "table-2",
    "customer": {
      "name": "Lucía Morales Silva",
      "phone": "+54-11-1111-2222",
      "email": "lucíamoralessilva@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-09T14:30:00.000-03:00",
    "endTime": "2025-10-09T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-09T11:54:00.000-03:00",
    "updatedAt": "2025-10-09T12:54:00.000-03:00"
  },
  {
    "id": "res-61",
    "tableId": "table-14",
    "customer": {
      "name": "Patricia Navarro Morales",
      "phone": "+54-11-6789-0123",
      "email": "patricianavarromorales@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-09T17:00:00.000-03:00",
    "endTime": "2025-10-09T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-09T14:10:00.000-03:00",
    "updatedAt": "2025-10-09T16:10:00.000-03:00"
  },
  {
    "id": "res-62",
    "tableId": "table-26",
    "customer": {
      "name": "Javier Torres Medina",
      "phone": "+54-11-1234-5678",
      "email": "javiertorresmedina@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-06T00:30:00.000-03:00",
    "endTime": "2025-10-06T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-05T18:55:00.000-03:00",
    "updatedAt": "2025-10-05T20:55:00.000-03:00"
  },
  {
    "id": "res-63",
    "tableId": "table-20",
    "customer": {
      "name": "Elena Moreno Rodríguez",
      "phone": "+54-11-1111-2222",
      "email": "elenamorenorodríguez@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-16T10:30:00.000-03:00",
    "endTime": "2025-10-16T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-16T17:05:00.000-03:00",
    "updatedAt": "2025-10-16T17:05:00.000-03:00"
  },
  {
    "id": "res-64",
    "tableId": "table-13",
    "customer": {
      "name": "Cristina Romero Mendoza",
      "phone": "+54-11-9999-0000",
      "email": "cristinaromeromendoza@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-29T18:30:00.000-03:00",
    "endTime": "2025-10-29T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-29T15:50:00.000-03:00",
    "updatedAt": "2025-10-29T15:50:00.000-03:00"
  },
  {
    "id": "res-65",
    "tableId": "table-23",
    "customer": {
      "name": "Claudia Medina Campos",
      "phone": "+54-11-6767-8989",
      "email": "claudiamedinacampos@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T10:00:00.000-03:00",
    "endTime": "2025-10-03T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-03T13:56:00.000-03:00",
    "updatedAt": "2025-10-03T16:56:00.000-03:00"
  },
  {
    "id": "res-66",
    "tableId": "table-23",
    "customer": {
      "name": "Hugo Aguilar Rodríguez",
      "phone": "+54-11-5656-7878",
      "email": "hugoaguilarrodríguez@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-09-30T14:00:00.000-03:00",
    "endTime": "2025-09-30T17:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-09-30T17:40:00.000-03:00",
    "updatedAt": "2025-09-30T17:40:00.000-03:00"
  },
  {
    "id": "res-67",
    "tableId": "table-24",
    "customer": {
      "name": "Lucía Morales Vega",
      "phone": "+54-11-7777-8888",
      "email": "lucíamoralesvega@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T18:30:00.000-03:00",
    "endTime": "2025-10-23T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-23T15:16:00.000-03:00",
    "updatedAt": "2025-10-23T15:16:00.000-03:00"
  },
  {
    "id": "res-68",
    "tableId": "table-30",
    "customer": {
      "name": "Carlos López Moreno",
      "phone": "+54-11-8901-2345",
      "email": "carloslópezmoreno@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-15T13:30:00.000-03:00",
    "endTime": "2025-10-15T16:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-15T12:47:00.000-03:00",
    "updatedAt": "2025-10-15T12:47:00.000-03:00"
  },
  {
    "id": "res-69",
    "tableId": "table-10",
    "customer": {
      "name": "Pablo Delgado Rodríguez",
      "phone": "+54-11-8901-2345",
      "email": "pablodelgadorodríguez@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T12:00:00.000-03:00",
    "endTime": "2025-10-17T14:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-17T22:38:00.000-03:00",
    "updatedAt": "2025-10-18T02:38:00.000-03:00"
  },
  {
    "id": "res-70",
    "tableId": "table-19",
    "customer": {
      "name": "Lucía Morales Rojas",
      "phone": "+54-11-9012-3456",
      "email": "lucíamoralesrojas@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T15:30:00.000-03:00",
    "endTime": "2025-10-10T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-10T13:31:00.000-03:00",
    "updatedAt": "2025-10-10T13:31:00.000-03:00"
  },
  {
    "id": "res-71",
    "tableId": "table-15",
    "customer": {
      "name": "Sofia Reyes Castro",
      "phone": "+54-11-5678-9012",
      "email": "sofiareyescastro@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T14:00:00.000-03:00",
    "endTime": "2025-10-24T16:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T19:10:00.000-03:00",
    "updatedAt": "2025-10-24T23:10:00.000-03:00"
  },
  {
    "id": "res-72",
    "tableId": "table-9",
    "customer": {
      "name": "Pablo Delgado López",
      "phone": "+54-11-5555-6666",
      "email": "pablodelgadolópez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-03T12:00:00.000-03:00",
    "endTime": "2025-10-03T14:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-03T21:14:00.000-03:00",
    "updatedAt": "2025-10-03T21:14:00.000-03:00"
  },
  {
    "id": "res-73",
    "tableId": "table-28",
    "customer": {
      "name": "Carlos López Sánchez",
      "phone": "+54-11-6767-8989",
      "email": "carloslópezsánchez@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-12T23:30:00.000-03:00",
    "endTime": "2025-10-13T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-12T21:48:00.000-03:00",
    "updatedAt": "2025-10-13T00:48:00.000-03:00"
  },
  {
    "id": "res-74",
    "tableId": "table-14",
    "customer": {
      "name": "Isabel Díaz Romero",
      "phone": "+54-11-0123-4567",
      "email": "isabeldíazromero@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-21T16:30:00.000-03:00",
    "endTime": "2025-10-21T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-21T13:22:00.000-03:00",
    "updatedAt": "2025-10-21T13:22:00.000-03:00"
  },
  {
    "id": "res-75",
    "tableId": "table-12",
    "customer": {
      "name": "Camila Espinoza García",
      "phone": "+54-11-5656-7878",
      "email": "camilaespinozagarcía@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T10:30:00.000-03:00",
    "endTime": "2025-10-10T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-10T17:06:00.000-03:00",
    "updatedAt": "2025-10-10T17:06:00.000-03:00"
  },
  {
    "id": "res-76",
    "tableId": "table-21",
    "customer": {
      "name": "Lucía Morales Sánchez",
      "phone": "+54-11-7890-1234",
      "email": "lucíamoralessánchez@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-05T15:30:00.000-03:00",
    "endTime": "2025-10-05T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-05T20:29:00.000-03:00",
    "updatedAt": "2025-10-05T20:29:00.000-03:00"
  },
  {
    "id": "res-77",
    "tableId": "table-26",
    "customer": {
      "name": "Patricia Navarro Sánchez",
      "phone": "+54-11-7777-8888",
      "email": "patricianavarrosánchez@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T19:00:00.000-03:00",
    "endTime": "2025-10-24T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T22:21:00.000-03:00",
    "updatedAt": "2025-10-24T22:21:00.000-03:00"
  },
  {
    "id": "res-78",
    "tableId": "table-29",
    "customer": {
      "name": "José Martínez Castro",
      "phone": "+54-11-2345-6789",
      "email": "josémartínezcastro@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T18:30:00.000-03:00",
    "endTime": "2025-10-11T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-11T20:52:00.000-03:00",
    "updatedAt": "2025-10-11T22:52:00.000-03:00"
  },
  {
    "id": "res-79",
    "tableId": "table-13",
    "customer": {
      "name": "Claudia Medina Martín",
      "phone": "+54-11-7890-1234",
      "email": "claudiamedinamartín@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T11:30:00.000-03:00",
    "endTime": "2025-10-26T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-26T16:58:00.000-03:00",
    "updatedAt": "2025-10-26T16:58:00.000-03:00"
  },
  {
    "id": "res-80",
    "tableId": "table-13",
    "customer": {
      "name": "Isabel Díaz García",
      "phone": "+54-11-0123-4567",
      "email": "isabeldíazgarcía@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T00:00:00.000-03:00",
    "endTime": "2025-10-20T02:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-19T13:40:00.000-03:00",
    "updatedAt": "2025-10-19T13:40:00.000-03:00"
  },
  {
    "id": "res-81",
    "tableId": "table-18",
    "customer": {
      "name": "Miguel González López",
      "phone": "+54-11-0123-4567",
      "email": "miguelgonzálezlópez@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T16:00:00.000-03:00",
    "endTime": "2025-10-18T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-18T16:08:00.000-03:00",
    "updatedAt": "2025-10-18T19:08:00.000-03:00"
  },
  {
    "id": "res-82",
    "tableId": "table-16",
    "customer": {
      "name": "Andrea Mendoza Espinoza",
      "phone": "+54-11-1313-4545",
      "email": "andreamendozaespinoza@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T12:30:00.000-03:00",
    "endTime": "2025-10-04T14:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-04T20:14:00.000-03:00",
    "updatedAt": "2025-10-05T00:14:00.000-03:00"
  },
  {
    "id": "res-83",
    "tableId": "table-30",
    "customer": {
      "name": "Fernando Ramos Navarro",
      "phone": "+54-11-5678-9012",
      "email": "fernandoramosnavarro@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-02T23:30:00.000-03:00",
    "endTime": "2025-10-03T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-02T16:52:00.000-03:00",
    "updatedAt": "2025-10-02T17:52:00.000-03:00"
  },
  {
    "id": "res-84",
    "tableId": "table-15",
    "customer": {
      "name": "Sergio Peña Moreno",
      "phone": "+54-11-1111-2222",
      "email": "sergiopeñamoreno@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T21:30:00.000-03:00",
    "endTime": "2025-10-19T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-18T20:48:00.000-03:00",
    "updatedAt": "2025-10-19T00:48:00.000-03:00"
  },
  {
    "id": "res-85",
    "tableId": "table-23",
    "customer": {
      "name": "Gabriel Rojas Ruiz",
      "phone": "+54-11-1234-5678",
      "email": "gabrielrojasruiz@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T18:30:00.000-03:00",
    "endTime": "2025-10-17T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-17T21:42:00.000-03:00",
    "updatedAt": "2025-10-18T00:42:00.000-03:00"
  },
  {
    "id": "res-86",
    "tableId": "table-22",
    "customer": {
      "name": "Sebastián Vega Aguilar",
      "phone": "+54-11-6789-0123",
      "email": "sebastiánvegaaguilar@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-17T01:30:00.000-03:00",
    "endTime": "2025-10-17T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-16T14:13:00.000-03:00",
    "updatedAt": "2025-10-16T14:13:00.000-03:00"
  },
  {
    "id": "res-87",
    "tableId": "table-9",
    "customer": {
      "name": "Miguel González García",
      "phone": "+54-11-1313-4545",
      "email": "miguelgonzálezgarcía@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-12T00:00:00.000-03:00",
    "endTime": "2025-10-12T02:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-11T16:17:00.000-03:00",
    "updatedAt": "2025-10-11T16:17:00.000-03:00"
  },
  {
    "id": "res-88",
    "tableId": "table-14",
    "customer": {
      "name": "Beatriz Guerrero Moreno",
      "phone": "+54-11-7890-1234",
      "email": "beatrizguerreromoreno@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-02T15:00:00.000-03:00",
    "endTime": "2025-10-02T16:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-02T18:59:00.000-03:00",
    "updatedAt": "2025-10-02T18:59:00.000-03:00"
  },
  {
    "id": "res-89",
    "tableId": "table-2",
    "customer": {
      "name": "Patricia Navarro Medina",
      "phone": "+54-11-9999-0000",
      "email": "patricianavarromedina@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-27T19:30:00.000-03:00",
    "endTime": "2025-10-27T22:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-27T22:23:00.000-03:00",
    "updatedAt": "2025-10-27T22:23:00.000-03:00"
  },
  {
    "id": "res-90",
    "tableId": "table-29",
    "customer": {
      "name": "Natalia Ortega Moreno",
      "phone": "+54-11-7890-1234",
      "email": "nataliaortegamoreno@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T10:00:00.000-03:00",
    "endTime": "2025-10-04T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-04T21:44:00.000-03:00",
    "updatedAt": "2025-10-04T22:44:00.000-03:00"
  },
  {
    "id": "res-91",
    "tableId": "table-15",
    "customer": {
      "name": "Patricia Navarro Campos",
      "phone": "+54-11-2345-6789",
      "email": "patricianavarrocampos@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-07T17:00:00.000-03:00",
    "endTime": "2025-10-07T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-07T18:18:00.000-03:00",
    "updatedAt": "2025-10-07T19:18:00.000-03:00"
  },
  {
    "id": "res-92",
    "tableId": "table-27",
    "customer": {
      "name": "Nicolás Fuentes Vega",
      "phone": "+54-11-3333-4444",
      "email": "nicolásfuentesvega@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T11:30:00.000-03:00",
    "endTime": "2025-10-24T12:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T21:41:00.000-03:00",
    "updatedAt": "2025-10-24T21:41:00.000-03:00"
  },
  {
    "id": "res-93",
    "tableId": "table-22",
    "customer": {
      "name": "Carlos López Pérez",
      "phone": "+54-11-6767-8989",
      "email": "carloslópezpérez@live.com"
    },
    "partySize": 5,
    "startTime": "2025-09-30T23:00:00.000-03:00",
    "endTime": "2025-10-01T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-09-30T11:08:00.000-03:00",
    "updatedAt": "2025-09-30T11:08:00.000-03:00"
  },
  {
    "id": "res-94",
    "tableId": "table-6",
    "customer": {
      "name": "Nicolás Fuentes Guerrero",
      "phone": "+54-11-7890-1234",
      "email": "nicolásfuentesguerrero@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T18:30:00.000-03:00",
    "endTime": "2025-10-11T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-11T20:55:00.000-03:00",
    "updatedAt": "2025-10-11T21:55:00.000-03:00"
  },
  {
    "id": "res-95",
    "tableId": "table-11",
    "customer": {
      "name": "Nicolás Fuentes García",
      "phone": "+54-11-2345-6789",
      "email": "nicolásfuentesgarcía@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-05T11:30:00.000-03:00",
    "endTime": "2025-10-05T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-05T22:23:00.000-03:00",
    "updatedAt": "2025-10-06T01:23:00.000-03:00"
  },
  {
    "id": "res-96",
    "tableId": "table-1",
    "customer": {
      "name": "Alejandro Castro Ramos",
      "phone": "+54-11-1234-5678",
      "email": "alejandrocastroramos@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-10T20:30:00.000-03:00",
    "endTime": "2025-10-10T23:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-10T15:08:00.000-03:00",
    "updatedAt": "2025-10-10T18:08:00.000-03:00"
  },
  {
    "id": "res-97",
    "tableId": "table-24",
    "customer": {
      "name": "Isabel Díaz Silva",
      "phone": "+54-11-4567-8901",
      "email": "isabeldíazsilva@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-26T01:30:00.000-03:00",
    "endTime": "2025-10-26T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-25T22:57:00.000-03:00",
    "updatedAt": "2025-10-25T23:57:00.000-03:00"
  },
  {
    "id": "res-98",
    "tableId": "table-18",
    "customer": {
      "name": "Sofia Reyes Espinoza",
      "phone": "+54-11-1234-5678",
      "email": "sofiareyesespinoza@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-29T13:00:00.000-03:00",
    "endTime": "2025-10-29T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-29T13:14:00.000-03:00",
    "updatedAt": "2025-10-29T13:14:00.000-03:00"
  },
  {
    "id": "res-99",
    "tableId": "table-21",
    "customer": {
      "name": "Álvaro Serrano Mendoza",
      "phone": "+54-11-2345-6789",
      "email": "álvaroserranomendoza@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-01T16:30:00.000-03:00",
    "endTime": "2025-10-01T17:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-01T15:50:00.000-03:00",
    "updatedAt": "2025-10-01T15:50:00.000-03:00"
  },
  {
    "id": "res-100",
    "tableId": "table-20",
    "customer": {
      "name": "Antonio Ruiz Ortega",
      "phone": "+54-11-7890-1234",
      "email": "antonioruizortega@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T10:00:00.000-03:00",
    "endTime": "2025-10-04T11:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-04T15:15:00.000-03:00",
    "updatedAt": "2025-10-04T15:15:00.000-03:00"
  },
  {
    "id": "res-101",
    "tableId": "table-7",
    "customer": {
      "name": "Cristina Romero Campos",
      "phone": "+54-11-5678-9012",
      "email": "cristinaromerocampos@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-11T17:30:00.000-03:00",
    "endTime": "2025-10-11T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-11T12:57:00.000-03:00",
    "updatedAt": "2025-10-11T12:57:00.000-03:00"
  },
  {
    "id": "res-102",
    "tableId": "table-8",
    "customer": {
      "name": "Valeria Silva Campos",
      "phone": "+54-11-5656-7878",
      "email": "valeriasilvacampos@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T14:30:00.000-03:00",
    "endTime": "2025-10-10T16:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-10T21:11:00.000-03:00",
    "updatedAt": "2025-10-10T21:11:00.000-03:00"
  },
  {
    "id": "res-103",
    "tableId": "table-7",
    "customer": {
      "name": "Roberto Herrera Morales",
      "phone": "+54-11-1111-2222",
      "email": "robertoherreramorales@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-11T15:30:00.000-03:00",
    "endTime": "2025-10-11T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-11T16:07:00.000-03:00",
    "updatedAt": "2025-10-11T19:07:00.000-03:00"
  },
  {
    "id": "res-104",
    "tableId": "table-13",
    "customer": {
      "name": "Pablo Delgado Jiménez",
      "phone": "+54-11-7777-8888",
      "email": "pablodelgadojiménez@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-30T00:00:00.000-03:00",
    "endTime": "2025-10-30T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-29T14:33:00.000-03:00",
    "updatedAt": "2025-10-29T14:33:00.000-03:00"
  },
  {
    "id": "res-105",
    "tableId": "table-26",
    "customer": {
      "name": "Rubén Herrera Rodríguez",
      "phone": "+54-11-3333-4444",
      "email": "rubénherrerarodríguez@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-29T10:30:00.000-03:00",
    "endTime": "2025-10-29T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-29T18:29:00.000-03:00",
    "updatedAt": "2025-10-29T18:29:00.000-03:00"
  },
  {
    "id": "res-106",
    "tableId": "table-16",
    "customer": {
      "name": "Nicolás Fuentes Vargas",
      "phone": "+54-11-7890-1234",
      "email": "nicolásfuentesvargas@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-02T13:30:00.000-03:00",
    "endTime": "2025-10-02T16:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-02T20:15:00.000-03:00",
    "updatedAt": "2025-10-02T21:15:00.000-03:00"
  },
  {
    "id": "res-107",
    "tableId": "table-25",
    "customer": {
      "name": "Valeria Silva Martínez",
      "phone": "+54-11-8901-2345",
      "email": "valeriasilvamartínez@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T21:30:00.000-03:00",
    "endTime": "2025-10-04T22:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-04T17:02:00.000-03:00",
    "updatedAt": "2025-10-04T17:02:00.000-03:00"
  },
  {
    "id": "res-108",
    "tableId": "table-3",
    "customer": {
      "name": "Carlos López Peña",
      "phone": "+54-11-3333-4444",
      "email": "carloslópezpeña@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-27T01:30:00.000-03:00",
    "endTime": "2025-10-27T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-26T13:28:00.000-03:00",
    "updatedAt": "2025-10-26T13:28:00.000-03:00"
  },
  {
    "id": "res-109",
    "tableId": "table-26",
    "customer": {
      "name": "Adrián Cabrera García",
      "phone": "+54-11-0123-4567",
      "email": "adriáncabreragarcía@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T15:30:00.000-03:00",
    "endTime": "2025-10-18T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-18T22:21:00.000-03:00",
    "updatedAt": "2025-10-19T02:21:00.000-03:00"
  },
  {
    "id": "res-110",
    "tableId": "table-19",
    "customer": {
      "name": "Teresa Molina Campos",
      "phone": "+54-11-7890-1234",
      "email": "teresamolinacampos@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-25T10:30:00.000-03:00",
    "endTime": "2025-10-25T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-25T12:35:00.000-03:00",
    "updatedAt": "2025-10-25T16:35:00.000-03:00"
  },
  {
    "id": "res-111",
    "tableId": "table-2",
    "customer": {
      "name": "Pablo Delgado Rodríguez",
      "phone": "+54-11-1212-3434",
      "email": "pablodelgadorodríguez@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T00:30:00.000-03:00",
    "endTime": "2025-10-10T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-09T11:40:00.000-03:00",
    "updatedAt": "2025-10-09T12:40:00.000-03:00"
  },
  {
    "id": "res-112",
    "tableId": "table-3",
    "customer": {
      "name": "Valeria Silva Morales",
      "phone": "+54-11-1313-4545",
      "email": "valeriasilvamorales@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T19:00:00.000-03:00",
    "endTime": "2025-10-22T21:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T16:40:00.000-03:00",
    "updatedAt": "2025-10-22T16:40:00.000-03:00"
  },
  {
    "id": "res-113",
    "tableId": "table-14",
    "customer": {
      "name": "Natalia Ortega Rodríguez",
      "phone": "+54-11-0123-4567",
      "email": "nataliaortegarodríguez@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T11:30:00.000-03:00",
    "endTime": "2025-10-22T13:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-22T21:38:00.000-03:00",
    "updatedAt": "2025-10-22T21:38:00.000-03:00"
  },
  {
    "id": "res-114",
    "tableId": "table-20",
    "customer": {
      "name": "Andrea Mendoza Reyes",
      "phone": "+54-11-7890-1234",
      "email": "andreamendozareyes@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-15T10:30:00.000-03:00",
    "endTime": "2025-10-15T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-15T16:58:00.000-03:00",
    "updatedAt": "2025-10-15T16:58:00.000-03:00"
  },
  {
    "id": "res-115",
    "tableId": "table-5",
    "customer": {
      "name": "Andrea Mendoza Torres",
      "phone": "+54-11-3333-4444",
      "email": "andreamendozatorres@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-09T15:30:00.000-03:00",
    "endTime": "2025-10-09T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-09T20:34:00.000-03:00",
    "updatedAt": "2025-10-09T20:34:00.000-03:00"
  },
  {
    "id": "res-116",
    "tableId": "table-14",
    "customer": {
      "name": "Roberto Herrera Rodríguez",
      "phone": "+54-11-6789-0123",
      "email": "robertoherrerarodríguez@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-18T12:00:00.000-03:00",
    "endTime": "2025-10-18T15:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-18T18:54:00.000-03:00",
    "updatedAt": "2025-10-18T21:54:00.000-03:00"
  },
  {
    "id": "res-117",
    "tableId": "table-24",
    "customer": {
      "name": "Lucía Morales Pérez",
      "phone": "+54-11-4567-8901",
      "email": "lucíamoralespérez@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-16T15:30:00.000-03:00",
    "endTime": "2025-10-16T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-16T20:13:00.000-03:00",
    "updatedAt": "2025-10-16T20:13:00.000-03:00"
  },
  {
    "id": "res-118",
    "tableId": "table-1",
    "customer": {
      "name": "Sandra Vega Silva",
      "phone": "+54-11-4567-8901",
      "email": "sandravegasilva@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T19:00:00.000-03:00",
    "endTime": "2025-10-11T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-11T11:15:00.000-03:00",
    "updatedAt": "2025-10-11T11:15:00.000-03:00"
  },
  {
    "id": "res-119",
    "tableId": "table-21",
    "customer": {
      "name": "Laura Sánchez Moreno",
      "phone": "+54-11-5678-9012",
      "email": "laurasánchezmoreno@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-15T13:30:00.000-03:00",
    "endTime": "2025-10-15T14:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-15T16:48:00.000-03:00",
    "updatedAt": "2025-10-15T17:48:00.000-03:00"
  },
  {
    "id": "res-120",
    "tableId": "table-25",
    "customer": {
      "name": "Patricia Navarro Romero",
      "phone": "+54-11-4567-8901",
      "email": "patricianavarroromero@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T18:00:00.000-03:00",
    "endTime": "2025-10-24T20:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-24T14:20:00.000-03:00",
    "updatedAt": "2025-10-24T14:20:00.000-03:00"
  },
  {
    "id": "res-121",
    "tableId": "table-24",
    "customer": {
      "name": "Gabriel Rojas Torres",
      "phone": "+54-11-1212-3434",
      "email": "gabrielrojastorres@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-16T23:00:00.000-03:00",
    "endTime": "2025-10-17T02:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-16T18:38:00.000-03:00",
    "updatedAt": "2025-10-16T18:38:00.000-03:00"
  },
  {
    "id": "res-122",
    "tableId": "table-10",
    "customer": {
      "name": "Miguel González Herrera",
      "phone": "+54-11-6767-8989",
      "email": "miguelgonzálezherrera@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-16T13:00:00.000-03:00",
    "endTime": "2025-10-16T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-16T18:08:00.000-03:00",
    "updatedAt": "2025-10-16T18:08:00.000-03:00"
  },
  {
    "id": "res-123",
    "tableId": "table-16",
    "customer": {
      "name": "Claudia Medina Delgado",
      "phone": "+54-11-2345-6789",
      "email": "claudiamedinadelgado@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T15:30:00.000-03:00",
    "endTime": "2025-10-25T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-25T20:38:00.000-03:00",
    "updatedAt": "2025-10-25T20:38:00.000-03:00"
  },
  {
    "id": "res-124",
    "tableId": "table-6",
    "customer": {
      "name": "Elena Moreno Herrera",
      "phone": "+54-11-1111-2222",
      "email": "elenamorenoherrera@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-29T17:30:00.000-03:00",
    "endTime": "2025-10-29T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-29T18:54:00.000-03:00",
    "updatedAt": "2025-10-29T20:54:00.000-03:00"
  },
  {
    "id": "res-125",
    "tableId": "table-9",
    "customer": {
      "name": "Alejandro Castro Vega",
      "phone": "+54-11-5555-6666",
      "email": "alejandrocastrovega@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-29T18:00:00.000-03:00",
    "endTime": "2025-10-29T19:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-29T17:15:00.000-03:00",
    "updatedAt": "2025-10-29T19:15:00.000-03:00"
  },
  {
    "id": "res-126",
    "tableId": "table-12",
    "customer": {
      "name": "Daniel Campos Vega",
      "phone": "+54-11-1234-5678",
      "email": "danielcamposvega@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-16T21:30:00.000-03:00",
    "endTime": "2025-10-16T22:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-16T17:32:00.000-03:00",
    "updatedAt": "2025-10-16T17:32:00.000-03:00"
  },
  {
    "id": "res-127",
    "tableId": "table-8",
    "customer": {
      "name": "Elena Moreno Jiménez",
      "phone": "+54-11-3456-7890",
      "email": "elenamorenojiménez@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T14:30:00.000-03:00",
    "endTime": "2025-10-10T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-10T18:41:00.000-03:00",
    "updatedAt": "2025-10-10T18:41:00.000-03:00"
  },
  {
    "id": "res-128",
    "tableId": "table-28",
    "customer": {
      "name": "María Rodríguez Peña",
      "phone": "+54-11-6789-0123",
      "email": "maríarodríguezpeña@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T14:00:00.000-03:00",
    "endTime": "2025-10-11T15:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-11T19:11:00.000-03:00",
    "updatedAt": "2025-10-11T19:11:00.000-03:00"
  },
  {
    "id": "res-129",
    "tableId": "table-5",
    "customer": {
      "name": "Javier Torres Campos",
      "phone": "+54-11-1212-3434",
      "email": "javiertorrescampos@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-26T15:00:00.000-03:00",
    "endTime": "2025-10-26T17:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-26T22:26:00.000-03:00",
    "updatedAt": "2025-10-26T22:26:00.000-03:00"
  },
  {
    "id": "res-130",
    "tableId": "table-9",
    "customer": {
      "name": "Carlos López Peña",
      "phone": "+54-11-7777-8888",
      "email": "carloslópezpeña@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-11T16:00:00.000-03:00",
    "endTime": "2025-10-11T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-11T11:28:00.000-03:00",
    "updatedAt": "2025-10-11T11:28:00.000-03:00"
  },
  {
    "id": "res-131",
    "tableId": "table-26",
    "customer": {
      "name": "Sebastián Vega Pérez",
      "phone": "+54-11-1212-3434",
      "email": "sebastiánvegapérez@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-18T20:00:00.000-03:00",
    "endTime": "2025-10-18T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-18T20:38:00.000-03:00",
    "updatedAt": "2025-10-18T21:38:00.000-03:00"
  },
  {
    "id": "res-132",
    "tableId": "table-12",
    "customer": {
      "name": "Fernando Ramos Aguilar",
      "phone": "+54-11-1111-2222",
      "email": "fernandoramosaguilar@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T21:30:00.000-03:00",
    "endTime": "2025-10-05T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-04T15:30:00.000-03:00",
    "updatedAt": "2025-10-04T16:30:00.000-03:00"
  },
  {
    "id": "res-133",
    "tableId": "table-28",
    "customer": {
      "name": "Nicolás Fuentes Rojas",
      "phone": "+54-11-7777-8888",
      "email": "nicolásfuentesrojas@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-14T10:00:00.000-03:00",
    "endTime": "2025-10-14T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-14T15:13:00.000-03:00",
    "updatedAt": "2025-10-14T15:13:00.000-03:00"
  },
  {
    "id": "res-134",
    "tableId": "table-17",
    "customer": {
      "name": "Natalia Ortega Morales",
      "phone": "+54-11-1234-5678",
      "email": "nataliaortegamorales@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T12:00:00.000-03:00",
    "endTime": "2025-10-17T13:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-17T21:41:00.000-03:00",
    "updatedAt": "2025-10-17T21:41:00.000-03:00"
  },
  {
    "id": "res-135",
    "tableId": "table-17",
    "customer": {
      "name": "Isabel Díaz Ramos",
      "phone": "+54-11-5555-6666",
      "email": "isabeldíazramos@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T00:30:00.000-03:00",
    "endTime": "2025-10-18T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-17T16:26:00.000-03:00",
    "updatedAt": "2025-10-17T16:26:00.000-03:00"
  },
  {
    "id": "res-136",
    "tableId": "table-14",
    "customer": {
      "name": "Carmen Pérez López",
      "phone": "+54-11-0123-4567",
      "email": "carmenpérezlópez@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-19T01:30:00.000-03:00",
    "endTime": "2025-10-19T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-18T19:51:00.000-03:00",
    "updatedAt": "2025-10-18T21:51:00.000-03:00"
  },
  {
    "id": "res-137",
    "tableId": "table-14",
    "customer": {
      "name": "Francisco Martín Ruiz",
      "phone": "+54-11-9090-1212",
      "email": "franciscomartínruiz@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T11:00:00.000-03:00",
    "endTime": "2025-10-11T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-11T16:05:00.000-03:00",
    "updatedAt": "2025-10-11T16:05:00.000-03:00"
  },
  {
    "id": "res-138",
    "tableId": "table-24",
    "customer": {
      "name": "Natalia Ortega Rojas",
      "phone": "+54-11-1234-5678",
      "email": "nataliaortegarojas@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T17:30:00.000-03:00",
    "endTime": "2025-10-18T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-18T16:23:00.000-03:00",
    "updatedAt": "2025-10-18T16:23:00.000-03:00"
  },
  {
    "id": "res-139",
    "tableId": "table-14",
    "customer": {
      "name": "David Jiménez Navarro",
      "phone": "+54-11-6767-8989",
      "email": "davidjiméneznavarro@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-02T11:00:00.000-03:00",
    "endTime": "2025-10-02T14:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-02T15:47:00.000-03:00",
    "updatedAt": "2025-10-02T15:47:00.000-03:00"
  },
  {
    "id": "res-140",
    "tableId": "table-10",
    "customer": {
      "name": "Lucía Morales Medina",
      "phone": "+54-11-7777-8888",
      "email": "lucíamoralesmedina@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T00:30:00.000-03:00",
    "endTime": "2025-10-17T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-16T11:51:00.000-03:00",
    "updatedAt": "2025-10-16T11:51:00.000-03:00"
  },
  {
    "id": "res-141",
    "tableId": "table-6",
    "customer": {
      "name": "Ana García Martínez",
      "phone": "+54-11-2345-6789",
      "email": "anagarcíamartínez@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-09T22:30:00.000-03:00",
    "endTime": "2025-10-09T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-09T21:52:00.000-03:00",
    "updatedAt": "2025-10-09T21:52:00.000-03:00"
  },
  {
    "id": "res-142",
    "tableId": "table-27",
    "customer": {
      "name": "Sebastián Vega González",
      "phone": "+54-11-8901-2345",
      "email": "sebastiánvegagonzález@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-18T00:30:00.000-03:00",
    "endTime": "2025-10-18T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-17T22:50:00.000-03:00",
    "updatedAt": "2025-10-18T00:50:00.000-03:00"
  },
  {
    "id": "res-143",
    "tableId": "table-8",
    "customer": {
      "name": "Valeria Silva Jiménez",
      "phone": "+54-11-1111-2222",
      "email": "valeriasilvajiménez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-29T12:30:00.000-03:00",
    "endTime": "2025-10-29T15:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-29T14:50:00.000-03:00",
    "updatedAt": "2025-10-29T14:50:00.000-03:00"
  },
  {
    "id": "res-144",
    "tableId": "table-10",
    "customer": {
      "name": "Álvaro Serrano Guerrero",
      "phone": "+54-11-8901-2345",
      "email": "álvaroserranoguerrero@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T13:00:00.000-03:00",
    "endTime": "2025-10-18T15:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-18T16:15:00.000-03:00",
    "updatedAt": "2025-10-18T16:15:00.000-03:00"
  },
  {
    "id": "res-145",
    "tableId": "table-12",
    "customer": {
      "name": "Pablo Delgado Ramos",
      "phone": "+54-11-9090-1212",
      "email": "pablodelgadoramos@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T22:00:00.000-03:00",
    "endTime": "2025-10-17T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-17T17:24:00.000-03:00",
    "updatedAt": "2025-10-17T20:24:00.000-03:00"
  },
  {
    "id": "res-146",
    "tableId": "table-18",
    "customer": {
      "name": "Camila Espinoza Ortega",
      "phone": "+54-11-1313-4545",
      "email": "camilaespinozaortega@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T21:00:00.000-03:00",
    "endTime": "2025-10-12T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-11T18:26:00.000-03:00",
    "updatedAt": "2025-10-11T18:26:00.000-03:00"
  },
  {
    "id": "res-147",
    "tableId": "table-5",
    "customer": {
      "name": "Laura Sánchez Castro",
      "phone": "+54-11-9012-3456",
      "email": "laurasánchezcastro@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-09T17:00:00.000-03:00",
    "endTime": "2025-10-09T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-09T17:44:00.000-03:00",
    "updatedAt": "2025-10-09T17:44:00.000-03:00"
  },
  {
    "id": "res-148",
    "tableId": "table-3",
    "customer": {
      "name": "Sandra Vega Sánchez",
      "phone": "+54-11-1212-3434",
      "email": "sandravegasánchez@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T13:30:00.000-03:00",
    "endTime": "2025-10-19T16:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-19T19:26:00.000-03:00",
    "updatedAt": "2025-10-19T19:26:00.000-03:00"
  },
  {
    "id": "res-149",
    "tableId": "table-6",
    "customer": {
      "name": "Sandra Vega Ruiz",
      "phone": "+54-11-3456-7890",
      "email": "sandravegaruiz@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-01T19:30:00.000-03:00",
    "endTime": "2025-10-01T20:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-01T19:19:00.000-03:00",
    "updatedAt": "2025-10-01T19:19:00.000-03:00"
  },
  {
    "id": "res-150",
    "tableId": "table-24",
    "customer": {
      "name": "Francisco Martín Díaz",
      "phone": "+54-11-0123-4567",
      "email": "franciscomartíndíaz@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-26T17:30:00.000-03:00",
    "endTime": "2025-10-26T19:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-26T13:34:00.000-03:00",
    "updatedAt": "2025-10-26T13:34:00.000-03:00"
  },
  {
    "id": "res-151",
    "tableId": "table-12",
    "customer": {
      "name": "Antonio Ruiz Vargas",
      "phone": "+54-11-4567-8901",
      "email": "antonioruizvargas@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-09T13:00:00.000-03:00",
    "endTime": "2025-10-09T15:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-09T12:25:00.000-03:00",
    "updatedAt": "2025-10-09T12:25:00.000-03:00"
  },
  {
    "id": "res-152",
    "tableId": "table-9",
    "customer": {
      "name": "Adrián Cabrera Molina",
      "phone": "+54-11-7777-8888",
      "email": "adriáncabreramolina@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T11:00:00.000-03:00",
    "endTime": "2025-10-26T13:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-26T11:57:00.000-03:00",
    "updatedAt": "2025-10-26T14:57:00.000-03:00"
  },
  {
    "id": "res-153",
    "tableId": "table-22",
    "customer": {
      "name": "Sandra Vega Moreno",
      "phone": "+54-11-3333-4444",
      "email": "sandravegamoreno@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T17:00:00.000-03:00",
    "endTime": "2025-10-24T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T18:13:00.000-03:00",
    "updatedAt": "2025-10-24T18:13:00.000-03:00"
  },
  {
    "id": "res-154",
    "tableId": "table-30",
    "customer": {
      "name": "Nicolás Fuentes Guerrero",
      "phone": "+54-11-1111-2222",
      "email": "nicolásfuentesguerrero@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-09T01:30:00.000-03:00",
    "endTime": "2025-10-09T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-08T17:08:00.000-03:00",
    "updatedAt": "2025-10-08T17:08:00.000-03:00"
  },
  {
    "id": "res-155",
    "tableId": "table-28",
    "customer": {
      "name": "Rubén Herrera Cabrera",
      "phone": "+54-11-7890-1234",
      "email": "rubénherreracabrera@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T10:00:00.000-03:00",
    "endTime": "2025-10-04T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-04T21:38:00.000-03:00",
    "updatedAt": "2025-10-04T21:38:00.000-03:00"
  },
  {
    "id": "res-156",
    "tableId": "table-16",
    "customer": {
      "name": "Cristina Romero Serrano",
      "phone": "+54-11-0123-4567",
      "email": "cristinaromeroserrano@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-16T11:00:00.000-03:00",
    "endTime": "2025-10-16T14:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-16T17:53:00.000-03:00",
    "updatedAt": "2025-10-16T17:53:00.000-03:00"
  },
  {
    "id": "res-157",
    "tableId": "table-27",
    "customer": {
      "name": "Andrea Mendoza Reyes",
      "phone": "+54-11-6789-0123",
      "email": "andreamendozareyes@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T15:30:00.000-03:00",
    "endTime": "2025-10-03T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-03T11:17:00.000-03:00",
    "updatedAt": "2025-10-03T11:17:00.000-03:00"
  },
  {
    "id": "res-158",
    "tableId": "table-24",
    "customer": {
      "name": "Sergio Peña Rodríguez",
      "phone": "+54-11-6767-8989",
      "email": "sergiopeñarodríguez@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-16T15:30:00.000-03:00",
    "endTime": "2025-10-16T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-16T19:25:00.000-03:00",
    "updatedAt": "2025-10-16T19:25:00.000-03:00"
  },
  {
    "id": "res-159",
    "tableId": "table-25",
    "customer": {
      "name": "Patricia Navarro Guerrero",
      "phone": "+54-11-6789-0123",
      "email": "patricianavarroguerrero@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T10:30:00.000-03:00",
    "endTime": "2025-10-26T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-26T18:54:00.000-03:00",
    "updatedAt": "2025-10-26T18:54:00.000-03:00"
  },
  {
    "id": "res-160",
    "tableId": "table-20",
    "customer": {
      "name": "Patricia Navarro Ruiz",
      "phone": "+54-11-5656-7878",
      "email": "patricianavarroruiz@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-17T15:30:00.000-03:00",
    "endTime": "2025-10-17T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-17T17:30:00.000-03:00",
    "updatedAt": "2025-10-17T17:30:00.000-03:00"
  },
  {
    "id": "res-161",
    "tableId": "table-16",
    "customer": {
      "name": "Hugo Aguilar Aguilar",
      "phone": "+54-11-6767-8989",
      "email": "hugoaguilaraguilar@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-30T01:30:00.000-03:00",
    "endTime": "2025-10-30T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-29T19:00:00.000-03:00",
    "updatedAt": "2025-10-29T19:00:00.000-03:00"
  },
  {
    "id": "res-162",
    "tableId": "table-28",
    "customer": {
      "name": "Miguel González Guerrero",
      "phone": "+54-11-7777-8888",
      "email": "miguelgonzálezguerrero@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T18:30:00.000-03:00",
    "endTime": "2025-10-17T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-17T17:31:00.000-03:00",
    "updatedAt": "2025-10-17T17:31:00.000-03:00"
  },
  {
    "id": "res-163",
    "tableId": "table-29",
    "customer": {
      "name": "Adrián Cabrera Castro",
      "phone": "+54-11-1111-2222",
      "email": "adriáncabreracastro@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-17T10:00:00.000-03:00",
    "endTime": "2025-10-17T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-17T18:10:00.000-03:00",
    "updatedAt": "2025-10-17T18:10:00.000-03:00"
  },
  {
    "id": "res-164",
    "tableId": "table-9",
    "customer": {
      "name": "Adrián Cabrera Pérez",
      "phone": "+54-11-1313-4545",
      "email": "adriáncabrerapérez@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-09T00:00:00.000-03:00",
    "endTime": "2025-10-09T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-08T19:58:00.000-03:00",
    "updatedAt": "2025-10-08T19:58:00.000-03:00"
  },
  {
    "id": "res-165",
    "tableId": "table-7",
    "customer": {
      "name": "Carmen Pérez Herrera",
      "phone": "+54-11-9012-3456",
      "email": "carmenpérezherrera@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-26T13:00:00.000-03:00",
    "endTime": "2025-10-26T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-26T20:59:00.000-03:00",
    "updatedAt": "2025-10-26T20:59:00.000-03:00"
  },
  {
    "id": "res-166",
    "tableId": "table-2",
    "customer": {
      "name": "Andrea Mendoza Vega",
      "phone": "+54-11-9090-1212",
      "email": "andreamendozavega@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T15:30:00.000-03:00",
    "endTime": "2025-10-04T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-04T16:59:00.000-03:00",
    "updatedAt": "2025-10-04T16:59:00.000-03:00"
  },
  {
    "id": "res-167",
    "tableId": "table-2",
    "customer": {
      "name": "Camila Espinoza Torres",
      "phone": "+54-11-9090-1212",
      "email": "camilaespinozatorres@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-25T13:00:00.000-03:00",
    "endTime": "2025-10-25T15:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-25T21:05:00.000-03:00",
    "updatedAt": "2025-10-25T21:05:00.000-03:00"
  },
  {
    "id": "res-168",
    "tableId": "table-7",
    "customer": {
      "name": "Carmen Pérez López",
      "phone": "+54-11-9999-0000",
      "email": "carmenpérezlópez@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T23:30:00.000-03:00",
    "endTime": "2025-10-25T02:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-24T20:14:00.000-03:00",
    "updatedAt": "2025-10-25T00:14:00.000-03:00"
  },
  {
    "id": "res-169",
    "tableId": "table-18",
    "customer": {
      "name": "Adrián Cabrera Jiménez",
      "phone": "+54-11-1212-3434",
      "email": "adriáncabrerajiménez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-04T01:00:00.000-03:00",
    "endTime": "2025-10-04T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-03T18:31:00.000-03:00",
    "updatedAt": "2025-10-03T18:31:00.000-03:00"
  },
  {
    "id": "res-170",
    "tableId": "table-7",
    "customer": {
      "name": "Claudia Medina Morales",
      "phone": "+54-11-1234-5678",
      "email": "claudiamedinamorales@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-30T00:30:00.000-03:00",
    "endTime": "2025-10-30T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-29T21:09:00.000-03:00",
    "updatedAt": "2025-10-29T23:09:00.000-03:00"
  },
  {
    "id": "res-171",
    "tableId": "table-24",
    "customer": {
      "name": "Alejandro Castro Vega",
      "phone": "+54-11-9012-3456",
      "email": "alejandrocastrovega@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-25T14:00:00.000-03:00",
    "endTime": "2025-10-25T16:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-25T14:10:00.000-03:00",
    "updatedAt": "2025-10-25T14:10:00.000-03:00"
  },
  {
    "id": "res-172",
    "tableId": "table-9",
    "customer": {
      "name": "Ana García Medina",
      "phone": "+54-11-5678-9012",
      "email": "anagarcíamedina@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T18:30:00.000-03:00",
    "endTime": "2025-10-24T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T15:48:00.000-03:00",
    "updatedAt": "2025-10-24T15:48:00.000-03:00"
  },
  {
    "id": "res-173",
    "tableId": "table-27",
    "customer": {
      "name": "Cristina Romero Navarro",
      "phone": "+54-11-5656-7878",
      "email": "cristinaromeronavarro@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-25T18:30:00.000-03:00",
    "endTime": "2025-10-25T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-25T20:42:00.000-03:00",
    "updatedAt": "2025-10-25T22:42:00.000-03:00"
  },
  {
    "id": "res-174",
    "tableId": "table-2",
    "customer": {
      "name": "Alejandro Castro Sánchez",
      "phone": "+54-11-1111-2222",
      "email": "alejandrocastrosánchez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-05T10:30:00.000-03:00",
    "endTime": "2025-10-05T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-05T11:01:00.000-03:00",
    "updatedAt": "2025-10-05T12:01:00.000-03:00"
  },
  {
    "id": "res-175",
    "tableId": "table-4",
    "customer": {
      "name": "José Martínez Guerrero",
      "phone": "+54-11-7890-1234",
      "email": "josémartínezguerrero@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-12T15:00:00.000-03:00",
    "endTime": "2025-10-12T18:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-12T12:26:00.000-03:00",
    "updatedAt": "2025-10-12T12:26:00.000-03:00"
  },
  {
    "id": "res-176",
    "tableId": "table-15",
    "customer": {
      "name": "Natalia Ortega Campos",
      "phone": "+54-11-9999-0000",
      "email": "nataliaortegacampos@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-14T19:30:00.000-03:00",
    "endTime": "2025-10-14T20:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-14T11:45:00.000-03:00",
    "updatedAt": "2025-10-14T11:45:00.000-03:00"
  },
  {
    "id": "res-177",
    "tableId": "table-30",
    "customer": {
      "name": "José Martínez Díaz",
      "phone": "+54-11-8901-2345",
      "email": "josémartínezdíaz@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-15T18:30:00.000-03:00",
    "endTime": "2025-10-15T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-15T11:56:00.000-03:00",
    "updatedAt": "2025-10-15T12:56:00.000-03:00"
  },
  {
    "id": "res-178",
    "tableId": "table-6",
    "customer": {
      "name": "Teresa Molina Castro",
      "phone": "+54-11-1313-4545",
      "email": "teresamolinacastro@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T01:00:00.000-03:00",
    "endTime": "2025-10-23T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-22T22:38:00.000-03:00",
    "updatedAt": "2025-10-22T22:38:00.000-03:00"
  },
  {
    "id": "res-179",
    "tableId": "table-21",
    "customer": {
      "name": "Pablo Delgado Ortega",
      "phone": "+54-11-5678-9012",
      "email": "pablodelgadoortega@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-16T10:30:00.000-03:00",
    "endTime": "2025-10-16T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-16T15:13:00.000-03:00",
    "updatedAt": "2025-10-16T18:13:00.000-03:00"
  },
  {
    "id": "res-180",
    "tableId": "table-24",
    "customer": {
      "name": "Teresa Molina Vargas",
      "phone": "+54-11-1313-4545",
      "email": "teresamolinavargas@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-04T01:00:00.000-03:00",
    "endTime": "2025-10-04T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-03T13:48:00.000-03:00",
    "updatedAt": "2025-10-03T17:48:00.000-03:00"
  },
  {
    "id": "res-181",
    "tableId": "table-14",
    "customer": {
      "name": "Sofia Reyes Aguilar",
      "phone": "+54-11-6789-0123",
      "email": "sofiareyesaguilar@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-27T12:00:00.000-03:00",
    "endTime": "2025-10-27T14:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-27T21:01:00.000-03:00",
    "updatedAt": "2025-10-27T21:01:00.000-03:00"
  },
  {
    "id": "res-182",
    "tableId": "table-27",
    "customer": {
      "name": "Miguel González Fuentes",
      "phone": "+54-11-8901-2345",
      "email": "miguelgonzálezfuentes@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-26T20:30:00.000-03:00",
    "endTime": "2025-10-26T23:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-26T22:01:00.000-03:00",
    "updatedAt": "2025-10-27T00:01:00.000-03:00"
  },
  {
    "id": "res-183",
    "tableId": "table-4",
    "customer": {
      "name": "Miguel González Díaz",
      "phone": "+54-11-5656-7878",
      "email": "miguelgonzálezdíaz@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T19:30:00.000-03:00",
    "endTime": "2025-10-18T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-18T12:39:00.000-03:00",
    "updatedAt": "2025-10-18T12:39:00.000-03:00"
  },
  {
    "id": "res-184",
    "tableId": "table-5",
    "customer": {
      "name": "Ana García Ortega",
      "phone": "+54-11-2345-6789",
      "email": "anagarcíaortega@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-26T10:00:00.000-03:00",
    "endTime": "2025-10-26T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-26T15:15:00.000-03:00",
    "updatedAt": "2025-10-26T18:15:00.000-03:00"
  },
  {
    "id": "res-185",
    "tableId": "table-23",
    "customer": {
      "name": "Sofia Reyes López",
      "phone": "+54-11-5555-6666",
      "email": "sofiareyeslópez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-07T13:00:00.000-03:00",
    "endTime": "2025-10-07T15:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-07T15:31:00.000-03:00",
    "updatedAt": "2025-10-07T19:31:00.000-03:00"
  },
  {
    "id": "res-186",
    "tableId": "table-24",
    "customer": {
      "name": "Pablo Delgado Morales",
      "phone": "+54-11-8901-2345",
      "email": "pablodelgadomorales@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T12:30:00.000-03:00",
    "endTime": "2025-10-24T15:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T18:34:00.000-03:00",
    "updatedAt": "2025-10-24T18:34:00.000-03:00"
  },
  {
    "id": "res-187",
    "tableId": "table-3",
    "customer": {
      "name": "Francisco Martín Navarro",
      "phone": "+54-11-8901-2345",
      "email": "franciscomartínnavarro@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T23:00:00.000-03:00",
    "endTime": "2025-10-25T01:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T22:30:00.000-03:00",
    "updatedAt": "2025-10-24T22:30:00.000-03:00"
  },
  {
    "id": "res-188",
    "tableId": "table-3",
    "customer": {
      "name": "Isabel Díaz García",
      "phone": "+54-11-2345-6789",
      "email": "isabeldíazgarcía@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-17T10:30:00.000-03:00",
    "endTime": "2025-10-17T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-17T17:24:00.000-03:00",
    "updatedAt": "2025-10-17T21:24:00.000-03:00"
  },
  {
    "id": "res-189",
    "tableId": "table-20",
    "customer": {
      "name": "Cristina Romero García",
      "phone": "+54-11-5678-9012",
      "email": "cristinaromerogarcía@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T00:00:00.000-03:00",
    "endTime": "2025-10-03T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-02T11:48:00.000-03:00",
    "updatedAt": "2025-10-02T11:48:00.000-03:00"
  },
  {
    "id": "res-190",
    "tableId": "table-29",
    "customer": {
      "name": "Sandra Vega Molina",
      "phone": "+54-11-1234-5678",
      "email": "sandravegamolina@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T14:30:00.000-03:00",
    "endTime": "2025-10-19T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-19T15:38:00.000-03:00",
    "updatedAt": "2025-10-19T15:38:00.000-03:00"
  },
  {
    "id": "res-191",
    "tableId": "table-5",
    "customer": {
      "name": "Natalia Ortega Vega",
      "phone": "+54-11-1313-4545",
      "email": "nataliaortegavega@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-09T00:30:00.000-03:00",
    "endTime": "2025-10-09T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-08T20:56:00.000-03:00",
    "updatedAt": "2025-10-09T00:56:00.000-03:00"
  },
  {
    "id": "res-192",
    "tableId": "table-19",
    "customer": {
      "name": "Nicolás Fuentes Castro",
      "phone": "+54-11-3333-4444",
      "email": "nicolásfuentescastro@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T19:30:00.000-03:00",
    "endTime": "2025-10-17T22:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-17T22:25:00.000-03:00",
    "updatedAt": "2025-10-17T22:25:00.000-03:00"
  },
  {
    "id": "res-193",
    "tableId": "table-19",
    "customer": {
      "name": "Adrián Cabrera Castro",
      "phone": "+54-11-9012-3456",
      "email": "adriáncabreracastro@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T22:00:00.000-03:00",
    "endTime": "2025-10-04T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-04T13:08:00.000-03:00",
    "updatedAt": "2025-10-04T17:08:00.000-03:00"
  },
  {
    "id": "res-194",
    "tableId": "table-25",
    "customer": {
      "name": "Rubén Herrera Ramos",
      "phone": "+54-11-5656-7878",
      "email": "rubénherreraramos@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-01T15:30:00.000-03:00",
    "endTime": "2025-10-01T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-01T15:28:00.000-03:00",
    "updatedAt": "2025-10-01T16:28:00.000-03:00"
  },
  {
    "id": "res-195",
    "tableId": "table-23",
    "customer": {
      "name": "Daniel Campos Navarro",
      "phone": "+54-11-5678-9012",
      "email": "danielcamposnavarro@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-23T18:00:00.000-03:00",
    "endTime": "2025-10-23T20:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-23T15:59:00.000-03:00",
    "updatedAt": "2025-10-23T15:59:00.000-03:00"
  },
  {
    "id": "res-196",
    "tableId": "table-30",
    "customer": {
      "name": "Rubén Herrera Silva",
      "phone": "+54-11-1313-4545",
      "email": "rubénherrerasilva@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T13:30:00.000-03:00",
    "endTime": "2025-10-10T16:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-10T12:43:00.000-03:00",
    "updatedAt": "2025-10-10T15:43:00.000-03:00"
  },
  {
    "id": "res-197",
    "tableId": "table-12",
    "customer": {
      "name": "Álvaro Serrano Medina",
      "phone": "+54-11-3333-4444",
      "email": "álvaroserranomedina@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-11T21:00:00.000-03:00",
    "endTime": "2025-10-11T22:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-11T20:25:00.000-03:00",
    "updatedAt": "2025-10-11T21:25:00.000-03:00"
  },
  {
    "id": "res-198",
    "tableId": "table-13",
    "customer": {
      "name": "José Martínez Ramos",
      "phone": "+54-11-9999-0000",
      "email": "josémartínezramos@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-12T13:30:00.000-03:00",
    "endTime": "2025-10-12T16:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-12T18:17:00.000-03:00",
    "updatedAt": "2025-10-12T18:17:00.000-03:00"
  },
  {
    "id": "res-199",
    "tableId": "table-8",
    "customer": {
      "name": "Daniel Campos Ramos",
      "phone": "+54-11-1313-4545",
      "email": "danielcamposramos@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T19:00:00.000-03:00",
    "endTime": "2025-10-18T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-18T18:48:00.000-03:00",
    "updatedAt": "2025-10-18T22:48:00.000-03:00"
  },
  {
    "id": "res-200",
    "tableId": "table-27",
    "customer": {
      "name": "Hugo Aguilar García",
      "phone": "+54-11-7890-1234",
      "email": "hugoaguilargarcía@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T18:30:00.000-03:00",
    "endTime": "2025-10-03T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-03T14:05:00.000-03:00",
    "updatedAt": "2025-10-03T14:05:00.000-03:00"
  },
  {
    "id": "res-201",
    "tableId": "table-19",
    "customer": {
      "name": "David Jiménez Reyes",
      "phone": "+54-11-3333-4444",
      "email": "davidjiménezreyes@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T23:00:00.000-03:00",
    "endTime": "2025-10-04T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-03T15:43:00.000-03:00",
    "updatedAt": "2025-10-03T15:43:00.000-03:00"
  },
  {
    "id": "res-202",
    "tableId": "table-14",
    "customer": {
      "name": "Elena Moreno Jiménez",
      "phone": "+54-11-1212-3434",
      "email": "elenamorenojiménez@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-05T10:00:00.000-03:00",
    "endTime": "2025-10-05T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-05T20:45:00.000-03:00",
    "updatedAt": "2025-10-05T23:45:00.000-03:00"
  },
  {
    "id": "res-203",
    "tableId": "table-25",
    "customer": {
      "name": "Laura Sánchez Mendoza",
      "phone": "+54-11-1313-4545",
      "email": "laurasánchezmendoza@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T10:30:00.000-03:00",
    "endTime": "2025-10-24T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T18:23:00.000-03:00",
    "updatedAt": "2025-10-24T18:23:00.000-03:00"
  },
  {
    "id": "res-204",
    "tableId": "table-23",
    "customer": {
      "name": "David Jiménez Pérez",
      "phone": "+54-11-5678-9012",
      "email": "davidjiménezpérez@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-25T10:00:00.000-03:00",
    "endTime": "2025-10-25T11:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-25T20:41:00.000-03:00",
    "updatedAt": "2025-10-25T20:41:00.000-03:00"
  },
  {
    "id": "res-205",
    "tableId": "table-6",
    "customer": {
      "name": "Sergio Peña Ramos",
      "phone": "+54-11-8901-2345",
      "email": "sergiopeñaramos@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-12T01:30:00.000-03:00",
    "endTime": "2025-10-12T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-11T16:42:00.000-03:00",
    "updatedAt": "2025-10-11T20:42:00.000-03:00"
  },
  {
    "id": "res-206",
    "tableId": "table-23",
    "customer": {
      "name": "Nicolás Fuentes Ramos",
      "phone": "+54-11-7890-1234",
      "email": "nicolásfuentesramos@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T16:00:00.000-03:00",
    "endTime": "2025-10-26T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-26T17:18:00.000-03:00",
    "updatedAt": "2025-10-26T17:18:00.000-03:00"
  },
  {
    "id": "res-207",
    "tableId": "table-29",
    "customer": {
      "name": "Valeria Silva Romero",
      "phone": "+54-11-1234-5678",
      "email": "valeriasilvaromero@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T21:00:00.000-03:00",
    "endTime": "2025-10-11T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-10T20:31:00.000-03:00",
    "updatedAt": "2025-10-10T20:31:00.000-03:00"
  },
  {
    "id": "res-208",
    "tableId": "table-3",
    "customer": {
      "name": "Roberto Herrera Ruiz",
      "phone": "+54-11-8901-2345",
      "email": "robertoherreraruiz@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-09T10:00:00.000-03:00",
    "endTime": "2025-10-09T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-09T13:51:00.000-03:00",
    "updatedAt": "2025-10-09T13:51:00.000-03:00"
  },
  {
    "id": "res-209",
    "tableId": "table-12",
    "customer": {
      "name": "Patricia Navarro Torres",
      "phone": "+54-11-0123-4567",
      "email": "patricianavarrotorres@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T13:00:00.000-03:00",
    "endTime": "2025-10-04T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-04T13:17:00.000-03:00",
    "updatedAt": "2025-10-04T13:17:00.000-03:00"
  },
  {
    "id": "res-210",
    "tableId": "table-7",
    "customer": {
      "name": "Patricia Navarro Molina",
      "phone": "+54-11-1234-5678",
      "email": "patricianavarromolina@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-06T14:30:00.000-03:00",
    "endTime": "2025-10-06T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-06T22:22:00.000-03:00",
    "updatedAt": "2025-10-07T00:22:00.000-03:00"
  },
  {
    "id": "res-211",
    "tableId": "table-12",
    "customer": {
      "name": "Teresa Molina Martínez",
      "phone": "+54-11-2345-6789",
      "email": "teresamolinamartínez@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-26T15:00:00.000-03:00",
    "endTime": "2025-10-26T18:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-26T21:27:00.000-03:00",
    "updatedAt": "2025-10-26T21:27:00.000-03:00"
  },
  {
    "id": "res-212",
    "tableId": "table-10",
    "customer": {
      "name": "Sofia Reyes Martín",
      "phone": "+54-11-6789-0123",
      "email": "sofiareyesmartín@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-27T14:30:00.000-03:00",
    "endTime": "2025-10-27T16:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-27T18:53:00.000-03:00",
    "updatedAt": "2025-10-27T20:53:00.000-03:00"
  },
  {
    "id": "res-213",
    "tableId": "table-6",
    "customer": {
      "name": "Nicolás Fuentes Peña",
      "phone": "+54-11-6789-0123",
      "email": "nicolásfuentespeña@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T16:30:00.000-03:00",
    "endTime": "2025-10-17T17:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-17T12:26:00.000-03:00",
    "updatedAt": "2025-10-17T12:26:00.000-03:00"
  },
  {
    "id": "res-214",
    "tableId": "table-13",
    "customer": {
      "name": "Pablo Delgado Ruiz",
      "phone": "+54-11-2345-6789",
      "email": "pablodelgadoruiz@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T10:30:00.000-03:00",
    "endTime": "2025-10-23T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T20:58:00.000-03:00",
    "updatedAt": "2025-10-23T20:58:00.000-03:00"
  },
  {
    "id": "res-215",
    "tableId": "table-17",
    "customer": {
      "name": "María Rodríguez Fuentes",
      "phone": "+54-11-9012-3456",
      "email": "maríarodríguezfuentes@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-29T19:30:00.000-03:00",
    "endTime": "2025-10-29T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-29T16:04:00.000-03:00",
    "updatedAt": "2025-10-29T19:04:00.000-03:00"
  },
  {
    "id": "res-216",
    "tableId": "table-25",
    "customer": {
      "name": "Javier Torres Herrera",
      "phone": "+54-11-5555-6666",
      "email": "javiertorresherrera@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T13:00:00.000-03:00",
    "endTime": "2025-10-10T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-10T22:39:00.000-03:00",
    "updatedAt": "2025-10-10T22:39:00.000-03:00"
  },
  {
    "id": "res-217",
    "tableId": "table-17",
    "customer": {
      "name": "Raquel Vargas Aguilar",
      "phone": "+54-11-9999-0000",
      "email": "raquelvargasaguilar@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T21:00:00.000-03:00",
    "endTime": "2025-10-18T23:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-18T16:39:00.000-03:00",
    "updatedAt": "2025-10-18T18:39:00.000-03:00"
  },
  {
    "id": "res-218",
    "tableId": "table-15",
    "customer": {
      "name": "Daniel Campos Delgado",
      "phone": "+54-11-9090-1212",
      "email": "danielcamposdelgado@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T21:30:00.000-03:00",
    "endTime": "2025-10-24T23:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T15:15:00.000-03:00",
    "updatedAt": "2025-10-24T16:15:00.000-03:00"
  },
  {
    "id": "res-219",
    "tableId": "table-12",
    "customer": {
      "name": "Daniel Campos Pérez",
      "phone": "+54-11-1212-3434",
      "email": "danielcampospérez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T15:00:00.000-03:00",
    "endTime": "2025-10-10T16:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-10T14:08:00.000-03:00",
    "updatedAt": "2025-10-10T16:08:00.000-03:00"
  },
  {
    "id": "res-220",
    "tableId": "table-4",
    "customer": {
      "name": "Laura Sánchez López",
      "phone": "+54-11-7777-8888",
      "email": "laurasánchezlópez@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T18:00:00.000-03:00",
    "endTime": "2025-10-19T20:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-19T19:20:00.000-03:00",
    "updatedAt": "2025-10-19T19:20:00.000-03:00"
  },
  {
    "id": "res-221",
    "tableId": "table-12",
    "customer": {
      "name": "Andrea Mendoza Reyes",
      "phone": "+54-11-3333-4444",
      "email": "andreamendozareyes@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-16T18:30:00.000-03:00",
    "endTime": "2025-10-16T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-16T14:51:00.000-03:00",
    "updatedAt": "2025-10-16T14:51:00.000-03:00"
  },
  {
    "id": "res-222",
    "tableId": "table-26",
    "customer": {
      "name": "Cristina Romero Rojas",
      "phone": "+54-11-1111-2222",
      "email": "cristinaromerorojas@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-16T22:30:00.000-03:00",
    "endTime": "2025-10-16T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-16T12:42:00.000-03:00",
    "updatedAt": "2025-10-16T16:42:00.000-03:00"
  },
  {
    "id": "res-223",
    "tableId": "table-22",
    "customer": {
      "name": "Sebastián Vega Rojas",
      "phone": "+54-11-5555-6666",
      "email": "sebastiánvegarojas@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-05T14:00:00.000-03:00",
    "endTime": "2025-10-05T15:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-05T11:02:00.000-03:00",
    "updatedAt": "2025-10-05T11:02:00.000-03:00"
  },
  {
    "id": "res-224",
    "tableId": "table-4",
    "customer": {
      "name": "Alejandro Castro García",
      "phone": "+54-11-7890-1234",
      "email": "alejandrocastrogarcía@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T13:00:00.000-03:00",
    "endTime": "2025-10-25T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-25T14:30:00.000-03:00",
    "updatedAt": "2025-10-25T14:30:00.000-03:00"
  },
  {
    "id": "res-225",
    "tableId": "table-29",
    "customer": {
      "name": "Gabriel Rojas Pérez",
      "phone": "+54-11-3333-4444",
      "email": "gabrielrojaspérez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-01T10:00:00.000-03:00",
    "endTime": "2025-10-01T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-01T12:00:00.000-03:00",
    "updatedAt": "2025-10-01T12:00:00.000-03:00"
  },
  {
    "id": "res-226",
    "tableId": "table-30",
    "customer": {
      "name": "Sandra Vega Torres",
      "phone": "+54-11-7890-1234",
      "email": "sandravegatorres@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T14:30:00.000-03:00",
    "endTime": "2025-10-20T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-20T13:06:00.000-03:00",
    "updatedAt": "2025-10-20T13:06:00.000-03:00"
  },
  {
    "id": "res-227",
    "tableId": "table-6",
    "customer": {
      "name": "Adrián Cabrera Ramos",
      "phone": "+54-11-9999-0000",
      "email": "adriáncabreraramos@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-16T10:30:00.000-03:00",
    "endTime": "2025-10-16T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-16T16:36:00.000-03:00",
    "updatedAt": "2025-10-16T19:36:00.000-03:00"
  },
  {
    "id": "res-228",
    "tableId": "table-23",
    "customer": {
      "name": "Andrea Mendoza Rodríguez",
      "phone": "+54-11-1234-5678",
      "email": "andreamendozarodríguez@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-17T12:30:00.000-03:00",
    "endTime": "2025-10-17T13:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-17T16:36:00.000-03:00",
    "updatedAt": "2025-10-17T16:36:00.000-03:00"
  },
  {
    "id": "res-229",
    "tableId": "table-18",
    "customer": {
      "name": "Daniel Campos Herrera",
      "phone": "+54-11-6767-8989",
      "email": "danielcamposherrera@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-07T18:30:00.000-03:00",
    "endTime": "2025-10-07T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-07T20:48:00.000-03:00",
    "updatedAt": "2025-10-07T20:48:00.000-03:00"
  },
  {
    "id": "res-230",
    "tableId": "table-4",
    "customer": {
      "name": "David Jiménez Flores",
      "phone": "+54-11-9012-3456",
      "email": "davidjiménezflores@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T23:30:00.000-03:00",
    "endTime": "2025-10-18T02:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-17T16:45:00.000-03:00",
    "updatedAt": "2025-10-17T17:45:00.000-03:00"
  },
  {
    "id": "res-231",
    "tableId": "table-6",
    "customer": {
      "name": "Francisco Martín Martínez",
      "phone": "+54-11-7890-1234",
      "email": "franciscomartínmartínez@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-12T18:00:00.000-03:00",
    "endTime": "2025-10-12T20:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-12T11:17:00.000-03:00",
    "updatedAt": "2025-10-12T13:17:00.000-03:00"
  },
  {
    "id": "res-232",
    "tableId": "table-22",
    "customer": {
      "name": "Carmen Pérez Herrera",
      "phone": "+54-11-5555-6666",
      "email": "carmenpérezherrera@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T21:00:00.000-03:00",
    "endTime": "2025-10-26T22:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-26T17:21:00.000-03:00",
    "updatedAt": "2025-10-26T17:21:00.000-03:00"
  },
  {
    "id": "res-233",
    "tableId": "table-13",
    "customer": {
      "name": "Camila Espinoza Ramos",
      "phone": "+54-11-9090-1212",
      "email": "camilaespinozaramos@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-08T13:00:00.000-03:00",
    "endTime": "2025-10-08T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-08T14:20:00.000-03:00",
    "updatedAt": "2025-10-08T14:20:00.000-03:00"
  },
  {
    "id": "res-234",
    "tableId": "table-27",
    "customer": {
      "name": "Roberto Herrera Molina",
      "phone": "+54-11-6789-0123",
      "email": "robertoherreramolina@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-12T18:30:00.000-03:00",
    "endTime": "2025-10-12T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-12T21:24:00.000-03:00",
    "updatedAt": "2025-10-13T00:24:00.000-03:00"
  },
  {
    "id": "res-235",
    "tableId": "table-17",
    "customer": {
      "name": "Javier Torres Torres",
      "phone": "+54-11-1313-4545",
      "email": "javiertorrestorres@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T16:30:00.000-03:00",
    "endTime": "2025-10-18T17:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-18T11:53:00.000-03:00",
    "updatedAt": "2025-10-18T11:53:00.000-03:00"
  },
  {
    "id": "res-236",
    "tableId": "table-11",
    "customer": {
      "name": "Patricia Navarro Vega",
      "phone": "+54-11-3456-7890",
      "email": "patricianavarrovega@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T19:00:00.000-03:00",
    "endTime": "2025-10-10T22:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-10T12:45:00.000-03:00",
    "updatedAt": "2025-10-10T12:45:00.000-03:00"
  },
  {
    "id": "res-237",
    "tableId": "table-10",
    "customer": {
      "name": "Natalia Ortega Martínez",
      "phone": "+54-11-5555-6666",
      "email": "nataliaortegamartínez@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T20:00:00.000-03:00",
    "endTime": "2025-10-04T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-04T16:48:00.000-03:00",
    "updatedAt": "2025-10-04T16:48:00.000-03:00"
  },
  {
    "id": "res-238",
    "tableId": "table-3",
    "customer": {
      "name": "Patricia Navarro Molina",
      "phone": "+54-11-6767-8989",
      "email": "patricianavarromolina@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-11T17:00:00.000-03:00",
    "endTime": "2025-10-11T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-11T15:16:00.000-03:00",
    "updatedAt": "2025-10-11T17:16:00.000-03:00"
  },
  {
    "id": "res-239",
    "tableId": "table-10",
    "customer": {
      "name": "Beatriz Guerrero Sánchez",
      "phone": "+54-11-3456-7890",
      "email": "beatrizguerrerosánchez@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-10T11:00:00.000-03:00",
    "endTime": "2025-10-10T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-10T21:15:00.000-03:00",
    "updatedAt": "2025-10-10T21:15:00.000-03:00"
  },
  {
    "id": "res-240",
    "tableId": "table-22",
    "customer": {
      "name": "Nicolás Fuentes Rojas",
      "phone": "+54-11-5555-6666",
      "email": "nicolásfuentesrojas@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-17T17:00:00.000-03:00",
    "endTime": "2025-10-17T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-17T12:38:00.000-03:00",
    "updatedAt": "2025-10-17T12:38:00.000-03:00"
  },
  {
    "id": "res-241",
    "tableId": "table-16",
    "customer": {
      "name": "Patricia Navarro Flores",
      "phone": "+54-11-1111-2222",
      "email": "patricianavarroflores@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T14:00:00.000-03:00",
    "endTime": "2025-10-24T15:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T11:13:00.000-03:00",
    "updatedAt": "2025-10-24T11:13:00.000-03:00"
  },
  {
    "id": "res-242",
    "tableId": "table-17",
    "customer": {
      "name": "Rubén Herrera Torres",
      "phone": "+54-11-2345-6789",
      "email": "rubénherreratorres@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-02T00:30:00.000-03:00",
    "endTime": "2025-10-02T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-01T15:59:00.000-03:00",
    "updatedAt": "2025-10-01T15:59:00.000-03:00"
  },
  {
    "id": "res-243",
    "tableId": "table-7",
    "customer": {
      "name": "Carmen Pérez Mendoza",
      "phone": "+54-11-5678-9012",
      "email": "carmenpérezmendoza@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-01T13:30:00.000-03:00",
    "endTime": "2025-10-01T15:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-01T22:08:00.000-03:00",
    "updatedAt": "2025-10-02T02:08:00.000-03:00"
  },
  {
    "id": "res-244",
    "tableId": "table-24",
    "customer": {
      "name": "Sandra Vega Martínez",
      "phone": "+54-11-6789-0123",
      "email": "sandravegamartínez@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-03T22:30:00.000-03:00",
    "endTime": "2025-10-04T01:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-03T15:07:00.000-03:00",
    "updatedAt": "2025-10-03T15:07:00.000-03:00"
  },
  {
    "id": "res-245",
    "tableId": "table-14",
    "customer": {
      "name": "Andrea Mendoza Castro",
      "phone": "+54-11-6789-0123",
      "email": "andreamendozacastro@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-02T11:30:00.000-03:00",
    "endTime": "2025-10-02T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-02T20:51:00.000-03:00",
    "updatedAt": "2025-10-02T22:51:00.000-03:00"
  },
  {
    "id": "res-246",
    "tableId": "table-25",
    "customer": {
      "name": "María Rodríguez Martín",
      "phone": "+54-11-8901-2345",
      "email": "maríarodríguezmartín@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T18:30:00.000-03:00",
    "endTime": "2025-10-10T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-10T11:33:00.000-03:00",
    "updatedAt": "2025-10-10T12:33:00.000-03:00"
  },
  {
    "id": "res-247",
    "tableId": "table-27",
    "customer": {
      "name": "Raquel Vargas Herrera",
      "phone": "+54-11-1313-4545",
      "email": "raquelvargasherrera@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T16:00:00.000-03:00",
    "endTime": "2025-10-18T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-18T17:50:00.000-03:00",
    "updatedAt": "2025-10-18T20:50:00.000-03:00"
  },
  {
    "id": "res-248",
    "tableId": "table-15",
    "customer": {
      "name": "Carmen Pérez Díaz",
      "phone": "+54-11-3333-4444",
      "email": "carmenpérezdíaz@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T18:00:00.000-03:00",
    "endTime": "2025-10-26T21:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-26T16:22:00.000-03:00",
    "updatedAt": "2025-10-26T16:22:00.000-03:00"
  },
  {
    "id": "res-249",
    "tableId": "table-11",
    "customer": {
      "name": "Miguel González Fuentes",
      "phone": "+54-11-5656-7878",
      "email": "miguelgonzálezfuentes@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T15:30:00.000-03:00",
    "endTime": "2025-10-24T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T11:25:00.000-03:00",
    "updatedAt": "2025-10-24T15:25:00.000-03:00"
  },
  {
    "id": "res-250",
    "tableId": "table-19",
    "customer": {
      "name": "Sofia Reyes Ramos",
      "phone": "+54-11-6789-0123",
      "email": "sofiareyesramos@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T23:00:00.000-03:00",
    "endTime": "2025-10-04T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-03T22:41:00.000-03:00",
    "updatedAt": "2025-10-03T23:41:00.000-03:00"
  },
  {
    "id": "res-251",
    "tableId": "table-7",
    "customer": {
      "name": "Elena Moreno Flores",
      "phone": "+54-11-5656-7878",
      "email": "elenamorenoflores@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T11:00:00.000-03:00",
    "endTime": "2025-10-19T14:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-19T15:09:00.000-03:00",
    "updatedAt": "2025-10-19T15:09:00.000-03:00"
  },
  {
    "id": "res-252",
    "tableId": "table-6",
    "customer": {
      "name": "María Rodríguez Molina",
      "phone": "+54-11-7777-8888",
      "email": "maríarodríguezmolina@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-12T17:00:00.000-03:00",
    "endTime": "2025-10-12T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-12T15:53:00.000-03:00",
    "updatedAt": "2025-10-12T15:53:00.000-03:00"
  },
  {
    "id": "res-253",
    "tableId": "table-19",
    "customer": {
      "name": "Teresa Molina Ruiz",
      "phone": "+54-11-1212-3434",
      "email": "teresamolinaruiz@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T17:00:00.000-03:00",
    "endTime": "2025-10-03T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-03T18:50:00.000-03:00",
    "updatedAt": "2025-10-03T18:50:00.000-03:00"
  },
  {
    "id": "res-254",
    "tableId": "table-9",
    "customer": {
      "name": "Patricia Navarro Espinoza",
      "phone": "+54-11-9090-1212",
      "email": "patricianavarroespinoza@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-29T20:30:00.000-03:00",
    "endTime": "2025-10-29T22:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-29T11:32:00.000-03:00",
    "updatedAt": "2025-10-29T11:32:00.000-03:00"
  },
  {
    "id": "res-255",
    "tableId": "table-29",
    "customer": {
      "name": "Claudia Medina López",
      "phone": "+54-11-1111-2222",
      "email": "claudiamedinalópez@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T00:30:00.000-03:00",
    "endTime": "2025-10-17T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-16T18:52:00.000-03:00",
    "updatedAt": "2025-10-16T19:52:00.000-03:00"
  },
  {
    "id": "res-256",
    "tableId": "table-18",
    "customer": {
      "name": "Raquel Vargas Herrera",
      "phone": "+54-11-0123-4567",
      "email": "raquelvargasherrera@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-17T14:30:00.000-03:00",
    "endTime": "2025-10-17T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-17T15:52:00.000-03:00",
    "updatedAt": "2025-10-17T16:52:00.000-03:00"
  },
  {
    "id": "res-257",
    "tableId": "table-10",
    "customer": {
      "name": "Miguel González Fuentes",
      "phone": "+54-11-1212-3434",
      "email": "miguelgonzálezfuentes@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-29T13:00:00.000-03:00",
    "endTime": "2025-10-29T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-29T14:58:00.000-03:00",
    "updatedAt": "2025-10-29T14:58:00.000-03:00"
  },
  {
    "id": "res-258",
    "tableId": "table-13",
    "customer": {
      "name": "Carlos López Vega",
      "phone": "+54-11-6767-8989",
      "email": "carloslópezvega@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T17:30:00.000-03:00",
    "endTime": "2025-10-11T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-11T21:18:00.000-03:00",
    "updatedAt": "2025-10-12T00:18:00.000-03:00"
  },
  {
    "id": "res-259",
    "tableId": "table-6",
    "customer": {
      "name": "Roberto Herrera Vargas",
      "phone": "+54-11-3333-4444",
      "email": "robertoherreravargas@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-25T16:00:00.000-03:00",
    "endTime": "2025-10-25T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-25T16:23:00.000-03:00",
    "updatedAt": "2025-10-25T16:23:00.000-03:00"
  },
  {
    "id": "res-260",
    "tableId": "table-17",
    "customer": {
      "name": "Cristina Romero Martín",
      "phone": "+54-11-5656-7878",
      "email": "cristinaromeromartín@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-25T21:00:00.000-03:00",
    "endTime": "2025-10-26T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-25T18:27:00.000-03:00",
    "updatedAt": "2025-10-25T18:27:00.000-03:00"
  },
  {
    "id": "res-261",
    "tableId": "table-22",
    "customer": {
      "name": "Laura Sánchez Campos",
      "phone": "+54-11-3333-4444",
      "email": "laurasánchezcampos@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-27T13:00:00.000-03:00",
    "endTime": "2025-10-27T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-27T11:55:00.000-03:00",
    "updatedAt": "2025-10-27T11:55:00.000-03:00"
  },
  {
    "id": "res-262",
    "tableId": "table-10",
    "customer": {
      "name": "Cristina Romero Medina",
      "phone": "+54-11-5656-7878",
      "email": "cristinaromeromedina@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-11T17:30:00.000-03:00",
    "endTime": "2025-10-11T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-11T18:06:00.000-03:00",
    "updatedAt": "2025-10-11T18:06:00.000-03:00"
  },
  {
    "id": "res-263",
    "tableId": "table-15",
    "customer": {
      "name": "Miguel González Vega",
      "phone": "+54-11-6789-0123",
      "email": "miguelgonzálezvega@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-15T16:30:00.000-03:00",
    "endTime": "2025-10-15T17:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-15T22:48:00.000-03:00",
    "updatedAt": "2025-10-15T22:48:00.000-03:00"
  },
  {
    "id": "res-264",
    "tableId": "table-28",
    "customer": {
      "name": "Sebastián Vega Reyes",
      "phone": "+54-11-3456-7890",
      "email": "sebastiánvegareyes@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T23:00:00.000-03:00",
    "endTime": "2025-10-20T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-19T14:47:00.000-03:00",
    "updatedAt": "2025-10-19T14:47:00.000-03:00"
  },
  {
    "id": "res-265",
    "tableId": "table-22",
    "customer": {
      "name": "Carmen Pérez García",
      "phone": "+54-11-4567-8901",
      "email": "carmenpérezgarcía@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-11T15:30:00.000-03:00",
    "endTime": "2025-10-11T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-11T21:41:00.000-03:00",
    "updatedAt": "2025-10-11T21:41:00.000-03:00"
  },
  {
    "id": "res-266",
    "tableId": "table-26",
    "customer": {
      "name": "Roberto Herrera Molina",
      "phone": "+54-11-2345-6789",
      "email": "robertoherreramolina@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T00:00:00.000-03:00",
    "endTime": "2025-10-19T02:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-18T20:15:00.000-03:00",
    "updatedAt": "2025-10-18T20:15:00.000-03:00"
  },
  {
    "id": "res-267",
    "tableId": "table-28",
    "customer": {
      "name": "Claudia Medina Rodríguez",
      "phone": "+54-11-3333-4444",
      "email": "claudiamedinarodríguez@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T18:30:00.000-03:00",
    "endTime": "2025-10-19T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-19T14:33:00.000-03:00",
    "updatedAt": "2025-10-19T14:33:00.000-03:00"
  },
  {
    "id": "res-268",
    "tableId": "table-27",
    "customer": {
      "name": "Sofia Reyes Espinoza",
      "phone": "+54-11-8901-2345",
      "email": "sofiareyesespinoza@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-01T18:30:00.000-03:00",
    "endTime": "2025-10-01T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-01T11:03:00.000-03:00",
    "updatedAt": "2025-10-01T12:03:00.000-03:00"
  },
  {
    "id": "res-269",
    "tableId": "table-21",
    "customer": {
      "name": "Roberto Herrera Medina",
      "phone": "+54-11-5656-7878",
      "email": "robertoherreramedina@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T20:00:00.000-03:00",
    "endTime": "2025-10-23T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-23T12:28:00.000-03:00",
    "updatedAt": "2025-10-23T15:28:00.000-03:00"
  },
  {
    "id": "res-270",
    "tableId": "table-16",
    "customer": {
      "name": "Carmen Pérez Díaz",
      "phone": "+54-11-1212-3434",
      "email": "carmenpérezdíaz@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T13:00:00.000-03:00",
    "endTime": "2025-10-18T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-18T11:01:00.000-03:00",
    "updatedAt": "2025-10-18T11:01:00.000-03:00"
  },
  {
    "id": "res-271",
    "tableId": "table-4",
    "customer": {
      "name": "Patricia Navarro López",
      "phone": "+54-11-9999-0000",
      "email": "patricianavarrolópez@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T16:00:00.000-03:00",
    "endTime": "2025-10-26T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-26T14:34:00.000-03:00",
    "updatedAt": "2025-10-26T15:34:00.000-03:00"
  },
  {
    "id": "res-272",
    "tableId": "table-15",
    "customer": {
      "name": "Carlos López Moreno",
      "phone": "+54-11-7890-1234",
      "email": "carloslópezmoreno@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T23:30:00.000-03:00",
    "endTime": "2025-10-24T02:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T20:29:00.000-03:00",
    "updatedAt": "2025-10-23T23:29:00.000-03:00"
  },
  {
    "id": "res-273",
    "tableId": "table-10",
    "customer": {
      "name": "Álvaro Serrano Reyes",
      "phone": "+54-11-1212-3434",
      "email": "álvaroserranoreyes@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-05T21:30:00.000-03:00",
    "endTime": "2025-10-05T23:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-05T14:42:00.000-03:00",
    "updatedAt": "2025-10-05T14:42:00.000-03:00"
  },
  {
    "id": "res-274",
    "tableId": "table-20",
    "customer": {
      "name": "Ana García López",
      "phone": "+54-11-8901-2345",
      "email": "anagarcíalópez@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-09T20:30:00.000-03:00",
    "endTime": "2025-10-09T22:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-09T22:22:00.000-03:00",
    "updatedAt": "2025-10-09T22:22:00.000-03:00"
  },
  {
    "id": "res-275",
    "tableId": "table-8",
    "customer": {
      "name": "Sebastián Vega Aguilar",
      "phone": "+54-11-3456-7890",
      "email": "sebastiánvegaaguilar@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T20:30:00.000-03:00",
    "endTime": "2025-10-22T21:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-22T20:08:00.000-03:00",
    "updatedAt": "2025-10-22T20:08:00.000-03:00"
  },
  {
    "id": "res-276",
    "tableId": "table-28",
    "customer": {
      "name": "Sofia Reyes Silva",
      "phone": "+54-11-8901-2345",
      "email": "sofiareyessilva@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T16:30:00.000-03:00",
    "endTime": "2025-10-18T17:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-18T19:18:00.000-03:00",
    "updatedAt": "2025-10-18T19:18:00.000-03:00"
  },
  {
    "id": "res-277",
    "tableId": "table-5",
    "customer": {
      "name": "Carmen Pérez Vega",
      "phone": "+54-11-5678-9012",
      "email": "carmenpérezvega@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T22:00:00.000-03:00",
    "endTime": "2025-10-04T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-04T21:52:00.000-03:00",
    "updatedAt": "2025-10-04T21:52:00.000-03:00"
  },
  {
    "id": "res-278",
    "tableId": "table-12",
    "customer": {
      "name": "Sofia Reyes Serrano",
      "phone": "+54-11-9090-1212",
      "email": "sofiareyesserrano@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-13T00:30:00.000-03:00",
    "endTime": "2025-10-13T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-12T21:59:00.000-03:00",
    "updatedAt": "2025-10-13T00:59:00.000-03:00"
  },
  {
    "id": "res-279",
    "tableId": "table-24",
    "customer": {
      "name": "Hugo Aguilar González",
      "phone": "+54-11-3456-7890",
      "email": "hugoaguilargonzález@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-03T20:30:00.000-03:00",
    "endTime": "2025-10-03T21:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-03T17:44:00.000-03:00",
    "updatedAt": "2025-10-03T17:44:00.000-03:00"
  },
  {
    "id": "res-280",
    "tableId": "table-23",
    "customer": {
      "name": "Adrián Cabrera Guerrero",
      "phone": "+54-11-1111-2222",
      "email": "adriáncabreraguerrero@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T17:30:00.000-03:00",
    "endTime": "2025-10-11T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-11T18:14:00.000-03:00",
    "updatedAt": "2025-10-11T18:14:00.000-03:00"
  },
  {
    "id": "res-281",
    "tableId": "table-10",
    "customer": {
      "name": "José Martínez García",
      "phone": "+54-11-3456-7890",
      "email": "josémartínezgarcía@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-21T10:00:00.000-03:00",
    "endTime": "2025-10-21T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-21T21:50:00.000-03:00",
    "updatedAt": "2025-10-22T00:50:00.000-03:00"
  },
  {
    "id": "res-282",
    "tableId": "table-28",
    "customer": {
      "name": "Elena Moreno Torres",
      "phone": "+54-11-2345-6789",
      "email": "elenamorenotorres@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-17T17:30:00.000-03:00",
    "endTime": "2025-10-17T19:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-17T19:59:00.000-03:00",
    "updatedAt": "2025-10-17T19:59:00.000-03:00"
  },
  {
    "id": "res-283",
    "tableId": "table-9",
    "customer": {
      "name": "Elena Moreno Delgado",
      "phone": "+54-11-5555-6666",
      "email": "elenamorenodelgado@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T19:00:00.000-03:00",
    "endTime": "2025-10-24T22:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-24T11:45:00.000-03:00",
    "updatedAt": "2025-10-24T13:45:00.000-03:00"
  },
  {
    "id": "res-284",
    "tableId": "table-6",
    "customer": {
      "name": "Carmen Pérez Silva",
      "phone": "+54-11-9090-1212",
      "email": "carmenpérezsilva@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-01T17:00:00.000-03:00",
    "endTime": "2025-10-01T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-01T13:03:00.000-03:00",
    "updatedAt": "2025-10-01T13:03:00.000-03:00"
  },
  {
    "id": "res-285",
    "tableId": "table-7",
    "customer": {
      "name": "Francisco Martín López",
      "phone": "+54-11-9012-3456",
      "email": "franciscomartínlópez@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T22:30:00.000-03:00",
    "endTime": "2025-10-10T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-10T16:27:00.000-03:00",
    "updatedAt": "2025-10-10T16:27:00.000-03:00"
  },
  {
    "id": "res-286",
    "tableId": "table-26",
    "customer": {
      "name": "Patricia Navarro Vargas",
      "phone": "+54-11-1111-2222",
      "email": "patricianavarrovargas@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T00:00:00.000-03:00",
    "endTime": "2025-10-18T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-17T16:05:00.000-03:00",
    "updatedAt": "2025-10-17T16:05:00.000-03:00"
  },
  {
    "id": "res-287",
    "tableId": "table-20",
    "customer": {
      "name": "Fernando Ramos Silva",
      "phone": "+54-11-7890-1234",
      "email": "fernandoramossilva@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T19:00:00.000-03:00",
    "endTime": "2025-10-03T20:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-03T21:58:00.000-03:00",
    "updatedAt": "2025-10-03T21:58:00.000-03:00"
  },
  {
    "id": "res-288",
    "tableId": "table-29",
    "customer": {
      "name": "David Jiménez Martínez",
      "phone": "+54-11-7777-8888",
      "email": "davidjiménezmartínez@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T10:30:00.000-03:00",
    "endTime": "2025-10-17T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-17T19:04:00.000-03:00",
    "updatedAt": "2025-10-17T19:04:00.000-03:00"
  },
  {
    "id": "res-289",
    "tableId": "table-21",
    "customer": {
      "name": "Antonio Ruiz Peña",
      "phone": "+54-11-4567-8901",
      "email": "antonioruizpeña@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-01T12:00:00.000-03:00",
    "endTime": "2025-10-01T13:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-01T13:49:00.000-03:00",
    "updatedAt": "2025-10-01T13:49:00.000-03:00"
  },
  {
    "id": "res-290",
    "tableId": "table-22",
    "customer": {
      "name": "Nicolás Fuentes García",
      "phone": "+54-11-5656-7878",
      "email": "nicolásfuentesgarcía@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-29T10:00:00.000-03:00",
    "endTime": "2025-10-29T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-29T22:54:00.000-03:00",
    "updatedAt": "2025-10-29T22:54:00.000-03:00"
  },
  {
    "id": "res-291",
    "tableId": "table-23",
    "customer": {
      "name": "Alejandro Castro Moreno",
      "phone": "+54-11-7890-1234",
      "email": "alejandrocastromoreno@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T12:30:00.000-03:00",
    "endTime": "2025-10-24T15:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T20:34:00.000-03:00",
    "updatedAt": "2025-10-24T20:34:00.000-03:00"
  },
  {
    "id": "res-292",
    "tableId": "table-24",
    "customer": {
      "name": "Hugo Aguilar Reyes",
      "phone": "+54-11-1212-3434",
      "email": "hugoaguilarreyes@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-25T16:00:00.000-03:00",
    "endTime": "2025-10-25T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-25T21:03:00.000-03:00",
    "updatedAt": "2025-10-25T21:03:00.000-03:00"
  },
  {
    "id": "res-293",
    "tableId": "table-9",
    "customer": {
      "name": "Laura Sánchez Medina",
      "phone": "+54-11-7777-8888",
      "email": "laurasánchezmedina@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-02T00:30:00.000-03:00",
    "endTime": "2025-10-02T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-01T11:04:00.000-03:00",
    "updatedAt": "2025-10-01T14:04:00.000-03:00"
  },
  {
    "id": "res-294",
    "tableId": "table-1",
    "customer": {
      "name": "Javier Torres Molina",
      "phone": "+54-11-9090-1212",
      "email": "javiertorresmolina@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-05T13:30:00.000-03:00",
    "endTime": "2025-10-05T14:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-05T19:48:00.000-03:00",
    "updatedAt": "2025-10-05T23:48:00.000-03:00"
  },
  {
    "id": "res-295",
    "tableId": "table-7",
    "customer": {
      "name": "Nicolás Fuentes Ruiz",
      "phone": "+54-11-9090-1212",
      "email": "nicolásfuentesruiz@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-01T11:00:00.000-03:00",
    "endTime": "2025-10-01T14:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-01T15:57:00.000-03:00",
    "updatedAt": "2025-10-01T15:57:00.000-03:00"
  },
  {
    "id": "res-296",
    "tableId": "table-20",
    "customer": {
      "name": "Sofia Reyes Rojas",
      "phone": "+54-11-9012-3456",
      "email": "sofiareyesrojas@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T23:30:00.000-03:00",
    "endTime": "2025-10-11T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-10T14:43:00.000-03:00",
    "updatedAt": "2025-10-10T14:43:00.000-03:00"
  },
  {
    "id": "res-297",
    "tableId": "table-5",
    "customer": {
      "name": "Ana García Morales",
      "phone": "+54-11-1111-2222",
      "email": "anagarcíamorales@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T13:30:00.000-03:00",
    "endTime": "2025-10-04T14:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-04T20:37:00.000-03:00",
    "updatedAt": "2025-10-04T22:37:00.000-03:00"
  },
  {
    "id": "res-298",
    "tableId": "table-27",
    "customer": {
      "name": "Alejandro Castro Delgado",
      "phone": "+54-11-3333-4444",
      "email": "alejandrocastrodelgado@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T21:30:00.000-03:00",
    "endTime": "2025-10-04T23:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-04T22:43:00.000-03:00",
    "updatedAt": "2025-10-05T02:43:00.000-03:00"
  },
  {
    "id": "res-299",
    "tableId": "table-25",
    "customer": {
      "name": "Sergio Peña Jiménez",
      "phone": "+54-11-1234-5678",
      "email": "sergiopeñajiménez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T18:30:00.000-03:00",
    "endTime": "2025-10-22T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-22T14:40:00.000-03:00",
    "updatedAt": "2025-10-22T14:40:00.000-03:00"
  },
  {
    "id": "res-300",
    "tableId": "table-24",
    "customer": {
      "name": "Sofia Reyes Navarro",
      "phone": "+54-11-5678-9012",
      "email": "sofiareyesnavarro@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T13:00:00.000-03:00",
    "endTime": "2025-10-24T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T22:47:00.000-03:00",
    "updatedAt": "2025-10-24T23:47:00.000-03:00"
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
