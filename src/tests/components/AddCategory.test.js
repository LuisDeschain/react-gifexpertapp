import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'
import PropTypes from 'prop-types'

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>)

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>)
    })
    
    test('debe mostrar <AddCategory /> correctamente', () => { 
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de cambiar la caja de texto', () => { 
        const input = wrapper.find('input')
        const value = 'Hola Mundo'

        input.simulate('change', { target: { value } })

        expect(wrapper.find('p').text().trim()).toBe(value)
    })

    test('NO debe postear la información al hacer submit', () => { 
        wrapper.find('form').simulate('submit', { preventDefault: () => {} })

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe de llamar el setCategories y limpiar la caja de texto', () => { 
        const value = 'Hola Mundo'

        // 1. simular inputChange
        wrapper.find('input').simulate('change', { target: { value } })

        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault: () => {} }) // preventDefault(){} <- esto tambien vale

        // 3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled()

            // 3* Alternativas que se pueden añadir
            expect(setCategories).toHaveBeenCalledTimes(1)
            expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        // 4. el valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('')

    })
})