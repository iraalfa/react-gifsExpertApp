import { shallow } from "enzyme";
import GifGrid from "../components/GifGrid"
import { useFetchGifts } from "../components/hooks/useFetchGifts";
jest.mock("../components/hooks/useFetchGifts")


describe('pruebas en <GifGrid />', () => {

    useFetchGifts.mockReturnValue({
        data: [],
        loading: true,
    })

    const category = 'luigi'
    let wrapper = shallow(<GifGrid category={category}/>)

    test('snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifts', () => {
       const gifts = [{
           id: 'abc',
           url: 'http://example.com',
           title: 'titulo de prueba'
       }]
          expect(wrapper).toMatchSnapshot()
          expect(wrapper.find('p').exists()).toBe(false)
          expect(wrapper.find('GifGridItem').length).toBe(gifts.length)
    });

});
