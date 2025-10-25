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
      "min": 4,
      "max": 7
    },
    "sortOrder": 2
  },
  {
    "id": "table-3",
    "sectorId": "sector-1",
    "name": "Table 3",
    "capacity": {
      "min": 2,
      "max": 3
    },
    "sortOrder": 3
  },
  {
    "id": "table-4",
    "sectorId": "sector-2",
    "name": "Table 4",
    "capacity": {
      "min": 5,
      "max": 7
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
      "min": 5,
      "max": 6
    },
    "sortOrder": 7
  },
  {
    "id": "table-8",
    "sectorId": "sector-3",
    "name": "Table 8",
    "capacity": {
      "min": 5,
      "max": 7
    },
    "sortOrder": 8
  }
];

export const seedReservations: Reservation[] = [
  {
    "id": "res-1",
    "tableId": "table-3",
    "customer": {
      "name": "Lucía Morales Morales",
      "phone": "+54-11-3333-4444",
      "email": "lucíamoralesmorales@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T16:30:00.000-03:00",
    "endTime": "2025-10-24T17:36:00.000-03:00",
    "durationMinutes": 66,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T20:06:00.000-03:00",
    "updatedAt": "2025-10-24T23:06:00.000-03:00"
  },
  {
    "id": "res-2",
    "tableId": "table-2",
    "customer": {
      "name": "Lucía Morales Flores",
      "phone": "+54-11-1212-3434",
      "email": "lucíamoralesflores@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T20:00:00.000-03:00",
    "endTime": "2025-10-22T22:18:00.000-03:00",
    "durationMinutes": 138,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-22T17:58:00.000-03:00",
    "updatedAt": "2025-10-22T17:58:00.000-03:00"
  },
  {
    "id": "res-3",
    "tableId": "table-4",
    "customer": {
      "name": "Teresa Molina Moreno",
      "phone": "+54-11-9999-0000",
      "email": "teresamolinamoreno@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-23T18:00:00.000-03:00",
    "endTime": "2025-10-23T19:30:00.000-03:00",
    "durationMinutes": 90,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-23T17:02:00.000-03:00",
    "updatedAt": "2025-10-23T20:02:00.000-03:00"
  },
  {
    "id": "res-4",
    "tableId": "table-7",
    "customer": {
      "name": "Beatriz Guerrero Díaz",
      "phone": "+54-11-8901-2345",
      "email": "beatrizguerrerodíaz@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T17:30:00.000-03:00",
    "endTime": "2025-10-19T20:08:00.000-03:00",
    "durationMinutes": 158,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-19T18:09:00.000-03:00",
    "updatedAt": "2025-10-19T20:09:00.000-03:00"
  },
  {
    "id": "res-5",
    "tableId": "table-7",
    "customer": {
      "name": "Laura Sánchez Ramos",
      "phone": "+54-11-6789-0123",
      "email": "laurasánchezramos@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T13:30:00.000-03:00",
    "endTime": "2025-10-24T15:49:00.000-03:00",
    "durationMinutes": 139,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T11:45:00.000-03:00",
    "updatedAt": "2025-10-24T11:45:00.000-03:00"
  },
  {
    "id": "res-6",
    "tableId": "table-7",
    "customer": {
      "name": "Javier Torres Delgado",
      "phone": "+54-11-9012-3456",
      "email": "javiertorresdelgado@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T15:00:00.000-03:00",
    "endTime": "2025-10-19T18:06:00.000-03:00",
    "durationMinutes": 186,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T11:19:00.000-03:00",
    "updatedAt": "2025-10-19T11:19:00.000-03:00"
  },
  {
    "id": "res-7",
    "tableId": "table-4",
    "customer": {
      "name": "Carlos López Herrera",
      "phone": "+54-11-3333-4444",
      "email": "carloslópezherrera@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T12:30:00.000-03:00",
    "endTime": "2025-10-22T13:52:00.000-03:00",
    "durationMinutes": 82,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T20:58:00.000-03:00",
    "updatedAt": "2025-10-22T20:58:00.000-03:00"
  },
  {
    "id": "res-8",
    "tableId": "table-3",
    "customer": {
      "name": "Antonio Ruiz González",
      "phone": "+54-11-1212-3434",
      "email": "antonioruizgonzález@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T11:00:00.000-03:00",
    "endTime": "2025-10-19T12:28:00.000-03:00",
    "durationMinutes": 88,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-19T13:09:00.000-03:00",
    "updatedAt": "2025-10-19T13:09:00.000-03:00"
  },
  {
    "id": "res-9",
    "tableId": "table-1",
    "customer": {
      "name": "Camila Espinoza García",
      "phone": "+54-11-2345-6789",
      "email": "camilaespinozagarcía@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T22:30:00.000-03:00",
    "endTime": "2025-10-25T01:45:00.000-03:00",
    "durationMinutes": 203,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-24T19:12:00.000-03:00",
    "updatedAt": "2025-10-24T19:12:00.000-03:00"
  },
  {
    "id": "res-10",
    "tableId": "table-6",
    "customer": {
      "name": "Lucía Morales Ortega",
      "phone": "+54-11-5678-9012",
      "email": "lucíamoralesortega@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T21:30:00.000-03:00",
    "endTime": "2025-10-24T22:51:00.000-03:00",
    "durationMinutes": 81,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T18:04:00.000-03:00",
    "updatedAt": "2025-10-24T21:04:00.000-03:00"
  },
  {
    "id": "res-11",
    "tableId": "table-6",
    "customer": {
      "name": "Miguel González Torres",
      "phone": "+54-11-6789-0123",
      "email": "miguelgonzáleztorres@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-22T22:30:00.000-03:00",
    "endTime": "2025-10-23T00:23:00.000-03:00",
    "durationMinutes": 113,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-22T15:01:00.000-03:00",
    "updatedAt": "2025-10-22T18:01:00.000-03:00"
  },
  {
    "id": "res-12",
    "tableId": "table-5",
    "customer": {
      "name": "Roberto Herrera Ramos",
      "phone": "+54-11-5678-9012",
      "email": "robertoherreraramos@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-22T21:30:00.000-03:00",
    "endTime": "2025-10-22T22:53:00.000-03:00",
    "durationMinutes": 83,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-22T12:05:00.000-03:00",
    "updatedAt": "2025-10-22T12:05:00.000-03:00"
  },
  {
    "id": "res-13",
    "tableId": "table-7",
    "customer": {
      "name": "Teresa Molina Martínez",
      "phone": "+54-11-0123-4567",
      "email": "teresamolinamartínez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T20:30:00.000-03:00",
    "endTime": "2025-10-23T21:53:00.000-03:00",
    "durationMinutes": 83,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-23T15:24:00.000-03:00",
    "updatedAt": "2025-10-23T18:24:00.000-03:00"
  },
  {
    "id": "res-14",
    "tableId": "table-4",
    "customer": {
      "name": "Antonio Ruiz Rojas",
      "phone": "+54-11-1212-3434",
      "email": "antonioruizrojas@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T21:00:00.000-03:00",
    "endTime": "2025-10-24T22:53:00.000-03:00",
    "durationMinutes": 113,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T17:33:00.000-03:00",
    "updatedAt": "2025-10-24T17:33:00.000-03:00"
  },
  {
    "id": "res-15",
    "tableId": "table-4",
    "customer": {
      "name": "Patricia Navarro Martín",
      "phone": "+54-11-9012-3456",
      "email": "patricianavarromartín@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T11:00:00.000-03:00",
    "endTime": "2025-10-24T14:22:00.000-03:00",
    "durationMinutes": 202,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T13:14:00.000-03:00",
    "updatedAt": "2025-10-24T17:14:00.000-03:00"
  },
  {
    "id": "res-16",
    "tableId": "table-3",
    "customer": {
      "name": "Pablo Delgado Vargas",
      "phone": "+54-11-9090-1212",
      "email": "pablodelgadovargas@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T12:00:00.000-03:00",
    "endTime": "2025-10-24T14:18:00.000-03:00",
    "durationMinutes": 138,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T20:56:00.000-03:00",
    "updatedAt": "2025-10-24T20:56:00.000-03:00"
  },
  {
    "id": "res-17",
    "tableId": "table-5",
    "customer": {
      "name": "Daniel Campos Ramos",
      "phone": "+54-11-0123-4567",
      "email": "danielcamposramos@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-19T14:00:00.000-03:00",
    "endTime": "2025-10-19T15:08:00.000-03:00",
    "durationMinutes": 68,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-19T17:35:00.000-03:00",
    "updatedAt": "2025-10-19T17:35:00.000-03:00"
  },
  {
    "id": "res-18",
    "tableId": "table-6",
    "customer": {
      "name": "Lucía Morales Ortega",
      "phone": "+54-11-9090-1212",
      "email": "lucíamoralesortega@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T11:30:00.000-03:00",
    "endTime": "2025-10-19T14:51:00.000-03:00",
    "durationMinutes": 201,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-19T13:38:00.000-03:00",
    "updatedAt": "2025-10-19T13:38:00.000-03:00"
  },
  {
    "id": "res-19",
    "tableId": "table-4",
    "customer": {
      "name": "Francisco Martín Rodríguez",
      "phone": "+54-11-0123-4567",
      "email": "franciscomartínrodríguez@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T15:00:00.000-03:00",
    "endTime": "2025-10-22T18:23:00.000-03:00",
    "durationMinutes": 203,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-22T21:17:00.000-03:00",
    "updatedAt": "2025-10-22T21:17:00.000-03:00"
  },
  {
    "id": "res-20",
    "tableId": "table-4",
    "customer": {
      "name": "David Jiménez Martínez",
      "phone": "+54-11-9012-3456",
      "email": "davidjiménezmartínez@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-20T18:30:00.000-03:00",
    "endTime": "2025-10-20T21:21:00.000-03:00",
    "durationMinutes": 171,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-20T11:56:00.000-03:00",
    "updatedAt": "2025-10-20T14:56:00.000-03:00"
  },
  {
    "id": "res-21",
    "tableId": "table-5",
    "customer": {
      "name": "Patricia Navarro Morales",
      "phone": "+54-11-3456-7890",
      "email": "patricianavarromorales@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T11:30:00.000-03:00",
    "endTime": "2025-10-24T13:34:00.000-03:00",
    "durationMinutes": 124,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T16:46:00.000-03:00",
    "updatedAt": "2025-10-24T16:46:00.000-03:00"
  },
  {
    "id": "res-22",
    "tableId": "table-8",
    "customer": {
      "name": "Camila Espinoza Ortega",
      "phone": "+54-11-2345-6789",
      "email": "camilaespinozaortega@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T17:30:00.000-03:00",
    "endTime": "2025-10-19T19:43:00.000-03:00",
    "durationMinutes": 133,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T11:43:00.000-03:00",
    "updatedAt": "2025-10-19T11:43:00.000-03:00"
  },
  {
    "id": "res-23",
    "tableId": "table-2",
    "customer": {
      "name": "Beatriz Guerrero Rojas",
      "phone": "+54-11-1313-4545",
      "email": "beatrizguerrerorojas@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-21T16:00:00.000-03:00",
    "endTime": "2025-10-21T17:34:00.000-03:00",
    "durationMinutes": 94,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-21T21:12:00.000-03:00",
    "updatedAt": "2025-10-21T21:12:00.000-03:00"
  },
  {
    "id": "res-24",
    "tableId": "table-5",
    "customer": {
      "name": "Carmen Pérez Herrera",
      "phone": "+54-11-5678-9012",
      "email": "carmenpérezherrera@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T19:00:00.000-03:00",
    "endTime": "2025-10-24T20:45:00.000-03:00",
    "durationMinutes": 105,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-24T14:26:00.000-03:00",
    "updatedAt": "2025-10-24T14:26:00.000-03:00"
  },
  {
    "id": "res-25",
    "tableId": "table-3",
    "customer": {
      "name": "Valeria Silva Navarro",
      "phone": "+54-11-7777-8888",
      "email": "valeriasilvanavarro@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T21:30:00.000-03:00",
    "endTime": "2025-10-19T23:51:00.000-03:00",
    "durationMinutes": 141,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-19T14:16:00.000-03:00",
    "updatedAt": "2025-10-19T14:16:00.000-03:00"
  },
  {
    "id": "res-26",
    "tableId": "table-8",
    "customer": {
      "name": "Roberto Herrera Mendoza",
      "phone": "+54-11-1111-2222",
      "email": "robertoherreramendoza@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T17:00:00.000-03:00",
    "endTime": "2025-10-23T19:17:00.000-03:00",
    "durationMinutes": 137,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-23T15:58:00.000-03:00",
    "updatedAt": "2025-10-23T15:58:00.000-03:00"
  },
  {
    "id": "res-27",
    "tableId": "table-1",
    "customer": {
      "name": "Álvaro Serrano Reyes",
      "phone": "+54-11-8901-2345",
      "email": "álvaroserranoreyes@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T11:00:00.000-03:00",
    "endTime": "2025-10-23T13:30:00.000-03:00",
    "durationMinutes": 150,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-23T11:01:00.000-03:00",
    "updatedAt": "2025-10-23T11:01:00.000-03:00"
  },
  {
    "id": "res-28",
    "tableId": "table-1",
    "customer": {
      "name": "Alejandro Castro Torres",
      "phone": "+54-11-5678-9012",
      "email": "alejandrocastrotorres@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-22T13:30:00.000-03:00",
    "endTime": "2025-10-22T16:11:00.000-03:00",
    "durationMinutes": 161,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-22T15:00:00.000-03:00",
    "updatedAt": "2025-10-22T19:00:00.000-03:00"
  },
  {
    "id": "res-29",
    "tableId": "table-4",
    "customer": {
      "name": "Natalia Ortega Morales",
      "phone": "+54-11-2345-6789",
      "email": "nataliaortegamorales@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T21:00:00.000-03:00",
    "endTime": "2025-10-25T00:20:00.000-03:00",
    "durationMinutes": 200,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T17:03:00.000-03:00",
    "updatedAt": "2025-10-24T17:03:00.000-03:00"
  },
  {
    "id": "res-30",
    "tableId": "table-3",
    "customer": {
      "name": "Nicolás Fuentes López",
      "phone": "+54-11-3456-7890",
      "email": "nicolásfuenteslópez@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T10:00:00.000-03:00",
    "endTime": "2025-10-24T13:01:00.000-03:00",
    "durationMinutes": 181,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T18:06:00.000-03:00",
    "updatedAt": "2025-10-24T20:06:00.000-03:00"
  },
  {
    "id": "res-31",
    "tableId": "table-1",
    "customer": {
      "name": "Álvaro Serrano Martínez",
      "phone": "+54-11-1234-5678",
      "email": "álvaroserranomartínez@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T11:00:00.000-03:00",
    "endTime": "2025-10-24T13:46:00.000-03:00",
    "durationMinutes": 166,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-24T12:16:00.000-03:00",
    "updatedAt": "2025-10-24T14:16:00.000-03:00"
  },
  {
    "id": "res-32",
    "tableId": "table-7",
    "customer": {
      "name": "Adrián Cabrera Fuentes",
      "phone": "+54-11-1313-4545",
      "email": "adriáncabrerafuentes@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T14:30:00.000-03:00",
    "endTime": "2025-10-23T16:26:00.000-03:00",
    "durationMinutes": 116,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-23T19:02:00.000-03:00",
    "updatedAt": "2025-10-23T21:02:00.000-03:00"
  },
  {
    "id": "res-33",
    "tableId": "table-8",
    "customer": {
      "name": "Fernando Ramos García",
      "phone": "+54-11-9090-1212",
      "email": "fernandoramosgarcía@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T10:30:00.000-03:00",
    "endTime": "2025-10-24T12:36:00.000-03:00",
    "durationMinutes": 126,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T12:41:00.000-03:00",
    "updatedAt": "2025-10-24T12:41:00.000-03:00"
  },
  {
    "id": "res-34",
    "tableId": "table-1",
    "customer": {
      "name": "Patricia Navarro Mendoza",
      "phone": "+54-11-3456-7890",
      "email": "patricianavarromendoza@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T18:30:00.000-03:00",
    "endTime": "2025-10-23T19:48:00.000-03:00",
    "durationMinutes": 78,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-23T11:04:00.000-03:00",
    "updatedAt": "2025-10-23T11:04:00.000-03:00"
  },
  {
    "id": "res-35",
    "tableId": "table-7",
    "customer": {
      "name": "Roberto Herrera Sánchez",
      "phone": "+54-11-4567-8901",
      "email": "robertoherrerasánchez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T15:30:00.000-03:00",
    "endTime": "2025-10-24T17:55:00.000-03:00",
    "durationMinutes": 145,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T20:48:00.000-03:00",
    "updatedAt": "2025-10-24T21:48:00.000-03:00"
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
