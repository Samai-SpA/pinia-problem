import { defineStore } from 'pinia'

export const useTrabajadoresStore = defineStore('trabajadores', {
  state: () => {
    return {
      companies: [
        {
          name: 'Cholguanes cholguan',
          employees: [
            {
              id: 1,
              name: 'Richard Dick Grayson',
              rut: '11.111.111-1',
              periods: [
                {
                  year: '2021',
                  months: [
                    {
                      id: 0,
                      name: 'enero',
                    },
                  ],

                },
              ],
            },
            {
              id: 2,
              name: 'Pepe Globos',
              rut: '22.222.222-2',
              periods: [
                {
                  year: '2021',
                  months: [
                    {
                      id: 20,
                      name: 'noviembre',
                    },
                    {
                      id: 22,
                      name: 'diciembre',
                    },
                  ],
                },
              ],
            },
            {
              id: 3,
              name: 'Juanito Pérez',
              rut: '33.333.333-3',
              periods: [
                {
                  year: '2021',
                  months: [
                    {
                      id: 34,
                      name: 'septiembre',
                    },
                    {
                      id: 35,
                      name: 'octubre',
                    },
                    {
                      id: 36,
                      name: 'noviembre',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'Batman Corps',
          employees: [
            {
              id: 10,
              name: 'Richard Dick Grayson',
              rut: '11.111.111-1',
              periods: [
                {
                  year: '2020',
                  months: [
                    {
                      id: 40,
                      name: 'diciembre',
                    },
                  ],
                },
                {
                  year: '2021',
                  months: [
                    {
                      id: 41,
                      name: 'enero',
                    },
                    {
                      id: 42,
                      name: 'febrero',
                    },
                    {
                      id: 43,
                      name: 'abril',
                    },
                    {
                      id: 44,
                      name: 'mayo',
                    },
                  ],
                },
              ],
            },
            {
              id: 11,
              name: 'Jason Todd',
              rut: '11.111.111-2',
              periods: [
                {
                  year: '2021',
                  months: [
                    {
                      id: 55,
                      name: 'septiembre',
                    },
                    {
                      id: 56,
                      name: 'octubre',
                    },
                    {
                      id: 57,
                      name: 'noviembre',
                    },
                  ],
                },
              ],
            },
            {
              id: 13,
              name: 'Barbara Gordon',
              rut: '13.111.111-2',
              periods: [
                {
                  year: '2020',
                  months: [
                    {
                      id: 61,
                      name: 'septiembre',
                    },
                    {
                      id: 62,
                      name: 'octubre',
                    },
                    {
                      id: 63,
                      name: 'noviembre',
                    },
                    {
                      id: 64,
                      name: 'diciembre',
                    },
                  ],
                },
                {
                  year: '2021',
                  months: [
                    {
                      id: 61,
                      name: 'enero',
                    },
                    {
                      id: 62,
                      name: 'febrero',
                    },
                    {
                      id: 63,
                      name: 'marzo',
                    },
                    {
                      id: 64,
                      name: 'abril',
                    },
                  ],
                },
              ],
            },
            {
              id: 14,
              name: 'Tim Drake',
              rut: '14.111.111-2',
              periods: [],
            },
            {
              id: 15,
              name: 'Damian Wayne',
              rut: '15.111.111-2',
              periods: [],
            },
          ],
        },
      ],
      selectedCompany: 'Seleccione una empresa',
      selectedEmployeeName: { label: 'Seleccione un trabajador', value: null },
      selectedEmployeeRut: null,
    }
  },
  getters: {
    getCompanies(state) {
      return state.companies.map(el => el.name)
    },
  },
})
