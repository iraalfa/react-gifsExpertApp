import { shallow } from "enzyme"
import GiftsGridItem from "../components/GiftsGridItem"

describe('Pruebas en <GiftsGridItem />', () => {
    const title = 'A title'
    const url = 'http://localhost/something.jpg'
    const wrapper = shallow(<GiftsGridItem  title={title} url={url}/>)

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p')

        expect(p.text().trim()).toBe(title)
    })

    test('Debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img')
        // console.log(img.props())
        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('debe tener animate.animate_flash', () => {

        const div = wrapper.find('div')
        const className = div.prop('className')

        expect(className.includes('animate.animate_flash')).toBe(false)
        console.log(div.props('className'));
    });

})