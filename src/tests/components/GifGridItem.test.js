import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo' 
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>)
    const className = 'animate__fadeIn'

    test('debe mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe( title )
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img')
        expect(img.prop('src')).toBe( url )
        expect(img.prop('alt')).toBe( title )
    })

    test('debe de tener animated__fadeIn', () => {
        const div = wrapper.find('div')
        expect(div.prop('className')).toContain( className )

        /*
            La forma de Fernando:
            const div = wrapper.find('div')
            const className = div.prop('className')
            expect( className.includes('animate__fadeIn') ).toBe( true )
        */
    })
})