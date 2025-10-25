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
      "max": 4
    },
    "sortOrder": 3
  },
  {
    "id": "table-4",
    "sectorId": "sector-1",
    "name": "Table 4",
    "capacity": {
      "min": 4,
      "max": 6
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
      "min": 5,
      "max": 8
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
      "max": 5
    },
    "sortOrder": 8
  },
  {
    "id": "table-9",
    "sectorId": "sector-3",
    "name": "Table 9",
    "capacity": {
      "min": 2,
      "max": 3
    },
    "sortOrder": 9
  },
  {
    "id": "table-10",
    "sectorId": "sector-3",
    "name": "Table 10",
    "capacity": {
      "min": 4,
      "max": 5
    },
    "sortOrder": 10
  },
  {
    "id": "table-11",
    "sectorId": "sector-3",
    "name": "Table 11",
    "capacity": {
      "min": 2,
      "max": 4
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
      "min": 3,
      "max": 4
    },
    "sortOrder": 14
  },
  {
    "id": "table-15",
    "sectorId": "sector-4",
    "name": "Table 15",
    "capacity": {
      "min": 2,
      "max": 4
    },
    "sortOrder": 15
  },
  {
    "id": "table-16",
    "sectorId": "sector-5",
    "name": "Table 16",
    "capacity": {
      "min": 3,
      "max": 5
    },
    "sortOrder": 16
  },
  {
    "id": "table-17",
    "sectorId": "sector-5",
    "name": "Table 17",
    "capacity": {
      "min": 5,
      "max": 8
    },
    "sortOrder": 17
  },
  {
    "id": "table-18",
    "sectorId": "sector-5",
    "name": "Table 18",
    "capacity": {
      "min": 5,
      "max": 6
    },
    "sortOrder": 18
  },
  {
    "id": "table-19",
    "sectorId": "sector-6",
    "name": "Table 19",
    "capacity": {
      "min": 3,
      "max": 5
    },
    "sortOrder": 19
  },
  {
    "id": "table-20",
    "sectorId": "sector-6",
    "name": "Table 20",
    "capacity": {
      "min": 4,
      "max": 7
    },
    "sortOrder": 20
  },
  {
    "id": "table-21",
    "sectorId": "sector-6",
    "name": "Table 21",
    "capacity": {
      "min": 4,
      "max": 6
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
      "min": 2,
      "max": 4
    },
    "sortOrder": 23
  },
  {
    "id": "table-24",
    "sectorId": "sector-7",
    "name": "Table 24",
    "capacity": {
      "min": 5,
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
      "max": 5
    },
    "sortOrder": 25
  },
  {
    "id": "table-26",
    "sectorId": "sector-8",
    "name": "Table 26",
    "capacity": {
      "min": 3,
      "max": 4
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
      "min": 3,
      "max": 6
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
      "min": 5,
      "max": 6
    },
    "sortOrder": 30
  }
];

export const seedReservations: Reservation[] = [
  {
    "id": "res-1761426274174-1",
    "tableId": "table-16",
    "customer": {
      "name": "Patricia Navarro Navarro",
      "phone": "+54-11-9999-0000",
      "email": "patricianavarronavarro@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T10:15:00.000-03:00",
    "endTime": "2025-10-19T12:00:00.000-03:00",
    "durationMinutes": 105,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-2",
    "tableId": "table-20",
    "customer": {
      "name": "Mónica Flores Reyes",
      "phone": "+54-11-9012-3456",
      "email": "mónicafloresreyes@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T12:30:00.000-03:00",
    "endTime": "2025-10-22T13:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-3",
    "tableId": "table-1",
    "customer": {
      "name": "Miguel González Díaz",
      "phone": "+54-11-9090-1212",
      "email": "miguelgonzálezdíaz@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T11:15:00.000-03:00",
    "endTime": "2025-10-22T15:15:00.000-03:00",
    "durationMinutes": 240,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-4",
    "tableId": "table-18",
    "customer": {
      "name": "Andrea Mendoza Campos",
      "phone": "+54-11-9012-3456",
      "email": "andreamendozacampos@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T12:30:00.000-03:00",
    "endTime": "2025-10-18T16:15:00.000-03:00",
    "durationMinutes": 225,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-5",
    "tableId": "table-20",
    "customer": {
      "name": "Camila Espinoza Rodríguez",
      "phone": "+54-11-0123-4567",
      "email": "camilaespinozarodríguez@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T22:30:00.000-03:00",
    "endTime": "2025-10-23T00:00:00.000-03:00",
    "durationMinutes": 90,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-6",
    "tableId": "table-23",
    "customer": {
      "name": "Pablo Delgado Ramos",
      "phone": "+54-11-7890-1234",
      "email": "pablodelgadoramos@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T19:45:00.000-03:00",
    "endTime": "2025-10-22T21:30:00.000-03:00",
    "durationMinutes": 105,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-7",
    "tableId": "table-4",
    "customer": {
      "name": "María Rodríguez Molina",
      "phone": "+54-11-9999-0000",
      "email": "maríarodríguezmolina@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T13:30:00.000-03:00",
    "endTime": "2025-10-19T16:45:00.000-03:00",
    "durationMinutes": 195,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-8",
    "tableId": "table-4",
    "customer": {
      "name": "Raquel Vargas Rodríguez",
      "phone": "+54-11-6789-0123",
      "email": "raquelvargasrodríguez@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-21T22:30:00.000-03:00",
    "endTime": "2025-10-22T00:00:00.000-03:00",
    "durationMinutes": 90,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-9",
    "tableId": "table-5",
    "customer": {
      "name": "Patricia Navarro Sánchez",
      "phone": "+54-11-5555-6666",
      "email": "patricianavarrosánchez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T18:30:00.000-03:00",
    "endTime": "2025-10-19T21:15:00.000-03:00",
    "durationMinutes": 165,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-10",
    "tableId": "table-26",
    "customer": {
      "name": "Lucía Morales Sánchez",
      "phone": "+54-11-3333-4444",
      "email": "lucíamoralessánchez@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T23:45:00.000-03:00",
    "endTime": "2025-10-25T00:45:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-11",
    "tableId": "table-19",
    "customer": {
      "name": "Alejandro Castro Ruiz",
      "phone": "+54-11-5656-7878",
      "email": "alejandrocastroruiz@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T16:30:00.000-03:00",
    "endTime": "2025-10-22T17:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-13",
    "tableId": "table-6",
    "customer": {
      "name": "Sandra Vega Peña",
      "phone": "+54-11-7777-8888",
      "email": "sandravegapeña@gmail.com"
    },
    "partySize": 7,
    "startTime": "2025-10-24T23:45:00.000-03:00",
    "endTime": "2025-10-25T00:45:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274174-14",
    "tableId": "table-10",
    "customer": {
      "name": "Mónica Flores Vega",
      "phone": "+54-11-7890-1234",
      "email": "mónicafloresvega@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T16:45:00.000-03:00",
    "endTime": "2025-10-24T18:15:00.000-03:00",
    "durationMinutes": 90,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-15",
    "tableId": "table-8",
    "customer": {
      "name": "Alejandro Castro Mendoza",
      "phone": "+54-11-3333-4444",
      "email": "alejandrocastromendoza@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T13:00:00.000-03:00",
    "endTime": "2025-10-19T14:30:00.000-03:00",
    "durationMinutes": 90,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-16",
    "tableId": "table-10",
    "customer": {
      "name": "Patricia Navarro López",
      "phone": "+54-11-5656-7878",
      "email": "patricianavarrolópez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T12:45:00.000-03:00",
    "endTime": "2025-10-20T15:15:00.000-03:00",
    "durationMinutes": 150,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-17",
    "tableId": "table-28",
    "customer": {
      "name": "Pablo Delgado Jiménez",
      "phone": "+54-11-3456-7890",
      "email": "pablodelgadojiménez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T13:45:00.000-03:00",
    "endTime": "2025-10-20T14:45:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-18",
    "tableId": "table-13",
    "customer": {
      "name": "Antonio Ruiz Ruiz",
      "phone": "+54-11-5656-7878",
      "email": "antonioruizruiz@outlook.com"
    },
    "partySize": 7,
    "startTime": "2025-10-20T16:45:00.000-03:00",
    "endTime": "2025-10-20T20:15:00.000-03:00",
    "durationMinutes": 210,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-19",
    "tableId": "table-11",
    "customer": {
      "name": "Claudia Medina Herrera",
      "phone": "+54-11-1212-3434",
      "email": "claudiamedinaherrera@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T16:45:00.000-03:00",
    "endTime": "2025-10-23T19:45:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-20",
    "tableId": "table-21",
    "customer": {
      "name": "Fernando Ramos Herrera",
      "phone": "+54-11-6789-0123",
      "email": "fernandoramosherrera@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T22:45:00.000-03:00",
    "endTime": "2025-10-23T00:00:00.000-03:00",
    "durationMinutes": 75,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-21",
    "tableId": "table-4",
    "customer": {
      "name": "Carmen Pérez Jiménez",
      "phone": "+54-11-8901-2345",
      "email": "carmenpérezjiménez@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T23:15:00.000-03:00",
    "endTime": "2025-10-25T00:30:00.000-03:00",
    "durationMinutes": 75,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-22",
    "tableId": "table-24",
    "customer": {
      "name": "Gabriel Rojas Rojas",
      "phone": "+54-11-2345-6789",
      "email": "gabrielrojasrojas@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T23:00:00.000-03:00",
    "endTime": "2025-10-19T00:30:00.000-03:00",
    "durationMinutes": 90,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-23",
    "tableId": "table-20",
    "customer": {
      "name": "Valeria Silva Ortega",
      "phone": "+54-11-0123-4567",
      "email": "valeriasilvaortega@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-19T12:15:00.000-03:00",
    "endTime": "2025-10-19T16:15:00.000-03:00",
    "durationMinutes": 240,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-24",
    "tableId": "table-1",
    "customer": {
      "name": "Mónica Flores Rojas",
      "phone": "+54-11-7890-1234",
      "email": "mónicafloresrojas@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T16:45:00.000-03:00",
    "endTime": "2025-10-21T19:15:00.000-03:00",
    "durationMinutes": 150,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-25",
    "tableId": "table-23",
    "customer": {
      "name": "Andrea Mendoza Jiménez",
      "phone": "+54-11-4567-8901",
      "email": "andreamendozajiménez@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T16:30:00.000-03:00",
    "endTime": "2025-10-18T19:45:00.000-03:00",
    "durationMinutes": 195,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-27",
    "tableId": "table-19",
    "customer": {
      "name": "Javier Torres López",
      "phone": "+54-11-6767-8989",
      "email": "javiertorreslópez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T23:45:00.000-03:00",
    "endTime": "2025-10-23T01:00:00.000-03:00",
    "durationMinutes": 75,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-28",
    "tableId": "table-18",
    "customer": {
      "name": "Rubén Herrera Peña",
      "phone": "+54-11-4567-8901",
      "email": "rubénherrerapeña@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T15:15:00.000-03:00",
    "endTime": "2025-10-22T19:15:00.000-03:00",
    "durationMinutes": 240,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-30",
    "tableId": "table-28",
    "customer": {
      "name": "Alejandro Castro Romero",
      "phone": "+54-11-3333-4444",
      "email": "alejandrocastroromero@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T17:00:00.000-03:00",
    "endTime": "2025-10-21T19:15:00.000-03:00",
    "durationMinutes": 135,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-34",
    "tableId": "table-29",
    "customer": {
      "name": "Cristina Romero Campos",
      "phone": "+54-11-2345-6789",
      "email": "cristinaromerocampos@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T22:30:00.000-03:00",
    "endTime": "2025-10-24T01:00:00.000-03:00",
    "durationMinutes": 150,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-35",
    "tableId": "table-4",
    "customer": {
      "name": "Nicolás Fuentes González",
      "phone": "+54-11-3333-4444",
      "email": "nicolásfuentesgonzález@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T18:30:00.000-03:00",
    "endTime": "2025-10-23T19:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-36",
    "tableId": "table-4",
    "customer": {
      "name": "Andrea Mendoza Silva",
      "phone": "+54-11-7777-8888",
      "email": "andreamendozasilva@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T12:00:00.000-03:00",
    "endTime": "2025-10-23T16:00:00.000-03:00",
    "durationMinutes": 240,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274175-37",
    "tableId": "table-24",
    "customer": {
      "name": "Raquel Vargas Moreno",
      "phone": "+54-11-9012-3456",
      "email": "raquelvargasmoreno@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T12:00:00.000-03:00",
    "endTime": "2025-10-24T13:30:00.000-03:00",
    "durationMinutes": 90,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-38",
    "tableId": "table-21",
    "customer": {
      "name": "Cristina Romero Mendoza",
      "phone": "+54-11-5656-7878",
      "email": "cristinaromeromendoza@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T20:30:00.000-03:00",
    "endTime": "2025-10-25T00:30:00.000-03:00",
    "durationMinutes": 240,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-39",
    "tableId": "table-26",
    "customer": {
      "name": "Sofia Reyes Cabrera",
      "phone": "+54-11-0123-4567",
      "email": "sofiareyescabrera@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T23:45:00.000-03:00",
    "endTime": "2025-10-20T01:00:00.000-03:00",
    "durationMinutes": 75,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-40",
    "tableId": "table-9",
    "customer": {
      "name": "Sebastián Vega Torres",
      "phone": "+54-11-1212-3434",
      "email": "sebastiánvegatorres@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T13:45:00.000-03:00",
    "endTime": "2025-10-23T15:00:00.000-03:00",
    "durationMinutes": 75,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-41",
    "tableId": "table-14",
    "customer": {
      "name": "Rubén Herrera Serrano",
      "phone": "+54-11-7890-1234",
      "email": "rubénherreraserrano@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-21T13:45:00.000-03:00",
    "endTime": "2025-10-21T16:30:00.000-03:00",
    "durationMinutes": 165,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-42",
    "tableId": "table-2",
    "customer": {
      "name": "Carlos López Vargas",
      "phone": "+54-11-7890-1234",
      "email": "carloslópezvargas@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T15:15:00.000-03:00",
    "endTime": "2025-10-22T16:15:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-43",
    "tableId": "table-21",
    "customer": {
      "name": "Elena Moreno Rodríguez",
      "phone": "+54-11-7777-8888",
      "email": "elenamorenorodríguez@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T16:45:00.000-03:00",
    "endTime": "2025-10-18T19:30:00.000-03:00",
    "durationMinutes": 165,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-44",
    "tableId": "table-20",
    "customer": {
      "name": "María Rodríguez Moreno",
      "phone": "+54-11-6789-0123",
      "email": "maríarodríguezmoreno@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T18:30:00.000-03:00",
    "endTime": "2025-10-22T20:00:00.000-03:00",
    "durationMinutes": 90,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-45",
    "tableId": "table-25",
    "customer": {
      "name": "Camila Espinoza Martín",
      "phone": "+54-11-5678-9012",
      "email": "camilaespinozamartín@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T16:00:00.000-03:00",
    "endTime": "2025-10-18T17:15:00.000-03:00",
    "durationMinutes": 75,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-47",
    "tableId": "table-13",
    "customer": {
      "name": "Laura Sánchez Díaz",
      "phone": "+54-11-1313-4545",
      "email": "laurasánchezdíaz@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-21T22:15:00.000-03:00",
    "endTime": "2025-10-22T00:00:00.000-03:00",
    "durationMinutes": 105,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-48",
    "tableId": "table-13",
    "customer": {
      "name": "Cristina Romero Vega",
      "phone": "+54-11-1234-5678",
      "email": "cristinaromerovega@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T12:30:00.000-03:00",
    "endTime": "2025-10-21T14:15:00.000-03:00",
    "durationMinutes": 105,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-49",
    "tableId": "table-7",
    "customer": {
      "name": "Sandra Vega Ramos",
      "phone": "+54-11-1111-2222",
      "email": "sandravegaramos@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T11:45:00.000-03:00",
    "endTime": "2025-10-22T14:00:00.000-03:00",
    "durationMinutes": 135,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-50",
    "tableId": "table-30",
    "customer": {
      "name": "Sofia Reyes Campos",
      "phone": "+54-11-4567-8901",
      "email": "sofiareyescampos@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-19T13:15:00.000-03:00",
    "endTime": "2025-10-19T14:30:00.000-03:00",
    "durationMinutes": 75,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-51",
    "tableId": "table-29",
    "customer": {
      "name": "Lucía Morales Herrera",
      "phone": "+54-11-7890-1234",
      "email": "lucíamoralesherrera@gmail.com"
    },
    "partySize": 7,
    "startTime": "2025-10-21T11:15:00.000-03:00",
    "endTime": "2025-10-21T12:15:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-53",
    "tableId": "table-18",
    "customer": {
      "name": "Miguel González Torres",
      "phone": "+54-11-9090-1212",
      "email": "miguelgonzáleztorres@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-19T10:15:00.000-03:00",
    "endTime": "2025-10-19T11:45:00.000-03:00",
    "durationMinutes": 90,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-54",
    "tableId": "table-13",
    "customer": {
      "name": "Andrea Mendoza Díaz",
      "phone": "+54-11-0123-4567",
      "email": "andreamendozadíaz@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T12:00:00.000-03:00",
    "endTime": "2025-10-18T14:15:00.000-03:00",
    "durationMinutes": 135,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-55",
    "tableId": "table-16",
    "customer": {
      "name": "Fernando Ramos Rojas",
      "phone": "+54-11-8901-2345",
      "email": "fernandoramosrojas@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T16:00:00.000-03:00",
    "endTime": "2025-10-22T18:15:00.000-03:00",
    "durationMinutes": 135,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-56",
    "tableId": "table-24",
    "customer": {
      "name": "Teresa Molina Silva",
      "phone": "+54-11-9012-3456",
      "email": "teresamolinasilva@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T17:15:00.000-03:00",
    "endTime": "2025-10-24T18:30:00.000-03:00",
    "durationMinutes": 75,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-57",
    "tableId": "table-17",
    "customer": {
      "name": "Natalia Ortega Sánchez",
      "phone": "+54-11-1111-2222",
      "email": "nataliaortegasánchez@yahoo.com"
    },
    "partySize": 7,
    "startTime": "2025-10-20T19:45:00.000-03:00",
    "endTime": "2025-10-20T22:00:00.000-03:00",
    "durationMinutes": 135,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274176-59",
    "tableId": "table-15",
    "customer": {
      "name": "Alejandro Castro Ruiz",
      "phone": "+54-11-1313-4545",
      "email": "alejandrocastroruiz@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T20:30:00.000-03:00",
    "endTime": "2025-10-20T00:30:00.000-03:00",
    "durationMinutes": 240,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-60",
    "tableId": "table-13",
    "customer": {
      "name": "Laura Sánchez Flores",
      "phone": "+54-11-9090-1212",
      "email": "laurasánchezflores@hotmail.com"
    },
    "partySize": 7,
    "startTime": "2025-10-20T22:00:00.000-03:00",
    "endTime": "2025-10-21T00:15:00.000-03:00",
    "durationMinutes": 135,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-61",
    "tableId": "table-24",
    "customer": {
      "name": "Lucía Morales Reyes",
      "phone": "+54-11-1234-5678",
      "email": "lucíamoralesreyes@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T17:15:00.000-03:00",
    "endTime": "2025-10-23T19:30:00.000-03:00",
    "durationMinutes": 135,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-62",
    "tableId": "table-22",
    "customer": {
      "name": "Mónica Flores Jiménez",
      "phone": "+54-11-5656-7878",
      "email": "mónicafloresjiménez@gmail.com"
    },
    "partySize": 7,
    "startTime": "2025-10-24T20:30:00.000-03:00",
    "endTime": "2025-10-25T00:15:00.000-03:00",
    "durationMinutes": 225,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-64",
    "tableId": "table-16",
    "customer": {
      "name": "Nicolás Fuentes Martínez",
      "phone": "+54-11-9012-3456",
      "email": "nicolásfuentesmartínez@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T20:00:00.000-03:00",
    "endTime": "2025-10-24T21:30:00.000-03:00",
    "durationMinutes": 90,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-65",
    "tableId": "table-16",
    "customer": {
      "name": "Hugo Aguilar Vargas",
      "phone": "+54-11-5678-9012",
      "email": "hugoaguilarvargas@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T13:30:00.000-03:00",
    "endTime": "2025-10-23T15:15:00.000-03:00",
    "durationMinutes": 105,
    "status": "PENDING",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-66",
    "tableId": "table-6",
    "customer": {
      "name": "José Martínez Vargas",
      "phone": "+54-11-4567-8901",
      "email": "josémartínezvargas@outlook.com"
    },
    "partySize": 7,
    "startTime": "2025-10-24T10:30:00.000-03:00",
    "endTime": "2025-10-24T11:45:00.000-03:00",
    "durationMinutes": 75,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-67",
    "tableId": "table-3",
    "customer": {
      "name": "Roberto Herrera Ortega",
      "phone": "+54-11-1234-5678",
      "email": "robertoherreraortega@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T11:30:00.000-03:00",
    "endTime": "2025-10-22T13:00:00.000-03:00",
    "durationMinutes": 90,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-69",
    "tableId": "table-26",
    "customer": {
      "name": "Francisco Martín Morales",
      "phone": "+54-11-1313-4545",
      "email": "franciscomartínmorales@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T11:45:00.000-03:00",
    "endTime": "2025-10-20T14:30:00.000-03:00",
    "durationMinutes": 165,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-70",
    "tableId": "table-6",
    "customer": {
      "name": "Adrián Cabrera Mendoza",
      "phone": "+54-11-0123-4567",
      "email": "adriáncabreramendoza@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T14:45:00.000-03:00",
    "endTime": "2025-10-18T16:45:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-72",
    "tableId": "table-11",
    "customer": {
      "name": "Francisco Martín Ortega",
      "phone": "+54-11-9012-3456",
      "email": "franciscomartínortega@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-20T22:15:00.000-03:00",
    "endTime": "2025-10-21T00:15:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-73",
    "tableId": "table-14",
    "customer": {
      "name": "Álvaro Serrano Jiménez",
      "phone": "+54-11-2345-6789",
      "email": "álvaroserranojiménez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T18:15:00.000-03:00",
    "endTime": "2025-10-18T20:45:00.000-03:00",
    "durationMinutes": 150,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-74",
    "tableId": "table-2",
    "customer": {
      "name": "Ana García Jiménez",
      "phone": "+54-11-5678-9012",
      "email": "anagarcíajiménez@hotmail.com"
    },
    "partySize": 7,
    "startTime": "2025-10-19T16:30:00.000-03:00",
    "endTime": "2025-10-19T19:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-75",
    "tableId": "table-19",
    "customer": {
      "name": "José Martínez Molina",
      "phone": "+54-11-2345-6789",
      "email": "josémartínezmolina@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T16:45:00.000-03:00",
    "endTime": "2025-10-18T19:30:00.000-03:00",
    "durationMinutes": 165,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-76",
    "tableId": "table-12",
    "customer": {
      "name": "Beatriz Guerrero López",
      "phone": "+54-11-1234-5678",
      "email": "beatrizguerrerolópez@gmail.com"
    },
    "partySize": 7,
    "startTime": "2025-10-23T10:45:00.000-03:00",
    "endTime": "2025-10-23T14:15:00.000-03:00",
    "durationMinutes": 210,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-77",
    "tableId": "table-8",
    "customer": {
      "name": "Mónica Flores Sánchez",
      "phone": "+54-11-4567-8901",
      "email": "mónicafloressánchez@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T19:45:00.000-03:00",
    "endTime": "2025-10-22T22:00:00.000-03:00",
    "durationMinutes": 135,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-78",
    "tableId": "table-28",
    "customer": {
      "name": "Francisco Martín Pérez",
      "phone": "+54-11-4567-8901",
      "email": "franciscomartínpérez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T21:45:00.000-03:00",
    "endTime": "2025-10-24T01:00:00.000-03:00",
    "durationMinutes": 195,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274177-79",
    "tableId": "table-6",
    "customer": {
      "name": "Natalia Ortega Silva",
      "phone": "+54-11-1234-5678",
      "email": "nataliaortegasilva@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T12:00:00.000-03:00",
    "endTime": "2025-10-22T13:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-80",
    "tableId": "table-7",
    "customer": {
      "name": "Álvaro Serrano Navarro",
      "phone": "+54-11-3456-7890",
      "email": "álvaroserranonavarro@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T12:00:00.000-03:00",
    "endTime": "2025-10-24T15:15:00.000-03:00",
    "durationMinutes": 195,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-81",
    "tableId": "table-9",
    "customer": {
      "name": "Sebastián Vega Herrera",
      "phone": "+54-11-0123-4567",
      "email": "sebastiánvegaherrera@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T16:00:00.000-03:00",
    "endTime": "2025-10-19T19:45:00.000-03:00",
    "durationMinutes": 225,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-82",
    "tableId": "table-7",
    "customer": {
      "name": "Sebastián Vega Díaz",
      "phone": "+54-11-3333-4444",
      "email": "sebastiánvegadíaz@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T10:00:00.000-03:00",
    "endTime": "2025-10-23T12:15:00.000-03:00",
    "durationMinutes": 135,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-85",
    "tableId": "table-3",
    "customer": {
      "name": "Camila Espinoza Navarro",
      "phone": "+54-11-6789-0123",
      "email": "camilaespinozanavarro@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T22:30:00.000-03:00",
    "endTime": "2025-10-23T00:00:00.000-03:00",
    "durationMinutes": 90,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-87",
    "tableId": "table-2",
    "customer": {
      "name": "Sebastián Vega Romero",
      "phone": "+54-11-1313-4545",
      "email": "sebastiánvegaromero@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T10:45:00.000-03:00",
    "endTime": "2025-10-21T13:00:00.000-03:00",
    "durationMinutes": 135,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-88",
    "tableId": "table-27",
    "customer": {
      "name": "Nicolás Fuentes Medina",
      "phone": "+54-11-5555-6666",
      "email": "nicolásfuentesmedina@outlook.com"
    },
    "partySize": 2,
    "startTime": "2025-10-22T20:00:00.000-03:00",
    "endTime": "2025-10-22T21:30:00.000-03:00",
    "durationMinutes": 90,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-89",
    "tableId": "table-30",
    "customer": {
      "name": "Raquel Vargas Reyes",
      "phone": "+54-11-3333-4444",
      "email": "raquelvargasreyes@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T19:00:00.000-03:00",
    "endTime": "2025-10-20T21:30:00.000-03:00",
    "durationMinutes": 150,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-91",
    "tableId": "table-10",
    "customer": {
      "name": "David Jiménez Díaz",
      "phone": "+54-11-2345-6789",
      "email": "davidjiménezdíaz@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T15:30:00.000-03:00",
    "endTime": "2025-10-21T19:00:00.000-03:00",
    "durationMinutes": 210,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-92",
    "tableId": "table-12",
    "customer": {
      "name": "Carmen Pérez López",
      "phone": "+54-11-7890-1234",
      "email": "carmenpérezlópez@live.com"
    },
    "partySize": 7,
    "startTime": "2025-10-19T13:30:00.000-03:00",
    "endTime": "2025-10-19T14:45:00.000-03:00",
    "durationMinutes": 75,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-95",
    "tableId": "table-3",
    "customer": {
      "name": "Sofia Reyes Silva",
      "phone": "+54-11-3333-4444",
      "email": "sofiareyessilva@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-21T18:15:00.000-03:00",
    "endTime": "2025-10-21T20:00:00.000-03:00",
    "durationMinutes": 105,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-96",
    "tableId": "table-21",
    "customer": {
      "name": "Lucía Morales Navarro",
      "phone": "+54-11-5555-6666",
      "email": "lucíamoralesnavarro@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T15:15:00.000-03:00",
    "endTime": "2025-10-20T18:30:00.000-03:00",
    "durationMinutes": 195,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-97",
    "tableId": "table-15",
    "customer": {
      "name": "Javier Torres Pérez",
      "phone": "+54-11-5656-7878",
      "email": "javiertorrespérez@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-20T20:45:00.000-03:00",
    "endTime": "2025-10-21T00:30:00.000-03:00",
    "durationMinutes": 225,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274178-98",
    "tableId": "table-26",
    "customer": {
      "name": "Patricia Navarro Castro",
      "phone": "+54-11-7890-1234",
      "email": "patricianavarrocastro@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T16:15:00.000-03:00",
    "endTime": "2025-10-22T19:15:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274179-99",
    "tableId": "table-4",
    "customer": {
      "name": "Andrea Mendoza Cabrera",
      "phone": "+54-11-0123-4567",
      "email": "andreamendozacabrera@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T10:00:00.000-03:00",
    "endTime": "2025-10-19T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274179-101",
    "tableId": "table-13",
    "customer": {
      "name": "Daniel Campos Vargas",
      "phone": "+54-11-7777-8888",
      "email": "danielcamposvargas@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T15:30:00.000-03:00",
    "endTime": "2025-10-18T19:30:00.000-03:00",
    "durationMinutes": 240,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274179-103",
    "tableId": "table-17",
    "customer": {
      "name": "Mónica Flores Molina",
      "phone": "+54-11-6767-8989",
      "email": "mónicafloresmolina@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T18:15:00.000-03:00",
    "endTime": "2025-10-18T19:15:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274179-104",
    "tableId": "table-24",
    "customer": {
      "name": "Roberto Herrera Ruiz",
      "phone": "+54-11-7890-1234",
      "email": "robertoherreraruiz@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T20:15:00.000-03:00",
    "endTime": "2025-10-24T00:15:00.000-03:00",
    "durationMinutes": 240,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274179-105",
    "tableId": "table-8",
    "customer": {
      "name": "Rubén Herrera Herrera",
      "phone": "+54-11-5678-9012",
      "email": "rubénherreraherrera@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T11:00:00.000-03:00",
    "endTime": "2025-10-18T12:15:00.000-03:00",
    "durationMinutes": 75,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274179-106",
    "tableId": "table-23",
    "customer": {
      "name": "Sergio Peña Moreno",
      "phone": "+54-11-6767-8989",
      "email": "sergiopeñamoreno@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T13:30:00.000-03:00",
    "endTime": "2025-10-18T14:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274179-107",
    "tableId": "table-16",
    "customer": {
      "name": "Beatriz Guerrero Fuentes",
      "phone": "+54-11-3456-7890",
      "email": "beatrizguerrerofuentes@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T18:00:00.000-03:00",
    "endTime": "2025-10-20T20:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274179-108",
    "tableId": "table-23",
    "customer": {
      "name": "Hugo Aguilar Vega",
      "phone": "+54-11-9999-0000",
      "email": "hugoaguilarvega@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-21T23:00:00.000-03:00",
    "endTime": "2025-10-22T00:15:00.000-03:00",
    "durationMinutes": 75,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274179-109",
    "tableId": "table-20",
    "customer": {
      "name": "Raquel Vargas Delgado",
      "phone": "+54-11-9090-1212",
      "email": "raquelvargasdelgado@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T16:30:00.000-03:00",
    "endTime": "2025-10-23T19:15:00.000-03:00",
    "durationMinutes": 165,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-111",
    "tableId": "table-16",
    "customer": {
      "name": "Claudia Medina Navarro",
      "phone": "+54-11-5678-9012",
      "email": "claudiamedinanavarro@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T16:45:00.000-03:00",
    "endTime": "2025-10-20T18:00:00.000-03:00",
    "durationMinutes": 75,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-112",
    "tableId": "table-6",
    "customer": {
      "name": "Roberto Herrera Morales",
      "phone": "+54-11-5678-9012",
      "email": "robertoherreramorales@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-22T13:15:00.000-03:00",
    "endTime": "2025-10-22T15:45:00.000-03:00",
    "durationMinutes": 150,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-113",
    "tableId": "table-16",
    "customer": {
      "name": "Ana García López",
      "phone": "+54-11-6767-8989",
      "email": "anagarcíalópez@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T23:45:00.000-03:00",
    "endTime": "2025-10-19T00:45:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-114",
    "tableId": "table-19",
    "customer": {
      "name": "Hugo Aguilar Flores",
      "phone": "+54-11-1111-2222",
      "email": "hugoaguilarflores@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T17:15:00.000-03:00",
    "endTime": "2025-10-21T20:30:00.000-03:00",
    "durationMinutes": 195,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-117",
    "tableId": "table-19",
    "customer": {
      "name": "Sandra Vega Espinoza",
      "phone": "+54-11-9012-3456",
      "email": "sandravegaespinoza@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T18:45:00.000-03:00",
    "endTime": "2025-10-24T19:45:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-119",
    "tableId": "table-12",
    "customer": {
      "name": "Javier Torres Vega",
      "phone": "+54-11-8901-2345",
      "email": "javiertorresvega@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T15:45:00.000-03:00",
    "endTime": "2025-10-23T19:15:00.000-03:00",
    "durationMinutes": 210,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-120",
    "tableId": "table-3",
    "customer": {
      "name": "Raquel Vargas Espinoza",
      "phone": "+54-11-3456-7890",
      "email": "raquelvargasespinoza@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T10:00:00.000-03:00",
    "endTime": "2025-10-24T12:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-121",
    "tableId": "table-1",
    "customer": {
      "name": "Teresa Molina Espinoza",
      "phone": "+54-11-8901-2345",
      "email": "teresamolinaespinoza@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T20:45:00.000-03:00",
    "endTime": "2025-10-20T00:30:00.000-03:00",
    "durationMinutes": 225,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-122",
    "tableId": "table-22",
    "customer": {
      "name": "Fernando Ramos Espinoza",
      "phone": "+54-11-4567-8901",
      "email": "fernandoramosespinoza@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T23:00:00.000-03:00",
    "endTime": "2025-10-21T00:45:00.000-03:00",
    "durationMinutes": 105,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-123",
    "tableId": "table-5",
    "customer": {
      "name": "Javier Torres Medina",
      "phone": "+54-11-5656-7878",
      "email": "javiertorresmedina@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T11:15:00.000-03:00",
    "endTime": "2025-10-22T13:30:00.000-03:00",
    "durationMinutes": 135,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-124",
    "tableId": "table-19",
    "customer": {
      "name": "Isabel Díaz Castro",
      "phone": "+54-11-1313-4545",
      "email": "isabeldíazcastro@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T10:30:00.000-03:00",
    "endTime": "2025-10-18T14:30:00.000-03:00",
    "durationMinutes": 240,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-125",
    "tableId": "table-12",
    "customer": {
      "name": "Sofia Reyes Pérez",
      "phone": "+54-11-6767-8989",
      "email": "sofiareyespérez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T16:45:00.000-03:00",
    "endTime": "2025-10-21T18:00:00.000-03:00",
    "durationMinutes": 75,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274180-127",
    "tableId": "table-7",
    "customer": {
      "name": "Fernando Ramos Moreno",
      "phone": "+54-11-1313-4545",
      "email": "fernandoramosmoreno@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T23:15:00.000-03:00",
    "endTime": "2025-10-20T00:15:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-128",
    "tableId": "table-8",
    "customer": {
      "name": "María Rodríguez Guerrero",
      "phone": "+54-11-3456-7890",
      "email": "maríarodríguezguerrero@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T23:00:00.000-03:00",
    "endTime": "2025-10-20T00:15:00.000-03:00",
    "durationMinutes": 75,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-129",
    "tableId": "table-24",
    "customer": {
      "name": "Javier Torres Sánchez",
      "phone": "+54-11-7777-8888",
      "email": "javiertorressánchez@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T12:00:00.000-03:00",
    "endTime": "2025-10-23T14:45:00.000-03:00",
    "durationMinutes": 165,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-130",
    "tableId": "table-25",
    "customer": {
      "name": "María Rodríguez Jiménez",
      "phone": "+54-11-5656-7878",
      "email": "maríarodríguezjiménez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T10:30:00.000-03:00",
    "endTime": "2025-10-24T14:15:00.000-03:00",
    "durationMinutes": 225,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-131",
    "tableId": "table-7",
    "customer": {
      "name": "Raquel Vargas Martínez",
      "phone": "+54-11-5678-9012",
      "email": "raquelvargasmartínez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T20:45:00.000-03:00",
    "endTime": "2025-10-18T21:45:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-133",
    "tableId": "table-12",
    "customer": {
      "name": "Javier Torres Vega",
      "phone": "+54-11-2345-6789",
      "email": "javiertorresvega@yahoo.com"
    },
    "partySize": 7,
    "startTime": "2025-10-22T16:45:00.000-03:00",
    "endTime": "2025-10-22T20:45:00.000-03:00",
    "durationMinutes": 240,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-134",
    "tableId": "table-4",
    "customer": {
      "name": "Beatriz Guerrero Sánchez",
      "phone": "+54-11-5656-7878",
      "email": "beatrizguerrerosánchez@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T23:30:00.000-03:00",
    "endTime": "2025-10-24T00:45:00.000-03:00",
    "durationMinutes": 75,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-135",
    "tableId": "table-17",
    "customer": {
      "name": "Rubén Herrera López",
      "phone": "+54-11-6789-0123",
      "email": "rubénherreralópez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T18:00:00.000-03:00",
    "endTime": "2025-10-23T19:45:00.000-03:00",
    "durationMinutes": 105,
    "status": "FINISHED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-136",
    "tableId": "table-1",
    "customer": {
      "name": "Andrea Mendoza González",
      "phone": "+54-11-5678-9012",
      "email": "andreamendozagonzález@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T23:45:00.000-03:00",
    "endTime": "2025-10-23T00:45:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-137",
    "tableId": "table-8",
    "customer": {
      "name": "Carmen Pérez Ruiz",
      "phone": "+54-11-9012-3456",
      "email": "carmenpérezruiz@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-21T23:00:00.000-03:00",
    "endTime": "2025-10-22T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-138",
    "tableId": "table-9",
    "customer": {
      "name": "Ana García Peña",
      "phone": "+54-11-5555-6666",
      "email": "anagarcíapeña@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T23:15:00.000-03:00",
    "endTime": "2025-10-21T00:45:00.000-03:00",
    "durationMinutes": 90,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-139",
    "tableId": "table-22",
    "customer": {
      "name": "David Jiménez Serrano",
      "phone": "+54-11-1111-2222",
      "email": "davidjiménezserrano@hotmail.com"
    },
    "partySize": 7,
    "startTime": "2025-10-24T18:30:00.000-03:00",
    "endTime": "2025-10-24T20:00:00.000-03:00",
    "durationMinutes": 90,
    "status": "SEATED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274181-140",
    "tableId": "table-19",
    "customer": {
      "name": "Daniel Campos Fuentes",
      "phone": "+54-11-1111-2222",
      "email": "danielcamposfuentes@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T12:15:00.000-03:00",
    "endTime": "2025-10-20T14:00:00.000-03:00",
    "durationMinutes": 105,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-141",
    "tableId": "table-28",
    "customer": {
      "name": "Rubén Herrera Silva",
      "phone": "+54-11-1111-2222",
      "email": "rubénherrerasilva@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T12:30:00.000-03:00",
    "endTime": "2025-10-22T13:45:00.000-03:00",
    "durationMinutes": 75,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-143",
    "tableId": "table-9",
    "customer": {
      "name": "Francisco Martín Serrano",
      "phone": "+54-11-1212-3434",
      "email": "franciscomartínserrano@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T17:15:00.000-03:00",
    "endTime": "2025-10-18T20:45:00.000-03:00",
    "durationMinutes": 210,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-144",
    "tableId": "table-4",
    "customer": {
      "name": "Cristina Romero Vega",
      "phone": "+54-11-5555-6666",
      "email": "cristinaromerovega@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T16:00:00.000-03:00",
    "endTime": "2025-10-21T18:00:00.000-03:00",
    "durationMinutes": 120,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-145",
    "tableId": "table-14",
    "customer": {
      "name": "Beatriz Guerrero Cabrera",
      "phone": "+54-11-2345-6789",
      "email": "beatrizguerrerocabrera@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T10:45:00.000-03:00",
    "endTime": "2025-10-18T14:30:00.000-03:00",
    "durationMinutes": 225,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-146",
    "tableId": "table-25",
    "customer": {
      "name": "Gabriel Rojas Campos",
      "phone": "+54-11-4567-8901",
      "email": "gabrielrojascampos@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-22T10:15:00.000-03:00",
    "endTime": "2025-10-22T13:30:00.000-03:00",
    "durationMinutes": 195,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-147",
    "tableId": "table-24",
    "customer": {
      "name": "Adrián Cabrera Sánchez",
      "phone": "+54-11-3456-7890",
      "email": "adriáncabrerasánchez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T23:15:00.000-03:00",
    "endTime": "2025-10-22T00:15:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-148",
    "tableId": "table-4",
    "customer": {
      "name": "Hugo Aguilar Torres",
      "phone": "+54-11-9999-0000",
      "email": "hugoaguilartorres@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-21T14:15:00.000-03:00",
    "endTime": "2025-10-21T15:30:00.000-03:00",
    "durationMinutes": 75,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-149",
    "tableId": "table-11",
    "customer": {
      "name": "Andrea Mendoza Martínez",
      "phone": "+54-11-7777-8888",
      "email": "andreamendozamartínez@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T18:30:00.000-03:00",
    "endTime": "2025-10-19T19:45:00.000-03:00",
    "durationMinutes": 75,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-150",
    "tableId": "table-11",
    "customer": {
      "name": "José Martínez Ramos",
      "phone": "+54-11-6767-8989",
      "email": "josémartínezramos@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T20:45:00.000-03:00",
    "endTime": "2025-10-20T00:45:00.000-03:00",
    "durationMinutes": 240,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-153",
    "tableId": "table-27",
    "customer": {
      "name": "Daniel Campos Reyes",
      "phone": "+54-11-2345-6789",
      "email": "danielcamposreyes@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-21T18:15:00.000-03:00",
    "endTime": "2025-10-21T21:15:00.000-03:00",
    "durationMinutes": 180,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-157",
    "tableId": "table-26",
    "customer": {
      "name": "Miguel González Silva",
      "phone": "+54-11-1111-2222",
      "email": "miguelgonzálezsilva@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-21T14:00:00.000-03:00",
    "endTime": "2025-10-21T16:30:00.000-03:00",
    "durationMinutes": 150,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-158",
    "tableId": "table-17",
    "customer": {
      "name": "Camila Espinoza Romero",
      "phone": "+54-11-1111-2222",
      "email": "camilaespinozaromero@gmail.com"
    },
    "partySize": 8,
    "startTime": "2025-10-22T14:45:00.000-03:00",
    "endTime": "2025-10-22T17:30:00.000-03:00",
    "durationMinutes": 165,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274182-159",
    "tableId": "table-18",
    "customer": {
      "name": "Carmen Pérez Silva",
      "phone": "+54-11-6767-8989",
      "email": "carmenpérezsilva@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-21T12:45:00.000-03:00",
    "endTime": "2025-10-21T16:30:00.000-03:00",
    "durationMinutes": 225,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-162",
    "tableId": "table-15",
    "customer": {
      "name": "Raquel Vargas Vega",
      "phone": "+54-11-2345-6789",
      "email": "raquelvargasvega@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T10:45:00.000-03:00",
    "endTime": "2025-10-23T12:15:00.000-03:00",
    "durationMinutes": 90,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-163",
    "tableId": "table-24",
    "customer": {
      "name": "Camila Espinoza Herrera",
      "phone": "+54-11-2345-6789",
      "email": "camilaespinozaherrera@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-21T17:15:00.000-03:00",
    "endTime": "2025-10-21T19:15:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-165",
    "tableId": "table-3",
    "customer": {
      "name": "Sebastián Vega Vega",
      "phone": "+54-11-1234-5678",
      "email": "sebastiánvegavega@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T16:30:00.000-03:00",
    "endTime": "2025-10-22T20:30:00.000-03:00",
    "durationMinutes": 240,
    "status": "CONFIRMED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-166",
    "tableId": "table-5",
    "customer": {
      "name": "Fernando Ramos Sánchez",
      "phone": "+54-11-9999-0000",
      "email": "fernandoramossánchez@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T10:15:00.000-03:00",
    "endTime": "2025-10-19T14:00:00.000-03:00",
    "durationMinutes": 225,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-167",
    "tableId": "table-2",
    "customer": {
      "name": "Camila Espinoza Medina",
      "phone": "+54-11-1212-3434",
      "email": "camilaespinozamedina@gmail.com"
    },
    "partySize": 7,
    "startTime": "2025-10-23T23:15:00.000-03:00",
    "endTime": "2025-10-24T00:15:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-168",
    "tableId": "table-28",
    "customer": {
      "name": "Pablo Delgado García",
      "phone": "+54-11-9999-0000",
      "email": "pablodelgadogarcía@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T15:45:00.000-03:00",
    "endTime": "2025-10-23T19:45:00.000-03:00",
    "durationMinutes": 240,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-169",
    "tableId": "table-7",
    "customer": {
      "name": "Valeria Silva Romero",
      "phone": "+54-11-9012-3456",
      "email": "valeriasilvaromero@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T16:00:00.000-03:00",
    "endTime": "2025-10-19T18:30:00.000-03:00",
    "durationMinutes": 150,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-170",
    "tableId": "table-14",
    "customer": {
      "name": "Patricia Navarro Fuentes",
      "phone": "+54-11-6767-8989",
      "email": "patricianavarrofuentes@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T23:45:00.000-03:00",
    "endTime": "2025-10-20T01:00:00.000-03:00",
    "durationMinutes": 75,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-171",
    "tableId": "table-10",
    "customer": {
      "name": "Álvaro Serrano Martínez",
      "phone": "+54-11-7777-8888",
      "email": "álvaroserranomartínez@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T12:45:00.000-03:00",
    "endTime": "2025-10-22T14:45:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-172",
    "tableId": "table-6",
    "customer": {
      "name": "José Martínez Campos",
      "phone": "+54-11-1234-5678",
      "email": "josémartínezcampos@gmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T13:15:00.000-03:00",
    "endTime": "2025-10-23T17:00:00.000-03:00",
    "durationMinutes": 225,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-173",
    "tableId": "table-28",
    "customer": {
      "name": "Andrea Mendoza Cabrera",
      "phone": "+54-11-5656-7878",
      "email": "andreamendozacabrera@hotmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T12:45:00.000-03:00",
    "endTime": "2025-10-19T15:45:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-174",
    "tableId": "table-18",
    "customer": {
      "name": "Sergio Peña Espinoza",
      "phone": "+54-11-5656-7878",
      "email": "sergiopeñaespinoza@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T15:30:00.000-03:00",
    "endTime": "2025-10-20T18:45:00.000-03:00",
    "durationMinutes": 195,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274183-177",
    "tableId": "table-3",
    "customer": {
      "name": "David Jiménez López",
      "phone": "+54-11-9090-1212",
      "email": "davidjiménezlópez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T17:30:00.000-03:00",
    "endTime": "2025-10-18T20:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "PENDING",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274184-178",
    "tableId": "table-14",
    "customer": {
      "name": "Valeria Silva Medina",
      "phone": "+54-11-9090-1212",
      "email": "valeriasilvamedina@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T11:30:00.000-03:00",
    "endTime": "2025-10-24T14:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274184-179",
    "tableId": "table-27",
    "customer": {
      "name": "Mónica Flores Ramos",
      "phone": "+54-11-5656-7878",
      "email": "mónicafloresramos@gmail.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T15:15:00.000-03:00",
    "endTime": "2025-10-18T18:00:00.000-03:00",
    "durationMinutes": 165,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274184-181",
    "tableId": "table-4",
    "customer": {
      "name": "Hugo Aguilar López",
      "phone": "+54-11-5656-7878",
      "email": "hugoaguilarlópez@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T23:15:00.000-03:00",
    "endTime": "2025-10-20T00:30:00.000-03:00",
    "durationMinutes": 75,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274184-182",
    "tableId": "table-18",
    "customer": {
      "name": "David Jiménez Aguilar",
      "phone": "+54-11-0123-4567",
      "email": "davidjiménezaguilar@hotmail.com"
    },
    "partySize": 6,
    "startTime": "2025-10-19T15:30:00.000-03:00",
    "endTime": "2025-10-19T19:00:00.000-03:00",
    "durationMinutes": 210,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274184-183",
    "tableId": "table-2",
    "customer": {
      "name": "José Martínez Cabrera",
      "phone": "+54-11-3333-4444",
      "email": "josémartínezcabrera@live.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T23:15:00.000-03:00",
    "endTime": "2025-10-23T00:45:00.000-03:00",
    "durationMinutes": 90,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274184-186",
    "tableId": "table-5",
    "customer": {
      "name": "Andrea Mendoza López",
      "phone": "+54-11-4567-8901",
      "email": "andreamendozalópez@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-21T12:15:00.000-03:00",
    "endTime": "2025-10-21T14:45:00.000-03:00",
    "durationMinutes": 150,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274184-187",
    "tableId": "table-12",
    "customer": {
      "name": "Andrea Mendoza Espinoza",
      "phone": "+54-11-5678-9012",
      "email": "andreamendozaespinoza@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T10:15:00.000-03:00",
    "endTime": "2025-10-24T14:15:00.000-03:00",
    "durationMinutes": 240,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274184-188",
    "tableId": "table-28",
    "customer": {
      "name": "Patricia Navarro Ramos",
      "phone": "+54-11-5678-9012",
      "email": "patricianavarroramos@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-20T10:45:00.000-03:00",
    "endTime": "2025-10-20T11:45:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274184-189",
    "tableId": "table-10",
    "customer": {
      "name": "Adrián Cabrera Herrera",
      "phone": "+54-11-1212-3434",
      "email": "adriáncabreraherrera@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T23:15:00.000-03:00",
    "endTime": "2025-10-24T01:00:00.000-03:00",
    "durationMinutes": 105,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274184-190",
    "tableId": "table-29",
    "customer": {
      "name": "Fernando Ramos Pérez",
      "phone": "+54-11-2345-6789",
      "email": "fernandoramospérez@hotmail.com"
    },
    "partySize": 7,
    "startTime": "2025-10-21T16:15:00.000-03:00",
    "endTime": "2025-10-21T20:00:00.000-03:00",
    "durationMinutes": 225,
    "status": "CANCELLED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274185-191",
    "tableId": "table-15",
    "customer": {
      "name": "Alejandro Castro Herrera",
      "phone": "+54-11-3456-7890",
      "email": "alejandrocastroherrera@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T13:45:00.000-03:00",
    "endTime": "2025-10-20T17:00:00.000-03:00",
    "durationMinutes": 195,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274185-192",
    "tableId": "table-16",
    "customer": {
      "name": "Teresa Molina Jiménez",
      "phone": "+54-11-6767-8989",
      "email": "teresamolinajiménez@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T20:15:00.000-03:00",
    "endTime": "2025-10-18T22:00:00.000-03:00",
    "durationMinutes": 105,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274185-193",
    "tableId": "table-12",
    "customer": {
      "name": "Elena Moreno Reyes",
      "phone": "+54-11-9090-1212",
      "email": "elenamorenoreyes@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T22:45:00.000-03:00",
    "endTime": "2025-10-23T00:00:00.000-03:00",
    "durationMinutes": 75,
    "status": "CANCELLED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274185-195",
    "tableId": "table-9",
    "customer": {
      "name": "Adrián Cabrera Mendoza",
      "phone": "+54-11-4567-8901",
      "email": "adriáncabreramendoza@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T10:15:00.000-03:00",
    "endTime": "2025-10-24T14:15:00.000-03:00",
    "durationMinutes": 240,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274185-197",
    "tableId": "table-7",
    "customer": {
      "name": "Carmen Pérez Rodríguez",
      "phone": "+54-11-5555-6666",
      "email": "carmenpérezrodríguez@outlook.com"
    },
    "partySize": 4,
    "startTime": "2025-10-20T19:45:00.000-03:00",
    "endTime": "2025-10-20T21:00:00.000-03:00",
    "durationMinutes": 75,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274185-198",
    "tableId": "table-21",
    "customer": {
      "name": "Antonio Ruiz Pérez",
      "phone": "+54-11-9012-3456",
      "email": "antonioruizpérez@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-23T12:15:00.000-03:00",
    "endTime": "2025-10-23T15:30:00.000-03:00",
    "durationMinutes": 195,
    "status": "SEATED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274185-202",
    "tableId": "table-22",
    "customer": {
      "name": "Pablo Delgado López",
      "phone": "+54-11-6789-0123",
      "email": "pablodelgadolópez@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T12:45:00.000-03:00",
    "endTime": "2025-10-18T13:45:00.000-03:00",
    "durationMinutes": 60,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274185-203",
    "tableId": "table-3",
    "customer": {
      "name": "Teresa Molina Guerrero",
      "phone": "+54-11-1111-2222",
      "email": "teresamolinaguerrero@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T17:30:00.000-03:00",
    "endTime": "2025-10-20T19:45:00.000-03:00",
    "durationMinutes": 135,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274185-204",
    "tableId": "table-19",
    "customer": {
      "name": "David Jiménez Martín",
      "phone": "+54-11-1111-2222",
      "email": "davidjiménezmartín@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T19:45:00.000-03:00",
    "endTime": "2025-10-24T21:15:00.000-03:00",
    "durationMinutes": 90,
    "status": "SEATED",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274185-207",
    "tableId": "table-25",
    "customer": {
      "name": "Antonio Ruiz Herrera",
      "phone": "+54-11-6767-8989",
      "email": "antonioruizherrera@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T16:45:00.000-03:00",
    "endTime": "2025-10-22T20:45:00.000-03:00",
    "durationMinutes": 240,
    "status": "PENDING",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274186-209",
    "tableId": "table-13",
    "customer": {
      "name": "Elena Moreno Vargas",
      "phone": "+54-11-9999-0000",
      "email": "elenamorenovargas@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T23:30:00.000-03:00",
    "endTime": "2025-10-19T00:30:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274186-211",
    "tableId": "table-23",
    "customer": {
      "name": "Sandra Vega Moreno",
      "phone": "+54-11-9012-3456",
      "email": "sandravegamoreno@gmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-24T20:00:00.000-03:00",
    "endTime": "2025-10-24T21:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274186-213",
    "tableId": "table-28",
    "customer": {
      "name": "Carmen Pérez García",
      "phone": "+54-11-0123-4567",
      "email": "carmenpérezgarcía@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T17:15:00.000-03:00",
    "endTime": "2025-10-18T18:45:00.000-03:00",
    "durationMinutes": 90,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274186-214",
    "tableId": "table-25",
    "customer": {
      "name": "Fernando Ramos Ortega",
      "phone": "+54-11-9999-0000",
      "email": "fernandoramosortega@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T21:00:00.000-03:00",
    "endTime": "2025-10-23T22:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "SEATED",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274186-215",
    "tableId": "table-7",
    "customer": {
      "name": "Camila Espinoza Silva",
      "phone": "+54-11-9999-0000",
      "email": "camilaespinozasilva@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-22T15:45:00.000-03:00",
    "endTime": "2025-10-22T16:45:00.000-03:00",
    "durationMinutes": 60,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274186-217",
    "tableId": "table-19",
    "customer": {
      "name": "Elena Moreno Jiménez",
      "phone": "+54-11-9090-1212",
      "email": "elenamorenojiménez@live.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T23:00:00.000-03:00",
    "endTime": "2025-10-21T00:00:00.000-03:00",
    "durationMinutes": 60,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-218",
    "tableId": "table-4",
    "customer": {
      "name": "David Jiménez Jiménez",
      "phone": "+54-11-0123-4567",
      "email": "davidjiménezjiménez@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T19:45:00.000-03:00",
    "endTime": "2025-10-24T21:15:00.000-03:00",
    "durationMinutes": 90,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-220",
    "tableId": "table-7",
    "customer": {
      "name": "Fernando Ramos Ramos",
      "phone": "+54-11-8901-2345",
      "email": "fernandoramosramos@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T23:00:00.000-03:00",
    "endTime": "2025-10-25T00:15:00.000-03:00",
    "durationMinutes": 75,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-221",
    "tableId": "table-9",
    "customer": {
      "name": "Sebastián Vega Martín",
      "phone": "+54-11-6767-8989",
      "email": "sebastiánvegamartín@live.com"
    },
    "partySize": 2,
    "startTime": "2025-10-23T10:30:00.000-03:00",
    "endTime": "2025-10-23T12:45:00.000-03:00",
    "durationMinutes": 135,
    "status": "PENDING",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-222",
    "tableId": "table-23",
    "customer": {
      "name": "Camila Espinoza Martín",
      "phone": "+54-11-7777-8888",
      "email": "camilaespinozamartín@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T13:30:00.000-03:00",
    "endTime": "2025-10-24T15:15:00.000-03:00",
    "durationMinutes": 105,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-223",
    "tableId": "table-21",
    "customer": {
      "name": "Daniel Campos Romero",
      "phone": "+54-11-1212-3434",
      "email": "danielcamposromero@gmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T15:45:00.000-03:00",
    "endTime": "2025-10-24T17:45:00.000-03:00",
    "durationMinutes": 120,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-225",
    "tableId": "table-15",
    "customer": {
      "name": "Rubén Herrera Vega",
      "phone": "+54-11-9999-0000",
      "email": "rubénherreravega@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-18T22:30:00.000-03:00",
    "endTime": "2025-10-19T00:30:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-226",
    "tableId": "table-29",
    "customer": {
      "name": "Laura Sánchez Sánchez",
      "phone": "+54-11-0123-4567",
      "email": "laurasánchezsánchez@hotmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T19:45:00.000-03:00",
    "endTime": "2025-10-19T21:15:00.000-03:00",
    "durationMinutes": 90,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-227",
    "tableId": "table-5",
    "customer": {
      "name": "Andrea Mendoza Sánchez",
      "phone": "+54-11-3333-4444",
      "email": "andreamendozasánchez@yahoo.com"
    },
    "partySize": 5,
    "startTime": "2025-10-18T12:30:00.000-03:00",
    "endTime": "2025-10-18T14:15:00.000-03:00",
    "durationMinutes": 105,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-229",
    "tableId": "table-26",
    "customer": {
      "name": "Elena Moreno Guerrero",
      "phone": "+54-11-6789-0123",
      "email": "elenamorenoguerrero@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T11:00:00.000-03:00",
    "endTime": "2025-10-19T13:45:00.000-03:00",
    "durationMinutes": 165,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-230",
    "tableId": "table-14",
    "customer": {
      "name": "Rubén Herrera Medina",
      "phone": "+54-11-9012-3456",
      "email": "rubénherreramedina@outlook.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T19:15:00.000-03:00",
    "endTime": "2025-10-19T21:15:00.000-03:00",
    "durationMinutes": 120,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-231",
    "tableId": "table-16",
    "customer": {
      "name": "Adrián Cabrera Ortega",
      "phone": "+54-11-4567-8901",
      "email": "adriáncabreraortega@yahoo.com"
    },
    "partySize": 4,
    "startTime": "2025-10-22T10:30:00.000-03:00",
    "endTime": "2025-10-22T14:00:00.000-03:00",
    "durationMinutes": 210,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274187-232",
    "tableId": "table-1",
    "customer": {
      "name": "Ana García Medina",
      "phone": "+54-11-9090-1212",
      "email": "anagarcíamedina@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-24T11:00:00.000-03:00",
    "endTime": "2025-10-24T12:15:00.000-03:00",
    "durationMinutes": 75,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274188-234",
    "tableId": "table-24",
    "customer": {
      "name": "Valeria Silva Ramos",
      "phone": "+54-11-9090-1212",
      "email": "valeriasilvaramos@live.com"
    },
    "partySize": 6,
    "startTime": "2025-10-20T14:30:00.000-03:00",
    "endTime": "2025-10-20T17:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "app",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274188-235",
    "tableId": "table-25",
    "customer": {
      "name": "Rubén Herrera Moreno",
      "phone": "+54-11-5555-6666",
      "email": "rubénherreramoreno@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-21T22:15:00.000-03:00",
    "endTime": "2025-10-22T01:00:00.000-03:00",
    "durationMinutes": 165,
    "status": "CONFIRMED",
    "priority": "LARGE_GROUP",
    "source": "walkin",
    "createdAt": "2025-10-22T00:00:00.000-03:00",
    "updatedAt": "2025-10-22T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274188-236",
    "tableId": "table-11",
    "customer": {
      "name": "Ana García Castro",
      "phone": "+54-11-8901-2345",
      "email": "anagarcíacastro@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T12:15:00.000-03:00",
    "endTime": "2025-10-18T14:30:00.000-03:00",
    "durationMinutes": 135,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274188-237",
    "tableId": "table-2",
    "customer": {
      "name": "Daniel Campos García",
      "phone": "+54-11-7890-1234",
      "email": "danielcamposgarcía@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-24T21:30:00.000-03:00",
    "endTime": "2025-10-25T00:30:00.000-03:00",
    "durationMinutes": 180,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "walkin",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274188-238",
    "tableId": "table-21",
    "customer": {
      "name": "María Rodríguez Aguilar",
      "phone": "+54-11-6789-0123",
      "email": "maríarodríguezaguilar@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-18T10:15:00.000-03:00",
    "endTime": "2025-10-18T11:45:00.000-03:00",
    "durationMinutes": 90,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274188-239",
    "tableId": "table-30",
    "customer": {
      "name": "Gabriel Rojas Navarro",
      "phone": "+54-11-2345-6789",
      "email": "gabrielrojasnavarro@hotmail.com"
    },
    "partySize": 5,
    "startTime": "2025-10-19T15:45:00.000-03:00",
    "endTime": "2025-10-19T17:45:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274188-241",
    "tableId": "table-9",
    "customer": {
      "name": "Cristina Romero Ruiz",
      "phone": "+54-11-6789-0123",
      "email": "cristinaromeroruiz@yahoo.com"
    },
    "partySize": 2,
    "startTime": "2025-10-20T10:00:00.000-03:00",
    "endTime": "2025-10-20T12:30:00.000-03:00",
    "durationMinutes": 150,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274188-242",
    "tableId": "table-12",
    "customer": {
      "name": "Miguel González Medina",
      "phone": "+54-11-6789-0123",
      "email": "miguelgonzálezmedina@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-23T23:30:00.000-03:00",
    "endTime": "2025-10-24T01:00:00.000-03:00",
    "durationMinutes": 90,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274188-245",
    "tableId": "table-16",
    "customer": {
      "name": "Javier Torres Pérez",
      "phone": "+54-11-0123-4567",
      "email": "javiertorrespérez@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-24T21:30:00.000-03:00",
    "endTime": "2025-10-25T00:00:00.000-03:00",
    "durationMinutes": 150,
    "status": "NO_SHOW",
    "priority": "STANDARD",
    "source": "web",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274188-246",
    "tableId": "table-5",
    "customer": {
      "name": "Beatriz Guerrero Martínez",
      "phone": "+54-11-7777-8888",
      "email": "beatrizguerreromartínez@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-19T14:45:00.000-03:00",
    "endTime": "2025-10-19T17:30:00.000-03:00",
    "durationMinutes": 165,
    "status": "CANCELLED",
    "priority": "VIP",
    "source": "web",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274188-250",
    "tableId": "table-17",
    "customer": {
      "name": "Andrea Mendoza Silva",
      "phone": "+54-11-3456-7890",
      "email": "andreamendozasilva@yahoo.com"
    },
    "partySize": 7,
    "startTime": "2025-10-24T14:45:00.000-03:00",
    "endTime": "2025-10-24T18:30:00.000-03:00",
    "durationMinutes": 225,
    "status": "NO_SHOW",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274189-252",
    "tableId": "table-14",
    "customer": {
      "name": "Javier Torres Ramos",
      "phone": "+54-11-5678-9012",
      "email": "javiertorresramos@yahoo.com"
    },
    "partySize": 3,
    "startTime": "2025-10-20T13:30:00.000-03:00",
    "endTime": "2025-10-20T17:30:00.000-03:00",
    "durationMinutes": 240,
    "status": "SEATED",
    "priority": "VIP",
    "source": "app",
    "createdAt": "2025-10-21T00:00:00.000-03:00",
    "updatedAt": "2025-10-21T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274189-255",
    "tableId": "table-10",
    "customer": {
      "name": "Sebastián Vega Ramos",
      "phone": "+54-11-5678-9012",
      "email": "sebastiánvegaramos@gmail.com"
    },
    "partySize": 4,
    "startTime": "2025-10-23T18:15:00.000-03:00",
    "endTime": "2025-10-23T19:30:00.000-03:00",
    "durationMinutes": 75,
    "status": "PENDING",
    "priority": "LARGE_GROUP",
    "source": "web",
    "createdAt": "2025-10-24T00:00:00.000-03:00",
    "updatedAt": "2025-10-24T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274189-259",
    "tableId": "table-2",
    "customer": {
      "name": "Pablo Delgado Molina",
      "phone": "+54-11-1234-5678",
      "email": "pablodelgadomolina@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-18T13:15:00.000-03:00",
    "endTime": "2025-10-18T16:45:00.000-03:00",
    "durationMinutes": 210,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274189-260",
    "tableId": "table-30",
    "customer": {
      "name": "Elena Moreno Rodríguez",
      "phone": "+54-11-9999-0000",
      "email": "elenamorenorodríguez@yahoo.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T18:45:00.000-03:00",
    "endTime": "2025-10-24T20:00:00.000-03:00",
    "durationMinutes": 75,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274189-261",
    "tableId": "table-4",
    "customer": {
      "name": "Javier Torres Campos",
      "phone": "+54-11-7777-8888",
      "email": "javiertorrescampos@outlook.com"
    },
    "partySize": 6,
    "startTime": "2025-10-24T16:15:00.000-03:00",
    "endTime": "2025-10-24T18:30:00.000-03:00",
    "durationMinutes": 135,
    "status": "NO_SHOW",
    "priority": "VIP",
    "source": "phone",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274189-262",
    "tableId": "table-10",
    "customer": {
      "name": "Sebastián Vega Aguilar",
      "phone": "+54-11-3456-7890",
      "email": "sebastiánvegaaguilar@live.com"
    },
    "partySize": 4,
    "startTime": "2025-10-19T23:45:00.000-03:00",
    "endTime": "2025-10-20T01:00:00.000-03:00",
    "durationMinutes": 75,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274189-263",
    "tableId": "table-2",
    "customer": {
      "name": "Carmen Pérez Martínez",
      "phone": "+54-11-6789-0123",
      "email": "carmenpérezmartínez@outlook.com"
    },
    "partySize": 5,
    "startTime": "2025-10-22T12:45:00.000-03:00",
    "endTime": "2025-10-22T13:45:00.000-03:00",
    "durationMinutes": 60,
    "status": "CONFIRMED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-23T00:00:00.000-03:00",
    "updatedAt": "2025-10-23T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274189-264",
    "tableId": "table-22",
    "customer": {
      "name": "Hugo Aguilar Aguilar",
      "phone": "+54-11-2345-6789",
      "email": "hugoaguilaraguilar@hotmail.com"
    },
    "partySize": 8,
    "startTime": "2025-10-18T18:00:00.000-03:00",
    "endTime": "2025-10-18T19:45:00.000-03:00",
    "durationMinutes": 105,
    "status": "SEATED",
    "priority": "LARGE_GROUP",
    "source": "phone",
    "createdAt": "2025-10-19T00:00:00.000-03:00",
    "updatedAt": "2025-10-19T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274189-265",
    "tableId": "table-15",
    "customer": {
      "name": "Patricia Navarro Herrera",
      "phone": "+54-11-3456-7890",
      "email": "patricianavarroherrera@hotmail.com"
    },
    "partySize": 2,
    "startTime": "2025-10-19T14:45:00.000-03:00",
    "endTime": "2025-10-19T16:45:00.000-03:00",
    "durationMinutes": 120,
    "status": "PENDING",
    "priority": "STANDARD",
    "source": "walkin",
    "createdAt": "2025-10-20T00:00:00.000-03:00",
    "updatedAt": "2025-10-20T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274189-266",
    "tableId": "table-13",
    "customer": {
      "name": "Antonio Ruiz Reyes",
      "phone": "+54-11-8901-2345",
      "email": "antonioruizreyes@hotmail.com"
    },
    "partySize": 7,
    "startTime": "2025-10-24T13:00:00.000-03:00",
    "endTime": "2025-10-24T15:30:00.000-03:00",
    "durationMinutes": 150,
    "status": "FINISHED",
    "priority": "STANDARD",
    "source": "app",
    "createdAt": "2025-10-25T00:00:00.000-03:00",
    "updatedAt": "2025-10-25T00:00:00.000-03:00"
  },
  {
    "id": "res-1761426274189-267",
    "tableId": "table-29",
    "customer": {
      "name": "Antonio Ruiz Castro",
      "phone": "+54-11-0123-4567",
      "email": "antonioruizcastro@outlook.com"
    },
    "partySize": 7,
    "startTime": "2025-10-23T12:00:00.000-03:00",
    "endTime": "2025-10-23T16:00:00.000-03:00",
    "durationMinutes": 240,
    "status": "SEATED",
    "priority": "STANDARD",
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
