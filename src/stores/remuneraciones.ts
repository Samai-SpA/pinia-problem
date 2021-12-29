import { defineStore } from 'pinia'
import { useTrabajadoresStore } from '~/stores/trabajadores'

interface company {
  name: string
  employees: employee[]
}

interface employee {
  id: any
  name: string
  rut: string
  periods: period[]
}

interface period {
  year?: string
  months?: month[]
}

interface month {
  id: any
  name: string
}

export const useRemuneracionesStore = defineStore('remuneraciones', {
  state: () => ({
    remuneracionesCompany: 'Seleccione una empresa',
    remuneracionesEmployee: { label: 'Seleccione un trabajador', value: null },
  }),
  getters: {
    getRemuneracionesCompanies() {
      const otherStore = useTrabajadoresStore()
      return otherStore.getCompanies
    },

    getSelectedCompany(state): company | undefined {
      const company = useTrabajadoresStore().companies.filter((company: company) => company.name === state.remuneracionesCompany)
      if (company.length > 0)
        return company[0]
    },

    getRemuneracionesEmployees(state) {
      // Si hay empresa seleccionada
      if (
        state.remuneracionesCompany !== 'Seleccione una empresa'
          && this.getSelectedCompany !== undefined
      ) {
        const employees = this.getSelectedCompany.employees.map((empl: employee) => ({ label: empl.name, value: empl }
        ))
        return employees
      }
      //   Si no hay empresa seleccionada
      return [{ label: 'No hay trabajadores', value: null }]
    },
  },
})
