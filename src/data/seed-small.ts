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
      "min": 2,
      "max": 4
    },
    "sortOrder": 1
  },
  {
    "id": "table-2",
    "sectorId": "sector-1",
    "name": "Table 2",
    "capacity": {
      "min": 5,
      "max": 6
    },
    "sortOrder": 2
  },
  {
    "id": "table-3",
    "sectorId": "sector-1",
    "name": "Table 3",
    "capacity": {
      "min": 3,
      "max": 4
    },
    "sortOrder": 3
  },
  {
    "id": "table-4",
    "sectorId": "sector-2",
    "name": "Table 4",
    "capacity": {
      "min": 5,
      "max": 8
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
      "max": 5
    },
    "sortOrder": 6
  },
  {
    "id": "table-7",
    "sectorId": "sector-3",
    "name": "Table 7",
    "capacity": {
      "min": 3,
      "max": 4
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
    "id": "res-1761426274168-1",
    "tableId": "table-6",
    "customer": {
      "name": "Gabriel Rojas Reyes",
      "phone": "+54-11-3456-7890",
      "email": "gabrielrojasreyes@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T15:15:00.000-03:00",
    "endTime": "2025-10-24T18:30:00.000-03:00",
    "durationMinutes": 195,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274168-2",
    "tableId": "table-7",
    "customer": {
      "name": "Francisco Martín Rojas",
      "phone": "+54-11-6767-8989",
      "email": "franciscomartínrojas@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-20T20:00:00.000-03:00",
    "endTime": "2025-10-21T00:00:00.000-03:00",
    "durationMinutes": 240,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274168-4",
    "tableId": "table-1",
    "customer": {
      "name": "Teresa Molina Delgado",
      "phone": "+54-11-6767-8989",
      "email": "teresamolinadelgado@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T16:00:00.000-03:00",
    "endTime": "2025-10-24T19:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274168-5",
    "tableId": "table-4",
    "customer": {
      "name": "Mónica Flores Pérez",
      "phone": "+54-11-8901-2345",
      "email": "mónicaflorespérez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T13:00:00.000-03:00",
    "endTime": "2025-10-19T15:30:00.000-03:00",
    "durationMinutes": 150,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274168-6",
    "tableId": "table-6",
    "customer": {
      "name": "Carlos López Díaz",
      "phone": "+54-11-3333-4444",
      "email": "carloslópezdíaz@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T14:00:00.000-03:00",
    "endTime": "2025-10-20T18:00:00.000-03:00",
    "durationMinutes": 240,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274168-7",
    "tableId": "table-6",
    "customer": {
      "name": "Laura Sánchez Jiménez",
      "phone": "+54-11-4567-8901",
      "email": "laurasánchezjiménez@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T10:30:00.000-03:00",
    "endTime": "2025-10-24T14:15:00.000-03:00",
    "durationMinutes": 225,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274168-8",
    "tableId": "table-8",
    "customer": {
      "name": "Claudia Medina Campos",
      "phone": "+54-11-0123-4567",
      "email": "claudiamedinacampos@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T20:30:00.000-03:00",
    "endTime": "2025-10-19T21:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274169-9",
    "tableId": "table-4",
    "customer": {
      "name": "Gabriel Rojas García",
      "phone": "+54-11-1313-4545",
      "email": "gabrielrojasgarcía@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T10:00:00.000-03:00",
    "endTime": "2025-10-23T13:15:00.000-03:00",
    "durationMinutes": 195,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274169-10",
    "tableId": "table-7",
    "customer": {
      "name": "Mónica Flores Reyes",
      "phone": "+54-11-1111-2222",
      "email": "mónicafloresreyes@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T23:30:00.000-03:00",
    "endTime": "2025-10-24T01:00:00.000-03:00",
    "durationMinutes": 90,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274169-11",
    "tableId": "table-3",
    "customer": {
      "name": "Carlos López Medina",
      "phone": "+54-11-7890-1234",
      "email": "carloslópezmedina@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-21T16:45:00.000-03:00",
    "endTime": "2025-10-21T19:00:00.000-03:00",
    "durationMinutes": 135,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274169-12",
    "tableId": "table-5",
    "customer": {
      "name": "Andrea Mendoza Martínez",
      "phone": "+54-11-5656-7878",
      "email": "andreamendozamartínez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T23:15:00.000-03:00",
    "endTime": "2025-10-25T00:30:00.000-03:00",
    "durationMinutes": 75,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274169-14",
    "tableId": "table-7",
    "customer": {
      "name": "Andrea Mendoza Peña",
      "phone": "+54-11-7890-1234",
      "email": "andreamendozapeña@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T16:30:00.000-03:00",
    "endTime": "2025-10-22T19:45:00.000-03:00",
    "durationMinutes": 195,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274169-15",
    "tableId": "table-4",
    "customer": {
      "name": "Adrián Cabrera Castro",
      "phone": "+54-11-1212-3434",
      "email": "adriáncabreracastro@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T14:15:00.000-03:00",
    "endTime": "2025-10-20T16:15:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274169-17",
    "tableId": "table-8",
    "customer": {
      "name": "Cristina Romero Navarro",
      "phone": "+54-11-3456-7890",
      "email": "cristinaromeronavarro@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T11:45:00.000-03:00",
    "endTime": "2025-10-19T13:45:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274169-19",
    "tableId": "table-7",
    "customer": {
      "name": "Andrea Mendoza Navarro",
      "phone": "+54-11-1212-3434",
      "email": "andreamendozanavarro@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T18:15:00.000-03:00",
    "endTime": "2025-10-19T22:00:00.000-03:00",
    "durationMinutes": 225,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274169-20",
    "tableId": "table-5",
    "customer": {
      "name": "Carmen Pérez Guerrero",
      "phone": "+54-11-7777-8888",
      "email": "carmenpérezguerrero@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T23:15:00.000-03:00",
    "endTime": "2025-10-24T01:00:00.000-03:00",
    "durationMinutes": 105,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274169-21",
    "tableId": "table-7",
    "customer": {
      "name": "Mónica Flores Flores",
      "phone": "+54-11-0123-4567",
      "email": "mónicafloresflores@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T23:15:00.000-03:00",
    "endTime": "2025-10-20T01:00:00.000-03:00",
    "durationMinutes": 105,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274169-22",
    "tableId": "table-5",
    "customer": {
      "name": "Roberto Herrera Jiménez",
      "phone": "+54-11-9999-0000",
      "email": "robertoherrerajiménez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T15:15:00.000-03:00",
    "endTime": "2025-10-21T16:45:00.000-03:00",
    "durationMinutes": 90,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-24",
    "tableId": "table-1",
    "customer": {
      "name": "Adrián Cabrera Castro",
      "phone": "+54-11-5678-9012",
      "email": "adriáncabreracastro@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-21T20:45:00.000-03:00",
    "endTime": "2025-10-22T00:45:00.000-03:00",
    "durationMinutes": 240,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-26",
    "tableId": "table-3",
    "customer": {
      "name": "Alejandro Castro Herrera",
      "phone": "+54-11-0123-4567",
      "email": "alejandrocastroherrera@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T12:30:00.000-03:00",
    "endTime": "2025-10-19T13:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-27",
    "tableId": "table-7",
    "customer": {
      "name": "Álvaro Serrano Vega",
      "phone": "+54-11-0123-4567",
      "email": "álvaroserranovega@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-21T13:30:00.000-03:00",
    "endTime": "2025-10-21T15:00:00.000-03:00",
    "durationMinutes": 90,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-28",
    "tableId": "table-7",
    "customer": {
      "name": "Gabriel Rojas Vega",
      "phone": "+54-11-1212-3434",
      "email": "gabrielrojasvega@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T16:30:00.000-03:00",
    "endTime": "2025-10-19T17:45:00.000-03:00",
    "durationMinutes": 75,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-29",
    "tableId": "table-2",
    "customer": {
      "name": "Andrea Mendoza Martínez",
      "phone": "+54-11-4567-8901",
      "email": "andreamendozamartínez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T12:00:00.000-03:00",
    "endTime": "2025-10-19T13:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-30",
    "tableId": "table-6",
    "customer": {
      "name": "Gabriel Rojas Herrera",
      "phone": "+54-11-6789-0123",
      "email": "gabrielrojasherrera@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T11:45:00.000-03:00",
    "endTime": "2025-10-18T14:30:00.000-03:00",
    "durationMinutes": 165,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-32",
    "tableId": "table-2",
    "customer": {
      "name": "María Rodríguez Castro",
      "phone": "+54-11-3333-4444",
      "email": "maríarodríguezcastro@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T20:00:00.000-03:00",
    "endTime": "2025-10-20T00:00:00.000-03:00",
    "durationMinutes": 240,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-33",
    "tableId": "table-6",
    "customer": {
      "name": "Sandra Vega Vargas",
      "phone": "+54-11-7890-1234",
      "email": "sandravegavargas@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T21:15:00.000-03:00",
    "endTime": "2025-10-21T00:00:00.000-03:00",
    "durationMinutes": 165,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-34",
    "tableId": "table-4",
    "customer": {
      "name": "Natalia Ortega Ruiz",
      "phone": "+54-11-2345-6789",
      "email": "nataliaortegaruiz@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T15:00:00.000-03:00",
    "endTime": "2025-10-18T16:30:00.000-03:00",
    "durationMinutes": 90,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-35",
    "tableId": "table-8",
    "customer": {
      "name": "Raquel Vargas López",
      "phone": "+54-11-5555-6666",
      "email": "raquelvargaslópez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T19:15:00.000-03:00",
    "endTime": "2025-10-21T22:00:00.000-03:00",
    "durationMinutes": 165,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-38",
    "tableId": "table-2",
    "customer": {
      "name": "Claudia Medina Herrera",
      "phone": "+54-11-1313-4545",
      "email": "claudiamedinaherrera@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T10:15:00.000-03:00",
    "endTime": "2025-10-20T13:00:00.000-03:00",
    "durationMinutes": 165,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-39",
    "tableId": "table-6",
    "customer": {
      "name": "Ana García Martínez",
      "phone": "+54-11-9999-0000",
      "email": "anagarcíamartínez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T23:00:00.000-03:00",
    "endTime": "2025-10-20T00:30:00.000-03:00",
    "durationMinutes": 90,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-41",
    "tableId": "table-6",
    "customer": {
      "name": "Teresa Molina Moreno",
      "phone": "+54-11-4567-8901",
      "email": "teresamolinamoreno@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T19:45:00.000-03:00",
    "endTime": "2025-10-24T21:30:00.000-03:00",
    "durationMinutes": 105,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-43",
    "tableId": "table-5",
    "customer": {
      "name": "Lucía Morales Moreno",
      "phone": "+54-11-5555-6666",
      "email": "lucíamoralesmoreno@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T18:00:00.000-03:00",
    "endTime": "2025-10-19T20:30:00.000-03:00",
    "durationMinutes": 150,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-44",
    "tableId": "table-8",
    "customer": {
      "name": "Francisco Martín Rodríguez",
      "phone": "+54-11-1111-2222",
      "email": "franciscomartínrodríguez@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T14:00:00.000-03:00",
    "endTime": "2025-10-19T15:45:00.000-03:00",
    "durationMinutes": 105,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-45",
    "tableId": "table-4",
    "customer": {
      "name": "Laura Sánchez Medina",
      "phone": "+54-11-3456-7890",
      "email": "laurasánchezmedina@gmail.com"
    },
    "partySize": 8,
    "startTime": "2025-10-20T17:15:00.000-03:00",
    "endTime": "2025-10-20T18:45:00.000-03:00",
    "durationMinutes": 90,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274170-46",
    "tableId": "table-8",
    "customer": {
      "name": "Antonio Ruiz Romero",
      "phone": "+54-11-6789-0123",
      "email": "antonioruizromero@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T11:00:00.000-03:00",
    "endTime": "2025-10-24T13:45:00.000-03:00",
    "durationMinutes": 165,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274171-47",
    "tableId": "table-2",
    "customer": {
      "name": "Cristina Romero Rodríguez",
      "phone": "+54-11-3333-4444",
      "email": "cristinaromerorodríguez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T15:00:00.000-03:00",
    "endTime": "2025-10-24T17:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274171-48",
    "tableId": "table-1",
    "customer": {
      "name": "Pablo Delgado Vega",
      "phone": "+54-11-6767-8989",
      "email": "pablodelgadovega@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T13:15:00.000-03:00",
    "endTime": "2025-10-24T14:45:00.000-03:00",
    "durationMinutes": 90,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274171-49",
    "tableId": "table-8",
    "customer": {
      "name": "Natalia Ortega Martín",
      "phone": "+54-11-4567-8901",
      "email": "nataliaortegamartín@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T19:15:00.000-03:00",
    "endTime": "2025-10-24T21:30:00.000-03:00",
    "durationMinutes": 135,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274171-52",
    "tableId": "table-4",
    "customer": {
      "name": "Daniel Campos Espinoza",
      "phone": "+54-11-3456-7890",
      "email": "danielcamposespinoza@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T19:00:00.000-03:00",
    "endTime": "2025-10-18T21:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274171-53",
    "tableId": "table-6",
    "customer": {
      "name": "Elena Moreno Díaz",
      "phone": "+54-11-7777-8888",
      "email": "elenamorenodíaz@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T14:45:00.000-03:00",
    "endTime": "2025-10-19T17:45:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274171-54",
    "tableId": "table-1",
    "customer": {
      "name": "José Martínez Vega",
      "phone": "+54-11-2345-6789",
      "email": "josémartínezvega@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T22:45:00.000-03:00",
    "endTime": "2025-10-25T00:30:00.000-03:00",
    "durationMinutes": 105,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274171-55",
    "tableId": "table-1",
    "customer": {
      "name": "Javier Torres Martínez",
      "phone": "+54-11-8901-2345",
      "email": "javiertorresmartínez@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T13:00:00.000-03:00",
    "endTime": "2025-10-19T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274171-56",
    "tableId": "table-6",
    "customer": {
      "name": "Cristina Romero Moreno",
      "phone": "+54-11-5656-7878",
      "email": "cristinaromeromoreno@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T10:00:00.000-03:00",
    "endTime": "2025-10-22T11:30:00.000-03:00",
    "durationMinutes": 90,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274171-57",
    "tableId": "table-5",
    "customer": {
      "name": "Daniel Campos Pérez",
      "phone": "+54-11-1212-3434",
      "email": "danielcampospérez@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T13:45:00.000-03:00",
    "endTime": "2025-10-20T15:15:00.000-03:00",
    "durationMinutes": 90,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274171-58",
    "tableId": "table-5",
    "customer": {
      "name": "Alejandro Castro Torres",
      "phone": "+54-11-8901-2345",
      "email": "alejandrocastrotorres@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T18:00:00.000-03:00",
    "endTime": "2025-10-21T21:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274171-60",
    "tableId": "table-1",
    "customer": {
      "name": "Carlos López Martín",
      "phone": "+54-11-5678-9012",
      "email": "carloslópezmartín@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T12:15:00.000-03:00",
    "endTime": "2025-10-22T15:15:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274172-62",
    "tableId": "table-4",
    "customer": {
      "name": "Miguel González Martínez",
      "phone": "+54-11-6767-8989",
      "email": "miguelgonzálezmartínez@live.com"
    },
    "partySize": 7,
    "startTime": "2025-10-22T12:30:00.000-03:00",
    "endTime": "2025-10-22T14:45:00.000-03:00",
    "durationMinutes": 135,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274172-63",
    "tableId": "table-5",
    "customer": {
      "name": "Valeria Silva López",
      "phone": "+54-11-5656-7878",
      "email": "valeriasilvalópez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T21:45:00.000-03:00",
    "endTime": "2025-10-20T00:00:00.000-03:00",
    "durationMinutes": 135,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274172-64",
    "tableId": "table-3",
    "customer": {
      "name": "Gabriel Rojas Rojas",
      "phone": "+54-11-1212-3434",
      "email": "gabrielrojasrojas@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T18:15:00.000-03:00",
    "endTime": "2025-10-24T21:30:00.000-03:00",
    "durationMinutes": 195,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274172-65",
    "tableId": "table-5",
    "customer": {
      "name": "Miguel González Díaz",
      "phone": "+54-11-9012-3456",
      "email": "miguelgonzálezdíaz@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T20:15:00.000-03:00",
    "endTime": "2025-10-23T21:45:00.000-03:00",
    "durationMinutes": 90,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
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
