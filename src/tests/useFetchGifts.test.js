import { useFetchGifts } from "../components/hooks/useFetchGifts";
import {renderHook} from '@testing-library/react-hooks'

describe('pruebas en el hook useFetchGifts', () => {

    test('debe de retornar el estado inicial', async() => {

        // const {data: images, loading} = useFetchGifts('zelda')
        // console.log(data, loading);

        // const resp = renderHook( () => useFetchGifts('zelda'))
        // console.log(resp);

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifts('zelda'))
        const {data, loading} = result.current
        console.log(data, loading);

        await waitForNextUpdate()
        expect(data).toEqual([])
        expect(loading).toBe(true)
    });

    test('debe de retornar un arreglo de imagenes y loading en false', async() => {

        const {result, waitForNextUpdate} = renderHook( () => useFetchGifts('zelda'))
        await waitForNextUpdate()
        const {data, loading} = result.current
        // console.log(data, loading);

        expect(data).toEqual(10)
        expect(loading).toBe(false)
    });

});
