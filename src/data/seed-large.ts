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
      "min": 5,
      "max": 8
    },
    "sortOrder": 3
  },
  {
    "id": "table-4",
    "sectorId": "sector-1",
    "name": "Table 4",
    "capacity": {
      "min": 2,
      "max": 3
    },
    "sortOrder": 4
  },
  {
    "id": "table-5",
    "sectorId": "sector-2",
    "name": "Table 5",
    "capacity": {
      "min": 3,
      "max": 4
    },
    "sortOrder": 5
  },
  {
    "id": "table-6",
    "sectorId": "sector-2",
    "name": "Table 6",
    "capacity": {
      "min": 5,
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
      "max": 4
    },
    "sortOrder": 7
  },
  {
    "id": "table-8",
    "sectorId": "sector-2",
    "name": "Table 8",
    "capacity": {
      "min": 2,
      "max": 4
    },
    "sortOrder": 8
  },
  {
    "id": "table-9",
    "sectorId": "sector-3",
    "name": "Table 9",
    "capacity": {
      "min": 4,
      "max": 7
    },
    "sortOrder": 9
  },
  {
    "id": "table-10",
    "sectorId": "sector-3",
    "name": "Table 10",
    "capacity": {
      "min": 5,
      "max": 7
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
      "min": 5,
      "max": 7
    },
    "sortOrder": 13
  },
  {
    "id": "table-14",
    "sectorId": "sector-4",
    "name": "Table 14",
    "capacity": {
      "min": 5,
      "max": 6
    },
    "sortOrder": 14
  },
  {
    "id": "table-15",
    "sectorId": "sector-4",
    "name": "Table 15",
    "capacity": {
      "min": 5,
      "max": 7
    },
    "sortOrder": 15
  },
  {
    "id": "table-16",
    "sectorId": "sector-5",
    "name": "Table 16",
    "capacity": {
      "min": 5,
      "max": 6
    },
    "sortOrder": 16
  },
  {
    "id": "table-17",
    "sectorId": "sector-5",
    "name": "Table 17",
    "capacity": {
      "min": 2,
      "max": 4
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
      "min": 5,
      "max": 8
    },
    "sortOrder": 19
  },
  {
    "id": "table-20",
    "sectorId": "sector-6",
    "name": "Table 20",
    "capacity": {
      "min": 5,
      "max": 7
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
      "min": 2,
      "max": 5
    },
    "sortOrder": 22
  },
  {
    "id": "table-23",
    "sectorId": "sector-7",
    "name": "Table 23",
    "capacity": {
      "min": 3,
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
      "max": 7
    },
    "sortOrder": 24
  },
  {
    "id": "table-25",
    "sectorId": "sector-8",
    "name": "Table 25",
    "capacity": {
      "min": 5,
      "max": 6
    },
    "sortOrder": 25
  },
  {
    "id": "table-26",
    "sectorId": "sector-8",
    "name": "Table 26",
    "capacity": {
      "min": 3,
      "max": 5
    },
    "sortOrder": 26
  },
  {
    "id": "table-27",
    "sectorId": "sector-8",
    "name": "Table 27",
    "capacity": {
      "min": 2,
      "max": 4
    },
    "sortOrder": 27
  },
  {
    "id": "table-28",
    "sectorId": "sector-9",
    "name": "Table 28",
    "capacity": {
      "min": 4,
      "max": 7
    },
    "sortOrder": 28
  },
  {
    "id": "table-29",
    "sectorId": "sector-9",
    "name": "Table 29",
    "capacity": {
      "min": 4,
      "max": 7
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
    "tableId": "table-8",
    "customer": {
      "name": "Antonio Ruiz Campos",
      "phone": "+54-11-1313-4545",
      "email": "antonioruizcampos@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-29T19:30:00.000-03:00",
    "endTime": "2025-10-29T20:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-29T14:44:00.000-03:00",
    "updatedAt": "2025-10-29T15:44:00.000-03:00"
  },
  {
    "id": "res-2",
    "tableId": "table-9",
    "customer": {
      "name": "Carmen Pérez Martínez",
      "phone": "+54-11-3456-7890",
      "email": "carmenpérezmartínez@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-07T17:00:00.000-03:00",
    "endTime": "2025-10-07T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-07T17:32:00.000-03:00",
    "updatedAt": "2025-10-07T17:32:00.000-03:00"
  },
  {
    "id": "res-3",
    "tableId": "table-23",
    "customer": {
      "name": "Claudia Medina Serrano",
      "phone": "+54-11-1212-3434",
      "email": "claudiamedinaserrano@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-05T12:30:00.000-03:00",
    "endTime": "2025-10-05T15:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-05T15:00:00.000-03:00",
    "updatedAt": "2025-10-05T15:00:00.000-03:00"
  },
  {
    "id": "res-4",
    "tableId": "table-19",
    "customer": {
      "name": "Francisco Martín Fuentes",
      "phone": "+54-11-5678-9012",
      "email": "franciscomartínfuentes@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-26T20:30:00.000-03:00",
    "endTime": "2025-10-26T22:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-26T17:35:00.000-03:00",
    "updatedAt": "2025-10-26T18:35:00.000-03:00"
  },
  {
    "id": "res-5",
    "tableId": "table-26",
    "customer": {
      "name": "Hugo Aguilar Flores",
      "phone": "+54-11-6767-8989",
      "email": "hugoaguilarflores@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-05T16:00:00.000-03:00",
    "endTime": "2025-10-05T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-05T19:11:00.000-03:00",
    "updatedAt": "2025-10-05T19:11:00.000-03:00"
  },
  {
    "id": "res-6",
    "tableId": "table-27",
    "customer": {
      "name": "Gabriel Rojas Jiménez",
      "phone": "+54-11-1212-3434",
      "email": "gabrielrojasjiménez@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-16T14:00:00.000-03:00",
    "endTime": "2025-10-16T15:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-16T14:04:00.000-03:00",
    "updatedAt": "2025-10-16T14:04:00.000-03:00"
  },
  {
    "id": "res-7",
    "tableId": "table-7",
    "customer": {
      "name": "Beatriz Guerrero Díaz",
      "phone": "+54-11-9090-1212",
      "email": "beatrizguerrerodíaz@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-25T00:30:00.000-03:00",
    "endTime": "2025-10-25T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T13:25:00.000-03:00",
    "updatedAt": "2025-10-24T17:25:00.000-03:00"
  },
  {
    "id": "res-8",
    "tableId": "table-9",
    "customer": {
      "name": "Teresa Molina Ortega",
      "phone": "+54-11-9999-0000",
      "email": "teresamolinaortega@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-17T23:30:00.000-03:00",
    "endTime": "2025-10-18T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-17T22:05:00.000-03:00",
    "updatedAt": "2025-10-17T22:05:00.000-03:00"
  },
  {
    "id": "res-9",
    "tableId": "table-9",
    "customer": {
      "name": "Álvaro Serrano Moreno",
      "phone": "+54-11-5678-9012",
      "email": "álvaroserranomoreno@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-16T19:00:00.000-03:00",
    "endTime": "2025-10-16T21:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-16T17:52:00.000-03:00",
    "updatedAt": "2025-10-16T17:52:00.000-03:00"
  },
  {
    "id": "res-10",
    "tableId": "table-25",
    "customer": {
      "name": "Natalia Ortega Ruiz",
      "phone": "+54-11-9012-3456",
      "email": "nataliaortegaruiz@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T21:30:00.000-03:00",
    "endTime": "2025-10-18T23:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-18T16:47:00.000-03:00",
    "updatedAt": "2025-10-18T16:47:00.000-03:00"
  },
  {
    "id": "res-11",
    "tableId": "table-27",
    "customer": {
      "name": "Claudia Medina Ortega",
      "phone": "+54-11-1313-4545",
      "email": "claudiamedinaortega@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-29T00:00:00.000-03:00",
    "endTime": "2025-10-29T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-28T16:25:00.000-03:00",
    "updatedAt": "2025-10-28T16:25:00.000-03:00"
  },
  {
    "id": "res-12",
    "tableId": "table-2",
    "customer": {
      "name": "María Rodríguez Díaz",
      "phone": "+54-11-2345-6789",
      "email": "maríarodríguezdíaz@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T16:30:00.000-03:00",
    "endTime": "2025-10-17T17:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-17T20:44:00.000-03:00",
    "updatedAt": "2025-10-17T20:44:00.000-03:00"
  },
  {
    "id": "res-13",
    "tableId": "table-15",
    "customer": {
      "name": "Sandra Vega Torres",
      "phone": "+54-11-9999-0000",
      "email": "sandravegatorres@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T01:00:00.000-03:00",
    "endTime": "2025-10-18T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-17T15:01:00.000-03:00",
    "updatedAt": "2025-10-17T18:01:00.000-03:00"
  },
  {
    "id": "res-14",
    "tableId": "table-6",
    "customer": {
      "name": "Roberto Herrera Fuentes",
      "phone": "+54-11-2345-6789",
      "email": "robertoherrerafuentes@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-09T17:00:00.000-03:00",
    "endTime": "2025-10-09T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-09T16:49:00.000-03:00",
    "updatedAt": "2025-10-09T18:49:00.000-03:00"
  },
  {
    "id": "res-15",
    "tableId": "table-24",
    "customer": {
      "name": "Laura Sánchez Rojas",
      "phone": "+54-11-5656-7878",
      "email": "laurasánchezrojas@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T16:30:00.000-03:00",
    "endTime": "2025-10-25T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-25T14:06:00.000-03:00",
    "updatedAt": "2025-10-25T14:06:00.000-03:00"
  },
  {
    "id": "res-16",
    "tableId": "table-5",
    "customer": {
      "name": "Antonio Ruiz García",
      "phone": "+54-11-9090-1212",
      "email": "antonioruizgarcía@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T16:00:00.000-03:00",
    "endTime": "2025-10-04T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-04T11:11:00.000-03:00",
    "updatedAt": "2025-10-04T11:11:00.000-03:00"
  },
  {
    "id": "res-17",
    "tableId": "table-6",
    "customer": {
      "name": "Carmen Pérez Flores",
      "phone": "+54-11-5656-7878",
      "email": "carmenpérezflores@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-23T00:30:00.000-03:00",
    "endTime": "2025-10-23T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-22T12:52:00.000-03:00",
    "updatedAt": "2025-10-22T12:52:00.000-03:00"
  },
  {
    "id": "res-18",
    "tableId": "table-11",
    "customer": {
      "name": "Sebastián Vega Navarro",
      "phone": "+54-11-9090-1212",
      "email": "sebastiánveganavarro@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-04T16:00:00.000-03:00",
    "endTime": "2025-10-04T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-04T12:49:00.000-03:00",
    "updatedAt": "2025-10-04T12:49:00.000-03:00"
  },
  {
    "id": "res-19",
    "tableId": "table-23",
    "customer": {
      "name": "Francisco Martín Vega",
      "phone": "+54-11-4567-8901",
      "email": "franciscomartínvega@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-13T20:30:00.000-03:00",
    "endTime": "2025-10-13T21:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-13T13:00:00.000-03:00",
    "updatedAt": "2025-10-13T13:00:00.000-03:00"
  },
  {
    "id": "res-20",
    "tableId": "table-23",
    "customer": {
      "name": "Rubén Herrera Torres",
      "phone": "+54-11-1234-5678",
      "email": "rubénherreratorres@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-08T16:00:00.000-03:00",
    "endTime": "2025-10-08T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-08T20:29:00.000-03:00",
    "updatedAt": "2025-10-08T21:29:00.000-03:00"
  },
  {
    "id": "res-21",
    "tableId": "table-24",
    "customer": {
      "name": "Valeria Silva Reyes",
      "phone": "+54-11-9999-0000",
      "email": "valeriasilvareyes@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-27T10:00:00.000-03:00",
    "endTime": "2025-10-27T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-27T12:58:00.000-03:00",
    "updatedAt": "2025-10-27T12:58:00.000-03:00"
  },
  {
    "id": "res-22",
    "tableId": "table-20",
    "customer": {
      "name": "Rubén Herrera Vega",
      "phone": "+54-11-9090-1212",
      "email": "rubénherreravega@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-01T17:30:00.000-03:00",
    "endTime": "2025-10-01T19:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-01T11:49:00.000-03:00",
    "updatedAt": "2025-10-01T14:49:00.000-03:00"
  },
  {
    "id": "res-23",
    "tableId": "table-4",
    "customer": {
      "name": "Miguel González Morales",
      "phone": "+54-11-5656-7878",
      "email": "miguelgonzálezmorales@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-22T19:00:00.000-03:00",
    "endTime": "2025-10-22T22:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-22T22:02:00.000-03:00",
    "updatedAt": "2025-10-22T22:02:00.000-03:00"
  },
  {
    "id": "res-24",
    "tableId": "table-15",
    "customer": {
      "name": "Isabel Díaz Morales",
      "phone": "+54-11-1111-2222",
      "email": "isabeldíazmorales@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-12T12:30:00.000-03:00",
    "endTime": "2025-10-12T15:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-12T20:18:00.000-03:00",
    "updatedAt": "2025-10-12T20:18:00.000-03:00"
  },
  {
    "id": "res-25",
    "tableId": "table-25",
    "customer": {
      "name": "Ana García Fuentes",
      "phone": "+54-11-1111-2222",
      "email": "anagarcíafuentes@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-08T14:00:00.000-03:00",
    "endTime": "2025-10-08T15:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-08T22:19:00.000-03:00",
    "updatedAt": "2025-10-08T22:19:00.000-03:00"
  },
  {
    "id": "res-26",
    "tableId": "table-1",
    "customer": {
      "name": "Álvaro Serrano Pérez",
      "phone": "+54-11-1111-2222",
      "email": "álvaroserranopérez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T21:00:00.000-03:00",
    "endTime": "2025-10-12T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-11T15:54:00.000-03:00",
    "updatedAt": "2025-10-11T19:54:00.000-03:00"
  },
  {
    "id": "res-27",
    "tableId": "table-26",
    "customer": {
      "name": "Raquel Vargas Guerrero",
      "phone": "+54-11-1111-2222",
      "email": "raquelvargasguerrero@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-23T18:00:00.000-03:00",
    "endTime": "2025-10-23T21:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-23T16:31:00.000-03:00",
    "updatedAt": "2025-10-23T16:31:00.000-03:00"
  },
  {
    "id": "res-28",
    "tableId": "table-6",
    "customer": {
      "name": "José Martínez González",
      "phone": "+54-11-1234-5678",
      "email": "josémartínezgonzález@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T18:30:00.000-03:00",
    "endTime": "2025-10-03T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-03T15:01:00.000-03:00",
    "updatedAt": "2025-10-03T15:01:00.000-03:00"
  },
  {
    "id": "res-29",
    "tableId": "table-25",
    "customer": {
      "name": "Roberto Herrera Guerrero",
      "phone": "+54-11-4567-8901",
      "email": "robertoherreraguerrero@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T12:00:00.000-03:00",
    "endTime": "2025-10-23T13:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-23T13:12:00.000-03:00",
    "updatedAt": "2025-10-23T13:12:00.000-03:00"
  },
  {
    "id": "res-30",
    "tableId": "table-7",
    "customer": {
      "name": "Cristina Romero Delgado",
      "phone": "+54-11-8901-2345",
      "email": "cristinaromerodelgado@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-05T23:30:00.000-03:00",
    "endTime": "2025-10-06T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-05T17:29:00.000-03:00",
    "updatedAt": "2025-10-05T17:29:00.000-03:00"
  },
  {
    "id": "res-31",
    "tableId": "table-25",
    "customer": {
      "name": "Francisco Martín Serrano",
      "phone": "+54-11-1234-5678",
      "email": "franciscomartínserrano@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-12T19:00:00.000-03:00",
    "endTime": "2025-10-12T22:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-12T12:16:00.000-03:00",
    "updatedAt": "2025-10-12T12:16:00.000-03:00"
  },
  {
    "id": "res-32",
    "tableId": "table-21",
    "customer": {
      "name": "Valeria Silva Molina",
      "phone": "+54-11-1212-3434",
      "email": "valeriasilvamolina@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T15:00:00.000-03:00",
    "endTime": "2025-10-10T18:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-10T19:01:00.000-03:00",
    "updatedAt": "2025-10-10T19:01:00.000-03:00"
  },
  {
    "id": "res-33",
    "tableId": "table-30",
    "customer": {
      "name": "Cristina Romero Sánchez",
      "phone": "+54-11-9090-1212",
      "email": "cristinaromerosánchez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-01T21:30:00.000-03:00",
    "endTime": "2025-10-02T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-01T22:58:00.000-03:00",
    "updatedAt": "2025-10-01T22:58:00.000-03:00"
  },
  {
    "id": "res-34",
    "tableId": "table-12",
    "customer": {
      "name": "Miguel González Silva",
      "phone": "+54-11-5656-7878",
      "email": "miguelgonzálezsilva@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T15:30:00.000-03:00",
    "endTime": "2025-10-10T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-10T16:24:00.000-03:00",
    "updatedAt": "2025-10-10T20:24:00.000-03:00"
  },
  {
    "id": "res-35",
    "tableId": "table-21",
    "customer": {
      "name": "Raquel Vargas Castro",
      "phone": "+54-11-5678-9012",
      "email": "raquelvargascastro@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-25T10:00:00.000-03:00",
    "endTime": "2025-10-25T11:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-25T19:52:00.000-03:00",
    "updatedAt": "2025-10-25T19:52:00.000-03:00"
  },
  {
    "id": "res-36",
    "tableId": "table-9",
    "customer": {
      "name": "Rubén Herrera Medina",
      "phone": "+54-11-5656-7878",
      "email": "rubénherreramedina@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T21:00:00.000-03:00",
    "endTime": "2025-10-12T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-11T11:15:00.000-03:00",
    "updatedAt": "2025-10-11T11:15:00.000-03:00"
  },
  {
    "id": "res-37",
    "tableId": "table-24",
    "customer": {
      "name": "Ana García Romero",
      "phone": "+54-11-5555-6666",
      "email": "anagarcíaromero@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T10:00:00.000-03:00",
    "endTime": "2025-10-17T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-17T21:40:00.000-03:00",
    "updatedAt": "2025-10-17T21:40:00.000-03:00"
  },
  {
    "id": "res-38",
    "tableId": "table-29",
    "customer": {
      "name": "Valeria Silva Morales",
      "phone": "+54-11-5555-6666",
      "email": "valeriasilvamorales@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T22:00:00.000-03:00",
    "endTime": "2025-10-05T00:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-04T15:04:00.000-03:00",
    "updatedAt": "2025-10-04T15:04:00.000-03:00"
  },
  {
    "id": "res-39",
    "tableId": "table-10",
    "customer": {
      "name": "Lucía Morales Jiménez",
      "phone": "+54-11-1234-5678",
      "email": "lucíamoralesjiménez@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T18:00:00.000-03:00",
    "endTime": "2025-10-11T21:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-11T13:29:00.000-03:00",
    "updatedAt": "2025-10-11T15:29:00.000-03:00"
  },
  {
    "id": "res-40",
    "tableId": "table-14",
    "customer": {
      "name": "Laura Sánchez Romero",
      "phone": "+54-11-1313-4545",
      "email": "laurasánchezromero@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T18:30:00.000-03:00",
    "endTime": "2025-10-24T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T11:57:00.000-03:00",
    "updatedAt": "2025-10-24T11:57:00.000-03:00"
  },
  {
    "id": "res-41",
    "tableId": "table-19",
    "customer": {
      "name": "Cristina Romero Vega",
      "phone": "+54-11-1212-3434",
      "email": "cristinaromerovega@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T23:00:00.000-03:00",
    "endTime": "2025-10-24T02:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-23T20:59:00.000-03:00",
    "updatedAt": "2025-10-23T20:59:00.000-03:00"
  },
  {
    "id": "res-42",
    "tableId": "table-26",
    "customer": {
      "name": "Antonio Ruiz Fuentes",
      "phone": "+54-11-6767-8989",
      "email": "antonioruizfuentes@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-09T14:00:00.000-03:00",
    "endTime": "2025-10-09T16:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-09T17:42:00.000-03:00",
    "updatedAt": "2025-10-09T17:42:00.000-03:00"
  },
  {
    "id": "res-43",
    "tableId": "table-7",
    "customer": {
      "name": "Álvaro Serrano Peña",
      "phone": "+54-11-7890-1234",
      "email": "álvaroserranopeña@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-04T19:00:00.000-03:00",
    "endTime": "2025-10-04T22:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-04T15:30:00.000-03:00",
    "updatedAt": "2025-10-04T18:30:00.000-03:00"
  },
  {
    "id": "res-44",
    "tableId": "table-21",
    "customer": {
      "name": "Hugo Aguilar Moreno",
      "phone": "+54-11-1313-4545",
      "email": "hugoaguilarmoreno@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-02T19:30:00.000-03:00",
    "endTime": "2025-10-02T20:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-02T18:30:00.000-03:00",
    "updatedAt": "2025-10-02T18:30:00.000-03:00"
  },
  {
    "id": "res-45",
    "tableId": "table-7",
    "customer": {
      "name": "Alejandro Castro Sánchez",
      "phone": "+54-11-9999-0000",
      "email": "alejandrocastrosánchez@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-08T15:30:00.000-03:00",
    "endTime": "2025-10-08T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-08T18:26:00.000-03:00",
    "updatedAt": "2025-10-08T20:26:00.000-03:00"
  },
  {
    "id": "res-46",
    "tableId": "table-30",
    "customer": {
      "name": "Miguel González Flores",
      "phone": "+54-11-1111-2222",
      "email": "miguelgonzálezflores@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-09T11:30:00.000-03:00",
    "endTime": "2025-10-09T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-09T15:45:00.000-03:00",
    "updatedAt": "2025-10-09T15:45:00.000-03:00"
  },
  {
    "id": "res-47",
    "tableId": "table-2",
    "customer": {
      "name": "Ana García Moreno",
      "phone": "+54-11-1234-5678",
      "email": "anagarcíamoreno@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-26T01:00:00.000-03:00",
    "endTime": "2025-10-26T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-25T13:22:00.000-03:00",
    "updatedAt": "2025-10-25T13:22:00.000-03:00"
  },
  {
    "id": "res-48",
    "tableId": "table-1",
    "customer": {
      "name": "David Jiménez Herrera",
      "phone": "+54-11-7890-1234",
      "email": "davidjiménezherrera@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T20:30:00.000-03:00",
    "endTime": "2025-10-26T23:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-26T20:22:00.000-03:00",
    "updatedAt": "2025-10-26T20:22:00.000-03:00"
  },
  {
    "id": "res-49",
    "tableId": "table-2",
    "customer": {
      "name": "David Jiménez Díaz",
      "phone": "+54-11-1234-5678",
      "email": "davidjiménezdíaz@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T23:30:00.000-03:00",
    "endTime": "2025-10-12T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-11T14:55:00.000-03:00",
    "updatedAt": "2025-10-11T14:55:00.000-03:00"
  },
  {
    "id": "res-50",
    "tableId": "table-18",
    "customer": {
      "name": "Carmen Pérez Moreno",
      "phone": "+54-11-5656-7878",
      "email": "carmenpérezmoreno@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T20:00:00.000-03:00",
    "endTime": "2025-10-10T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-10T14:05:00.000-03:00",
    "updatedAt": "2025-10-10T16:05:00.000-03:00"
  },
  {
    "id": "res-51",
    "tableId": "table-3",
    "customer": {
      "name": "Álvaro Serrano López",
      "phone": "+54-11-0123-4567",
      "email": "álvaroserranolópez@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-08T15:30:00.000-03:00",
    "endTime": "2025-10-08T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-08T20:45:00.000-03:00",
    "updatedAt": "2025-10-08T20:45:00.000-03:00"
  },
  {
    "id": "res-52",
    "tableId": "table-1",
    "customer": {
      "name": "Natalia Ortega Vega",
      "phone": "+54-11-8901-2345",
      "email": "nataliaortegavega@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-23T14:30:00.000-03:00",
    "endTime": "2025-10-23T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-23T15:05:00.000-03:00",
    "updatedAt": "2025-10-23T15:05:00.000-03:00"
  },
  {
    "id": "res-53",
    "tableId": "table-5",
    "customer": {
      "name": "Javier Torres Mendoza",
      "phone": "+54-11-5656-7878",
      "email": "javiertorresmendoza@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-27T00:30:00.000-03:00",
    "endTime": "2025-10-27T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-26T20:45:00.000-03:00",
    "updatedAt": "2025-10-26T20:45:00.000-03:00"
  },
  {
    "id": "res-54",
    "tableId": "table-23",
    "customer": {
      "name": "Ana García Reyes",
      "phone": "+54-11-3333-4444",
      "email": "anagarcíareyes@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-05T18:30:00.000-03:00",
    "endTime": "2025-10-05T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-05T12:07:00.000-03:00",
    "updatedAt": "2025-10-05T12:07:00.000-03:00"
  },
  {
    "id": "res-55",
    "tableId": "table-22",
    "customer": {
      "name": "Elena Moreno García",
      "phone": "+54-11-7890-1234",
      "email": "elenamorenogarcía@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-17T23:30:00.000-03:00",
    "endTime": "2025-10-18T02:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-17T19:16:00.000-03:00",
    "updatedAt": "2025-10-17T19:16:00.000-03:00"
  },
  {
    "id": "res-56",
    "tableId": "table-8",
    "customer": {
      "name": "Antonio Ruiz Peña",
      "phone": "+54-11-7777-8888",
      "email": "antonioruizpeña@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T15:30:00.000-03:00",
    "endTime": "2025-10-17T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-17T12:55:00.000-03:00",
    "updatedAt": "2025-10-17T12:55:00.000-03:00"
  },
  {
    "id": "res-57",
    "tableId": "table-24",
    "customer": {
      "name": "Fernando Ramos Romero",
      "phone": "+54-11-5678-9012",
      "email": "fernandoramosromero@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-28T21:00:00.000-03:00",
    "endTime": "2025-10-29T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-28T12:51:00.000-03:00",
    "updatedAt": "2025-10-28T12:51:00.000-03:00"
  },
  {
    "id": "res-58",
    "tableId": "table-27",
    "customer": {
      "name": "Raquel Vargas Martín",
      "phone": "+54-11-9999-0000",
      "email": "raquelvargasmartín@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-11T22:30:00.000-03:00",
    "endTime": "2025-10-12T00:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-11T12:56:00.000-03:00",
    "updatedAt": "2025-10-11T12:56:00.000-03:00"
  },
  {
    "id": "res-59",
    "tableId": "table-20",
    "customer": {
      "name": "Lucía Morales García",
      "phone": "+54-11-9999-0000",
      "email": "lucíamoralesgarcía@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T15:30:00.000-03:00",
    "endTime": "2025-10-24T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T13:15:00.000-03:00",
    "updatedAt": "2025-10-24T13:15:00.000-03:00"
  },
  {
    "id": "res-60",
    "tableId": "table-14",
    "customer": {
      "name": "Hugo Aguilar Sánchez",
      "phone": "+54-11-2345-6789",
      "email": "hugoaguilarsánchez@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-21T22:00:00.000-03:00",
    "endTime": "2025-10-22T00:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-21T13:59:00.000-03:00",
    "updatedAt": "2025-10-21T13:59:00.000-03:00"
  },
  {
    "id": "res-61",
    "tableId": "table-8",
    "customer": {
      "name": "Carlos López Ruiz",
      "phone": "+54-11-1111-2222",
      "email": "carloslópezruiz@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T12:00:00.000-03:00",
    "endTime": "2025-10-18T15:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-18T21:18:00.000-03:00",
    "updatedAt": "2025-10-18T21:18:00.000-03:00"
  },
  {
    "id": "res-62",
    "tableId": "table-17",
    "customer": {
      "name": "Mónica Flores González",
      "phone": "+54-11-7890-1234",
      "email": "mónicafloresgonzález@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T19:00:00.000-03:00",
    "endTime": "2025-10-18T22:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-18T14:26:00.000-03:00",
    "updatedAt": "2025-10-18T14:26:00.000-03:00"
  },
  {
    "id": "res-63",
    "tableId": "table-17",
    "customer": {
      "name": "Valeria Silva González",
      "phone": "+54-11-1234-5678",
      "email": "valeriasilvagonzález@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T14:00:00.000-03:00",
    "endTime": "2025-10-26T15:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-26T19:56:00.000-03:00",
    "updatedAt": "2025-10-26T21:56:00.000-03:00"
  },
  {
    "id": "res-64",
    "tableId": "table-12",
    "customer": {
      "name": "Miguel González Flores",
      "phone": "+54-11-1212-3434",
      "email": "miguelgonzálezflores@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-28T19:30:00.000-03:00",
    "endTime": "2025-10-28T20:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-28T12:32:00.000-03:00",
    "updatedAt": "2025-10-28T12:32:00.000-03:00"
  },
  {
    "id": "res-65",
    "tableId": "table-23",
    "customer": {
      "name": "Ana García Torres",
      "phone": "+54-11-6767-8989",
      "email": "anagarcíatorres@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T23:30:00.000-03:00",
    "endTime": "2025-10-05T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-04T22:53:00.000-03:00",
    "updatedAt": "2025-10-04T22:53:00.000-03:00"
  },
  {
    "id": "res-66",
    "tableId": "table-7",
    "customer": {
      "name": "Pablo Delgado Ortega",
      "phone": "+54-11-1313-4545",
      "email": "pablodelgadoortega@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-03T15:30:00.000-03:00",
    "endTime": "2025-10-03T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-03T17:56:00.000-03:00",
    "updatedAt": "2025-10-03T18:56:00.000-03:00"
  },
  {
    "id": "res-67",
    "tableId": "table-11",
    "customer": {
      "name": "Pablo Delgado Ramos",
      "phone": "+54-11-1234-5678",
      "email": "pablodelgadoramos@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-03T10:00:00.000-03:00",
    "endTime": "2025-10-03T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-03T21:42:00.000-03:00",
    "updatedAt": "2025-10-03T21:42:00.000-03:00"
  },
  {
    "id": "res-68",
    "tableId": "table-6",
    "customer": {
      "name": "Sergio Peña Cabrera",
      "phone": "+54-11-1234-5678",
      "email": "sergiopeñacabrera@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T01:30:00.000-03:00",
    "endTime": "2025-10-20T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-19T19:24:00.000-03:00",
    "updatedAt": "2025-10-19T22:24:00.000-03:00"
  },
  {
    "id": "res-69",
    "tableId": "table-21",
    "customer": {
      "name": "Francisco Martín Pérez",
      "phone": "+54-11-4567-8901",
      "email": "franciscomartínpérez@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-08T16:30:00.000-03:00",
    "endTime": "2025-10-08T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-08T18:01:00.000-03:00",
    "updatedAt": "2025-10-08T18:01:00.000-03:00"
  },
  {
    "id": "res-70",
    "tableId": "table-17",
    "customer": {
      "name": "Patricia Navarro González",
      "phone": "+54-11-2345-6789",
      "email": "patricianavarrogonzález@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-15T10:30:00.000-03:00",
    "endTime": "2025-10-15T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-15T21:59:00.000-03:00",
    "updatedAt": "2025-10-15T21:59:00.000-03:00"
  },
  {
    "id": "res-71",
    "tableId": "table-1",
    "customer": {
      "name": "Patricia Navarro Ortega",
      "phone": "+54-11-8901-2345",
      "email": "patricianavarroortega@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T19:00:00.000-03:00",
    "endTime": "2025-10-19T21:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-19T20:54:00.000-03:00",
    "updatedAt": "2025-10-19T20:54:00.000-03:00"
  },
  {
    "id": "res-72",
    "tableId": "table-22",
    "customer": {
      "name": "Lucía Morales Cabrera",
      "phone": "+54-11-5678-9012",
      "email": "lucíamoralescabrera@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-25T21:00:00.000-03:00",
    "endTime": "2025-10-25T22:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-25T19:15:00.000-03:00",
    "updatedAt": "2025-10-25T19:15:00.000-03:00"
  },
  {
    "id": "res-73",
    "tableId": "table-8",
    "customer": {
      "name": "Daniel Campos Martínez",
      "phone": "+54-11-3333-4444",
      "email": "danielcamposmartínez@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-13T11:30:00.000-03:00",
    "endTime": "2025-10-13T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-13T13:33:00.000-03:00",
    "updatedAt": "2025-10-13T13:33:00.000-03:00"
  },
  {
    "id": "res-74",
    "tableId": "table-26",
    "customer": {
      "name": "Beatriz Guerrero Fuentes",
      "phone": "+54-11-5656-7878",
      "email": "beatrizguerrerofuentes@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-06T10:00:00.000-03:00",
    "endTime": "2025-10-06T11:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-06T22:51:00.000-03:00",
    "updatedAt": "2025-10-06T22:51:00.000-03:00"
  },
  {
    "id": "res-75",
    "tableId": "table-9",
    "customer": {
      "name": "Andrea Mendoza García",
      "phone": "+54-11-1313-4545",
      "email": "andreamendozagarcía@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T13:00:00.000-03:00",
    "endTime": "2025-10-17T15:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-17T15:03:00.000-03:00",
    "updatedAt": "2025-10-17T15:03:00.000-03:00"
  },
  {
    "id": "res-76",
    "tableId": "table-11",
    "customer": {
      "name": "Adrián Cabrera Jiménez",
      "phone": "+54-11-7777-8888",
      "email": "adriáncabrerajiménez@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T18:30:00.000-03:00",
    "endTime": "2025-10-04T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-04T17:33:00.000-03:00",
    "updatedAt": "2025-10-04T21:33:00.000-03:00"
  },
  {
    "id": "res-77",
    "tableId": "table-23",
    "customer": {
      "name": "Natalia Ortega Fuentes",
      "phone": "+54-11-1111-2222",
      "email": "nataliaortegafuentes@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-05T00:30:00.000-03:00",
    "endTime": "2025-10-05T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-04T13:17:00.000-03:00",
    "updatedAt": "2025-10-04T13:17:00.000-03:00"
  },
  {
    "id": "res-78",
    "tableId": "table-5",
    "customer": {
      "name": "Valeria Silva Vega",
      "phone": "+54-11-4567-8901",
      "email": "valeriasilvavega@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-01T20:00:00.000-03:00",
    "endTime": "2025-10-01T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-01T19:18:00.000-03:00",
    "updatedAt": "2025-10-01T23:18:00.000-03:00"
  },
  {
    "id": "res-79",
    "tableId": "table-18",
    "customer": {
      "name": "Teresa Molina Navarro",
      "phone": "+54-11-0123-4567",
      "email": "teresamolinanavarro@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T21:00:00.000-03:00",
    "endTime": "2025-10-17T23:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-17T20:57:00.000-03:00",
    "updatedAt": "2025-10-17T20:57:00.000-03:00"
  },
  {
    "id": "res-80",
    "tableId": "table-16",
    "customer": {
      "name": "Sebastián Vega Vega",
      "phone": "+54-11-2345-6789",
      "email": "sebastiánvegavega@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T18:30:00.000-03:00",
    "endTime": "2025-10-18T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-18T16:24:00.000-03:00",
    "updatedAt": "2025-10-18T16:24:00.000-03:00"
  },
  {
    "id": "res-81",
    "tableId": "table-20",
    "customer": {
      "name": "Sebastián Vega Vega",
      "phone": "+54-11-4567-8901",
      "email": "sebastiánvegavega@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T18:30:00.000-03:00",
    "endTime": "2025-10-17T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-17T12:21:00.000-03:00",
    "updatedAt": "2025-10-17T12:21:00.000-03:00"
  },
  {
    "id": "res-82",
    "tableId": "table-20",
    "customer": {
      "name": "José Martínez Romero",
      "phone": "+54-11-7777-8888",
      "email": "josémartínezromero@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-04T14:30:00.000-03:00",
    "endTime": "2025-10-04T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-04T17:47:00.000-03:00",
    "updatedAt": "2025-10-04T17:47:00.000-03:00"
  },
  {
    "id": "res-83",
    "tableId": "table-6",
    "customer": {
      "name": "Lucía Morales Herrera",
      "phone": "+54-11-4567-8901",
      "email": "lucíamoralesherrera@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-16T17:30:00.000-03:00",
    "endTime": "2025-10-16T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-16T19:26:00.000-03:00",
    "updatedAt": "2025-10-16T19:26:00.000-03:00"
  },
  {
    "id": "res-84",
    "tableId": "table-16",
    "customer": {
      "name": "Carlos López Navarro",
      "phone": "+54-11-1313-4545",
      "email": "carloslópeznavarro@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T00:30:00.000-03:00",
    "endTime": "2025-10-04T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-03T12:44:00.000-03:00",
    "updatedAt": "2025-10-03T12:44:00.000-03:00"
  },
  {
    "id": "res-85",
    "tableId": "table-29",
    "customer": {
      "name": "Carlos López Moreno",
      "phone": "+54-11-1234-5678",
      "email": "carloslópezmoreno@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-10T19:30:00.000-03:00",
    "endTime": "2025-10-10T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-10T22:41:00.000-03:00",
    "updatedAt": "2025-10-10T23:41:00.000-03:00"
  },
  {
    "id": "res-86",
    "tableId": "table-1",
    "customer": {
      "name": "Claudia Medina Pérez",
      "phone": "+54-11-1111-2222",
      "email": "claudiamedinapérez@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-15T17:00:00.000-03:00",
    "endTime": "2025-10-15T19:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-15T17:59:00.000-03:00",
    "updatedAt": "2025-10-15T21:59:00.000-03:00"
  },
  {
    "id": "res-87",
    "tableId": "table-15",
    "customer": {
      "name": "Andrea Mendoza García",
      "phone": "+54-11-9090-1212",
      "email": "andreamendozagarcía@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-28T13:30:00.000-03:00",
    "endTime": "2025-10-28T16:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-28T20:24:00.000-03:00",
    "updatedAt": "2025-10-28T22:24:00.000-03:00"
  },
  {
    "id": "res-88",
    "tableId": "table-23",
    "customer": {
      "name": "Javier Torres Rojas",
      "phone": "+54-11-9090-1212",
      "email": "javiertorresrojas@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-03T17:30:00.000-03:00",
    "endTime": "2025-10-03T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-03T20:56:00.000-03:00",
    "updatedAt": "2025-10-03T20:56:00.000-03:00"
  },
  {
    "id": "res-89",
    "tableId": "table-20",
    "customer": {
      "name": "Andrea Mendoza Flores",
      "phone": "+54-11-7890-1234",
      "email": "andreamendozaflores@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T21:00:00.000-03:00",
    "endTime": "2025-10-18T23:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-18T20:57:00.000-03:00",
    "updatedAt": "2025-10-18T20:57:00.000-03:00"
  },
  {
    "id": "res-90",
    "tableId": "table-15",
    "customer": {
      "name": "Javier Torres Guerrero",
      "phone": "+54-11-3333-4444",
      "email": "javiertorresguerrero@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-08T11:00:00.000-03:00",
    "endTime": "2025-10-08T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-08T15:27:00.000-03:00",
    "updatedAt": "2025-10-08T17:27:00.000-03:00"
  },
  {
    "id": "res-91",
    "tableId": "table-20",
    "customer": {
      "name": "Roberto Herrera Castro",
      "phone": "+54-11-5555-6666",
      "email": "robertoherreracastro@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-26T01:00:00.000-03:00",
    "endTime": "2025-10-26T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-25T20:42:00.000-03:00",
    "updatedAt": "2025-10-25T20:42:00.000-03:00"
  },
  {
    "id": "res-92",
    "tableId": "table-17",
    "customer": {
      "name": "Rubén Herrera Jiménez",
      "phone": "+54-11-6767-8989",
      "email": "rubénherrerajiménez@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-01T14:30:00.000-03:00",
    "endTime": "2025-10-01T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-01T21:00:00.000-03:00",
    "updatedAt": "2025-10-02T00:00:00.000-03:00"
  },
  {
    "id": "res-93",
    "tableId": "table-5",
    "customer": {
      "name": "Carlos López Ruiz",
      "phone": "+54-11-6767-8989",
      "email": "carloslópezruiz@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T20:00:00.000-03:00",
    "endTime": "2025-10-23T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-23T15:03:00.000-03:00",
    "updatedAt": "2025-10-23T18:03:00.000-03:00"
  },
  {
    "id": "res-94",
    "tableId": "table-28",
    "customer": {
      "name": "Miguel González Herrera",
      "phone": "+54-11-4567-8901",
      "email": "miguelgonzálezherrera@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-11T12:00:00.000-03:00",
    "endTime": "2025-10-11T15:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-11T13:36:00.000-03:00",
    "updatedAt": "2025-10-11T13:36:00.000-03:00"
  },
  {
    "id": "res-95",
    "tableId": "table-13",
    "customer": {
      "name": "Lucía Morales Mendoza",
      "phone": "+54-11-9012-3456",
      "email": "lucíamoralesmendoza@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-26T15:30:00.000-03:00",
    "endTime": "2025-10-26T17:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-26T15:35:00.000-03:00",
    "updatedAt": "2025-10-26T15:35:00.000-03:00"
  },
  {
    "id": "res-96",
    "tableId": "table-7",
    "customer": {
      "name": "Ana García Medina",
      "phone": "+54-11-1212-3434",
      "email": "anagarcíamedina@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T00:30:00.000-03:00",
    "endTime": "2025-10-04T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-03T16:07:00.000-03:00",
    "updatedAt": "2025-10-03T19:07:00.000-03:00"
  },
  {
    "id": "res-97",
    "tableId": "table-16",
    "customer": {
      "name": "Claudia Medina Moreno",
      "phone": "+54-11-9012-3456",
      "email": "claudiamedinamoreno@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-15T10:00:00.000-03:00",
    "endTime": "2025-10-15T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-15T22:58:00.000-03:00",
    "updatedAt": "2025-10-15T22:58:00.000-03:00"
  },
  {
    "id": "res-98",
    "tableId": "table-21",
    "customer": {
      "name": "Miguel González Cabrera",
      "phone": "+54-11-1313-4545",
      "email": "miguelgonzálezcabrera@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-12T19:30:00.000-03:00",
    "endTime": "2025-10-12T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-12T14:05:00.000-03:00",
    "updatedAt": "2025-10-12T15:05:00.000-03:00"
  },
  {
    "id": "res-99",
    "tableId": "table-5",
    "customer": {
      "name": "Roberto Herrera González",
      "phone": "+54-11-7890-1234",
      "email": "robertoherreragonzález@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T12:30:00.000-03:00",
    "endTime": "2025-10-18T14:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-18T12:14:00.000-03:00",
    "updatedAt": "2025-10-18T12:14:00.000-03:00"
  },
  {
    "id": "res-100",
    "tableId": "table-27",
    "customer": {
      "name": "Javier Torres Campos",
      "phone": "+54-11-0123-4567",
      "email": "javiertorrescampos@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-29T13:30:00.000-03:00",
    "endTime": "2025-10-29T15:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-29T15:55:00.000-03:00",
    "updatedAt": "2025-10-29T15:55:00.000-03:00"
  },
  {
    "id": "res-101",
    "tableId": "table-12",
    "customer": {
      "name": "Gabriel Rojas Cabrera",
      "phone": "+54-11-5678-9012",
      "email": "gabrielrojascabrera@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T19:30:00.000-03:00",
    "endTime": "2025-10-24T22:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T13:10:00.000-03:00",
    "updatedAt": "2025-10-24T16:10:00.000-03:00"
  },
  {
    "id": "res-102",
    "tableId": "table-24",
    "customer": {
      "name": "Adrián Cabrera Pérez",
      "phone": "+54-11-5555-6666",
      "email": "adriáncabrerapérez@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-28T01:30:00.000-03:00",
    "endTime": "2025-10-28T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-27T16:32:00.000-03:00",
    "updatedAt": "2025-10-27T16:32:00.000-03:00"
  },
  {
    "id": "res-103",
    "tableId": "table-30",
    "customer": {
      "name": "Cristina Romero Reyes",
      "phone": "+54-11-9012-3456",
      "email": "cristinaromeroreyes@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T00:30:00.000-03:00",
    "endTime": "2025-10-19T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-18T13:52:00.000-03:00",
    "updatedAt": "2025-10-18T13:52:00.000-03:00"
  },
  {
    "id": "res-104",
    "tableId": "table-14",
    "customer": {
      "name": "Laura Sánchez Morales",
      "phone": "+54-11-9090-1212",
      "email": "laurasánchezmorales@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-06T23:30:00.000-03:00",
    "endTime": "2025-10-07T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-06T11:34:00.000-03:00",
    "updatedAt": "2025-10-06T11:34:00.000-03:00"
  },
  {
    "id": "res-105",
    "tableId": "table-8",
    "customer": {
      "name": "Patricia Navarro Pérez",
      "phone": "+54-11-7777-8888",
      "email": "patricianavarropérez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-15T23:00:00.000-03:00",
    "endTime": "2025-10-16T02:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-15T21:00:00.000-03:00",
    "updatedAt": "2025-10-15T22:00:00.000-03:00"
  },
  {
    "id": "res-106",
    "tableId": "table-28",
    "customer": {
      "name": "Ana García Campos",
      "phone": "+54-11-2345-6789",
      "email": "anagarcíacampos@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T20:00:00.000-03:00",
    "endTime": "2025-10-18T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-18T12:10:00.000-03:00",
    "updatedAt": "2025-10-18T12:10:00.000-03:00"
  },
  {
    "id": "res-107",
    "tableId": "table-9",
    "customer": {
      "name": "Daniel Campos Vargas",
      "phone": "+54-11-6789-0123",
      "email": "danielcamposvargas@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T15:00:00.000-03:00",
    "endTime": "2025-10-24T17:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T20:29:00.000-03:00",
    "updatedAt": "2025-10-24T23:29:00.000-03:00"
  },
  {
    "id": "res-108",
    "tableId": "table-19",
    "customer": {
      "name": "Sergio Peña Cabrera",
      "phone": "+54-11-9090-1212",
      "email": "sergiopeñacabrera@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T21:00:00.000-03:00",
    "endTime": "2025-10-11T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-10T15:44:00.000-03:00",
    "updatedAt": "2025-10-10T15:44:00.000-03:00"
  },
  {
    "id": "res-109",
    "tableId": "table-28",
    "customer": {
      "name": "Natalia Ortega Jiménez",
      "phone": "+54-11-1313-4545",
      "email": "nataliaortegajiménez@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T17:30:00.000-03:00",
    "endTime": "2025-10-03T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-03T18:29:00.000-03:00",
    "updatedAt": "2025-10-03T18:29:00.000-03:00"
  },
  {
    "id": "res-110",
    "tableId": "table-2",
    "customer": {
      "name": "Raquel Vargas Fuentes",
      "phone": "+54-11-3333-4444",
      "email": "raquelvargasfuentes@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T15:00:00.000-03:00",
    "endTime": "2025-10-23T17:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T14:44:00.000-03:00",
    "updatedAt": "2025-10-23T14:44:00.000-03:00"
  },
  {
    "id": "res-111",
    "tableId": "table-1",
    "customer": {
      "name": "Laura Sánchez Guerrero",
      "phone": "+54-11-1313-4545",
      "email": "laurasánchezguerrero@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T18:30:00.000-03:00",
    "endTime": "2025-10-20T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-20T22:58:00.000-03:00",
    "updatedAt": "2025-10-21T00:58:00.000-03:00"
  },
  {
    "id": "res-112",
    "tableId": "table-22",
    "customer": {
      "name": "Camila Espinoza Pérez",
      "phone": "+54-11-1234-5678",
      "email": "camilaespinozapérez@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T14:00:00.000-03:00",
    "endTime": "2025-10-03T17:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-03T20:07:00.000-03:00",
    "updatedAt": "2025-10-03T20:07:00.000-03:00"
  },
  {
    "id": "res-113",
    "tableId": "table-16",
    "customer": {
      "name": "Ana García Espinoza",
      "phone": "+54-11-3456-7890",
      "email": "anagarcíaespinoza@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-17T18:30:00.000-03:00",
    "endTime": "2025-10-17T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-17T21:20:00.000-03:00",
    "updatedAt": "2025-10-17T22:20:00.000-03:00"
  },
  {
    "id": "res-114",
    "tableId": "table-27",
    "customer": {
      "name": "Patricia Navarro Delgado",
      "phone": "+54-11-5656-7878",
      "email": "patricianavarrodelgado@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-11T21:00:00.000-03:00",
    "endTime": "2025-10-12T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-11T14:32:00.000-03:00",
    "updatedAt": "2025-10-11T18:32:00.000-03:00"
  },
  {
    "id": "res-115",
    "tableId": "table-7",
    "customer": {
      "name": "Pablo Delgado Peña",
      "phone": "+54-11-6767-8989",
      "email": "pablodelgadopeña@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T12:00:00.000-03:00",
    "endTime": "2025-10-10T15:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-10T21:31:00.000-03:00",
    "updatedAt": "2025-10-10T21:31:00.000-03:00"
  },
  {
    "id": "res-116",
    "tableId": "table-26",
    "customer": {
      "name": "Laura Sánchez Pérez",
      "phone": "+54-11-6789-0123",
      "email": "laurasánchezpérez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-09T10:00:00.000-03:00",
    "endTime": "2025-10-09T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-09T22:58:00.000-03:00",
    "updatedAt": "2025-10-10T02:58:00.000-03:00"
  },
  {
    "id": "res-117",
    "tableId": "table-21",
    "customer": {
      "name": "Beatriz Guerrero Ramos",
      "phone": "+54-11-3333-4444",
      "email": "beatrizguerreroramos@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T23:30:00.000-03:00",
    "endTime": "2025-10-25T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T22:50:00.000-03:00",
    "updatedAt": "2025-10-24T22:50:00.000-03:00"
  },
  {
    "id": "res-118",
    "tableId": "table-14",
    "customer": {
      "name": "Laura Sánchez Ortega",
      "phone": "+54-11-7777-8888",
      "email": "laurasánchezortega@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-09T17:00:00.000-03:00",
    "endTime": "2025-10-09T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-09T19:38:00.000-03:00",
    "updatedAt": "2025-10-09T19:38:00.000-03:00"
  },
  {
    "id": "res-119",
    "tableId": "table-17",
    "customer": {
      "name": "Elena Moreno Castro",
      "phone": "+54-11-2345-6789",
      "email": "elenamorenocastro@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-10T13:00:00.000-03:00",
    "endTime": "2025-10-10T15:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-10T13:22:00.000-03:00",
    "updatedAt": "2025-10-10T13:22:00.000-03:00"
  },
  {
    "id": "res-120",
    "tableId": "table-5",
    "customer": {
      "name": "Mónica Flores Herrera",
      "phone": "+54-11-5555-6666",
      "email": "mónicafloresherrera@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-09-30T16:00:00.000-03:00",
    "endTime": "2025-09-30T19:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-09-30T17:14:00.000-03:00",
    "updatedAt": "2025-09-30T21:14:00.000-03:00"
  },
  {
    "id": "res-121",
    "tableId": "table-26",
    "customer": {
      "name": "Valeria Silva Medina",
      "phone": "+54-11-0123-4567",
      "email": "valeriasilvamedina@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-25T18:30:00.000-03:00",
    "endTime": "2025-10-25T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-25T15:28:00.000-03:00",
    "updatedAt": "2025-10-25T15:28:00.000-03:00"
  },
  {
    "id": "res-122",
    "tableId": "table-7",
    "customer": {
      "name": "Natalia Ortega Díaz",
      "phone": "+54-11-6789-0123",
      "email": "nataliaortegadíaz@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T17:30:00.000-03:00",
    "endTime": "2025-10-24T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-24T20:08:00.000-03:00",
    "updatedAt": "2025-10-24T20:08:00.000-03:00"
  },
  {
    "id": "res-123",
    "tableId": "table-23",
    "customer": {
      "name": "Camila Espinoza Moreno",
      "phone": "+54-11-4567-8901",
      "email": "camilaespinozamoreno@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-04T19:30:00.000-03:00",
    "endTime": "2025-10-04T20:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-04T18:58:00.000-03:00",
    "updatedAt": "2025-10-04T18:58:00.000-03:00"
  },
  {
    "id": "res-124",
    "tableId": "table-25",
    "customer": {
      "name": "Rubén Herrera Ruiz",
      "phone": "+54-11-5555-6666",
      "email": "rubénherreraruiz@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-09T18:30:00.000-03:00",
    "endTime": "2025-10-09T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-09T22:37:00.000-03:00",
    "updatedAt": "2025-10-10T02:37:00.000-03:00"
  },
  {
    "id": "res-125",
    "tableId": "table-6",
    "customer": {
      "name": "Beatriz Guerrero Ramos",
      "phone": "+54-11-1111-2222",
      "email": "beatrizguerreroramos@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-26T22:30:00.000-03:00",
    "endTime": "2025-10-26T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-26T22:17:00.000-03:00",
    "updatedAt": "2025-10-26T22:17:00.000-03:00"
  },
  {
    "id": "res-126",
    "tableId": "table-9",
    "customer": {
      "name": "Francisco Martín Campos",
      "phone": "+54-11-2345-6789",
      "email": "franciscomartíncampos@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-13T22:00:00.000-03:00",
    "endTime": "2025-10-13T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-13T22:11:00.000-03:00",
    "updatedAt": "2025-10-14T00:11:00.000-03:00"
  },
  {
    "id": "res-127",
    "tableId": "table-26",
    "customer": {
      "name": "Andrea Mendoza Aguilar",
      "phone": "+54-11-9090-1212",
      "email": "andreamendozaaguilar@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T12:30:00.000-03:00",
    "endTime": "2025-10-11T14:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-11T18:06:00.000-03:00",
    "updatedAt": "2025-10-11T18:06:00.000-03:00"
  },
  {
    "id": "res-128",
    "tableId": "table-10",
    "customer": {
      "name": "Teresa Molina Guerrero",
      "phone": "+54-11-9012-3456",
      "email": "teresamolinaguerrero@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-11T12:30:00.000-03:00",
    "endTime": "2025-10-11T14:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-11T12:42:00.000-03:00",
    "updatedAt": "2025-10-11T12:42:00.000-03:00"
  },
  {
    "id": "res-129",
    "tableId": "table-8",
    "customer": {
      "name": "Javier Torres Romero",
      "phone": "+54-11-3456-7890",
      "email": "javiertorresromero@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-09T11:00:00.000-03:00",
    "endTime": "2025-10-09T13:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-09T17:23:00.000-03:00",
    "updatedAt": "2025-10-09T17:23:00.000-03:00"
  },
  {
    "id": "res-130",
    "tableId": "table-24",
    "customer": {
      "name": "Patricia Navarro Mendoza",
      "phone": "+54-11-1212-3434",
      "email": "patricianavarromendoza@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-12T00:30:00.000-03:00",
    "endTime": "2025-10-12T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-11T11:59:00.000-03:00",
    "updatedAt": "2025-10-11T11:59:00.000-03:00"
  },
  {
    "id": "res-131",
    "tableId": "table-4",
    "customer": {
      "name": "Raquel Vargas Castro",
      "phone": "+54-11-1111-2222",
      "email": "raquelvargascastro@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T16:00:00.000-03:00",
    "endTime": "2025-10-25T19:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-25T17:07:00.000-03:00",
    "updatedAt": "2025-10-25T17:07:00.000-03:00"
  },
  {
    "id": "res-132",
    "tableId": "table-11",
    "customer": {
      "name": "Francisco Martín Pérez",
      "phone": "+54-11-6789-0123",
      "email": "franciscomartínpérez@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-14T20:00:00.000-03:00",
    "endTime": "2025-10-14T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-14T16:53:00.000-03:00",
    "updatedAt": "2025-10-14T18:53:00.000-03:00"
  },
  {
    "id": "res-133",
    "tableId": "table-16",
    "customer": {
      "name": "Gabriel Rojas Moreno",
      "phone": "+54-11-1313-4545",
      "email": "gabrielrojasmoreno@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-12T10:00:00.000-03:00",
    "endTime": "2025-10-12T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-12T17:45:00.000-03:00",
    "updatedAt": "2025-10-12T17:45:00.000-03:00"
  },
  {
    "id": "res-134",
    "tableId": "table-7",
    "customer": {
      "name": "Valeria Silva Peña",
      "phone": "+54-11-5656-7878",
      "email": "valeriasilvapeña@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-29T10:30:00.000-03:00",
    "endTime": "2025-10-29T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-29T12:08:00.000-03:00",
    "updatedAt": "2025-10-29T16:08:00.000-03:00"
  },
  {
    "id": "res-135",
    "tableId": "table-29",
    "customer": {
      "name": "Camila Espinoza Medina",
      "phone": "+54-11-3333-4444",
      "email": "camilaespinozamedina@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T20:30:00.000-03:00",
    "endTime": "2025-10-24T23:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T17:59:00.000-03:00",
    "updatedAt": "2025-10-24T17:59:00.000-03:00"
  },
  {
    "id": "res-136",
    "tableId": "table-12",
    "customer": {
      "name": "Isabel Díaz González",
      "phone": "+54-11-2345-6789",
      "email": "isabeldíazgonzález@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T01:30:00.000-03:00",
    "endTime": "2025-10-11T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-10T12:42:00.000-03:00",
    "updatedAt": "2025-10-10T12:42:00.000-03:00"
  },
  {
    "id": "res-137",
    "tableId": "table-3",
    "customer": {
      "name": "Francisco Martín Flores",
      "phone": "+54-11-3333-4444",
      "email": "franciscomartínflores@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T01:00:00.000-03:00",
    "endTime": "2025-10-11T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-10T17:13:00.000-03:00",
    "updatedAt": "2025-10-10T17:13:00.000-03:00"
  },
  {
    "id": "res-138",
    "tableId": "table-5",
    "customer": {
      "name": "Miguel González Romero",
      "phone": "+54-11-9090-1212",
      "email": "miguelgonzálezromero@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-17T13:30:00.000-03:00",
    "endTime": "2025-10-17T14:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-17T13:47:00.000-03:00",
    "updatedAt": "2025-10-17T13:47:00.000-03:00"
  },
  {
    "id": "res-139",
    "tableId": "table-11",
    "customer": {
      "name": "Mónica Flores Herrera",
      "phone": "+54-11-1212-3434",
      "email": "mónicafloresherrera@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-25T17:00:00.000-03:00",
    "endTime": "2025-10-25T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-25T14:47:00.000-03:00",
    "updatedAt": "2025-10-25T18:47:00.000-03:00"
  },
  {
    "id": "res-140",
    "tableId": "table-18",
    "customer": {
      "name": "Sandra Vega Cabrera",
      "phone": "+54-11-7890-1234",
      "email": "sandravegacabrera@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T22:30:00.000-03:00",
    "endTime": "2025-10-25T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-25T13:20:00.000-03:00",
    "updatedAt": "2025-10-25T13:20:00.000-03:00"
  },
  {
    "id": "res-141",
    "tableId": "table-2",
    "customer": {
      "name": "Sergio Peña Molina",
      "phone": "+54-11-3333-4444",
      "email": "sergiopeñamolina@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-26T18:30:00.000-03:00",
    "endTime": "2025-10-26T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-26T17:05:00.000-03:00",
    "updatedAt": "2025-10-26T17:05:00.000-03:00"
  },
  {
    "id": "res-142",
    "tableId": "table-12",
    "customer": {
      "name": "Mónica Flores Mendoza",
      "phone": "+54-11-9999-0000",
      "email": "mónicafloresmendoza@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T20:00:00.000-03:00",
    "endTime": "2025-10-17T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-17T14:30:00.000-03:00",
    "updatedAt": "2025-10-17T14:30:00.000-03:00"
  },
  {
    "id": "res-143",
    "tableId": "table-17",
    "customer": {
      "name": "Valeria Silva Campos",
      "phone": "+54-11-5656-7878",
      "email": "valeriasilvacampos@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-08T16:00:00.000-03:00",
    "endTime": "2025-10-08T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-08T21:59:00.000-03:00",
    "updatedAt": "2025-10-09T01:59:00.000-03:00"
  },
  {
    "id": "res-144",
    "tableId": "table-20",
    "customer": {
      "name": "Raquel Vargas Castro",
      "phone": "+54-11-5678-9012",
      "email": "raquelvargascastro@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-16T19:30:00.000-03:00",
    "endTime": "2025-10-16T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-16T19:58:00.000-03:00",
    "updatedAt": "2025-10-16T22:58:00.000-03:00"
  },
  {
    "id": "res-145",
    "tableId": "table-5",
    "customer": {
      "name": "María Rodríguez Martínez",
      "phone": "+54-11-5678-9012",
      "email": "maríarodríguezmartínez@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T20:00:00.000-03:00",
    "endTime": "2025-10-24T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-24T22:38:00.000-03:00",
    "updatedAt": "2025-10-24T22:38:00.000-03:00"
  },
  {
    "id": "res-146",
    "tableId": "table-16",
    "customer": {
      "name": "Adrián Cabrera García",
      "phone": "+54-11-6767-8989",
      "email": "adriáncabreragarcía@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-05T18:30:00.000-03:00",
    "endTime": "2025-10-05T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-05T15:16:00.000-03:00",
    "updatedAt": "2025-10-05T18:16:00.000-03:00"
  },
  {
    "id": "res-147",
    "tableId": "table-17",
    "customer": {
      "name": "Roberto Herrera Castro",
      "phone": "+54-11-7890-1234",
      "email": "robertoherreracastro@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T17:00:00.000-03:00",
    "endTime": "2025-10-04T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-04T13:21:00.000-03:00",
    "updatedAt": "2025-10-04T13:21:00.000-03:00"
  },
  {
    "id": "res-148",
    "tableId": "table-20",
    "customer": {
      "name": "Natalia Ortega Castro",
      "phone": "+54-11-3456-7890",
      "email": "nataliaortegacastro@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T14:00:00.000-03:00",
    "endTime": "2025-10-25T16:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-25T18:39:00.000-03:00",
    "updatedAt": "2025-10-25T18:39:00.000-03:00"
  },
  {
    "id": "res-149",
    "tableId": "table-28",
    "customer": {
      "name": "Nicolás Fuentes Ruiz",
      "phone": "+54-11-3333-4444",
      "email": "nicolásfuentesruiz@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-04T18:30:00.000-03:00",
    "endTime": "2025-10-04T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-04T19:48:00.000-03:00",
    "updatedAt": "2025-10-04T19:48:00.000-03:00"
  },
  {
    "id": "res-150",
    "tableId": "table-27",
    "customer": {
      "name": "Sebastián Vega Herrera",
      "phone": "+54-11-9999-0000",
      "email": "sebastiánvegaherrera@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T16:00:00.000-03:00",
    "endTime": "2025-10-17T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-17T17:16:00.000-03:00",
    "updatedAt": "2025-10-17T18:16:00.000-03:00"
  },
  {
    "id": "res-151",
    "tableId": "table-3",
    "customer": {
      "name": "Sofia Reyes Navarro",
      "phone": "+54-11-5656-7878",
      "email": "sofiareyesnavarro@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T21:30:00.000-03:00",
    "endTime": "2025-10-20T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-19T12:52:00.000-03:00",
    "updatedAt": "2025-10-19T14:52:00.000-03:00"
  },
  {
    "id": "res-152",
    "tableId": "table-2",
    "customer": {
      "name": "David Jiménez Martínez",
      "phone": "+54-11-0123-4567",
      "email": "davidjiménezmartínez@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-26T22:30:00.000-03:00",
    "endTime": "2025-10-26T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-26T13:03:00.000-03:00",
    "updatedAt": "2025-10-26T13:03:00.000-03:00"
  },
  {
    "id": "res-153",
    "tableId": "table-24",
    "customer": {
      "name": "Carmen Pérez Ramos",
      "phone": "+54-11-5678-9012",
      "email": "carmenpérezramos@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-29T16:30:00.000-03:00",
    "endTime": "2025-10-29T18:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-29T21:24:00.000-03:00",
    "updatedAt": "2025-10-29T22:24:00.000-03:00"
  },
  {
    "id": "res-154",
    "tableId": "table-24",
    "customer": {
      "name": "Lucía Morales Sánchez",
      "phone": "+54-11-9012-3456",
      "email": "lucíamoralessánchez@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-03T13:00:00.000-03:00",
    "endTime": "2025-10-03T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-03T14:48:00.000-03:00",
    "updatedAt": "2025-10-03T14:48:00.000-03:00"
  },
  {
    "id": "res-155",
    "tableId": "table-24",
    "customer": {
      "name": "Nicolás Fuentes Sánchez",
      "phone": "+54-11-9090-1212",
      "email": "nicolásfuentessánchez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-16T12:00:00.000-03:00",
    "endTime": "2025-10-16T13:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-16T12:39:00.000-03:00",
    "updatedAt": "2025-10-16T12:39:00.000-03:00"
  },
  {
    "id": "res-156",
    "tableId": "table-10",
    "customer": {
      "name": "Lucía Morales Pérez",
      "phone": "+54-11-7890-1234",
      "email": "lucíamoralespérez@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-02T01:00:00.000-03:00",
    "endTime": "2025-10-02T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-01T13:33:00.000-03:00",
    "updatedAt": "2025-10-01T14:33:00.000-03:00"
  },
  {
    "id": "res-157",
    "tableId": "table-19",
    "customer": {
      "name": "Ana García Morales",
      "phone": "+54-11-3456-7890",
      "email": "anagarcíamorales@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T12:00:00.000-03:00",
    "endTime": "2025-10-24T14:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T20:22:00.000-03:00",
    "updatedAt": "2025-10-24T21:22:00.000-03:00"
  },
  {
    "id": "res-158",
    "tableId": "table-17",
    "customer": {
      "name": "María Rodríguez Molina",
      "phone": "+54-11-9999-0000",
      "email": "maríarodríguezmolina@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T01:30:00.000-03:00",
    "endTime": "2025-10-03T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-02T16:19:00.000-03:00",
    "updatedAt": "2025-10-02T16:19:00.000-03:00"
  },
  {
    "id": "res-159",
    "tableId": "table-13",
    "customer": {
      "name": "Pablo Delgado Martín",
      "phone": "+54-11-7777-8888",
      "email": "pablodelgadomartín@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-16T18:30:00.000-03:00",
    "endTime": "2025-10-16T20:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-16T15:24:00.000-03:00",
    "updatedAt": "2025-10-16T19:24:00.000-03:00"
  },
  {
    "id": "res-160",
    "tableId": "table-28",
    "customer": {
      "name": "Natalia Ortega Herrera",
      "phone": "+54-11-9999-0000",
      "email": "nataliaortegaherrera@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T23:30:00.000-03:00",
    "endTime": "2025-10-25T02:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T19:19:00.000-03:00",
    "updatedAt": "2025-10-24T19:19:00.000-03:00"
  },
  {
    "id": "res-161",
    "tableId": "table-17",
    "customer": {
      "name": "Roberto Herrera Cabrera",
      "phone": "+54-11-6789-0123",
      "email": "robertoherreracabrera@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-08T21:30:00.000-03:00",
    "endTime": "2025-10-08T22:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-08T19:14:00.000-03:00",
    "updatedAt": "2025-10-08T20:14:00.000-03:00"
  },
  {
    "id": "res-162",
    "tableId": "table-1",
    "customer": {
      "name": "Claudia Medina Cabrera",
      "phone": "+54-11-5656-7878",
      "email": "claudiamedinacabrera@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-02T20:00:00.000-03:00",
    "endTime": "2025-10-02T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-02T22:54:00.000-03:00",
    "updatedAt": "2025-10-02T22:54:00.000-03:00"
  },
  {
    "id": "res-163",
    "tableId": "table-20",
    "customer": {
      "name": "María Rodríguez Navarro",
      "phone": "+54-11-3333-4444",
      "email": "maríarodrígueznavarro@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-17T19:30:00.000-03:00",
    "endTime": "2025-10-17T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-17T17:42:00.000-03:00",
    "updatedAt": "2025-10-17T18:42:00.000-03:00"
  },
  {
    "id": "res-164",
    "tableId": "table-11",
    "customer": {
      "name": "Raquel Vargas Delgado",
      "phone": "+54-11-6789-0123",
      "email": "raquelvargasdelgado@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-26T21:00:00.000-03:00",
    "endTime": "2025-10-27T00:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-26T19:58:00.000-03:00",
    "updatedAt": "2025-10-26T21:58:00.000-03:00"
  },
  {
    "id": "res-165",
    "tableId": "table-29",
    "customer": {
      "name": "Lucía Morales Jiménez",
      "phone": "+54-11-0123-4567",
      "email": "lucíamoralesjiménez@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T17:30:00.000-03:00",
    "endTime": "2025-10-10T19:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-10T21:01:00.000-03:00",
    "updatedAt": "2025-10-11T00:01:00.000-03:00"
  },
  {
    "id": "res-166",
    "tableId": "table-1",
    "customer": {
      "name": "Javier Torres Peña",
      "phone": "+54-11-5656-7878",
      "email": "javiertorrespeña@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-28T12:00:00.000-03:00",
    "endTime": "2025-10-28T15:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-28T21:16:00.000-03:00",
    "updatedAt": "2025-10-28T23:16:00.000-03:00"
  },
  {
    "id": "res-167",
    "tableId": "table-24",
    "customer": {
      "name": "Natalia Ortega Díaz",
      "phone": "+54-11-6767-8989",
      "email": "nataliaortegadíaz@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T00:00:00.000-03:00",
    "endTime": "2025-10-19T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-18T22:27:00.000-03:00",
    "updatedAt": "2025-10-18T22:27:00.000-03:00"
  },
  {
    "id": "res-168",
    "tableId": "table-5",
    "customer": {
      "name": "Sandra Vega Reyes",
      "phone": "+54-11-7890-1234",
      "email": "sandravegareyes@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-20T10:30:00.000-03:00",
    "endTime": "2025-10-20T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-20T14:35:00.000-03:00",
    "updatedAt": "2025-10-20T17:35:00.000-03:00"
  },
  {
    "id": "res-169",
    "tableId": "table-9",
    "customer": {
      "name": "Carmen Pérez López",
      "phone": "+54-11-7890-1234",
      "email": "carmenpérezlópez@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-06T16:00:00.000-03:00",
    "endTime": "2025-10-06T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-06T22:51:00.000-03:00",
    "updatedAt": "2025-10-06T22:51:00.000-03:00"
  },
  {
    "id": "res-170",
    "tableId": "table-20",
    "customer": {
      "name": "Álvaro Serrano García",
      "phone": "+54-11-0123-4567",
      "email": "álvaroserranogarcía@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T19:30:00.000-03:00",
    "endTime": "2025-10-24T20:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T11:04:00.000-03:00",
    "updatedAt": "2025-10-24T13:04:00.000-03:00"
  },
  {
    "id": "res-171",
    "tableId": "table-27",
    "customer": {
      "name": "Patricia Navarro Ortega",
      "phone": "+54-11-1111-2222",
      "email": "patricianavarroortega@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T10:30:00.000-03:00",
    "endTime": "2025-10-11T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-11T20:28:00.000-03:00",
    "updatedAt": "2025-10-11T20:28:00.000-03:00"
  },
  {
    "id": "res-172",
    "tableId": "table-13",
    "customer": {
      "name": "Hugo Aguilar Guerrero",
      "phone": "+54-11-7777-8888",
      "email": "hugoaguilarguerrero@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T14:00:00.000-03:00",
    "endTime": "2025-10-22T17:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-22T15:34:00.000-03:00",
    "updatedAt": "2025-10-22T15:34:00.000-03:00"
  },
  {
    "id": "res-173",
    "tableId": "table-15",
    "customer": {
      "name": "Valeria Silva García",
      "phone": "+54-11-2345-6789",
      "email": "valeriasilvagarcía@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T20:00:00.000-03:00",
    "endTime": "2025-10-18T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-18T20:11:00.000-03:00",
    "updatedAt": "2025-10-18T23:11:00.000-03:00"
  },
  {
    "id": "res-174",
    "tableId": "table-5",
    "customer": {
      "name": "Sergio Peña Fuentes",
      "phone": "+54-11-0123-4567",
      "email": "sergiopeñafuentes@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-15T10:00:00.000-03:00",
    "endTime": "2025-10-15T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-15T21:26:00.000-03:00",
    "updatedAt": "2025-10-16T00:26:00.000-03:00"
  },
  {
    "id": "res-175",
    "tableId": "table-12",
    "customer": {
      "name": "Daniel Campos Ruiz",
      "phone": "+54-11-7890-1234",
      "email": "danielcamposruiz@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-29T22:30:00.000-03:00",
    "endTime": "2025-10-29T23:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-29T20:22:00.000-03:00",
    "updatedAt": "2025-10-29T20:22:00.000-03:00"
  },
  {
    "id": "res-176",
    "tableId": "table-18",
    "customer": {
      "name": "Fernando Ramos Romero",
      "phone": "+54-11-9012-3456",
      "email": "fernandoramosromero@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-03T17:30:00.000-03:00",
    "endTime": "2025-10-03T19:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-03T20:32:00.000-03:00",
    "updatedAt": "2025-10-03T20:32:00.000-03:00"
  },
  {
    "id": "res-177",
    "tableId": "table-26",
    "customer": {
      "name": "Javier Torres Delgado",
      "phone": "+54-11-0123-4567",
      "email": "javiertorresdelgado@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-09T15:00:00.000-03:00",
    "endTime": "2025-10-09T16:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-09T11:55:00.000-03:00",
    "updatedAt": "2025-10-09T11:55:00.000-03:00"
  },
  {
    "id": "res-178",
    "tableId": "table-21",
    "customer": {
      "name": "Daniel Campos Romero",
      "phone": "+54-11-5678-9012",
      "email": "danielcamposromero@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T11:00:00.000-03:00",
    "endTime": "2025-10-22T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-22T19:23:00.000-03:00",
    "updatedAt": "2025-10-22T19:23:00.000-03:00"
  },
  {
    "id": "res-179",
    "tableId": "table-23",
    "customer": {
      "name": "Laura Sánchez Vega",
      "phone": "+54-11-1234-5678",
      "email": "laurasánchezvega@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-05T01:30:00.000-03:00",
    "endTime": "2025-10-05T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-04T11:05:00.000-03:00",
    "updatedAt": "2025-10-04T11:05:00.000-03:00"
  },
  {
    "id": "res-180",
    "tableId": "table-5",
    "customer": {
      "name": "Natalia Ortega Ortega",
      "phone": "+54-11-3333-4444",
      "email": "nataliaortegaortega@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-15T19:30:00.000-03:00",
    "endTime": "2025-10-15T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-15T14:16:00.000-03:00",
    "updatedAt": "2025-10-15T14:16:00.000-03:00"
  },
  {
    "id": "res-181",
    "tableId": "table-11",
    "customer": {
      "name": "Laura Sánchez Castro",
      "phone": "+54-11-3456-7890",
      "email": "laurasánchezcastro@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T01:00:00.000-03:00",
    "endTime": "2025-10-23T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-22T13:26:00.000-03:00",
    "updatedAt": "2025-10-22T13:26:00.000-03:00"
  },
  {
    "id": "res-182",
    "tableId": "table-17",
    "customer": {
      "name": "Álvaro Serrano García",
      "phone": "+54-11-7890-1234",
      "email": "álvaroserranogarcía@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-23T01:00:00.000-03:00",
    "endTime": "2025-10-23T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-22T12:19:00.000-03:00",
    "updatedAt": "2025-10-22T13:19:00.000-03:00"
  },
  {
    "id": "res-183",
    "tableId": "table-4",
    "customer": {
      "name": "Sofia Reyes González",
      "phone": "+54-11-7890-1234",
      "email": "sofiareyesgonzález@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-16T21:30:00.000-03:00",
    "endTime": "2025-10-16T23:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-16T14:57:00.000-03:00",
    "updatedAt": "2025-10-16T17:57:00.000-03:00"
  },
  {
    "id": "res-184",
    "tableId": "table-26",
    "customer": {
      "name": "Andrea Mendoza Díaz",
      "phone": "+54-11-5555-6666",
      "email": "andreamendozadíaz@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-23T13:00:00.000-03:00",
    "endTime": "2025-10-23T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T17:32:00.000-03:00",
    "updatedAt": "2025-10-23T17:32:00.000-03:00"
  },
  {
    "id": "res-185",
    "tableId": "table-28",
    "customer": {
      "name": "Daniel Campos Ortega",
      "phone": "+54-11-9999-0000",
      "email": "danielcamposortega@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-05T20:00:00.000-03:00",
    "endTime": "2025-10-05T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-05T19:16:00.000-03:00",
    "updatedAt": "2025-10-05T19:16:00.000-03:00"
  },
  {
    "id": "res-186",
    "tableId": "table-18",
    "customer": {
      "name": "Patricia Navarro Jiménez",
      "phone": "+54-11-6789-0123",
      "email": "patricianavarrojiménez@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-01T20:30:00.000-03:00",
    "endTime": "2025-10-01T23:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-01T21:40:00.000-03:00",
    "updatedAt": "2025-10-01T21:40:00.000-03:00"
  },
  {
    "id": "res-187",
    "tableId": "table-2",
    "customer": {
      "name": "Camila Espinoza Herrera",
      "phone": "+54-11-2345-6789",
      "email": "camilaespinozaherrera@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T21:00:00.000-03:00",
    "endTime": "2025-10-11T23:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-11T17:20:00.000-03:00",
    "updatedAt": "2025-10-11T19:20:00.000-03:00"
  },
  {
    "id": "res-188",
    "tableId": "table-26",
    "customer": {
      "name": "Carmen Pérez Romero",
      "phone": "+54-11-4567-8901",
      "email": "carmenpérezromero@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T23:30:00.000-03:00",
    "endTime": "2025-10-20T01:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-19T17:22:00.000-03:00",
    "updatedAt": "2025-10-19T21:22:00.000-03:00"
  },
  {
    "id": "res-189",
    "tableId": "table-16",
    "customer": {
      "name": "Javier Torres Herrera",
      "phone": "+54-11-1313-4545",
      "email": "javiertorresherrera@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-11T17:00:00.000-03:00",
    "endTime": "2025-10-11T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-11T13:26:00.000-03:00",
    "updatedAt": "2025-10-11T14:26:00.000-03:00"
  },
  {
    "id": "res-190",
    "tableId": "table-30",
    "customer": {
      "name": "Raquel Vargas Serrano",
      "phone": "+54-11-1212-3434",
      "email": "raquelvargasserrano@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-17T10:00:00.000-03:00",
    "endTime": "2025-10-17T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-17T21:10:00.000-03:00",
    "updatedAt": "2025-10-17T21:10:00.000-03:00"
  },
  {
    "id": "res-191",
    "tableId": "table-11",
    "customer": {
      "name": "Sofia Reyes Rodríguez",
      "phone": "+54-11-6767-8989",
      "email": "sofiareyesrodríguez@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-16T22:00:00.000-03:00",
    "endTime": "2025-10-16T23:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-16T12:48:00.000-03:00",
    "updatedAt": "2025-10-16T12:48:00.000-03:00"
  },
  {
    "id": "res-192",
    "tableId": "table-4",
    "customer": {
      "name": "Carlos López Herrera",
      "phone": "+54-11-5678-9012",
      "email": "carloslópezherrera@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T19:30:00.000-03:00",
    "endTime": "2025-10-04T20:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-04T16:18:00.000-03:00",
    "updatedAt": "2025-10-04T20:18:00.000-03:00"
  },
  {
    "id": "res-193",
    "tableId": "table-29",
    "customer": {
      "name": "Elena Moreno Cabrera",
      "phone": "+54-11-5555-6666",
      "email": "elenamorenocabrera@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-19T20:00:00.000-03:00",
    "endTime": "2025-10-19T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T18:02:00.000-03:00",
    "updatedAt": "2025-10-19T18:02:00.000-03:00"
  },
  {
    "id": "res-194",
    "tableId": "table-28",
    "customer": {
      "name": "Pablo Delgado Vargas",
      "phone": "+54-11-0123-4567",
      "email": "pablodelgadovargas@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-27T17:30:00.000-03:00",
    "endTime": "2025-10-27T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-27T15:05:00.000-03:00",
    "updatedAt": "2025-10-27T16:05:00.000-03:00"
  },
  {
    "id": "res-195",
    "tableId": "table-6",
    "customer": {
      "name": "Lucía Morales Flores",
      "phone": "+54-11-1313-4545",
      "email": "lucíamoralesflores@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-04T17:30:00.000-03:00",
    "endTime": "2025-10-04T19:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-04T22:00:00.000-03:00",
    "updatedAt": "2025-10-04T22:00:00.000-03:00"
  },
  {
    "id": "res-196",
    "tableId": "table-2",
    "customer": {
      "name": "Pablo Delgado Flores",
      "phone": "+54-11-1234-5678",
      "email": "pablodelgadoflores@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T01:00:00.000-03:00",
    "endTime": "2025-10-26T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-25T12:04:00.000-03:00",
    "updatedAt": "2025-10-25T12:04:00.000-03:00"
  },
  {
    "id": "res-197",
    "tableId": "table-8",
    "customer": {
      "name": "Natalia Ortega González",
      "phone": "+54-11-8901-2345",
      "email": "nataliaortegagonzález@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-14T01:00:00.000-03:00",
    "endTime": "2025-10-14T02:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-13T22:22:00.000-03:00",
    "updatedAt": "2025-10-13T22:22:00.000-03:00"
  },
  {
    "id": "res-198",
    "tableId": "table-7",
    "customer": {
      "name": "Nicolás Fuentes Jiménez",
      "phone": "+54-11-9999-0000",
      "email": "nicolásfuentesjiménez@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-21T14:30:00.000-03:00",
    "endTime": "2025-10-21T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-21T19:13:00.000-03:00",
    "updatedAt": "2025-10-21T21:13:00.000-03:00"
  },
  {
    "id": "res-199",
    "tableId": "table-9",
    "customer": {
      "name": "Patricia Navarro Vega",
      "phone": "+54-11-1234-5678",
      "email": "patricianavarrovega@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T15:00:00.000-03:00",
    "endTime": "2025-10-23T18:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-23T22:27:00.000-03:00",
    "updatedAt": "2025-10-24T01:27:00.000-03:00"
  },
  {
    "id": "res-200",
    "tableId": "table-10",
    "customer": {
      "name": "Antonio Ruiz López",
      "phone": "+54-11-9090-1212",
      "email": "antonioruizlópez@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-04T01:30:00.000-03:00",
    "endTime": "2025-10-04T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-03T20:37:00.000-03:00",
    "updatedAt": "2025-10-03T22:37:00.000-03:00"
  },
  {
    "id": "res-201",
    "tableId": "table-20",
    "customer": {
      "name": "Raquel Vargas González",
      "phone": "+54-11-1212-3434",
      "email": "raquelvargasgonzález@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-15T13:00:00.000-03:00",
    "endTime": "2025-10-15T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-15T18:40:00.000-03:00",
    "updatedAt": "2025-10-15T18:40:00.000-03:00"
  },
  {
    "id": "res-202",
    "tableId": "table-28",
    "customer": {
      "name": "Beatriz Guerrero Cabrera",
      "phone": "+54-11-2345-6789",
      "email": "beatrizguerrerocabrera@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-03T14:00:00.000-03:00",
    "endTime": "2025-10-03T17:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-03T12:52:00.000-03:00",
    "updatedAt": "2025-10-03T12:52:00.000-03:00"
  },
  {
    "id": "res-203",
    "tableId": "table-8",
    "customer": {
      "name": "Andrea Mendoza Martín",
      "phone": "+54-11-6789-0123",
      "email": "andreamendozamartín@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-25T11:00:00.000-03:00",
    "endTime": "2025-10-25T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-25T11:22:00.000-03:00",
    "updatedAt": "2025-10-25T14:22:00.000-03:00"
  },
  {
    "id": "res-204",
    "tableId": "table-7",
    "customer": {
      "name": "Patricia Navarro Martín",
      "phone": "+54-11-6767-8989",
      "email": "patricianavarromartín@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T12:00:00.000-03:00",
    "endTime": "2025-10-19T13:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-19T21:32:00.000-03:00",
    "updatedAt": "2025-10-19T21:32:00.000-03:00"
  },
  {
    "id": "res-205",
    "tableId": "table-22",
    "customer": {
      "name": "Claudia Medina Martín",
      "phone": "+54-11-3456-7890",
      "email": "claudiamedinamartín@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-16T16:30:00.000-03:00",
    "endTime": "2025-10-16T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-16T15:59:00.000-03:00",
    "updatedAt": "2025-10-16T15:59:00.000-03:00"
  },
  {
    "id": "res-206",
    "tableId": "table-24",
    "customer": {
      "name": "Sergio Peña Peña",
      "phone": "+54-11-0123-4567",
      "email": "sergiopeñapeña@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T10:00:00.000-03:00",
    "endTime": "2025-10-18T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-18T12:04:00.000-03:00",
    "updatedAt": "2025-10-18T12:04:00.000-03:00"
  },
  {
    "id": "res-207",
    "tableId": "table-17",
    "customer": {
      "name": "Teresa Molina Fuentes",
      "phone": "+54-11-6767-8989",
      "email": "teresamolinafuentes@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-11T18:00:00.000-03:00",
    "endTime": "2025-10-11T21:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-11T22:29:00.000-03:00",
    "updatedAt": "2025-10-11T22:29:00.000-03:00"
  },
  {
    "id": "res-208",
    "tableId": "table-18",
    "customer": {
      "name": "Alejandro Castro Flores",
      "phone": "+54-11-5555-6666",
      "email": "alejandrocastroflores@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-08T23:00:00.000-03:00",
    "endTime": "2025-10-09T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-08T21:36:00.000-03:00",
    "updatedAt": "2025-10-08T22:36:00.000-03:00"
  },
  {
    "id": "res-209",
    "tableId": "table-23",
    "customer": {
      "name": "Lucía Morales Reyes",
      "phone": "+54-11-9090-1212",
      "email": "lucíamoralesreyes@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T12:30:00.000-03:00",
    "endTime": "2025-10-24T15:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T22:25:00.000-03:00",
    "updatedAt": "2025-10-25T02:25:00.000-03:00"
  },
  {
    "id": "res-210",
    "tableId": "table-9",
    "customer": {
      "name": "Lucía Morales Vargas",
      "phone": "+54-11-1212-3434",
      "email": "lucíamoralesvargas@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T10:30:00.000-03:00",
    "endTime": "2025-10-24T11:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T22:46:00.000-03:00",
    "updatedAt": "2025-10-25T02:46:00.000-03:00"
  },
  {
    "id": "res-211",
    "tableId": "table-10",
    "customer": {
      "name": "Roberto Herrera López",
      "phone": "+54-11-3456-7890",
      "email": "robertoherreralópez@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-17T21:30:00.000-03:00",
    "endTime": "2025-10-18T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-17T22:37:00.000-03:00",
    "updatedAt": "2025-10-17T22:37:00.000-03:00"
  },
  {
    "id": "res-212",
    "tableId": "table-10",
    "customer": {
      "name": "David Jiménez Morales",
      "phone": "+54-11-7890-1234",
      "email": "davidjiménezmorales@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T20:00:00.000-03:00",
    "endTime": "2025-10-11T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-11T12:19:00.000-03:00",
    "updatedAt": "2025-10-11T14:19:00.000-03:00"
  },
  {
    "id": "res-213",
    "tableId": "table-3",
    "customer": {
      "name": "Antonio Ruiz Moreno",
      "phone": "+54-11-5555-6666",
      "email": "antonioruizmoreno@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-08T23:30:00.000-03:00",
    "endTime": "2025-10-09T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-08T21:46:00.000-03:00",
    "updatedAt": "2025-10-09T01:46:00.000-03:00"
  },
  {
    "id": "res-214",
    "tableId": "table-3",
    "customer": {
      "name": "Ana García Vega",
      "phone": "+54-11-2345-6789",
      "email": "anagarcíavega@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T19:30:00.000-03:00",
    "endTime": "2025-10-18T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-18T15:18:00.000-03:00",
    "updatedAt": "2025-10-18T15:18:00.000-03:00"
  },
  {
    "id": "res-215",
    "tableId": "table-7",
    "customer": {
      "name": "Sandra Vega Reyes",
      "phone": "+54-11-5656-7878",
      "email": "sandravegareyes@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T14:30:00.000-03:00",
    "endTime": "2025-10-17T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-17T12:04:00.000-03:00",
    "updatedAt": "2025-10-17T12:04:00.000-03:00"
  },
  {
    "id": "res-216",
    "tableId": "table-13",
    "customer": {
      "name": "Pablo Delgado Pérez",
      "phone": "+54-11-2345-6789",
      "email": "pablodelgadopérez@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-13T00:00:00.000-03:00",
    "endTime": "2025-10-13T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-12T20:35:00.000-03:00",
    "updatedAt": "2025-10-12T20:35:00.000-03:00"
  },
  {
    "id": "res-217",
    "tableId": "table-2",
    "customer": {
      "name": "María Rodríguez Delgado",
      "phone": "+54-11-1111-2222",
      "email": "maríarodríguezdelgado@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-27T15:30:00.000-03:00",
    "endTime": "2025-10-27T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-27T14:46:00.000-03:00",
    "updatedAt": "2025-10-27T14:46:00.000-03:00"
  },
  {
    "id": "res-218",
    "tableId": "table-10",
    "customer": {
      "name": "Javier Torres Vargas",
      "phone": "+54-11-0123-4567",
      "email": "javiertorresvargas@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-14T00:30:00.000-03:00",
    "endTime": "2025-10-14T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-13T12:59:00.000-03:00",
    "updatedAt": "2025-10-13T16:59:00.000-03:00"
  },
  {
    "id": "res-219",
    "tableId": "table-1",
    "customer": {
      "name": "Lucía Morales Cabrera",
      "phone": "+54-11-7890-1234",
      "email": "lucíamoralescabrera@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-11T20:00:00.000-03:00",
    "endTime": "2025-10-11T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-11T18:39:00.000-03:00",
    "updatedAt": "2025-10-11T18:39:00.000-03:00"
  },
  {
    "id": "res-220",
    "tableId": "table-17",
    "customer": {
      "name": "Sergio Peña Serrano",
      "phone": "+54-11-2345-6789",
      "email": "sergiopeñaserrano@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-11T14:30:00.000-03:00",
    "endTime": "2025-10-11T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-11T12:11:00.000-03:00",
    "updatedAt": "2025-10-11T12:11:00.000-03:00"
  },
  {
    "id": "res-221",
    "tableId": "table-25",
    "customer": {
      "name": "Hugo Aguilar Torres",
      "phone": "+54-11-9090-1212",
      "email": "hugoaguilartorres@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-04T20:00:00.000-03:00",
    "endTime": "2025-10-04T22:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-04T14:26:00.000-03:00",
    "updatedAt": "2025-10-04T14:26:00.000-03:00"
  },
  {
    "id": "res-222",
    "tableId": "table-3",
    "customer": {
      "name": "Nicolás Fuentes Vega",
      "phone": "+54-11-4567-8901",
      "email": "nicolásfuentesvega@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T21:30:00.000-03:00",
    "endTime": "2025-10-22T23:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-22T13:56:00.000-03:00",
    "updatedAt": "2025-10-22T13:56:00.000-03:00"
  },
  {
    "id": "res-223",
    "tableId": "table-12",
    "customer": {
      "name": "Claudia Medina García",
      "phone": "+54-11-5656-7878",
      "email": "claudiamedinagarcía@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-29T12:30:00.000-03:00",
    "endTime": "2025-10-29T14:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-29T19:58:00.000-03:00",
    "updatedAt": "2025-10-29T21:58:00.000-03:00"
  },
  {
    "id": "res-224",
    "tableId": "table-5",
    "customer": {
      "name": "Gabriel Rojas Aguilar",
      "phone": "+54-11-9999-0000",
      "email": "gabrielrojasaguilar@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-11T10:30:00.000-03:00",
    "endTime": "2025-10-11T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-11T17:59:00.000-03:00",
    "updatedAt": "2025-10-11T17:59:00.000-03:00"
  },
  {
    "id": "res-225",
    "tableId": "table-7",
    "customer": {
      "name": "Hugo Aguilar Jiménez",
      "phone": "+54-11-6789-0123",
      "email": "hugoaguilarjiménez@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-04T10:30:00.000-03:00",
    "endTime": "2025-10-04T13:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-04T14:12:00.000-03:00",
    "updatedAt": "2025-10-04T14:12:00.000-03:00"
  },
  {
    "id": "res-226",
    "tableId": "table-7",
    "customer": {
      "name": "Beatriz Guerrero Herrera",
      "phone": "+54-11-5656-7878",
      "email": "beatrizguerreroherrera@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T01:30:00.000-03:00",
    "endTime": "2025-10-24T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-23T14:25:00.000-03:00",
    "updatedAt": "2025-10-23T14:25:00.000-03:00"
  },
  {
    "id": "res-227",
    "tableId": "table-5",
    "customer": {
      "name": "Carlos López Jiménez",
      "phone": "+54-11-8901-2345",
      "email": "carloslópezjiménez@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T15:00:00.000-03:00",
    "endTime": "2025-10-24T16:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T12:58:00.000-03:00",
    "updatedAt": "2025-10-24T12:58:00.000-03:00"
  },
  {
    "id": "res-228",
    "tableId": "table-20",
    "customer": {
      "name": "Carlos López Jiménez",
      "phone": "+54-11-2345-6789",
      "email": "carloslópezjiménez@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-10T20:00:00.000-03:00",
    "endTime": "2025-10-10T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-10T18:02:00.000-03:00",
    "updatedAt": "2025-10-10T18:02:00.000-03:00"
  },
  {
    "id": "res-229",
    "tableId": "table-6",
    "customer": {
      "name": "Patricia Navarro Vega",
      "phone": "+54-11-9012-3456",
      "email": "patricianavarrovega@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-25T10:00:00.000-03:00",
    "endTime": "2025-10-25T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-25T13:45:00.000-03:00",
    "updatedAt": "2025-10-25T13:45:00.000-03:00"
  },
  {
    "id": "res-230",
    "tableId": "table-27",
    "customer": {
      "name": "Elena Moreno Ortega",
      "phone": "+54-11-6767-8989",
      "email": "elenamorenoortega@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-03T17:30:00.000-03:00",
    "endTime": "2025-10-03T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-03T17:57:00.000-03:00",
    "updatedAt": "2025-10-03T17:57:00.000-03:00"
  },
  {
    "id": "res-231",
    "tableId": "table-20",
    "customer": {
      "name": "Cristina Romero Delgado",
      "phone": "+54-11-6789-0123",
      "email": "cristinaromerodelgado@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-11T17:30:00.000-03:00",
    "endTime": "2025-10-11T18:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-11T21:04:00.000-03:00",
    "updatedAt": "2025-10-11T22:04:00.000-03:00"
  },
  {
    "id": "res-232",
    "tableId": "table-25",
    "customer": {
      "name": "Javier Torres Vargas",
      "phone": "+54-11-6789-0123",
      "email": "javiertorresvargas@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-09T16:00:00.000-03:00",
    "endTime": "2025-10-09T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-09T18:52:00.000-03:00",
    "updatedAt": "2025-10-09T18:52:00.000-03:00"
  },
  {
    "id": "res-233",
    "tableId": "table-28",
    "customer": {
      "name": "Sandra Vega Castro",
      "phone": "+54-11-6789-0123",
      "email": "sandravegacastro@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T17:30:00.000-03:00",
    "endTime": "2025-10-25T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-25T22:20:00.000-03:00",
    "updatedAt": "2025-10-25T22:20:00.000-03:00"
  },
  {
    "id": "res-234",
    "tableId": "table-9",
    "customer": {
      "name": "Alejandro Castro Romero",
      "phone": "+54-11-2345-6789",
      "email": "alejandrocastroromero@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-16T23:00:00.000-03:00",
    "endTime": "2025-10-17T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-16T18:41:00.000-03:00",
    "updatedAt": "2025-10-16T18:41:00.000-03:00"
  },
  {
    "id": "res-235",
    "tableId": "table-6",
    "customer": {
      "name": "Valeria Silva Martínez",
      "phone": "+54-11-5678-9012",
      "email": "valeriasilvamartínez@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-16T13:00:00.000-03:00",
    "endTime": "2025-10-16T16:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-16T22:38:00.000-03:00",
    "updatedAt": "2025-10-16T23:38:00.000-03:00"
  },
  {
    "id": "res-236",
    "tableId": "table-30",
    "customer": {
      "name": "Teresa Molina García",
      "phone": "+54-11-3333-4444",
      "email": "teresamolinagarcía@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T14:00:00.000-03:00",
    "endTime": "2025-10-26T16:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-26T22:15:00.000-03:00",
    "updatedAt": "2025-10-26T22:15:00.000-03:00"
  },
  {
    "id": "res-237",
    "tableId": "table-30",
    "customer": {
      "name": "Alejandro Castro Rodríguez",
      "phone": "+54-11-1111-2222",
      "email": "alejandrocastrorodríguez@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T10:00:00.000-03:00",
    "endTime": "2025-10-22T11:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-22T11:59:00.000-03:00",
    "updatedAt": "2025-10-22T11:59:00.000-03:00"
  },
  {
    "id": "res-238",
    "tableId": "table-21",
    "customer": {
      "name": "Javier Torres Martín",
      "phone": "+54-11-0123-4567",
      "email": "javiertorresmartín@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-28T22:00:00.000-03:00",
    "endTime": "2025-10-29T01:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-28T20:39:00.000-03:00",
    "updatedAt": "2025-10-28T22:39:00.000-03:00"
  },
  {
    "id": "res-239",
    "tableId": "table-3",
    "customer": {
      "name": "Pablo Delgado Ortega",
      "phone": "+54-11-0123-4567",
      "email": "pablodelgadoortega@hotmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-16T12:30:00.000-03:00",
    "endTime": "2025-10-16T15:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-16T12:18:00.000-03:00",
    "updatedAt": "2025-10-16T12:18:00.000-03:00"
  },
  {
    "id": "res-240",
    "tableId": "table-19",
    "customer": {
      "name": "Miguel González Silva",
      "phone": "+54-11-1313-4545",
      "email": "miguelgonzálezsilva@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-06T00:00:00.000-03:00",
    "endTime": "2025-10-06T02:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-05T16:03:00.000-03:00",
    "updatedAt": "2025-10-05T20:03:00.000-03:00"
  },
  {
    "id": "res-241",
    "tableId": "table-29",
    "customer": {
      "name": "Elena Moreno García",
      "phone": "+54-11-7777-8888",
      "email": "elenamorenogarcía@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-10T16:00:00.000-03:00",
    "endTime": "2025-10-10T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-10T16:01:00.000-03:00",
    "updatedAt": "2025-10-10T16:01:00.000-03:00"
  },
  {
    "id": "res-242",
    "tableId": "table-27",
    "customer": {
      "name": "María Rodríguez Rodríguez",
      "phone": "+54-11-5678-9012",
      "email": "maríarodríguezrodríguez@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T17:00:00.000-03:00",
    "endTime": "2025-10-24T18:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T22:08:00.000-03:00",
    "updatedAt": "2025-10-24T22:08:00.000-03:00"
  },
  {
    "id": "res-243",
    "tableId": "table-20",
    "customer": {
      "name": "Alejandro Castro López",
      "phone": "+54-11-4567-8901",
      "email": "alejandrocastrolópez@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-13T20:00:00.000-03:00",
    "endTime": "2025-10-13T23:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-13T19:58:00.000-03:00",
    "updatedAt": "2025-10-13T23:58:00.000-03:00"
  },
  {
    "id": "res-244",
    "tableId": "table-9",
    "customer": {
      "name": "Daniel Campos Serrano",
      "phone": "+54-11-9999-0000",
      "email": "danielcamposserrano@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-01T14:00:00.000-03:00",
    "endTime": "2025-10-01T17:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-01T16:28:00.000-03:00",
    "updatedAt": "2025-10-01T16:28:00.000-03:00"
  },
  {
    "id": "res-245",
    "tableId": "table-5",
    "customer": {
      "name": "Antonio Ruiz Jiménez",
      "phone": "+54-11-3456-7890",
      "email": "antonioruizjiménez@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-16T16:00:00.000-03:00",
    "endTime": "2025-10-16T19:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-16T11:19:00.000-03:00",
    "updatedAt": "2025-10-16T11:19:00.000-03:00"
  },
  {
    "id": "res-246",
    "tableId": "table-14",
    "customer": {
      "name": "Gabriel Rojas Vega",
      "phone": "+54-11-5656-7878",
      "email": "gabrielrojasvega@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T11:00:00.000-03:00",
    "endTime": "2025-10-18T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-18T16:30:00.000-03:00",
    "updatedAt": "2025-10-18T18:30:00.000-03:00"
  },
  {
    "id": "res-247",
    "tableId": "table-18",
    "customer": {
      "name": "Carlos López Torres",
      "phone": "+54-11-0123-4567",
      "email": "carloslópeztorres@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T10:00:00.000-03:00",
    "endTime": "2025-10-19T11:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-19T17:15:00.000-03:00",
    "updatedAt": "2025-10-19T17:15:00.000-03:00"
  },
  {
    "id": "res-248",
    "tableId": "table-12",
    "customer": {
      "name": "Laura Sánchez González",
      "phone": "+54-11-9999-0000",
      "email": "laurasánchezgonzález@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-12T22:00:00.000-03:00",
    "endTime": "2025-10-13T00:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-12T18:18:00.000-03:00",
    "updatedAt": "2025-10-12T18:18:00.000-03:00"
  },
  {
    "id": "res-249",
    "tableId": "table-18",
    "customer": {
      "name": "Ana García Aguilar",
      "phone": "+54-11-8901-2345",
      "email": "anagarcíaaguilar@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T01:30:00.000-03:00",
    "endTime": "2025-10-24T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-23T11:08:00.000-03:00",
    "updatedAt": "2025-10-23T12:08:00.000-03:00"
  },
  {
    "id": "res-250",
    "tableId": "table-15",
    "customer": {
      "name": "Alejandro Castro Medina",
      "phone": "+54-11-1313-4545",
      "email": "alejandrocastromedina@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T16:00:00.000-03:00",
    "endTime": "2025-10-22T17:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-22T18:10:00.000-03:00",
    "updatedAt": "2025-10-22T18:10:00.000-03:00"
  },
  {
    "id": "res-251",
    "tableId": "table-15",
    "customer": {
      "name": "Sebastián Vega Navarro",
      "phone": "+54-11-7890-1234",
      "email": "sebastiánveganavarro@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-09T11:00:00.000-03:00",
    "endTime": "2025-10-09T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-09T19:42:00.000-03:00",
    "updatedAt": "2025-10-09T19:42:00.000-03:00"
  },
  {
    "id": "res-252",
    "tableId": "table-4",
    "customer": {
      "name": "María Rodríguez Torres",
      "phone": "+54-11-3456-7890",
      "email": "maríarodrígueztorres@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-12T10:00:00.000-03:00",
    "endTime": "2025-10-12T11:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-12T21:39:00.000-03:00",
    "updatedAt": "2025-10-12T21:39:00.000-03:00"
  },
  {
    "id": "res-253",
    "tableId": "table-13",
    "customer": {
      "name": "Sofia Reyes Espinoza",
      "phone": "+54-11-6767-8989",
      "email": "sofiareyesespinoza@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-02T16:00:00.000-03:00",
    "endTime": "2025-10-02T19:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-02T20:55:00.000-03:00",
    "updatedAt": "2025-10-02T20:55:00.000-03:00"
  },
  {
    "id": "res-254",
    "tableId": "table-8",
    "customer": {
      "name": "Rubén Herrera Espinoza",
      "phone": "+54-11-6789-0123",
      "email": "rubénherreraespinoza@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T12:30:00.000-03:00",
    "endTime": "2025-10-24T15:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T18:22:00.000-03:00",
    "updatedAt": "2025-10-24T19:22:00.000-03:00"
  },
  {
    "id": "res-255",
    "tableId": "table-12",
    "customer": {
      "name": "Carmen Pérez Molina",
      "phone": "+54-11-6789-0123",
      "email": "carmenpérezmolina@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-25T18:30:00.000-03:00",
    "endTime": "2025-10-25T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-25T19:23:00.000-03:00",
    "updatedAt": "2025-10-25T19:23:00.000-03:00"
  },
  {
    "id": "res-256",
    "tableId": "table-29",
    "customer": {
      "name": "Beatriz Guerrero Sánchez",
      "phone": "+54-11-0123-4567",
      "email": "beatrizguerrerosánchez@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-03T12:30:00.000-03:00",
    "endTime": "2025-10-03T13:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-03T18:40:00.000-03:00",
    "updatedAt": "2025-10-03T22:40:00.000-03:00"
  },
  {
    "id": "res-257",
    "tableId": "table-23",
    "customer": {
      "name": "Sebastián Vega Herrera",
      "phone": "+54-11-9090-1212",
      "email": "sebastiánvegaherrera@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-02T00:30:00.000-03:00",
    "endTime": "2025-10-02T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-01T15:57:00.000-03:00",
    "updatedAt": "2025-10-01T15:57:00.000-03:00"
  },
  {
    "id": "res-258",
    "tableId": "table-20",
    "customer": {
      "name": "Raquel Vargas Romero",
      "phone": "+54-11-6767-8989",
      "email": "raquelvargasromero@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T19:30:00.000-03:00",
    "endTime": "2025-10-26T21:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-26T12:47:00.000-03:00",
    "updatedAt": "2025-10-26T12:47:00.000-03:00"
  },
  {
    "id": "res-259",
    "tableId": "table-27",
    "customer": {
      "name": "Álvaro Serrano Fuentes",
      "phone": "+54-11-3456-7890",
      "email": "álvaroserranofuentes@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-06T18:00:00.000-03:00",
    "endTime": "2025-10-06T19:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-06T20:28:00.000-03:00",
    "updatedAt": "2025-10-06T21:28:00.000-03:00"
  },
  {
    "id": "res-260",
    "tableId": "table-25",
    "customer": {
      "name": "Lucía Morales Rodríguez",
      "phone": "+54-11-8901-2345",
      "email": "lucíamoralesrodríguez@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-26T17:30:00.000-03:00",
    "endTime": "2025-10-26T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-26T13:24:00.000-03:00",
    "updatedAt": "2025-10-26T13:24:00.000-03:00"
  },
  {
    "id": "res-261",
    "tableId": "table-29",
    "customer": {
      "name": "Carmen Pérez Silva",
      "phone": "+54-11-4567-8901",
      "email": "carmenpérezsilva@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T00:30:00.000-03:00",
    "endTime": "2025-10-19T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-18T13:21:00.000-03:00",
    "updatedAt": "2025-10-18T13:21:00.000-03:00"
  },
  {
    "id": "res-262",
    "tableId": "table-18",
    "customer": {
      "name": "Rubén Herrera Morales",
      "phone": "+54-11-3456-7890",
      "email": "rubénherreramorales@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-09T16:30:00.000-03:00",
    "endTime": "2025-10-09T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-09T13:49:00.000-03:00",
    "updatedAt": "2025-10-09T13:49:00.000-03:00"
  },
  {
    "id": "res-263",
    "tableId": "table-9",
    "customer": {
      "name": "Claudia Medina Vega",
      "phone": "+54-11-1111-2222",
      "email": "claudiamedinavega@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T16:00:00.000-03:00",
    "endTime": "2025-10-24T19:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-24T19:02:00.000-03:00",
    "updatedAt": "2025-10-24T19:02:00.000-03:00"
  },
  {
    "id": "res-264",
    "tableId": "table-26",
    "customer": {
      "name": "Laura Sánchez López",
      "phone": "+54-11-8901-2345",
      "email": "laurasánchezlópez@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-03T14:30:00.000-03:00",
    "endTime": "2025-10-03T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-03T19:17:00.000-03:00",
    "updatedAt": "2025-10-03T19:17:00.000-03:00"
  },
  {
    "id": "res-265",
    "tableId": "table-1",
    "customer": {
      "name": "Nicolás Fuentes Mendoza",
      "phone": "+54-11-0123-4567",
      "email": "nicolásfuentesmendoza@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-08T12:30:00.000-03:00",
    "endTime": "2025-10-08T14:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-08T13:07:00.000-03:00",
    "updatedAt": "2025-10-08T16:07:00.000-03:00"
  },
  {
    "id": "res-266",
    "tableId": "table-11",
    "customer": {
      "name": "Javier Torres López",
      "phone": "+54-11-1111-2222",
      "email": "javiertorreslópez@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-12T15:30:00.000-03:00",
    "endTime": "2025-10-12T18:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-12T18:20:00.000-03:00",
    "updatedAt": "2025-10-12T18:20:00.000-03:00"
  },
  {
    "id": "res-267",
    "tableId": "table-28",
    "customer": {
      "name": "Rubén Herrera Reyes",
      "phone": "+54-11-2345-6789",
      "email": "rubénherrerareyes@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-02T23:00:00.000-03:00",
    "endTime": "2025-10-03T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-02T18:08:00.000-03:00",
    "updatedAt": "2025-10-02T18:08:00.000-03:00"
  },
  {
    "id": "res-268",
    "tableId": "table-20",
    "customer": {
      "name": "Antonio Ruiz Reyes",
      "phone": "+54-11-0123-4567",
      "email": "antonioruizreyes@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-08T10:30:00.000-03:00",
    "endTime": "2025-10-08T12:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-08T22:58:00.000-03:00",
    "updatedAt": "2025-10-08T22:58:00.000-03:00"
  },
  {
    "id": "res-269",
    "tableId": "table-23",
    "customer": {
      "name": "Alejandro Castro Silva",
      "phone": "+54-11-1234-5678",
      "email": "alejandrocastrosilva@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-02T01:30:00.000-03:00",
    "endTime": "2025-10-02T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-01T21:25:00.000-03:00",
    "updatedAt": "2025-10-01T21:25:00.000-03:00"
  },
  {
    "id": "res-270",
    "tableId": "table-6",
    "customer": {
      "name": "Daniel Campos Ortega",
      "phone": "+54-11-9090-1212",
      "email": "danielcamposortega@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-28T00:00:00.000-03:00",
    "endTime": "2025-10-28T01:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-27T19:36:00.000-03:00",
    "updatedAt": "2025-10-27T19:36:00.000-03:00"
  },
  {
    "id": "res-271",
    "tableId": "table-19",
    "customer": {
      "name": "Alejandro Castro Vega",
      "phone": "+54-11-9999-0000",
      "email": "alejandrocastrovega@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-05T14:30:00.000-03:00",
    "endTime": "2025-10-05T16:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-05T21:48:00.000-03:00",
    "updatedAt": "2025-10-05T21:48:00.000-03:00"
  },
  {
    "id": "res-272",
    "tableId": "table-8",
    "customer": {
      "name": "Sandra Vega Espinoza",
      "phone": "+54-11-5678-9012",
      "email": "sandravegaespinoza@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-18T00:30:00.000-03:00",
    "endTime": "2025-10-18T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-17T14:37:00.000-03:00",
    "updatedAt": "2025-10-17T14:37:00.000-03:00"
  },
  {
    "id": "res-273",
    "tableId": "table-5",
    "customer": {
      "name": "Raquel Vargas Castro",
      "phone": "+54-11-9090-1212",
      "email": "raquelvargascastro@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-02T11:00:00.000-03:00",
    "endTime": "2025-10-02T12:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-02T13:50:00.000-03:00",
    "updatedAt": "2025-10-02T14:50:00.000-03:00"
  },
  {
    "id": "res-274",
    "tableId": "table-28",
    "customer": {
      "name": "Adrián Cabrera Díaz",
      "phone": "+54-11-6789-0123",
      "email": "adriáncabreradíaz@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-15T12:00:00.000-03:00",
    "endTime": "2025-10-15T15:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-15T18:22:00.000-03:00",
    "updatedAt": "2025-10-15T19:22:00.000-03:00"
  },
  {
    "id": "res-275",
    "tableId": "table-19",
    "customer": {
      "name": "Sandra Vega Flores",
      "phone": "+54-11-1212-3434",
      "email": "sandravegaflores@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-25T20:00:00.000-03:00",
    "endTime": "2025-10-25T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-25T12:08:00.000-03:00",
    "updatedAt": "2025-10-25T12:08:00.000-03:00"
  },
  {
    "id": "res-276",
    "tableId": "table-27",
    "customer": {
      "name": "Camila Espinoza Rojas",
      "phone": "+54-11-5678-9012",
      "email": "camilaespinozarojas@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T14:30:00.000-03:00",
    "endTime": "2025-10-18T15:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-18T12:41:00.000-03:00",
    "updatedAt": "2025-10-18T12:41:00.000-03:00"
  },
  {
    "id": "res-277",
    "tableId": "table-27",
    "customer": {
      "name": "Natalia Ortega Guerrero",
      "phone": "+54-11-8901-2345",
      "email": "nataliaortegaguerrero@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-01T13:00:00.000-03:00",
    "endTime": "2025-10-01T15:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-01T15:43:00.000-03:00",
    "updatedAt": "2025-10-01T15:43:00.000-03:00"
  },
  {
    "id": "res-278",
    "tableId": "table-6",
    "customer": {
      "name": "Claudia Medina Jiménez",
      "phone": "+54-11-7777-8888",
      "email": "claudiamedinajiménez@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T10:00:00.000-03:00",
    "endTime": "2025-10-18T13:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-18T13:11:00.000-03:00",
    "updatedAt": "2025-10-18T16:11:00.000-03:00"
  },
  {
    "id": "res-279",
    "tableId": "table-28",
    "customer": {
      "name": "Carmen Pérez Flores",
      "phone": "+54-11-7777-8888",
      "email": "carmenpérezflores@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-04T20:30:00.000-03:00",
    "endTime": "2025-10-04T21:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-04T20:49:00.000-03:00",
    "updatedAt": "2025-10-04T20:49:00.000-03:00"
  },
  {
    "id": "res-280",
    "tableId": "table-9",
    "customer": {
      "name": "Rubén Herrera Navarro",
      "phone": "+54-11-6789-0123",
      "email": "rubénherreranavarro@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T17:00:00.000-03:00",
    "endTime": "2025-10-24T20:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T18:40:00.000-03:00",
    "updatedAt": "2025-10-24T18:40:00.000-03:00"
  },
  {
    "id": "res-281",
    "tableId": "table-13",
    "customer": {
      "name": "Patricia Navarro Mendoza",
      "phone": "+54-11-2345-6789",
      "email": "patricianavarromendoza@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-21T15:30:00.000-03:00",
    "endTime": "2025-10-21T16:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-21T11:45:00.000-03:00",
    "updatedAt": "2025-10-21T12:45:00.000-03:00"
  },
  {
    "id": "res-282",
    "tableId": "table-25",
    "customer": {
      "name": "Patricia Navarro Ortega",
      "phone": "+54-11-3333-4444",
      "email": "patricianavarroortega@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-28T14:30:00.000-03:00",
    "endTime": "2025-10-28T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-28T12:08:00.000-03:00",
    "updatedAt": "2025-10-28T12:08:00.000-03:00"
  },
  {
    "id": "res-283",
    "tableId": "table-2",
    "customer": {
      "name": "Rubén Herrera López",
      "phone": "+54-11-1234-5678",
      "email": "rubénherreralópez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T10:00:00.000-03:00",
    "endTime": "2025-10-24T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T16:12:00.000-03:00",
    "updatedAt": "2025-10-24T16:12:00.000-03:00"
  },
  {
    "id": "res-284",
    "tableId": "table-4",
    "customer": {
      "name": "Lucía Morales Morales",
      "phone": "+54-11-1313-4545",
      "email": "lucíamoralesmorales@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-01T18:00:00.000-03:00",
    "endTime": "2025-10-01T20:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-01T20:56:00.000-03:00",
    "updatedAt": "2025-10-01T20:56:00.000-03:00"
  },
  {
    "id": "res-285",
    "tableId": "table-18",
    "customer": {
      "name": "Raquel Vargas Vega",
      "phone": "+54-11-9090-1212",
      "email": "raquelvargasvega@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-15T21:00:00.000-03:00",
    "endTime": "2025-10-15T22:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-15T15:27:00.000-03:00",
    "updatedAt": "2025-10-15T15:27:00.000-03:00"
  },
  {
    "id": "res-286",
    "tableId": "table-6",
    "customer": {
      "name": "Andrea Mendoza Serrano",
      "phone": "+54-11-5678-9012",
      "email": "andreamendozaserrano@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-28T23:30:00.000-03:00",
    "endTime": "2025-10-29T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-28T15:42:00.000-03:00",
    "updatedAt": "2025-10-28T15:42:00.000-03:00"
  },
  {
    "id": "res-287",
    "tableId": "table-15",
    "customer": {
      "name": "Raquel Vargas López",
      "phone": "+54-11-1234-5678",
      "email": "raquelvargaslópez@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-11T20:00:00.000-03:00",
    "endTime": "2025-10-11T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-11T16:27:00.000-03:00",
    "updatedAt": "2025-10-11T19:27:00.000-03:00"
  },
  {
    "id": "res-288",
    "tableId": "table-13",
    "customer": {
      "name": "Lucía Morales Molina",
      "phone": "+54-11-6789-0123",
      "email": "lucíamoralesmolina@live.com"
    },
    "partySize": 1,
    "startTime": "2025-10-13T00:30:00.000-03:00",
    "endTime": "2025-10-13T02:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-12T15:40:00.000-03:00",
    "updatedAt": "2025-10-12T18:40:00.000-03:00"
  },
  {
    "id": "res-289",
    "tableId": "table-1",
    "customer": {
      "name": "Elena Moreno Reyes",
      "phone": "+54-11-3456-7890",
      "email": "elenamorenoreyes@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-24T13:00:00.000-03:00",
    "endTime": "2025-10-24T14:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T11:29:00.000-03:00",
    "updatedAt": "2025-10-24T14:29:00.000-03:00"
  },
  {
    "id": "res-290",
    "tableId": "table-17",
    "customer": {
      "name": "Carlos López Guerrero",
      "phone": "+54-11-1313-4545",
      "email": "carloslópezguerrero@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-11T23:00:00.000-03:00",
    "endTime": "2025-10-12T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-11T13:58:00.000-03:00",
    "updatedAt": "2025-10-11T13:58:00.000-03:00"
  },
  {
    "id": "res-291",
    "tableId": "table-9",
    "customer": {
      "name": "David Jiménez Delgado",
      "phone": "+54-11-1234-5678",
      "email": "davidjiménezdelgado@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-03T23:00:00.000-03:00",
    "endTime": "2025-10-04T02:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-03T15:23:00.000-03:00",
    "updatedAt": "2025-10-03T15:23:00.000-03:00"
  },
  {
    "id": "res-292",
    "tableId": "table-27",
    "customer": {
      "name": "Raquel Vargas Delgado",
      "phone": "+54-11-7777-8888",
      "email": "raquelvargasdelgado@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-19T18:30:00.000-03:00",
    "endTime": "2025-10-19T21:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-19T22:41:00.000-03:00",
    "updatedAt": "2025-10-19T22:41:00.000-03:00"
  },
  {
    "id": "res-293",
    "tableId": "table-4",
    "customer": {
      "name": "Sebastián Vega Moreno",
      "phone": "+54-11-7890-1234",
      "email": "sebastiánvegamoreno@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T22:00:00.000-03:00",
    "endTime": "2025-10-21T01:00:00.000-03:00",
    "durationMinutes": 180,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-20T19:13:00.000-03:00",
    "updatedAt": "2025-10-20T23:13:00.000-03:00"
  },
  {
    "id": "res-294",
    "tableId": "table-27",
    "customer": {
      "name": "Roberto Herrera Silva",
      "phone": "+54-11-4567-8901",
      "email": "robertoherrerasilva@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T20:00:00.000-03:00",
    "endTime": "2025-10-18T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-18T20:54:00.000-03:00",
    "updatedAt": "2025-10-18T20:54:00.000-03:00"
  },
  {
    "id": "res-295",
    "tableId": "table-9",
    "customer": {
      "name": "Mónica Flores Mendoza",
      "phone": "+54-11-3456-7890",
      "email": "mónicafloresmendoza@yahoo.com"
    },
    "partySize": 1,
    "startTime": "2025-10-05T01:30:00.000-03:00",
    "endTime": "2025-10-05T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-04T18:42:00.000-03:00",
    "updatedAt": "2025-10-04T18:42:00.000-03:00"
  },
  {
    "id": "res-296",
    "tableId": "table-24",
    "customer": {
      "name": "Sofia Reyes Martínez",
      "phone": "+54-11-5656-7878",
      "email": "sofiareyesmartínez@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-12T00:30:00.000-03:00",
    "endTime": "2025-10-12T01:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-11T13:29:00.000-03:00",
    "updatedAt": "2025-10-11T16:29:00.000-03:00"
  },
  {
    "id": "res-297",
    "tableId": "table-1",
    "customer": {
      "name": "David Jiménez Martínez",
      "phone": "+54-11-1212-3434",
      "email": "davidjiménezmartínez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-17T18:30:00.000-03:00",
    "endTime": "2025-10-17T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-17T16:51:00.000-03:00",
    "updatedAt": "2025-10-17T16:51:00.000-03:00"
  },
  {
    "id": "res-298",
    "tableId": "table-29",
    "customer": {
      "name": "Lucía Morales Torres",
      "phone": "+54-11-1313-4545",
      "email": "lucíamoralestorres@outlook.com"
    },
    "partySize": 1,
    "startTime": "2025-10-18T13:30:00.000-03:00",
    "endTime": "2025-10-18T14:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-18T17:01:00.000-03:00",
    "updatedAt": "2025-10-18T17:01:00.000-03:00"
  },
  {
    "id": "res-299",
    "tableId": "table-7",
    "customer": {
      "name": "Beatriz Guerrero Herrera",
      "phone": "+54-11-3333-4444",
      "email": "beatrizguerreroherrera@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T16:30:00.000-03:00",
    "endTime": "2025-10-19T18:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-19T20:10:00.000-03:00",
    "updatedAt": "2025-10-19T21:10:00.000-03:00"
  },
  {
    "id": "res-300",
    "tableId": "table-17",
    "customer": {
      "name": "Rubén Herrera Vargas",
      "phone": "+54-11-5678-9012",
      "email": "rubénherreravargas@gmail.com"
    },
    "partySize": 1,
    "startTime": "2025-10-10T01:30:00.000-03:00",
    "endTime": "2025-10-10T02:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-09T20:00:00.000-03:00",
    "updatedAt": "2025-10-09T20:00:00.000-03:00"
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
