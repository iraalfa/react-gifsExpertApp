import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas en componente <GifExpertApp />', () => {

    let wrapper = shallow(<GifExpertApp/>)

    test('snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('debe de mostrar una lista de categorias', () => {

        const categories = ['zelda', 'mario']
        wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('GifGrid').length).toBe(categories.length)

    });

});
