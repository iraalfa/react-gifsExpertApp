import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import AddCategory from "../components/AddCategory";

describe('pruebas en <AddCategory />', () => {

   // const setCategories = () => {}
    const setCategories = jest.fn()
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('debe de mostrarse correctamente', () => {


        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input')
        const value = 'Hola mundo';

        input.simulate('change', { target: { value }})

        //expect(wrapper.find('p').text().trim()).toBe(value)
    });

    test('no debe de postear si no hay informacion', () => {

        wrapper.find('form').simulate('submit', {preventDefault: () => {}})

        expect(setCategories).not.toHaveBeenCalled()
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'hello world';

        // 1. Simular la llamada al inputChange
        wrapper.find('input').simulate('change', { target: { value }})

        // 2. Simular el Submit
        wrapper.find('form').simulate('submit', {preventDefault: () => {}})

        // 3. setCategories se debe de haber llamado aunque sea una vez
        expect(setCategories).toHaveBeenCalled()

        // 3.1 setCategories se debe de haber llamado, se llamo 2 veces para hacer la comprobacion
        expect(setCategories).toHaveBeenCalledTimes(2)

        // 3.2 setCategories haberse llamado con una function
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

        // 4. el valor del input debe de estar vacio, ' '
        expect(wrapper.find('input').prop('value')).toBe('')
    });


});
