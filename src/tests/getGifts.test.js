import { getGifts } from "../helpers/getGifts";

describe('pruebas en helper getGifts Fetch', () => {

    test('Debe de traer 10 elementos', async() => {

         const gifts = await getGifts('Mario')

         expect(gifts.length).toBe(10)
    });

    test('Debe de traer', async() => {

        const gifts = await getGifts('')
        console.log(gifts);

        expect(gifts.length).toBe(0)
   });


});
