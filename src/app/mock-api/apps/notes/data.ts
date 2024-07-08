/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const categories = [
    {
        id: 'f47c92e5-20b9-44d9-917f-9ff4ad25dfd0',
        title: 'Aretes',
    },
    {
        id: 'e2f749f5-41ed-49d0-a92a-1c83d879e371',
        title: 'Anillos',
    },
    {
        id: 'b1cde9ee-e54d-4142-ad8b-cf55dafc9528',
        title: 'Cadenas',
    },
    {
        id: '6c288794-47eb-4605-8bdf-785b61a449d3',
        title: 'Cruceros',
    },
    {
        id: 'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
        title: 'Dijes',
    },
    {
        id: '2dc11344-3507-48e0-83d6-1c047107f052',
        title: 'Pulseras',
    },
    {
        id: '2b294899-266a-4935-ba20-5f3dd8ab526',
        title: 'Rosarios',
    },
    {
        id: 'a5972b07-5aa1-4864-8135-112f41b30ef5',
        title: 'Tobilleras',
    },
];

export const notes = [
    {
        id: '8f011ac5-b71c-4cd7-a317-857dcd7d85e0',
        title: '',
        content: 'Find a new company name',
        tasks: null,
        image: null,
        reminder: null,
        labels: ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived: false,
        createdAt: now
            .set({
                hour: 10,
                minute: 19,
            })
            .minus({ day: 98 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: 'ced0a1ce-051d-41a3-b080-e2161e4ae621',
        title: '',
        content: 'Send the photos of last summer to John',
        tasks: null,
        image: 'assets/images/cards/14-640x480.jpg',
        reminder: null,
        labels: [
            'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528',
        ],
        archived: false,
        createdAt: now
            .set({
                hour: 15,
                minute: 37,
            })
            .minus({ day: 80 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: 'd3ac02a9-86e4-4187-bbd7-2c965518b3a3',
        title: '',
        content: 'Update the design of the theme',
        tasks: null,
        image: null,
        reminder: null,
        labels: ['6c288794-47eb-4605-8bdf-785b61a449d3'],
        archived: false,
        createdAt: now
            .set({
                hour: 19,
                minute: 27,
            })
            .minus({ day: 74 })
            .toISO(),
        updatedAt: now
            .set({
                hour: 15,
                minute: 36,
            })
            .minus({ day: 50 })
            .toISO(),
    },
    {
        id: '89861bd4-0144-4bb4-8b39-332ca10371d5',
        title: '',
        content: 'Theming support for all apps',
        tasks: null,
        image: null,
        reminder: now
            .set({
                hour: 12,
                minute: 34,
            })
            .plus({ day: 50 })
            .toISO(),
        labels: ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived: false,
        createdAt: now
            .set({
                hour: 12,
                minute: 34,
            })
            .minus({ day: 59 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: 'ffd20f3c-2d43-4c6b-8021-278032fc9e92',
        title: 'Gift Ideas',
        content:
            "Stephanie's birthday is coming and I need to pick a present for her. Take a look at the below list and buy one of them (or all of them)",
        tasks: [
            {
                id: '330a924f-fb51-48f6-a374-1532b1dd353d',
                content: 'Scarf',
                completed: false,
            },
            {
                id: '781855a6-2ad2-4df4-b0af-c3cb5f302b40',
                content: 'A new bike helmet',
                completed: true,
            },
            {
                id: 'bcb8923b-33cd-42c2-9203-170994fa24f5',
                content: 'Necklace',
                completed: false,
            },
            {
                id: '726bdf6e-5cd7-408a-9a4f-0d7bb98c1c4b',
                content: 'Flowers',
                completed: false,
            },
        ],
        image: null,
        reminder: null,
        labels: ['f47c92e5-20b9-44d9-917f-9ff4ad25dfd0'],
        archived: false,
        createdAt: now
            .set({
                hour: 16,
                minute: 4,
            })
            .minus({ day: 47 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: '71d223bb-abab-4183-8919-cd3600a950b4',
        title: 'Shopping list',
        content: '',
        tasks: [
            {
                id: 'e3cbc986-641c-4448-bc26-7ecfa0549c22',
                content: 'Bread',
                completed: true,
            },
            {
                id: '34013111-ab2c-4b2f-9352-d2ae282f57d3',
                content: 'Milk',
                completed: false,
            },
            {
                id: '0fbdea82-cc79-4433-8ee4-54fd542c380d',
                content: 'Onions',
                completed: false,
            },
            {
                id: '66490222-743e-4262-ac91-773fcd98a237',
                content: 'Coffee',
                completed: true,
            },
            {
                id: 'ab367215-d06a-48b0-a7b8-e161a63b07bd',
                content: 'Toilet Paper',
                completed: true,
            },
        ],
        image: null,
        reminder: now
            .set({
                hour: 10,
                minute: 44,
            })
            .minus({ day: 35 })
            .toISO(),
        labels: ['b1cde9ee-e54d-4142-ad8b-cf55dafc9528'],
        archived: false,
        createdAt: now
            .set({
                hour: 10,
                minute: 44,
            })
            .minus({ day: 35 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: '11fbeb98-ae5e-41ad-bed6-330886fd7906',
        title: 'Keynote Schedule',
        content: '',
        tasks: [
            {
                id: '2711bac1-7d8a-443a-a4fe-506ef51d3fcb',
                content: 'Breakfast',
                completed: true,
            },
            {
                id: 'e3a2d675-a3e5-4cef-9205-feeccaf949d7',
                content: 'Opening ceremony',
                completed: true,
            },
            {
                id: '7a721b6d-9d85-48e0-b6c3-f927079af582',
                content: 'Talk 1: How we did it!',
                completed: true,
            },
            {
                id: 'bdb4d5cd-5bb8-45e2-9186-abfd8307e429',
                content: 'Talk 2: How can you do it!',
                completed: false,
            },
            {
                id: 'c8293bb4-8ab4-4310-bbc2-52ecf8ec0c54',
                content: 'Lunch break',
                completed: false,
            },
        ],
        image: null,
        reminder: now
            .set({
                hour: 11,
                minute: 27,
            })
            .minus({ day: 14 })
            .toISO(),
        labels: [
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528',
            'e2f749f5-41ed-49d0-a92a-1c83d879e371',
        ],
        archived: false,
        createdAt: now
            .set({
                hour: 11,
                minute: 27,
            })
            .minus({ day: 24 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: 'd46dee8b-8761-4b6d-a1df-449d6e6feb6a',
        title: '',
        content: "Organize the dad's surprise retirement party",
        tasks: null,
        image: null,
        reminder: now
            .set({
                hour: 14,
                minute: 56,
            })
            .minus({ day: 25 })
            .toISO(),
        labels: ['f47c92e5-20b9-44d9-917f-9ff4ad25dfd0'],
        archived: false,
        createdAt: now
            .set({
                hour: 14,
                minute: 56,
            })
            .minus({ day: 20 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: '6bc9f002-1675-417c-93c4-308fba39023e',
        title: 'Plan the road trip',
        content: '',
        tasks: null,
        image: 'assets/images/cards/17-640x480.jpg',
        reminder: null,
        labels: [
            '2dc11344-3507-48e0-83d6-1c047107f052',
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528',
        ],
        archived: false,
        createdAt: now
            .set({
                hour: 9,
                minute: 32,
            })
            .minus({ day: 15 })
            .toISO(),
        updatedAt: now
            .set({
                hour: 17,
                minute: 6,
            })
            .minus({ day: 12 })
            .toISO(),
    },
    {
        id: '15188348-78aa-4ed6-b5c2-028a214ba987',
        title: 'Office Address',
        content: '933 8th Street Stamford, CT 06902',
        tasks: null,
        image: null,
        reminder: null,
        labels: ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived: false,
        createdAt: now
            .set({
                hour: 20,
                minute: 5,
            })
            .minus({ day: 12 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: '1dbfc685-1a0a-4070-9ca7-ed896c523037',
        title: 'Tasks',
        content: '',
        tasks: [
            {
                id: '004638bf-3ee6-47a5-891c-3be7b9f3df09',
                content: 'Wash the dishes',
                completed: true,
            },
            {
                id: '86e6820b-1ae3-4c14-a13e-35605a0d654b',
                content: 'Walk the dog',
                completed: false,
            },
        ],
        image: null,
        reminder: now
            .set({
                hour: 13,
                minute: 43,
            })
            .minus({ day: 2 })
            .toISO(),
        labels: ['bbc73458-940b-421c-8d5f-8dcd23a9b0d6'],
        archived: false,
        createdAt: now
            .set({
                hour: 13,
                minute: 43,
            })
            .minus({ day: 7 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: '49548409-90a3-44d4-9a9a-f5af75aa9a66',
        title: '',
        content: 'Dinner with parents',
        tasks: null,
        image: null,
        reminder: null,
        labels: [
            'f47c92e5-20b9-44d9-917f-9ff4ad25dfd0',
            '6c288794-47eb-4605-8bdf-785b61a449d3',
        ],
        archived: false,
        createdAt: now
            .set({
                hour: 7,
                minute: 12,
            })
            .minus({ day: 2 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: 'c6d13a35-500d-4491-a3f3-6ca05d6632d3',
        title: '',
        content: 'Re-fill the medicine cabinet',
        tasks: null,
        image: null,
        reminder: null,
        labels: [
            'bbc73458-940b-421c-8d5f-8dcd23a9b0d6',
            '6c288794-47eb-4605-8bdf-785b61a449d3',
        ],
        archived: true,
        createdAt: now
            .set({
                hour: 17,
                minute: 14,
            })
            .minus({ day: 100 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: 'c6d13a35-500d-4491-a3f3-6ca05d6632d3',
        title: '',
        content: 'Update the icons pack',
        tasks: null,
        image: null,
        reminder: null,
        labels: ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        archived: true,
        createdAt: now
            .set({
                hour: 10,
                minute: 29,
            })
            .minus({ day: 85 })
            .toISO(),
        updatedAt: null,
    },
    {
        id: '46214383-f8e7-44da-aa2e-0b685e0c5027',
        title: 'Team Meeting',
        content: 'Talk about the future of the web apps',
        tasks: null,
        image: null,
        reminder: null,
        labels: [
            'e2f749f5-41ed-49d0-a92a-1c83d879e371',
            'b1cde9ee-e54d-4142-ad8b-cf55dafc9528',
        ],
        archived: true,
        createdAt: now
            .set({
                hour: 15,
                minute: 30,
            })
            .minus({ day: 69 })
            .toISO(),
        updatedAt: null,
    },
];
export const products = [
    {
        id: '1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
        name: 'Aretes de Oro',
        precioEmprendedor: 88000,
        precioDetal: 95000,
        description: 'Elegantes aretes de oro de 18 quilates.',
        image: 'assets/images/products/aretes.jpg',
        labels: ['f47c92e5-20b9-44d9-917f-9ff4ad25dfd0'],
        category: 'f47c92e5-20b9-44d9-917f-9ff4ad25dfd0', // ID de la categoría 'Aretes'
    },
    {
        id: '7b8c9d0e-1f2g-3h4i-5j6k-7l8m9n0o1p2',
        name: 'Anillo de Plata',
        precioEmprendedor: 88000,
        precioDetal: 95000,
        description: 'Hermoso anillo de plata esterlina.',
        image: 'assets/images/products/anillo.png',
        labels: ['e2f749f5-41ed-49d0-a92a-1c83d879e371'],
        category: 'e2f749f5-41ed-49d0-a92a-1c83d879e371', // ID de la categoría 'Anillos'
    },
    {
        id: '8c9d0e1f-2g3h-4i5j-6k7l-8m9n0o1p2q3',
        name: 'Cadena de Oro',
        precioEmprendedor: 88000,
        precioDetal: 95000,
        description: 'Cadena de oro de alta calidad.',
        image: 'assets/images/products/cadena.jpg',
        labels: ['b1cde9ee-e54d-4142-ad8b-cf55dafc9528'],
        category: 'b1cde9ee-e54d-4142-ad8b-cf55dafc9528', // ID de la categoría 'Cadenas'
    },
    {
        id: '9d0e1f2g-3h4i-5j6k-7l8m-9n0o1p2q3r4',
        name: 'Crucero de Plata',
        precioEmprendedor: 88000,
        precioDetal: 95000,
        description: 'Crucero de plata con detalles intrincados.',
        image: 'assets/images/products/crucero.jpg',
        labels: ['6c288794-47eb-4605-8bdf-785b61a449d3'],
        category: '6c288794-47eb-4605-8bdf-785b61a449d3', // ID de la categoría 'Cruceros'
    },
    {
        id: '0e1f2g3h-4i5j-6k7l-8m9n-0o1p2q3r4s5',
        name: 'Dije de Oro',
        precioEmprendedor: 88000,
        precioDetal: 95000,
        description: 'Dije de oro perfecto para cualquier ocasión.',
        image: 'assets/images/products/dije.jpeg',
        labels: ['bbc73458-940b-421c-8d5f-8dcd23a9b0d6'],
        category: 'bbc73458-940b-421c-8d5f-8dcd23a9b0d6', // ID de la categoría 'Dijes'
    },
    {
        id: '0e1f2g3h-4i5j-6k7l-8m9n-0o1p2q3r4s5',
        name: 'Pulsera de neopreno con bolas de oro',
        precioEmprendedor: 88000,
        precioDetal: 95000,
        description: 'pulsera perfecta para cualquier ocasión.',
        image: 'assets/images/products/pulsera.jpg',
        labels: ['2dc11344-3507-48e0-83d6-1c047107f052'],
        category: '2dc11344-3507-48e0-83d6-1c047107f052', // ID de la categoría 'pulseras'
    },
    {
        id: '0e1f2g3h-4i5j-6k7l-8m9n-0o1p2q3r4s5',
        name: 'Rosario de plata',
        precioEmprendedor: 88000,
        precioDetal: 95000,
        description: 'Dije de oro perfecto para cualquier ocasión.',
        image: 'assets/images/products/rosario.jpeg',
        labels: ['2b294899-266a-4935-ba20-5f3dd8ab526'],
        category: '2b294899-266a-4935-ba20-5f3dd8ab526', // ID de la categoría 'rosarios'
    },
    {
        id: '0e1f2g3h-4i5j-6k7l-8m9n-0o1p2q3r4s5',
        name: 'Tobillera de oro para mujer',
        precioEmprendedor: 88000,
        precioDetal: 95000,
        description: 'Dije de oro perfecto para cualquier ocasión.',
        image: 'assets/images/products/tobillera.jpg',
        labels: ['a5972b07-5aa1-4864-8135-112f41b30ef5'],
        category: 'a5972b07-5aa1-4864-8135-112f41b30ef5', // ID de la categoría 'tobilleras'
    },
];
